import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import {useNavigation} from '@react-navigation/core'

const Login = () => {
  const navigation=useNavigation();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <View>
      <Text>LoginScreen</Text>
      <TextInput
        onChangeText={setUsername}
        value={username}
        placeholder="Enter Username"
      />
      <TextInput
        onChangeText={setPassword}
        value={password}
        placeholder="Enter Password"
      />
      
      <Button
        title="Submit"
        color="#841584"
      />
      <Button
        title="Sign Up"
        color="#841584"
        onPress={()=>navigation.navigate("SignUp")}
      />
    </View>
  )
}

export default Login