import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateToSignUp = () => {
    router.push("/login/signup");
  };

  const handleLogin = () => {
    if (email === "test@gmail.com" && password === "password") {
      Alert.alert("Success", "Login successful");
      router.push("/dictionary/dictionary");
    } else {
      Alert.alert("Error", "Invalid email or password");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.loginTitle}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.signupText}>
          Don't have an account? <Text style={styles.signupLink} onPress={navigateToSignUp}>Sign up</Text>
        </Text>

        <Text style={styles.orText}>or</Text>

        <TouchableOpacity style={styles.googleButton}>
          <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" }} style={styles.googleIcon} />
          <Text style={styles.googleButtonText}>Login with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.facebookButton}>
          <Ionicons name="logo-facebook" size={20} color="white" />
          <Text style={styles.facebookButtonText}>Login with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f0f7"
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  loginBox: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    width: "90%",
    alignItems: "center"
  },
  loginTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4b2376",
    marginBottom: 15
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: "#f8f6fa"
  },
  forgotPassword: {
    color: "#6b5e8a",
    alignSelf: "flex-end",
    marginBottom: 15
  },
  loginButton: {
    backgroundColor: "#9466d3",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    width: "100%"
  },
  loginButtonText: {
    color: "white",
    fontWeight: "bold"
  },
  signupText: {
    marginTop: 10,
    color: "#6b5e8a"
  },
  signupLink: {
    fontWeight: "bold",
    color: "#4b2376"
  },
  orText: {
    marginVertical: 10,
    color: "#6b5e8a"
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    justifyContent: "center",
    marginBottom: 10
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 8
  },
  googleButtonText: {
    color: "#6b5e8a",
    fontWeight: "bold"
  },
  facebookButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4b2376",
    padding: 12,
    borderRadius: 8,
    width: "100%",
    justifyContent: "center"
  },
  facebookButtonText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 8
  },
});

export default LoginScreen;
