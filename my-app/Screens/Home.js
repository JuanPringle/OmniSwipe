import { React, useState, useEffect, useLayoutEffect, useRef } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
  Touchable,
  ActivityIndicator
} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { useNavigation } from '@react-navigation/core';
import useAuth from '../CustomHooks/useAuth';
import { useTailwind } from 'tailwind-rn';
import {Ionicons} from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { firestore, firebase, fbStorage } from '../config';

const Home = () => {
  
  const [cardStackSize, setCardStackSize] = useState(3);
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

  useEffect(() => {
    getCardInfo().then(console.log(cardData));
    getCardInfo().then(console.log(cardData));
  }, []);

  const logoutUser = async (email, password) => {
    try {
      const response = await firebase.auth().signOut().then(() => {
        // Sign-out successful.
      })
    } catch (e) {
      console.log(e)
    }
  }

  const getCardInfo = async () => {
    setCardData([]);
    const snapshot = await firestore.collection('Users').limit(3).get();
    const imageDB = fbStorage.ref().child(`Images`);
    const jsonData = [];
    for(const doc of snapshot.docs){
      const photoRef = await imageDB.child(`${ doc.id}`).getDownloadURL()
      try{
        jsonData.push({
          id: doc.id,
          photoURL: photoRef,
          ...doc.data()
        })
      }
      catch{
        jsonData.push({
          id: doc.id,
          photoURL: null,
          ...doc.data()
        });
      }
    }
    //console.log(cardData);
    setCardData(jsonData);
    return;
  };

  const [cardData, setCardData] = useState([]);

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
          <TouchableOpacity onPress={() => logoutUser()}>
            <Ionicons name="exit" size={30} color="white" style={styles.profileImage} />
          </TouchableOpacity>
        </View>
        {/* End of Header */}
        <View style={styles.container}>
        { cardData != [] && 
          <ActivityIndicator size="large" color="#ff8000" style={styles.spinner}/>
        }
        { cardData == [] && 
          <Swiper
            ref={swipeRef}
            cards={cardData}
            cardIndex={0}
            infinite={false}
            showSecondCard={true}
            verticalSwipe={false}
            animateCardOpacity
            stackSize={cardStackSize}
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
                <Image source={card == null || card.photoURL == null ? pfpUnknown : {uri: card.photoURL}} style={styles.cardImage} />
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
        }
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
  spinner:{
    verticalAlign: "center",
    justifyContent: 'space-around',
    padding: 200,
  }
});

export default Home;