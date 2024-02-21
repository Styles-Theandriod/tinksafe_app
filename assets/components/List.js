import { StyleSheet, Text, View, FlatList, Button, } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const List = () => {

  const data = [
    {id:1, name: "Chicken Plan", amount: "N1000 / Daily",},
    {id:2, name: "Rice Plan", amount: "N1000 / Daily",},
    {id:3, name: "Double Plan (Rice and chicken)", amount: "N2000 / Daily",},
  ]

  
  const renderItem = ({item, index}) =>{
    // Define an array of backgrounds for each item 
    const backgroundColors = ['#212121', '#07AF73', '#6B61D8']

    
    // Get the background color for the current item based on its index
    const backgroundColor = backgroundColors[index % backgroundColors.length]
    return(
    <View style={{padding:10}}>

      <View style={{backgroundColor, width:363, height:122, borderRadius:20}}> 
        
        <View style={styles.flexItems}>
          <View>
            <Text>{item.name}</Text>
            <Text>{item.amount}</Text>
          </View>
          <AntDesign name="arrowright" size={24} color="black" />
        </View>
        <Button title="click me" onPress={()=>{alert('you clicked me')}}/>
      </View>
    </View>
    )
  }  

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  )
}

export default List

const styles = StyleSheet.create({
  flexItems:{
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex:1,
    alignItems: 'center',
  }
})