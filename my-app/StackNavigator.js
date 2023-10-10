import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/Home';
import LoginScreen from './Screens/Login';
import ChatScreen from './Screens/Chat';
import useAuth from './CustomHooks/useAuth';
import SignUp from './Screens/SignUp';
import { firebase } from './config';

const Stack = createStackNavigator();
//const [initializing, setInitializing] = useState(true);
//const [user, setUser] = useState(true);
const {user} = false;

const StackNavigator = () => {
  //setUser(user)
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  })
  
  return (
    <Stack.Navigator>
      {user ?
        <>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Chat' component={ChatScreen} />
        </>
        :
        <>
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name='SignUp' component={SignUp} />
        </>
        
      }
      
    </Stack.Navigator>
  )
}

export default StackNavigator