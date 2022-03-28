import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Home = props =>{
return(
    <View Style = {styles.screen}>

<Text> Home Screen</Text>

<Button onPress={() =>props.navigation.navigate('About')}
title = 'About Me!'/>
<Button onPress={() =>props.navigation.navigate('Budget')}
title = 'budget'/>

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

export default Home;