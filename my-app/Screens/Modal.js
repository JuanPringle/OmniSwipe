import { 
    View, 
    Text, 
    Image,
    ImageBackground, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import useAuth from "../CustomHooks/useAuth";
import { firestore, firebase } from '../config';
import { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
const Modal = () => {
    const navigation=useNavigation();
    const logoImage2 = require('../assets/pictures/OmniSwipelogo2.jpg');
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const {user} = useAuth();
    const [image,setImage] = useState(null);
    const [job, setJob] = useState(null);
    const [age, setAge] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);

    const incompleteForm = !image || !job || !age || !firstName;

    const updateUsertProfile = () => {
        //console.log(username);
        firestore.collection('Users').doc(user.uid).set({
            firstName: firstName,
            lastName: lastName,
            age: age,
            photoURL: image,
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
        <View style={styles.container}>
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
            <TextInput
                placeholder="What do you look like?"
                placeholderTextColor={"white"}
                onChangeText={text => setImage(text)}
                value={image}
                style={styles.input}
            />
            
            <View style={{alignItems: 'center'}}>
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
        </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    button:{
        backgroundColor: '#D8955E',
        width: 256,
        height: 64,
        borderRadius:15,
        paddingBottom: 80,
        marginTop:30,
    },
    disabledButton:{
        backgroundColor: 'gray',
        width: 256,
        height: 64,
        borderRadius:15,
        paddingBottom: 80,
        marginTop:30,
    },
    buttonText:{
        textAlign: 'center',
        paddingTop: 30,
        paddingBottom:30,
        color: 'white'
    },

    image:{
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
    stepText:{
        color: '#D8955E',
        textAlign: 'center',
        fontSize: 25,
        paddingTop:10
    },
    input:{
        textAlign:'center',
        paddingTop: 10,
        paddingBottom:10,
    }

});
export default Modal;