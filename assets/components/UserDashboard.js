import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'

const UserDashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topItem}>
        <Text>User</Text>
        <View style={styles.flexItems}>
          <Text>User</Text>
          <Text>User</Text>
        </View>
      </View>
        <View style={styles.chicken}><Text style={styles.chickenText}><Text style={styles.Plan}>Plan:</Text> Chicken</Text></View>

      <View style={styles.MainContainer}>
        <View style={styles.PaymentContainer}>
          <View style={styles.flexContainer}>
            <View style={styles.Box1}>
              <Text style={[styles.left, {marginTop:24}]}>Icon</Text>
              <Text style={styles.left}>Total Contribution</Text>
              <Text style={[styles.left, {fontWeight:'800', fontSize:30}]}>N25,000</Text>
            </View>
            <View style={styles.Box2}>
              <Text style={[styles.left, {marginTop:24}]}>Icon</Text>
              <Text style={styles.left}>Days to Withdrawal</Text>
              <Text style={[styles.left, {fontWeight:'800', fontSize:30}]}>5 days</Text>
            </View>
          </View>
          <View style={styles.LongBox}>
          </View>

          <View style={[styles.LongBox,{backgroundColor:'#015aac', borderColor:0}]}>
          </View>

          <View style={styles.ScrollView}>
            <Text style={styles.TextHistory}>History</Text>
            <ScrollView>
             <View style={styles.Successful}>
              <Image source={require('../Images/SuccessIcon.png')}/>
              <View>
                <Text style={styles.Payment}>Payment Successful</Text>
                <Text style={styles.LightWeight}>26 Feb. 2023</Text>
              </View>
              <Text style={styles.bold}>N1,000</Text>
             </View>
             <View style={styles.Successful}>
              <Image source={require('../Images/SuccessIcon.png')}/>
              <View>
                <Text style={styles.Payment}>Payment Successful</Text>
                <Text style={styles.LightWeight}>26 Feb. 2023</Text>
              </View>
              <Text style={styles.bold}>N1,000</Text>
             </View>
             <View style={styles.Successful}>
              <Image source={require('../Images/SuccessIcon.png')}/>
              <View>
                <Text style={styles.Payment}>Payment Successful</Text>
                <Text style={styles.LightWeight}>26 Feb. 2023</Text>
              </View>
              <Text style={styles.bold}>N1,000</Text>
             </View>
             <View style={styles.Successful}>
              <Image source={require('../Images/SuccessIcon.png')}/>
              <View>
                <Text style={styles.Payment}>Payment Successful</Text>
                <Text style={styles.LightWeight}>26 Feb. 2023</Text>
              </View>
              <Text style={styles.bold}>N1,000</Text>
             </View>
             <View style={styles.Successful}>
              <Image source={require('../Images/SuccessIcon.png')}/>
              <View>
                <Text style={styles.Payment}>Payment Successful</Text>
                <Text style={styles.LightWeight}>26 Feb. 2023</Text>
              </View>
              <Text style={styles.bold}>N1,000</Text>
             </View>
             <View style={styles.Successful}>
              <Image source={require('../Images/SuccessIcon.png')}/>
              <View>
                <Text style={styles.Payment}>Payment Successful</Text>
                <Text style={styles.LightWeight}>26 Feb. 2023</Text>
              </View>
              <Text style={styles.bold}>N1,000</Text>
             </View>
             <View style={styles.Successful}>
              <Image source={require('../Images/SuccessIcon.png')}/>
              <View>
                <Text style={styles.Payment}>Payment Successful</Text>
                <Text style={styles.LightWeight}>26 Feb. 2023</Text>
              </View>
              <Text style={styles.bold}>N1,000</Text>
             </View>
             <View style={styles.Successful}>
              <Image source={require('../Images/SuccessIcon.png')}/>
              <View>
                <Text style={styles.Payment}>Payment Successful</Text>
                <Text style={styles.LightWeight}>26 Feb. 2023</Text>
              </View>
              <Text style={styles.bold}>N1,000</Text>
             </View>
             <View style={styles.Successful}>
              <Image source={require('../Images/SuccessIcon.png')}/>
              <View>
                <Text style={styles.Payment}>Payment Successful</Text>
                <Text style={styles.LightWeight}>26 Feb. 2023</Text>
              </View>
              <Text style={styles.bold}>N1,000</Text>
             </View>
             <View style={styles.Successful}>
              <Image source={require('../Images/SuccessIcon.png')}/>
              <View>
                <Text style={styles.Payment}>Payment Successful</Text>
                <Text style={styles.LightWeight}>26 Feb. 2023</Text>
              </View>
              <Text style={styles.bold}>N1,000</Text>
             </View>
             {/* end of first History */}

            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default UserDashboard

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F9FF',
    flex:1,
    // justifyContent: 'center',
    width: '100%',  
  },
  topItem:{
    // backgroundColor:'green',
    marginTop:69,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems:'center',
    height:50
  },
  flexItems:{
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chicken:{
    width:104,
    height:30,
    backgroundColor:'#CEE8FF',
    marginLeft:15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:15,
    marginTop:6
  },
  chickenText:{
    fontWeight:'400'
  },
  Plan:{
    fontWeight:'600',
    color:'#015AAC',
  },
  MainContainer:{
    // backgroundColor:'blue',
    height:'100%',
  },
  PaymentContainer:{
    // backgroundColor:'red',
    height:'50%',
  },
  flexContainer:{
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop:20
  },
  Box1:{
    backgroundColor:'#aaffe0',
    height:150,
    width:172,
    borderRadius:10
  },
  Box2:{
    backgroundColor:'#d7d4ff',
    height:150,
    width:172,
    borderRadius:10
  },
  left:{
    marginLeft:17
  },
  LongBox:{
    backgroundColor:'#ffe8e9',
    height:96,
    width:364,
    borderWidth:1,
    borderColor:'#ff5a5a',
    borderRadius:10,
    marginTop:20,
    marginHorizontal:14
  },
  History:{
    fontWeight:'600',
    fontSize:18,
    lineHeight:40
  },
  ScrollView:{
    // backgroundColor:'red',
    flexGrow:1
  },
  Successful:{
    backgroundColor:'#D4EDFF',
    width:364,
    height:62,
    marginTop:20,
    marginLeft:14,
    borderRadius:10,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems: 'center',
  },
  bold:{
    fontWeight:'700',
    color:'black',
    fontSize:16,
    lineHeight:21.82,
  },
  LightWeight: {
    fontWeight:'400',
    fontSize:12,
    lineHeight:18,
    color:'#015AAC',
  },
  Payment:{
    fontWeight:'500',
    fontSize:14,
    lineHeight:21,
  },
  TextHistory: {
    fontWeight:'600',
    fontSize:25,
    marginTop:20,
    lineHeight:27,
    left:14
  }
})