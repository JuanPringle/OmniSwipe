
import React, { useEffect} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/Home';
import LoginScreen from '../Screens/Login';
import ChatScreen from '../Screens/Chat';
import SignUp from '../Screens/SignUp';
import { firebase } from '../config';
import useAuth from './useAuth';


//const [user, setUser] = useState(true);
//const {user} = false;

const StackNavigator = () => {
  
  const Stack = createStackNavigator();
  const {user, initializing} = useAuth();
  //setUser(user)
  
  if(initializing) return null;
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