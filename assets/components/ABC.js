import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ABC = ({childstyle}) => {
  return (
    <View>
      <Text style={childstyle}>ABC</Text>
    </View>
  )
}

export default ABC

const styles = StyleSheet.create({})