import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import { router } from "expo-router";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null);

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }
    // Add your sign-up logic here
    Alert.alert("Success", "Account created successfully");
    router.push("/login/login");
  };

  const navigateToLogin = () => {
    router.push("/login/login");
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>The Lingua Learner App</Text>
      <View style={styles.signupBox}>
        <Text style={styles.signupTitle}>Sign Up</Text>

        {/* Image Upload */}
        <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.profileImage} />
          ) : (
            <Ionicons name="camera" size={24} color="gray" />
          )}
        </TouchableOpacity>

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Confirm Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        {/* Phone Number Input */}
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Login Option */}
        <Text style={styles.loginText}>
          Already have an account? <Text style={styles.loginLink} onPress={navigateToLogin}>Login</Text>
        </Text>

        <Text style={styles.orText}>or</Text>

        {/* Google Sign Up */}
        <TouchableOpacity style={styles.googleButton}>
          <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" }} style={styles.googleIcon} />
          <Text style={styles.googleButtonText}>Sign Up with Google</Text>
        </TouchableOpacity>

        {/* Facebook Sign Up */}
        <TouchableOpacity style={styles.facebookButton}>
          <Ionicons name="logo-facebook" size={20} color="white" />
          <Text style={styles.facebookButtonText}>Sign Up with Facebook</Text>
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
  appTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4b2376",
    marginBottom: 20
  },
  signupBox: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    width: "90%",
    alignItems: "center"
  },
  signupTitle: {
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
  imagePicker: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#f8f6fa",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd"
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  signupButton: {
    backgroundColor: "#9466d3",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    width: "100%"
  },
  signupButtonText: {
    color: "white",
    fontWeight: "bold"
  },
  loginText: {
    marginTop: 10,
    color: "#6b5e8a"
  },
  loginLink: {
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

export default SignUpScreen;