import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import BulletPointList from './BulletPointList';

const CreateAccount = () => {
  const listItems = ['8 characters', '1 lower case character', '1 special character']
  return (
    <SafeAreaView>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput placeholder='John Doe' style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput placeholder='john.doe@example.com' style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput placeholder='(123) 456-7890' style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput placeholder='*********' secureTextEntry={true} style={styles.input} />
      </View>

      <View>
        <Text style={{fontWeight:'500', fontSize:12, lineHeight:18, marginBottom:10}}>Must contain at least</Text>
        <BulletPointList items={listItems}/>
      </View>

      <TouchableOpacity style={styles.Continue}>
          <Text style={{color:'white'}}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
  input: {
    backgroundColor: '#F2F2F2',
    width: 363,
    height: 53,
    borderRadius: 10,
    paddingLeft: 15,
  },
  Continue:{
    width: 363,
    height: 53,
    borderRadius: 10,
    backgroundColor: '#015AAC',
    justifyContent: 'center',
    alignItems:'center',
    fontWeight:'600',
    fontSize:18,
    lineHeight:24.55,
    marginTop:36,
  },
  ContinueText:{
    color: 'white',
    textAlign:'center',
    justifyContent: 'center',
    alignItems: 'center',
  },


  // for BulletPointListItem 
  
});

export default CreateAccount;
