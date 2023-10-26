import { React, useLayoutEffect, useRef } from 'react';
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


const Home = () => {
  const { logoutUser } = useAuth();
  const pfpImageM = require('../assets/pictures/examplePFPman.jpg');

  const tailwind = useTailwind();
  const navigation = useNavigation();
  const swipeRef= useRef(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const FAKE_DATA = [
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
  ];

  return (
    <View style={styles.outsideView}>
      <SafeAreaView style={styles.safeView}>
        <View style={styles.header}>
          {/* Header */}
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image style={styles.profileImage} source={pfpImageM} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
            <Ionicons name="call-outline" size={30} color="white" style={styles.profileImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Modal")}>
            <Ionicons name="settings-sharp" size={30} color="white" style={styles.profileImage} />
          </TouchableOpacity>
        </View>
        {/* End of Header */}
        <View style={styles.container}>
          <Swiper
            cards={FAKE_DATA}
            cardIndex={0}
            infinite={true}
            showSecondCard={true}
            verticalSwipe={false}
            animateCardOpacity
            stackSize={3}
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
                <Image source={{uri: card.photoURL}} style={styles.cardImage} />
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
          <TouchableOpacity onPress={() => swipeRef.current.swipeLeft()}>
            <Entypo name="cross" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => swipeRef.current.swipeRight()}>
            <Ionicons name="heart" size={24} color="black" />
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
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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