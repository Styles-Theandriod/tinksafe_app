import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Splashscreen from './assets/components/Splashscreen';
import Login from './assets/components/Login';
import CreateAccount from './assets/components/CreateAccount';
import MyBox from './assets/components/MyBox';

import MyModal from './assets/components/MyModal';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar backgroundColor='#015AAC'  barStyle="light-content" hidden={false}  /> */}
      <StatusBar backgroundColor='red' barStyle="default" hidden={false}/>
      {/* <Login/> */}
      {/* <MyModal/> */}
      {/* <CreateAccount/> */}
      <MyBox/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
