import React from 'react'
import { 
  View, 
  SafeAreaView,
  Text, 
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
  Touchable
} from 'react-native'
import {useNavigation} from '@react-navigation/core'
import useAuth from '../CustomHooks/useAuth'
import {useTailwind} from 'tailwind-rn';
import { useLayoutEffect } from 'react'
import Swiper from 'react-native-deck-swiper'
import { Ionicons } from '@expo/vector-icons';


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
    <SafeAreaView style={styles.safeView}>
      <View style={styles.header}>
        {/* Header */}
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image
              style={styles.profileImage}
              source={pfpImageM}
            />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
            <Ionicons name="call-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {/* End of Header */}
      <View style={styles.container}>
          <Text>HomeScreen</Text>

          <TouchableOpacity
            onPress={logoutUser}
          ><Text style={{ fontWeight: 'bold', color: "#FFBF00", margin: 15, fontSize: 20, }} >Sign Out</Text>
          </TouchableOpacity>
          
          <Swiper
            style={styles.card}
            cards={FAKE_DATA}
            cardIndex={0}
            infinite = {true}
            renderCard={(card) => (
              
              <View key={card.id}>
                <Image
                  source={pfpImageW}
                  style={styles.cardImage}
                />
                <View>
                <Text>
                  {card.firstName} {card.lastName}
                </Text>
                </View>
              </View>
            )}
          />
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
    paddingBottom:40,
    paddingTop:5,
    paddingLeft:5,
    backgroundColor: '#6C6C6C',
    justifyContent:'space-between',
  },
  profileImage:{
    height:30,
    width:30,
    borderRadius:15
  },
  cardImage:{
    width:320,
    borderRadius: 50,
  },
  container:{
    flex:1
  },
  safeView:{
    flex:1,
  },
  card:{
    marginTop:100,
    cardHorizontalMargin:0,
    backgroundColor:'red',
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white"
  },
  
});
export default Home;