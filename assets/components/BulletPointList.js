import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BulletPointList = ( {items} ) =>{
    return (
      <View style={styles.container}>
        {items.map(( items, index)=> (
          <View key={index} style={styles.itemContainer}>
            <View style={styles.bulletPoint}></View>
            <Text style={styles.itemText}>{items}</Text>
          </View>
        ))}
      </View>
    )
  }

export default BulletPointList

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    // marginLeft: 20, // Adjust margin as needed
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  bulletPoint: {
    marginRight: 5,
    fontSize: 14, // Adjust font size as needed
    backgroundColor: '#D9D9D9',
    width:6,
    height:6,

  },
  itemText: {
    fontSize: 14, // Adjust font size as needed
    marginLeft:11,
    color:'#4A4A4A',
    fontWeight:'500',
    lineHeight:18,
    opacity: 80
  },
})