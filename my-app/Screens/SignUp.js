import React from 'react'
import { View, Text, TextInput, Button, SafeAreaView, StyleSheet } from 'react-native'
import {useNavigation} from '@react-navigation/core'
const SignUp = () => {
    const navigation=useNavigation();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    return (
        <SafeAreaView>
        <Text>Sign Up Screen</Text>
        <TextInput
            onChangeText={setUsername}
            value={username}
            placeholder="Enter New Username"
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
            color="#841584"
            style={styles.input}
        />
        <Button
            title="Go Back"
            color="#841584"
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