import React, {useState, useLayoutEffect} from 'react'
import {
    View,
    Text, 
    TextInput, 
    TouchableOpacity, 
    SafeAreaView, 
    StyleSheet 
} from 'react-native'
import {useNavigation} from '@react-navigation/core'
import { firebase } from '../config'

const SignUp = () => {

    const navigation=useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signUpError, setSignUpError] = useState('');
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    //const createProfile = async () => {
    //    db().ref(`/users/${response.user.uid}`).set({name});
    //}

    const registerNewUser = async (email, password) => {
        if(email && password) {
            try {
                const response = await firebase.auth().createUserWithEmailAndPassword(
                    email,
                    password
                )
            } catch (e) {
                console.log(e)
                if(password.length < 6) setSignUpError("A valid password needs to be 6 characters or more! Please Try again!")
                else setSignUpError("The email you entered is invalid! Please Try again!")
            }
        }
        else{
            console.log("Oops!", "One of the required fields is blank")
            setSignUpError("One of the required fields is blank! Please Try again!")
        }
    }

    return (
        <SafeAreaView>
        <Text>Sign Up Screen</Text>
        <TextInput
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Enter New Email"
            style={styles.input}
        />
        
        <TextInput
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder="Enter New Password"
            style={styles.input}
        />
    

        { signUpError != '' &&
            <Text style={{fontWeight: 'bold', color: "#fc2003", margin: 15, fontSize: 12,}}>{signUpError}</Text>
        }
        
        <TouchableOpacity
            style={styles.button}
            onPress={() => registerNewUser(email, password)}
        ><Text style={{fontWeight: 'bold', color: "#e6ac00" , margin: 15, fontSize: 20, }} >Create New Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
        ><Text style={{fontWeight: 'bold', color: "#e6ac00", margin: 15, fontSize: 20,}}>Go Back</Text>
        </TouchableOpacity>
        </SafeAreaView>
    );
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add an overlay to make text more readable
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        backgroundColor: 'white',
        width: '80%',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
});

export default SignUp;