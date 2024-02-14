import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'





const Newscreen = () => {
    const [loaded] = useFonts({
        CustomFont: require('../fonts/ProtestRiot-Regular.ttf'),
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

export default Newscreen

const styles = StyleSheet.create({
    container: {
        // flex: 1 ,
        flexShrink:50,
        flexGrow:2,
        flexWrap:'wrap',
        
        justifyContent: 'center',
        alignItems: 'center',
      },
      customText: {
        fontFamily: 'CustomFont', // Use the name specified in useFonts
        fontSize: 50,
      },
});  


    