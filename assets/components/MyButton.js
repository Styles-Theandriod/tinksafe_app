import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Alert, TouchableNativeFeedback } from 'react-native'
import React from 'react'

const MyButton = ({onPress, title, disabled}) => {

    const handlePress = () => {
        Alert.alert('Component Pressed!');
      };
  return (
    // <TouchableOpacity
    // onPress={onPress}
    // style={[styles.button, disabled && styles.disabledButton]}
    // disabled={disabled}
    // >
    // <Text style={styles.buttonText}>{title}</Text>
    // </TouchableOpacity>

    // <TouchableWithoutFeedback onPress={handlePress}>
    //   <View style={{ padding: 20, backgroundColor: 'lightblue' }}>
    //     <Text>Touchable Component</Text>
    //   </View>
    // </TouchableWithoutFeedback>

<TouchableNativeFeedback onPress={handlePress} background={TouchableNativeFeedback.Ripple('rgba(0,0,0,0.2)', true)}>
<View style={styles.touchableContainer}>
  <Text>Touchable Component</Text>
</View>
</TouchableNativeFeedback>
  )
}

export default MyButton

const styles = StyleSheet.create({
    button:{
        backgroundColor: 'blue',
        padding:10,
        borderRadius:5,
        marginVertical:10
    },
    disabledButton:{
        backgroundColor: 'gray',
    },
    buttonText:{
        color: 'white',
        textAlign: 'center',
    }
})