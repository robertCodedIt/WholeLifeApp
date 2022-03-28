import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Home = props =>{
return(
    <View style = {styles.screen}>

<Text> Home Screen</Text>

<Button style = {styles.buttonStyle} onPress={() =>props.navigation.navigate('About')}
title = 'About Me!'/>
<Button style = {styles.buttonStyle} onPress={() =>props.navigation.navigate('Budget')}
title = 'budget'/>

    </View>
)

}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },buttonStyle:{
        width:'50%',
        padding: '10px'
    
    }
})

export default Home;