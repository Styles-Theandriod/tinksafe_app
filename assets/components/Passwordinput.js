import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const Passwordinput = () => {
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    // Toggle password visibility
    setIsPasswordVisible((prevIsVisible) => !prevIsVisible);
  };
  return (
    <View>
        <TextInput placeholder='Password' style={styles.Passwordinput} secureTextEntry={!isPasswordVisible}/>
         {/* Use the secureTextEntry property to hide/show the password */}
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconContainer}>
        <Icon
          name={isPasswordVisible ? 'eye' : 'eye-slash'}
          size={20}
          color="#777"
        />
        </TouchableOpacity>
    </View>
  )
}

export default Passwordinput

const styles = StyleSheet.create({
    Passwordinput:{
        backgroundColor: '#F2F2F2',
        width:363,
        height:53,
        borderRadius:10,
        marginTop:31,
        paddingLeft:15
      },
      toggleButtonText:{
        color: 'blue',
        fontWeight:'bold',
        textAlign: 'center',
      },
      iconContainer: {
        position: 'absolute',
        top: 50,
        right: 30,
      },
})