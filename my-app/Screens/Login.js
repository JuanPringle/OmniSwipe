// ...

import React, { useLayoutEffect, useState } from 'react';
import { 
  View, 
  Text, 
  ImageBackground, 
  TextInput, 
  Button, 
  StyleSheet, 
  SafeAreaView 
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
//import auth from '@react-native-firebase/auth'

const firebaseConfig = {
  // ... (your Firebase config)
};

const Login = () => {
  const navigation = useNavigation();
  const logoImage = require('../assets/OmniSwipelogo.jpg');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={logoImage} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          {/* Your image background content */}
          <Text>LoginScreen</Text>
          <TextInput
            onChangeText={setEmail}
            value={email}
            placeholder="Enter Email"
            style={styles.input}
          />
          <TextInput
            onChangeText={setPassword}
            value={password}
            placeholder="Enter Password"
            style={styles.input}
            secureTextEntry
          />
          <Button title="Sign In" color="#FFBF00" onPress={() => {/* Add sign-in logic here */ }} />
          <Button
            title="Sign Up"
            color="#FFBF00"
            onPress={() => navigation.navigate("SignUp")}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

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

export default Login;