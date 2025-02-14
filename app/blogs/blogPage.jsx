import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";

const BlogCard = ({ title, description, imageUrl, tags = [] }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.metaData}>
        <Text style={styles.metaText}>OdooBot — April 2019 — 1 view</Text>
        <Text style={styles.tags}>{tags.join(" ")}</Text>
      </View>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.socialIcons}>
        <FontAwesome name="twitter" size={20} color="gray" style={styles.icon} />
        <FontAwesome name="facebook" size={20} color="gray" style={styles.icon} />
        <FontAwesome name="linkedin" size={20} color="gray" style={styles.icon} />
        <FontAwesome name="google" size={20} color="gray" style={styles.icon} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Read more</Text>
      </TouchableOpacity>
    </View>
  );
};

const BlogPage = () => {
  const navigation = useNavigation();

  const posts = [
    {
      id: 1,
      title: "First Post",
      description: "This is the description of the first post.",
      imageUrl: "https://via.placeholder.com/150",
      tags: ["#tag1", "#tag2"],
    },
    {
      id: 2,
      title: "Second Post",
      description: "This is the description of the second post.",
      imageUrl: "https://via.placeholder.com/150",
      tags: ["#tag3", "#tag4"],
    },
    // Add more posts as needed
  ];

  const handleCreatePost = () => {
    router.push("/blogs/writeBlog");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.pageTitle}>Blog Page</Text>
      </View>

      <TouchableOpacity style={styles.createPostButton} onPress={handleCreatePost}>
        <Text style={styles.createPostButtonText}>Make a Post</Text>
      </TouchableOpacity>

      {posts.map((post) => (
        <BlogCard
          key={post.id}
          title={post.title}
          description={post.description}
          imageUrl={post.imageUrl}
          tags={post.tags}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 16,
  },
  createPostButton: {
    backgroundColor: "#4F46E5",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  createPostButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "gray",
  },
  metaData: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  metaText: {
    fontSize: 12,
    color: "gray",
  },
  tags: {
    fontSize: 12,
    color: "blue",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginVertical: 10,
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 8,
  },
  icon: {
    marginRight: 10,
  },
  button: {
    backgroundColor: "#00AEEF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default BlogPage;