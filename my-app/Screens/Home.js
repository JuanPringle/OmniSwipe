import React from 'react'
import { 
  View, 
  Text, 
  Button,
  TouchableOpacity
} from 'react-native'
import {useNavigation} from '@react-navigation/core'
import { firebase } from '../config'
import useAuth from '../CustomHooks/useAuth'

const Home = () => {
  const {user, logoutUser} = useAuth();
  console.log(user);
  
  
  const navigation=useNavigation();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Go to Chat" onPress={()=>navigation.navigate("Chat")}/>

      <TouchableOpacity
        onPress={logoutUser}
      ><Text style={{fontWeight: 'bold', color: "#FFBF00" , margin: 15, fontSize: 20, }} >Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home