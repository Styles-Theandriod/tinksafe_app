import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
// import Splashscreen from './assets/components/Splashscreen';
// import Login from './assets/components/Login';
// import CreateAccount from './assets/components/CreateAccount';

// import MyModal from './assets/components/MyModal';

// import UserDashboard from './assets/components/UserDashboard';

import Newscreen from './assets/components/Newscreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar backgroundColor='#015AAC'  barStyle="light-content" hidden={false}  /> */}
      <StatusBar backgroundColor='#015AAC' barStyle="default" hidden={false}/>
      {/* <Login/> */}
      {/* <MyModal/> */}
      {/* <CreateAccount/> */}
      {/* <UserDashboard /> */}
      <Newscreen/>
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
