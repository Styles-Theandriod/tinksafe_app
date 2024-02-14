import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'

import { StatusBar } from 'expo-status-bar'
import css from './css'

// const DashboardImage = require('../Images/Dashboard-logo-icon.png')

const UserDashboard = () => {
  const design = {
      backgroundColor: 'green',
      height: '20%',
      width: '50%',
      marginVertical:100
    }
  
  return (
    <View style={styles.container}>
      <View style={[styles.Box, {borderRadius:10}]}></View>
      <View style={design}></View>
      <View style={css}></View>
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
    }
    
})