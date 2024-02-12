import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'



const PlansList = ({title, trend, description, Icon}) => {
  const iconSource = require(Icon)
  return (
    <View>
      <Text>{title}</Text>
      <Text>{trend}</Text>
      <Text>{description}</Text>
      <Text>{iconSource}</Text>
    </View>
  )
}

export default PlansList

const styles = StyleSheet.create({})