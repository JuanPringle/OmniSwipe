import { React, useLayoutEffect } from 'react';
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
import { Ionicons } from '@expo/vector-icons';

const Home = () => {
  const { logoutUser } = useAuth();
  const pfpImageM = require('../assets/pictures/examplePFPman.jpg');

  const tailwind = useTailwind();
  const navigation = useNavigation();

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
      firstName: "Sky",
      lastName: "Bullock",
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
            <Ionicons name="call-outline" size={30} color="black" style={styles.profileImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Modal")}>
            <Ionicons name="settings-sharp" size={30} color="black" style={styles.profileImage} />
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
            renderCard={(card) => (
<<<<<<< HEAD
              <View key={card.id} style={styles.card}>
                <Image source={{uri: card.photoURL}} style={styles.cardImage} />
                <View style={{ position: 'relative', width: '100%', alignSelf: 'center', backgroundColor: 'white', justifyContent: 'flex-end' }}>
                  <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', fontStyle: 'italic' }}>
                      {card.firstName} {card.lastName}
                    </Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', fontStyle: 'italic', paddingBottom: 10 }}>
                      {card.occupation}
                    </Text>
                  </View>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', fontStyle: 'italic' }}>
                    {card.age}
=======
              
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
>>>>>>> 5209acd2dd3c34be10cff5b63f6ebffa08d52c14
                  </Text>
                </View>
              </View>
            )}
          />
          <TouchableOpacity onPress={logoutUser}>
            <Text style={{ fontWeight: 'bold', color: "#FFBF00", margin: 15, fontSize: 20 }}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  outsideView: {
    backgroundColor: '#6C6C6C',
  },
  header: {
    flexDirection: 'row',
    paddingBottom: 40,
    paddingTop: 5,
    paddingLeft: 5,
    backgroundColor: '#6C6C6C',
    justifyContent: 'space-between',
  },
  profileImage: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
<<<<<<< HEAD
  cardImage: {
    height: '70%',
    width: '100%',
    alignSelf: 'center',
    borderRadiusTop: 20,
  },
  container: {
    height: '100%',
=======
  cardImage:{
    height: 500,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 20
  },
  container:{
    
>>>>>>> 5209acd2dd3c34be10cff5b63f6ebffa08d52c14
    width: null,
  },
  safeView: {
    flex: 1,
  },
  card: {
    cardHorizontalMargin: 0,
    backgroundColor: 'red',
    flex: 1,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white",
  },
});

export default Home;