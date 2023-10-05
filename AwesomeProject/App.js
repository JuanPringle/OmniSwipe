
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home} from './Screens/Home'
import {Login} from './Screens/Login'
import {Chat} from './Screens/Chat'
export default function App() {
  const Stack = createNativeStackNavigator();
  const user= false;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {user?
          <Stack.Screen name="Login" component={Login} />:
          <>
            <Stack.Screen name="Home" component={Home} /> 
            <Stack.Screen name="Chat" component={Chat}/>
          </>
      }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
