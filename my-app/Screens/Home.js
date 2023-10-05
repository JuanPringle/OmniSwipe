import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import {useNavigation} from '@react-navigation/core'

const Home = () => {
  const navigation=useNavigation();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Go to Chat" onPress={()=>navigation.navigate("Chat")}/>
    </View>
  )
}

export default Home