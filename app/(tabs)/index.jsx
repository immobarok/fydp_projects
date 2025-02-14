import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  Platform,
} from "react-native";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

export default function LoginScreen() {
  const router = useRouter();
  const { width, height } = useWindowDimensions(); // Dynamic screen size

  const logoScale = useSharedValue(0);
  const opacity = useSharedValue(0);
  const buttonScale = useSharedValue(0);

  useEffect(() => {
    logoScale.value = withTiming(1, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });
    opacity.value = withTiming(1, { duration: 1000, delay: 500 });
    buttonScale.value = withTiming(1, { duration: 1000, delay: 700 });
  }, []);

  const animatedLogoStyle = useAnimatedStyle(() => ({
    transform: [{ scale: logoScale.value }],
  }));

  const animatedTextStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const animatedButtonStyle = useAnimatedStyle(() => ({
    transform: [{ scale: buttonScale.value }],
  }));

  // Adjust logo size based on screen width
  const logoSize = width > 1024 ? 150 : width > 768 ? 120 : 100;
  const logoImageSize = logoSize * 0.8;

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <Animated.View style={[styles.logoContainer, animatedLogoStyle]}>
        <View style={[styles.logo, { width: logoSize, height: logoSize }]}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={{ width: logoImageSize, height: logoImageSize }}
            resizeMode="contain"
          />
        </View>
      </Animated.View>

      {/* App Name */}
      <Animated.Text style={[styles.appName, animatedTextStyle]}>
        LinguaLearner
      </Animated.Text>

      {/* Tagline */}
      <Animated.Text style={[styles.tagline, animatedTextStyle]}>
        Unlock Languages with LinguaLearner
      </Animated.Text>

      {/* Buttons */}
      <Animated.View
        style={[
          styles.buttonContainer,
          animatedButtonStyle,
          width > 1024 && styles.webButtonContainer,
        ]}
      >
        <TouchableOpacity
          style={[styles.loginButton, width > 1024 && styles.webButton]}
          onPress={() => router.push("../home/homepage")}
        >
          <Text
            style={[styles.loginText, width > 1024 && styles.webButtonText]}
          >
            Getting Started
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5A3D8A",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "5%",
  },
  logoContainer: {
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    backgroundColor: "#fff",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
  },
  appName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 10,
    textAlign: "center",
  },
  tagline: {
    fontSize: 14,
    color: "#E0E0E0",
    marginVertical: 10,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 30,
    width: "80%",
  },
  loginButton: {
    backgroundColor: "#E9E9FF",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
    width: "100%",
  },
  loginText: {
    fontSize: 16,
    color: "#5A3D8A",
    fontWeight: "bold",
  },
  signUpButton: {
    borderWidth: 2,
    borderColor: "#E9E9FF",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },
  signUpText: {
    fontSize: 16,
    color: "#E9E9FF",
    fontWeight: "bold",
  },

  // Web-specific styles
  webButtonContainer: {
    width: "50%",
  },
  webButton: {
    paddingVertical: 16,
  },
  webButtonText: {
    fontSize: 18,
  },
});
