import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const About = props =>{
return(
    <View Style = {styles.screen}>

<Text> About Screen</Text>

<Button onPress={() =>props.navigation.navigate('Home')}
title = 'Go Home!'/>

    </View>
)

}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default About;