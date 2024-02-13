import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { StatusBar } from 'expo-status-bar'

const UserDashboard = () => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor='#F2F9FF' barStyle="dark-content" hidden={false}/>
        <View>
            
        </View>
    </View>
  )
}

export default UserDashboard

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F2F9FF',
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        width: '100%',
    }
})