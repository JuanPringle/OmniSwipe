// ...

import React, { useLayoutEffect, useState } from 'react';
import { 
  View, 
  Text, 
  ImageBackground, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView 
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
//import { firebase } from '../config'

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
          <Text color="#FFBF00">LoginScreen</Text>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            value={email}
            //placeholder="Enter Email"
            style={styles.input}
          />
          <TextInput
            onChangeText={(text) => setPassword(text)}
            value={password}
            //placeholder="Enter Password"
            style={styles.input}
            secureTextEntry
          />
          
          <TouchableOpacity
            style={styles.button}
            onPress={() => {/* Add sign-in logic here */ }}
          ><Text style={{fontWeight: 'bold', color: "#FFBF00" , margin: 15, fontSize: 20, }} >Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("SignUp")}
          ><Text style={{fontWeight: 'bold', color: "#FFBF00", margin: 15, fontSize: 20,}}>Sign Up</Text>
          </TouchableOpacity>
          
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
    //backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add an overlay to make text more readable
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
  Text: {
    color: 'rgb(255, 255, 255)'
  }
});

export default Login;