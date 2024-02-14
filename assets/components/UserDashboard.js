import { StyleSheet, Text, View, Image, TouchableOpacity, Platform, Button} from 'react-native'
import React from 'react'

import { StatusBar } from 'expo-status-bar'
import css from './css'

import { useFonts } from 'expo-font'

import { useState } from 'react'

// const DashboardImage = require('../Images/Dashboard-logo-icon.png')

const UserDashboard = () => {

  const [loaded] = useFonts({
    CustomFont: require('../fonts/ProtestRiot-Regular.ttf'),
    iosFonts: require('../fonts/ProtestRiot-Regular.ttf'),
    // Add more fonts if needed
  });

  if (!loaded) {
    return null; // You might want to show a loading indicator here
  }

  const design = {
      backgroundColor: 'green',
      height: '20%',
      width: '50%',
      marginVertical:100
    }

    const [isStyled, setIsStyled] = useState(false);

    const toggleStyle = () => {
      setIsStyled(!isStyled);
    };
  
  return (
    <View style={styles.container}>
      <View style={[styles.Box, {borderRadius:10}]}></View>
      <View style={design}></View>
      <View style={css}></View>
      {Platform.OS === 'ios' ? (
        
        <Text style={styles.iosFonts}>Hello World</Text>
        ) : (
          
          <Text style={styles.androidFonts}>Hello World</Text>
      ) }


      <View style={[styles.container, isStyled && styles.programmaticallyStyled]}>
        <Text style={styles.text}>Hello, React Native!</Text>
        <Button title="Toggle Style" onPress={toggleStyle} />
      </View>

    </View>
  )
}

export default UserDashboard

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'orange',
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },

    Box:{
      backgroundColor: 'red',
      height: '20%',
      width: '50%',
      marginVertical:100
    },

    androidFonts:{
      fontFamily:'CustomFont',
    },
    iosFonts:{
      fontFamily:'iosFonts',
    },
    programmaticallyStyled:{
      backgroundColor:'green'
    }
    
})