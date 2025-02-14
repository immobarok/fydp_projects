import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";

const EditProfileScreen = () => {
  const [firstName, setFirstName] = useState("Sabrina");
  const [lastName, setLastName] = useState("Aryan");
  const [username, setUsername] = useState("@Sabrina");
  const [email, setEmail] = useState("SabrinaAry208@gmail.com");
  const [phone, setPhone] = useState("+234 904 6470");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");

  const handleSave = () => {
    console.log("Profile Updated:", { firstName, lastName, username, email, phone, birth, gender });
  };

  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <View style={styles.profileImageContainer}>
        <Image source={require("../../assets/images/user.jpg")} style={styles.profileImage} />
        <TouchableOpacity style={styles.editIcon}>
          <Ionicons name="pencil" size={18} color="white" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Edit Profile</Text>

      {/* Input Fields */}
      <TextInput style={styles.input} value={firstName} onChangeText={setFirstName} placeholder="First Name" />
      <TextInput style={styles.input} value={lastName} onChangeText={setLastName} placeholder="Last Name" />
      <TextInput style={styles.input} value={username} onChangeText={setUsername} placeholder="Username" />
      <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} value={phone} onChangeText={setPhone} placeholder="Phone Number" keyboardType="phone-pad" />

      {/* Dropdowns for Birth and Gender */}
      <Picker selectedValue={birth} style={styles.picker} onValueChange={(itemValue) => setBirth(itemValue)}>
        <Picker.Item label="Birth" value="" />
        <Picker.Item label="1995" value="1995" />
        <Picker.Item label="2000" value="2000" />
      </Picker>

      <Picker selectedValue={gender} style={styles.picker} onValueChange={(itemValue) => setGender(itemValue)}>
        <Picker.Item label="Gender" value="" />
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
      </Picker>

      {/* Change Password Button */}
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
        <Ionicons name="save" size={18} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20, backgroundColor: "#fff" },
  profileImageContainer: { position: "relative", marginBottom: 20 },
  profileImage: { width: 100, height: 100, borderRadius: 50 },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#4F46E5",
    borderRadius: 15,
    padding: 5,
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { width: "100%", padding: 10, borderWidth: 1, borderColor: "#ddd", borderRadius: 8, marginBottom: 10 },
  picker: { width: "100%", height: 50, marginBottom: 10 },
  button: { flexDirection: "row", alignItems: "center", backgroundColor: "#4F46E5", padding: 10, borderRadius: 8 },
  buttonText: { color: "white", fontWeight: "bold", marginRight: 5 },
});

export default EditProfileScreen;
