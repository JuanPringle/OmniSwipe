import React from 'react'
import { View, Text, TextInput, Button, SafeAreaView } from 'react-native'
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
        />
        
        <TextInput
            onChangeText={setPassword}
            value={password}
            placeholder="Enter New Password"
        />
        <Button
            title="Create New Account"
            color="#841584"
        />
        <Button
            title="Go Back"
            color="#841584"
            onPress={()=>navigation.navigate("Login")}
        />
        </SafeAreaView>
    );
}
export default SignUp;