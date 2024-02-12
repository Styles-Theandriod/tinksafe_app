import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Splashscreen = () => {
  return (
    <View style={styles.container}>
      {/* <Image source={require('../Images/Logo.png')}/> */}
      {/* <Image source={require('../Images/tinksafe.png')} style={{marginTop:27.78}}/> */}
    </View>
  )
}

export default Splashscreen

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#015AAC',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  }
})