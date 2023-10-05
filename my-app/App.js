import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/Home'
import LoginScreen from './Screens/Login'
import ChatScreen from './Screens/Chat';

const Stack = createStackNavigator();

export default function App() {
  const user=true;
  return (
    <NavigationContainer>
    <Stack.Navigator>
      {user ?
      <Stack.Screen name='Login' component={LoginScreen}/>
      :
      <>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Chat' component={ChatScreen}/>
      </>
      }
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
