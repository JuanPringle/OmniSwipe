import React from 'react'
import { 
  View, 
  SafeAreaView,
  Text, 
  Image,
  Button,
  TouchableOpacity
} from 'react-native'
import {useNavigation} from '@react-navigation/core'
import useAuth from '../CustomHooks/useAuth'
import {TailwindProvider} from 'tailwind-rn';

const pfpImageW = require('../assets/examplePFPwoman.jpg');
const pfpImageM = require('../assets/examplePFPman.jpg');



const Home = () => {
  const {user, logoutUser} = useAuth();
  console.log(user);
  
  
  const navigation=useNavigation();
  return (
    <SafeAreaView>
      <View>
        {/* Header */}
        <TouchableOpacity>
          <Image 
            source={pfpImageM}
          />
        </TouchableOpacity>
      </View>

      {/* End of Header */}
      <Text>HomeScreen</Text>
      <Button title="Go to Chat" onPress={()=>navigation.navigate("Chat")}/>

      <TouchableOpacity
        onPress={logoutUser}
      ><Text style={{fontWeight: 'bold', color: "#FFBF00" , margin: 15, fontSize: 20, }} >Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Home