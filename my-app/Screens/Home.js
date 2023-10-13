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
  
  return (
    <SafeAreaView>
      <View style={styles.header}>
        {/* Header */}
        <TouchableOpacity >
          <Image 
            style={styles.profileImage}
            source={pfpImageM}
          />
        </TouchableOpacity>
        <Button title="Go to Chat" onPress={() => navigation.navigate("Chat")} />
      </View>
      {/* End of Header */}
      <Text>HomeScreen</Text>

      <TouchableOpacity
        onPress={logoutUser}
      ><Text style={{fontWeight: 'bold', color: "#FFBF00" , margin: 15, fontSize: 20, }} >Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  header: {
    flexDirection: 'row', // You should specify a valid value for flexDirection
    borderBottomWidth:1,
    paddingBottom:5,
    paddingTop:5,
    paddingLeft:5,
    backgroundColor: '#6C6C6C',
    justifyContent:'space-between'
  },
  profileImage:{
    height:30,
    width:30,
    borderRadius:15
  }
});
export default Home;