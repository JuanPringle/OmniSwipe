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
import { userDB, firebase } from '../config';
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
    const [image,setImage] = useState("");
    const [job, setJob] = useState("");
    const [age, setAge] = useState(0);
    const [username, setUsername] = useState("");

    const incompleteForm = image != "" || job != "" || age != 0 || username!= "";

    const updateUsertProfile = () => {
        userDB.doc(user.uid).set({
            id: user.uid,
            displayName: username,
            photoURL: image,
            occupation: job,
            age: age,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            navigation.navigate('Home');
        }).catch(error => {
            alert(error.message);
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
                Step 1: Profile Picture
            </Text>
            <TextInput
                placeholder="What do you look like?"
                placeholderTextColor={"white"}
                onChange={setImage}
                value={image}
                style={styles.input}
            />

            <Text style={styles.stepText}>
                Step 2: Occupation
            </Text>
            <TextInput
                placeholder="What do you do?"
                placeholderTextColor={"white"}
                onChange={setJob}
                value={job}
                style={styles.input}
            />

            <Text style={styles.stepText}>
                Step 3: Age
            </Text>
            <TextInput
                placeholder="How old are you?"
                placeholderTextColor={"white"}
                onChange={setAge}
                value={age}
                style={styles.input}
                keyboardType='numeric'
            />
            <Text style={styles.stepText}>
                Step 4: Username
            </Text>
            <TextInput
                placeholder="What name do you go by?"
                placeholderTextColor={"white"}
                onChange={setUsername}
                value={username}
                style={styles.input}
            />
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity 
                    disabled={!incompleteForm}
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
        marginTop:50,
    },
    disabledButton:{
        backgroundColor: 'gray',
        width: 256,
        height: 64,
        borderRadius:15,
        paddingBottom: 80,
        marginTop:50,
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