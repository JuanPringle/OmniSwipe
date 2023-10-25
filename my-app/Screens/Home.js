import { React, useLayoutEffect }from 'react'
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
import Swiper from 'react-native-deck-swiper';
import {useNavigation} from '@react-navigation/core'
import useAuth from '../CustomHooks/useAuth'
import {useTailwind} from 'tailwind-rn';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Lato_900Black } from '@expo-google-fonts/lato';


const Home = () => {
  const { logoutUser} = useAuth();
  const pfpImageW = require('../assets/pictures/examplePFPwoman.jpg');
  const pfpImageM = require('../assets/pictures/examplePFPman.jpg');
  const [fontsLoaded] = useFonts({
    Lato_900Black,
  });
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
      occupation: "Retail Worker"
    },
    {
      firstName:"Christian",
      lastName:"Felix",
      age:21,
      occupation: "Student"
    },
    {
      firstName:"Sky",
      lastName:"Bullock",
      age:20,
      occupation: "Web Developer"
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
            <Ionicons name="call-outline" size={30} color="black" style={styles.profileImage}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Modal")}>
            <Ionicons name="settings-sharp" size={30} color="black" style={styles.profileImage}/>
        </TouchableOpacity>
      </View>
      {/* End of Header */}
      <View style={styles.container}>
          
          <Swiper
            style={styles.card}
            cards={FAKE_DATA}
            cardIndex={0}
            infinite={true}
            showSecondCard={true}
            disableBottomSwipe={true}
            renderCard={(card) => (
              
              <View key={card.id} style={{ backgroundColor: 'powderblue', justifyContent: 'flex-end',}}>
                <Image
                  source={pfpImageW}
                  style={styles.cardImage}
                />
                <View style={{position: 'absolute', width: '100%', alignSelf: 'center', backgroundColor: 'white'}}>
                  <Text style={{ fontFamily: 'Lato_900Black', fontSize: 20, }}>
                    Name: {card.firstName} {card.lastName}
                  </Text>
                  <Text style={{ fontFamily: 'Lato_900Black', fontSize: 20 }}>
                    Age: {card.age}
                  </Text>
                  <Text style={{ fontFamily: 'Lato_900Black', fontSize: 20 }}>
                    Occupation: {card.occupation}
                  </Text>
                </View>
              </View>
            )}
          />

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
    height: 500,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 20
  },
  container:{
    
    width: null,
  },
  safeView:{
    flex:1,
  },
  card:{
    marginTop: 20,
    cardHorizontalMargin:0,
    backgroundColor:'red',
    flex: 1,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white"
  },
  
});
export default Home;