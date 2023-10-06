import { View, Text, ImageBackground, TextInput, Button, StyleSheet } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';

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
  const navigation = useNavigation();
  const logoImage = require('../assets/OmniSwipelogo.jpg');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View>
      <Text>LoginScreen</Text>
      <ImageBackground source={logoImage} style={styles.backgroundImage}>
        {/* Your image background content */}
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
        onPress={() => navigation.navigate("SignUp")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default Login;
