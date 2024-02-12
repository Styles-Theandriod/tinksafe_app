import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyBox = () => {
  return (
    <View style={styles.container}>
        <View style={styles.item1}></View>
        <View style={styles.item2}></View>
        <View style={styles.item3}></View>
    </View>

  )
}

export default MyBox

const styles = StyleSheet.create({
    container:{
        backgroundColor:'green',
        padding:10,
        flexDirection: 'row',
    },
    item1:{
        flexBasis:100,
        height:50,
        backgroundColor:'blue',



        // width:100,
        // flexBasis:100,
        // height:50,
        // backgroundColor:'red',
    },
    item2:{
        flexBasis:150,
        height:50,
        backgroundColor:'orange',
        // width:150,
        // flexBasis: 150,
        // height:50,
        // backgroundColor:'green',
    },
    item3:{
        flexBasis:120,
        height:50,
        backgroundColor:'purple',
        // width:120,
        // flexBasis: 120,
        // height:50,
        // backgroundColor:'orange',
    }
})