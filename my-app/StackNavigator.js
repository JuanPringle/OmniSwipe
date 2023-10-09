import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/Home'
import LoginScreen from './Screens/Login'
import ChatScreen from './Screens/Chat';
import useAuth from './CustomHooks/useAuth';
import SignUp from './Screens/SignUp';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const {user} = useAuth();
  console.log(user);
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