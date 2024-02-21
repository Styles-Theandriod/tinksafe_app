import React from "react";
import { StyleSheet, View, StatusBar, Alert } from "react-native";
import Login from "./assets/components/Login";
import UserDashboard from "./assets/components/UserDashboard";
import List from "./assets/components/List";
import MyButton from "./assets/components/MyButton";

export default function App() {
  const handleButtonPress = () => {
    Alert.alert("Button pressed")
  }
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#015AAC" barStyle="default" hidden={false} />
      {/* <UserDashboard/> */}
      {/* <List/> */}
      <MyButton title="Press Me" onPress={handleButtonPress}/>
      <MyButton title="Disabled Button" onPress={() => {}} disabled/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
