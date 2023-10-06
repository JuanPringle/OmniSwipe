<<<<<<< HEAD
import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { ImageBackground } from 'react-native';

const Login = () => {
  const navigation=useNavigation();


  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown: false,

    });
  },[]);
  return (
    <View>
      <ImageBackground source={require('../assets/OmniSwipelogo.PNG')}
      style={styles.backgroundImage}>

      </ImageBackground>
=======
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
        title="Sign In"
        color="#841584"
      />
      <Button
        title="Sign Up"
        color="#841584"
        onPress={()=>navigation.navigate("SignUp")}
      />
>>>>>>> be5db7354c1012a102cb274aeed86981f1cbc1c5
    </View>
  )
}
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1, // Cover the entire screen
    resizeMode: 'cover', // Stretch or shrink the image as needed
    justifyContent: 'center', // Center content vertically
  },
  container: {
    flex: 1,
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Add a semi-transparent overlay
  },
});

export default Login