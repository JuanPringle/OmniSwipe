import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { ImageBackground } from 'react-native';

const Login = () => {
  const navigation=useNavigation();


  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown: false,

    });
  },[]);
  return (
    <View>
      <ImageBackground source={require('../assets/OmniSwipelogo.PNG')}
      style={styles.backgroundImage}>

      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1, // Cover the entire screen
    resizeMode: 'cover', // Stretch or shrink the image as needed
    justifyContent: 'center', // Center content vertically
  },
  container: {
    flex: 1,
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Add a semi-transparent overlay
  },
});

export default Login