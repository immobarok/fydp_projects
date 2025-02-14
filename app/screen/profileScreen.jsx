import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const navigateToEditProfile = () => {
    router.push("/screen/editProfile");
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" onPress={() => navigation.goBack()} />
        <Text style={styles.title}>My Profile</Text>
        <Ionicons name="settings-outline" size={24} color="black" />
      </View>

      {/* Profile Info */}
      <View style={styles.profileSection}>
        <Image source={require("../../assets/images/user.jpg")} style={styles.profileImage} />
        <View style={styles.profileText}>
          <Text style={styles.name}>Sabrina Aryan</Text>
          <Text style={styles.email}>SabrinaAry208@gmail.com</Text>
        </View>
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.editProfileButton} onPress={navigateToEditProfile}>
        <Text style={styles.editProfileText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Profile Options */}
      <View style={styles.optionsContainer}>
        <Option icon="heart-outline" text="Favourites" />
        <Option icon="download-outline" text="Downloads" />
        <Option icon="language" text="Languages" iconLib="MaterialIcons" />
        <Option icon="location-pin" text="Location" iconLib="MaterialIcons" />
        <Option icon="subscriptions" text="Subscription" iconLib="MaterialIcons" />
        <Option icon="display-settings" text="Display" iconLib="MaterialIcons" />
      </View>

      {/* Other Actions */}
      <View style={styles.optionsContainer}>
        <Option icon="delete-outline" text="Clear Cache" />
        <Option icon="history" text="Clear History" iconLib="MaterialIcons" />
        <Option icon="logout" text="Log Out" iconLib="MaterialIcons" />
      </View>

      {/* Footer */}
      <Text style={styles.footer}>lingua learner</Text>
    </ScrollView>
  );
};

// Option Component
const Option = ({ icon, text, iconLib = "Ionicons" }) => {
  const IconComponent = iconLib === "Ionicons" ? Ionicons : MaterialIcons;
  return (
    <TouchableOpacity style={styles.option}>
      <IconComponent name={icon} size={24} color="black" />
      <Text style={styles.optionText}>{text}</Text>
      <Ionicons name="chevron-forward-outline" size={20} color="black" />
    </TouchableOpacity>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "#ddd",
  },
  profileText: {
    alignItems: "center",
    marginTop: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
    color: "gray",
  },
  editProfileButton: {
    backgroundColor: "#4F46E5",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 10,
  },
  editProfileText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  optionsContainer: {
    marginTop: 15,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  footer: {
    textAlign: "center",
    fontSize: 12,
    color: "gray",
    marginTop: 20,
  },
});

export default ProfileScreen;