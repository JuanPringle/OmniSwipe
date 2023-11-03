import { React, useState, useLayoutEffect, useRef } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
  Touchable,
} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { useNavigation } from '@react-navigation/core';
import useAuth from '../CustomHooks/useAuth';
import { useTailwind } from 'tailwind-rn';
import {Ionicons} from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { firestore } from '../config';


const Home = () => {
  const { logoutUser } = useAuth();
  const pfpImageM = require('../assets/pictures/examplePFPman.jpg');
  const pfpUnknown = require('../assets/pictures/unknownPerson.jpg');

  const tailwind = useTailwind();
  const navigation = useNavigation();
  const swipeRef= useRef(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const getCardInfo = async () => {
    
    return;
  };

  const [cardData, setCardData] = useState([
    {
      firstName: "John",
      lastName: "Pingol",
      age: 22,
      photoURL: "https://i.pinimg.com/originals/23/f0/9e/23f09e4af872d27521fffc27c1b931f6.jpg",
      occupation: "Retail Worker",
      id:123
    },
    {
      firstName: "Christian",
      lastName: "Felix",
      age: 21,
      photoURL: "https://media.tenor.com/C69EZbBZ5JAAAAAC/random-girl-pretty-girl-green-eyes.gif",
      occupation: "Student",
      id:456
    },
    {
      firstName: "Danny",
      lastName: "Devito",
      age: 20,
      photoURL: "https://breakbrunch.com/wp-content/uploads/2020/04/sexy-girl-5e95f5002626fab5b.jpg",
      occupation: "Web Developer",
      id:789
    },
  ]);

  return (
    <View style={styles.outsideView}>
      <SafeAreaView style={styles.safeView}>
        <View style={styles.header}>
          {/* Header */}
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image style={styles.profileImage} source={pfpImageM} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Modal")}>
            <Ionicons name="settings-sharp" size={30} color="white" style={styles.profileImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
            <Ionicons name="call-outline" size={30} color="white" style={styles.profileImage} />
          </TouchableOpacity>
        </View>
        {/* End of Header */}
        <View style={styles.container}>
          <Swiper
            ref={swipeRef}
            cards={cardData}
            cardIndex={0}
            infinite={false}
            showSecondCard={true}
            verticalSwipe={false}
            animateCardOpacity
            stackSize={3}
            //onTapCard={}
            onSwipedAll={() => {getCardInfo().then(() => {swipeRef.current.jumpToCardIndex(0)})}}
            onSwipedLeft={()=>{
              console.log("Pass")
            }}
            onSwipedRight={()=>{
              console.log("Smash")
            }}
            overlayLabels={{
              left:{
                title:"PASS",
                style:{
                  label:{
                    textAlign: "right",
                    color: "red",
                  }
                }
              },
              right:{
                title: "SMASH",
                style:{
                  label:{
                    color: "#4DED30"
                  }
                }
              }
            }}
            renderCard={(card) => (
              <View key={card.id} style={styles.card}>
                <Image source={card.photoURL == null ? {uri: pfpUnknown} : {uri: card.photoURL}} style={styles.cardImage} />
                <View style={{ position: 'relative', width: '100%', alignSelf: 'center', justifyContent: 'flex-row',  }}>
                  <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', fontStyle: 'italic', paddingLeft: 5, marginLeft: 5 }}>
                      {card.firstName} {card.lastName}
                    </Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', fontStyle: 'italic', paddingBottom: 10, paddingLeft: 5, marginLeft: 5 }}>
                      {card.occupation}
                    </Text>
                  </View>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', fontStyle: 'italic', paddingBottom: 5, marginLeft: 10 }}>
                    {card.age}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={() => swipeRef.current.swipeLeft()} style={{
          alignItems:'center',
          justifyContent:'center',
          width:50,
          height:50,
          borderRadius:50,
          backgroundColor: "red",
          }}>
              <Entypo name="cross" size={30} color="white" style={styles.dislikeIcon} />
            </TouchableOpacity>
          <TouchableOpacity onPress={() => swipeRef.current.swipeRight()} style={{
          alignItems:'center',
          justifyContent:'center',
          width:50,
          height:50,
          borderRadius:50,
          backgroundColor: "#4DED30",
          }}>
              <Ionicons name="heart" size={30} color="green" style={styles.likeIcon} />
            </TouchableOpacity>
          </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  outsideView: {
    backgroundColor: '#D8955E',
  },
  buttons:{
    marginTop: 675,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  likeButton:{
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
  },
  dislikeButton: {
    paddingLeft: 15,
    borderRadius: 15,
    alignItems: 'center', // Center the icon horizontally
    justifyContent: 'center', // Center the icon vertically
  },
  likeIcon:{
    height: 30,
    width: 30,
  },
  dislikeIcon: {
    height: 30,
    width: 30,
  },
  header: {
    flexDirection: 'row',
    paddingBottom: 40,
    paddingTop: 5,
    paddingLeft: 5,
    backgroundColor: '#D8955E',
    justifyContent: 'space-between',
  },
  profileImage: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginLeft: 5,
    marginRight: 5,
  },
  cardImage: {
    height: 500,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  container: {
    height: '100%',
    width: null,
  },
  safeView: {
    flex: 1,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
  },
});

export default Home;