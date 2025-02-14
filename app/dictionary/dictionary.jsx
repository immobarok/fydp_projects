import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";

const WordDetailScreen = () => {
  const navigation = useNavigation();

  const navigateToDashboard = () => {
    router.push("/home/homepage");
  };

  const navigateToQuizzes = () => {
    router.push("/quizzes");
  };

  const navigateToForum = () => {
    router.push("/forum");
  };

  const navigateToProfile = () => {
    router.push("/screen/profileScreen");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Car</Text>
        <TouchableOpacity>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <TextInput style={styles.searchBar} placeholder="Search language content..." />

      {/* Word Image */}
      <Image
        source={{ uri: "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg" }}
        style={styles.wordImage}
      />

      {/* Pronunciation Section */}
      <View style={styles.pronunciationContainer}>
        <Image
          source={{ uri: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_Kingdom.svg" }}
          style={styles.flag}
        />
        <Text style={styles.pronunciation}>/kɑr/</Text>
        <TouchableOpacity>
          <FontAwesome5 name="volume-up" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* Definition Section */}
      <Text style={styles.sectionTitle}>Definition</Text>
      <Text style={styles.definition}>
        A four-wheeled road vehicle that is powered by an engine and is able to carry a small number of people.
      </Text>

      {/* Translations */}
      <Text style={styles.sectionTitle}>Japanese</Text>
      <Text style={styles.translation}>車 Kuruma</Text>

      <Text style={styles.sectionTitle}>German</Text>
      <Text style={styles.translation}>Auto</Text>

      <Text style={styles.sectionTitle}>Spanish</Text>
      <Text style={styles.translation}>auto</Text>

      {/* Grammar & Examples */}
      <Text style={styles.sectionTitle}>Grammar : Noun</Text>
      <Text style={styles.examples}>
        i) I'll wait in the car.{"\n"}
        ii) He got into the car and drove away.{"\n"}
        iii) She bought a new car.
      </Text>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={navigateToDashboard}>
          <Ionicons name="home-outline" size={24} color="#4b66ea" />
          <Text style={[styles.navText, { color: '#4b66ea' }]}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={navigateToQuizzes}>
          <Ionicons name="clipboard-outline" size={24} color="gray" />
          <Text style={styles.navText}>Quizzes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={navigateToForum}>
          <Ionicons name="chatbubble-outline" size={24} color="gray" />
          <Text style={styles.navText}>Forum</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={navigateToProfile}>
          <Ionicons name="person-outline" size={24} color="gray" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 10 },
  headerTitle: { fontSize: 18, fontWeight: "bold" },
  profileImage: { width: 30, height: 30, borderRadius: 15 },
  searchBar: { backgroundColor: "#f2f2f2", padding: 10, borderRadius: 8, marginBottom: 15 },
  wordImage: { width: "100%", height: 150, borderRadius: 10, marginBottom: 15 },
  pronunciationContainer: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 10 },
  flag: { width: 25, height: 15 },
  pronunciation: { fontSize: 16, fontWeight: "bold" },
  sectionTitle: { fontSize: 16, fontWeight: "bold", marginTop: 10 },
  definition: { fontSize: 14, color: "#555", marginBottom: 10 },
  translation: { fontSize: 14, color: "#333" },
  examples: { fontSize: 14, color: "#555", marginTop: 5 },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB"
  },
  navItem: { alignItems: "center", justifyContent: "center" },
  navText: { fontSize: 12, color: "gray", marginTop: 4 },
});

export default WordDetailScreen;