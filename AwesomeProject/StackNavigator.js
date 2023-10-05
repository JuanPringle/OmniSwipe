import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {Home} from './Screens/Home'
import {Chat} from './Screens/Chat'
import {Login} from './Screens/Login'


const Stack= createNativeStackNavigator();

const StackNavigator = () => {
  const user= true;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user?
          <Stack.Screen name="Login" component={Login}/>:
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Chat" component={Chat} />
        </>
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator