import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import Passwordinput from "./Passwordinput";

const Login = () => {

  const handleLoginPress = () => {
    console.log('Login button pressed');
    // Uncomment the following line to navigate to UserDashboard
    // navigation.navigate('UserDashboard');
  };

  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <Image
          source={require("../Images/Loginlogo.png")}
          style={{ width: 36, height: 36 }}
        />
        <Image source={require("../Images/tinksafeLoginlogo.png")} />
      </View>
      <View style={styles.InputContainer}>
        <Text style={styles.Text}>Nice to have you back!</Text>
        <TextInput placeholder="Email" style={styles.Emailinput} />
        {<Passwordinput />}
        <Text style={styles.forgetPassword}>Forgot Password</Text>

        <TouchableOpacity style={styles.Loginbtn} onPress={handleLoginPress}>
          <Text style={{ color: "white" }}>Login</Text>
        </TouchableOpacity>

        <View style={styles.littleText}>
          <Text
            style={{
              marginTop: 50,
              textAlign: "center",
              fontWeight: 400,
              fontSize: 18,
              lineHeight: 19,
            }}
          >
            Don't have an account?{" "}
          </Text>
          <TouchableOpacity style={[styles.create, { color: "#015AAC" }]}>
            <Text>Create one</Text>
          </TouchableOpacity>
        </View>

        <KeyboardAvoidingView>
          <Image
            source={require("../Images/faintBackground.png")}
            style={{
              resizeMode:"contain",
              position: "absolute",
              bottom: -200,
              right: -20,
            }}
          />
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  flexContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "50%",
    marginTop: 104,
  },
  InputContainer: {
    width: "100%",
    height: "100%",
    padding: 8,
  },
  Text: {
    color: "black",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 45,
    marginTop: 104,
  },
  Emailinput: {
    backgroundColor: "#F2F2F2",
    width: 363,
    height: 53,
    borderRadius: 10,
    paddingLeft: 15,
  },
  Passwordinput: {
    backgroundColor: "#F2F2F2",
    width: 363,
    height: 53,
    borderRadius: 10,
    marginTop: 31,
    paddingLeft: 15,
  },
  forgetPassword: {
    textAlign: "right",
    textDecorationLine: "underline",
    marginTop: 20,
  },
  Loginbtn: {
    width: 363,
    height: 53,
    borderRadius: 10,
    backgroundColor: "#015AAC",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 36,
  },
  littleText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
});