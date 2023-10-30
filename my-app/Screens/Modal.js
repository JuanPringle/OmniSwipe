import {
    View,
    Text,
    Image,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    ScrollView
} from 'react-native';
import useAuth from "../CustomHooks/useAuth";
import { firestore, firebase } from '../config';
import { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { FontAwesome } from '@expo/vector-icons';
const Modal = () => {
    const [profileImage,setProfileImage] =useState(null);
    const [uploadImage,setUploadImage] =useState(false);
    const { user } = useAuth();
    const [job, setJob] = useState(null);
    const [age, setAge] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [12, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setProfileImage(result.assets[0].uri)
        }
    }
    const uploadMedia= async ()=>{
        setUploadImage(true)
        try {
            const{uri}= await FileSystem.getInfoAsync(profileImage);
            const blob= await new Promise((resolve, reject) =>{
                const xhr= new XMLHttpRequest();
                xhr.onload =()=>{
                    resolve(xhr.response)
                };
                xhr.onerror= (e) =>{
                    reject(new TypeError('Network request failed'))
                };
                xhr.responseType = 'blob';
                xhr.open('GET', uri,true);
                xhr.send(null);
            });
            const filename =profileImage.substring(profileImage.lastIndexOf('/')+1);
            const ref= firebase.storage().ref().child(filename);

            await ref.put(blob);
            setUploadImage(false);
            Alert.alert('Photo Uploaded!!!');
            setProfileImage(null);
        } catch(error){
            console.error(error);
            setUploadImage(false)
        }
    }
    const navigation = useNavigation();
    const logoImage2 = require('../assets/pictures/OmniSwipelogo2.jpg');
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const incompleteForm = !profileImage || !job || !age || !firstName || !lastName;

    const updateUsertProfile = () => {
        //console.log(username);
        const filename = profileImage.substring(profileImage.lastIndexOf('/') + 1);
        firestore.collection('Users').doc(user.uid).set({
            firstName: firstName,
            lastName: lastName,
            age: age,
            photoURL: filename,
            occupation: job,
            id: user.uid,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            navigation.navigate('Home');
        }).catch(error => {
            //alert(error.message);
        });
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ScrollView style={styles.container}>
                <View style={styles.image}>
                    <Image source={logoImage2} />
                </View>
                <Text style={styles.welcomeText}>
                    Welcome User
                </Text>
                <Text style={styles.welcomeText}>
                    Its time to create your profile
                </Text>

                <Text style={styles.stepText}>
                    Step 1: Name
                </Text>
                <TextInput
                    placeholder="What's your first name?"
                    placeholderTextColor={"white"}
                    onChangeText={text => setFirstName(text)}
                    value={firstName}
                    style={styles.input}
                />
                <TextInput
                    placeholder="What's your last name?"
                    placeholderTextColor={"white"}
                    onChangeText={text => setLastName(text)}
                    value={lastName}
                    style={styles.input}
                />

                <Text style={styles.stepText}>
                    Step 2: Age
                </Text>
                <TextInput
                    placeholder="How old are you?"
                    placeholderTextColor={"white"}
                    onChangeText={text => setAge(text)}
                    value={age}
                    style={styles.input}
                    keyboardType='numeric'
                />

                <Text style={styles.stepText}>
                    Step 3: Occupation
                </Text>
                <TextInput
                    placeholder="What do you do?"
                    placeholderTextColor={"white"}
                    onChangeText={text => setJob(text)}
                    value={job}
                    style={styles.input}
                />
                <Text style={styles.stepText}>
                    Step 4: Profile Picture
                </Text>
                <View>
                    <TouchableOpacity onPress={pickImageAsync} style={{alignItems: 'center'}}>
                        <FontAwesome name="image" size={24} color="gray" style={styles.placeholderPhoto}/>
                    </TouchableOpacity>
                    <View>
                        {profileImage && <Image
                            source={{uri:profileImage}}
                            style={{width:200, height:300, alignItems: 'center'}}
                        />}
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        disabled={incompleteForm}
                        onPress={updateUsertProfile}
                        style={
                            incompleteForm ? styles.disabledButton : styles.button
                        }
                    >
                        <Text style={styles.buttonText}>
                            Update Profile
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    selectedImage: {
        width: 100, // Set the width and height as needed
        height: 100,
        marginVertical: 10,
    },
    placeholderPhoto:{
        height: 30,
        width: 30,
    },
    button: {
        backgroundColor: '#D8955E',
        width: 256,
        height: 64,
        borderRadius: 15,
        paddingBottom: 80,
        marginTop: 30,
    },
    disabledButton: {
        backgroundColor: 'gray',
        width: 256,
        height: 64,
        borderRadius: 15,
        paddingBottom: 80,
        marginTop: 30,
    },
    buttonText: {
        textAlign: 'center',
        paddingTop: 30,
        paddingBottom: 30,
        color: 'white'
    },

    image: {
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(51, 51, 51, 1)',
    },
    welcomeText: {
        color: 'gray',
        fontSize: 30,
        textAlign: 'center'
    },
    stepText: {
        color: '#D8955E',
        textAlign: 'center',
        fontSize: 25,
        paddingTop: 10
    },
    input: {
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    }

});
export default Modal;