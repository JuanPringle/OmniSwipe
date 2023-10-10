import React, {useState} from 'react'
import {
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

    //const createProfile = async () => {
    //    db().ref(`/users/${response.user.uid}`).set({name});
    //}

    const registerNewUser = async (email, password) => {
        if(email && password) {
            try {
                const response = await auth().createUserWithEmailAndPassword(
                    email,
                    password
                )
            } catch (e) {
                console.log(e)
            }
        }
        else{
            console.log("Oops!", "One of the required fields is blank")
        }
    }

    return (
        <SafeAreaView>
        <Text>Sign Up Screen</Text>
        <TextInput
            //onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Enter New Email"
            style={styles.input}
        />
        
        <TextInput
            //onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder="Enter New Password"
            style={styles.input}
        />
        
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