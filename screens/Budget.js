import { View as SafeAreaView, Text,Button,StyleSheet } from 'react-native'
import React from 'react'

const Budget = props => {
  return (
    <SafeAreaView style={styles.mainContainer}>

   





      <Button style = {styles.buttonStyle} title = 'Home' onPress = {()=>{props.navigation.navigate('Home')}} />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },buttonStyle:{
        width:"50%",
        color:'#0f0',
        borderRadius:30
    }
})

export default Budget