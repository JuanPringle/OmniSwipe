<<<<<<< HEAD
import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { ImageBackground } from 'react-native';

const firebaseConfig = {
  apiKey: "AIzaSyCo750NYS_o8V_6JMimyGKOUKs9xVKKw_0",
  authDomain: "omniswipe-e0411.firebaseapp.com",
  projectId: "omniswipe-e0411",
  storageBucket: "omniswipe-e0411.appspot.com",
  messagingSenderId: "895208776685",
  appId: "1:895208776685:web:0c18c1990449c21039fde4",
  measurementId: "G-9N904MQX0S"
};


const Login = () => {
  const navigation=useNavigation();
  
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown: false,
  
    });
  },[]);

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


  return (
    <View>
      <Text>LoginScreen</Text>
      <ImageBackground source={require('../assets/OmniSwipelogo.PNG')}
      style={styles.backgroundImage}>

      </ImageBackground>
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

    </View>
)};

export default Login