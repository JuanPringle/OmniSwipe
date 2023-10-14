import React from 'react'
import { 
  View, 
  SafeAreaView,
  Text, 
  Image,
  Button,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import {useNavigation} from '@react-navigation/core'
import useAuth from '../CustomHooks/useAuth'
import {useTailwind} from 'tailwind-rn';
import { useLayoutEffect } from 'react'
import Swiper from 'react-native-deck-swiper'


const Home = () => {
  const { logoutUser} = useAuth();
  const pfpImageW = require('../assets/examplePFPwoman.jpg');
  const pfpImageM = require('../assets/examplePFPman.jpg');
  const tailwind = useTailwind();
  const navigation=useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const FAKE_DATA=[
    {
      firstName:"John",
      lastName:"Pingol",
      age:22,
    },
    {
      firstName:"Christian",
      lastName:"Felix",
      age:21,
    },
    {
      firstName:"Sky",
      lastName:"Bullock",
      age:20,
    }
  ]
  return (
    <View style={styles.outsideView}>
    <SafeAreaView>
      <View style={styles.header}>
        {/* Header */}
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image 
            style={styles.profileImage}
            source={pfpImageM}
          />
        </TouchableOpacity>
        <Button title="Go to Chat" onPress={() => navigation.navigate("Chat")} />
      </View>
      {/* End of Header */}
      <View style={styles.container}>
          <Text>HomeScreen</Text>

          <TouchableOpacity
            onPress={logoutUser}
          ><Text style={{ fontWeight: 'bold', color: "#FFBF00", margin: 15, fontSize: 20, }} >Sign Out</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
    </View>
  )
}


const styles = StyleSheet.create({
  outsideView:{
    backgroundColor: '#6C6C6C',
  },
  header: {
    flexDirection: 'row', // You should specify a valid value for flexDirection
    paddingBottom:15,
    paddingTop:5,
    paddingLeft:5,
    backgroundColor: '#6C6C6C',
    justifyContent:'space-between'
  },
  profileImage:{
    height:30,
    width:30,
    borderRadius:15
  },
  container:{
    flex:1
  }
});
export default Home;