import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

// 

const DataFetch = () => {
    const [loaded] = useFonts({
        CustomFont: require('./assets/fonts/CustomFont.ttf'),
        // Add more fonts if needed
      });
    
      if (!loaded) {
        return null; // You might want to show a loading indicator here
      }
    
      return (
        <View style={styles.container}>
          <Text style={styles.customText}>Hello, Expo Font!</Text>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      customText: {
        fontFamily: 'CustomFont', // Use the name specified in useFonts
        fontSize: 20,
      },
    });