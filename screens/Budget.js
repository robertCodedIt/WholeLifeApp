import { View, Text,Button } from 'react-native'
import React from 'react'

const Budget = props => {
  return (
    <View>
      <Text>Budget</Text>
      <Button title = 'Home' onPress = {()=>{props.navigation.navigate('Home')}} />
    </View>
  )
}

export default Budget