// ...

import React, { useLayoutEffect, useState } from 'react';
import { 
  View, 
  Text, 
  Image,
  ImageBackground, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { firebase } from '../config'

const Login = () => {
  const navigation = useNavigation();
  const logoImage = require('../assets/OmniSwipelogo.jpg');
  const logoImage2 = require('../assets/OmniSwipelogo2.jpg');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setloginError] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const loginUser = async (email, password) => {
    if(email && password) {
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(
                email,
                password
            )
        } catch (e) {
            console.log(e)
            setloginError("The email or password entered dont exist! Please Try again!")
        }
    }
    else{
        console.log("Oops!", "One of the required fields is blank")
        setloginError("One of the required fields is blank! Please Try again!")
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={logoImage} style={styles.backgroundImage}>
        <View style={styles.overlay}>

          <Image source={logoImage2} style={styles.image}/>
          <Text color="#FFBF00">LoginScreen</Text>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            value={email}
            //placeholder="Enter Email"
            style={styles.input }
          />
          <TextInput
            onChangeText={(text) => setPassword(text)}
            value={password}
            //placeholder="Enter Password"
            style={styles.input}
            secureTextEntry
          />

          { loginError != '' &&
            <Text style={{fontWeight: 'bold', color: "#fc2003", margin: 15, fontSize: 12,}}>{loginError}</Text>
          }
          
          <TouchableOpacity
            style={styles.button}
            onPress={() => loginUser(email, password)}
          ><Text style={{fontWeight: 'bold', color: "#FFBF00" , margin: 15, fontSize: 20, }} >Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("SignUp")}
          ><Text style={{fontWeight: 'bold', color: "#FFBF00", margin: 15, fontSize: 20,}}>Sign Up</Text>
          </TouchableOpacity>
          
        </View>
      </ImageBackground>
    </View>
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
  image:{
    width: 320,
    height: 200,
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