import React, {useState} from 'react'
import {
    Text, 
    TextInput, 
    Button, 
    SafeAreaView, 
    StyleSheet 
} from 'react-native'
import {useNavigation} from '@react-navigation/core'
//import auth from '@react-native-firebase/auth'

const SignUp = () => {

    const navigation=useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const createProfile = async () => {
        db().ref(`/users/${response.user.uid}`).set({name});
    }

    const registerNewUser = async () => {
        if(email && password) {
            try {
                const response = await auth().createUserWithEmailAndPassword(
                    email,
                    password
                )
            } catch (e) {
                Alert.alert("Oops!", "Make sure you typed your email and password correctly")
            }
        }
    }

    return (
        <SafeAreaView>
        <Text>Sign Up Screen</Text>
        <TextInput
            onChangeText={setEmail}
            value={email}
            placeholder="Enter New Email"
            style={styles.input}
        />
        
        <TextInput
            onChangeText={setPassword}
            value={password}
            placeholder="Enter New Password"
            style={styles.input}
        />
        <Button
            title="Create New Account"
            color="#FFBF00"
            style={styles.input}
            onPress={registerNewUser}
        />
        <Button
            title="Go Back"
            color="#FFBF00"
            onPress={()=>navigation.navigate("Login")}
            style={styles.input}
        />
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