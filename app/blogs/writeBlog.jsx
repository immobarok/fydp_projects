// filepath: /f:/Lingua_project/Lingualearner/app/blogs/writeBlog.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import ProfileScreen from './../screen/profileScreen';

const WriteBlog = () => {
  const [postText, setPostText] = useState('');
  const [postImage, setPostImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setPostImage(result.assets[0].uri);
    }
  };

  const handlePost = () => {
    console.log('Post Created:', postText, postImage);
  };

  const navigateToProfile = () => {
    router.push('../screen/profileScreen'); // Ensure this route is defined in your routing setup
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Post</Text>
        <TouchableOpacity onPress={navigateToProfile}>
          <Ionicons name="person" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder="What's on your mind?"
        multiline
        value={postText}
        onChangeText={setPostText}
      />
      {postImage && <Image source={{ uri: postImage }} style={styles.image} />}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton} onPress={pickImage}>
          <FontAwesome name="image" size={24} color="gray" />
          <Text style={styles.actionText}>Photo</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.postButton} onPress={handlePost}>
        <Text style={styles.postButtonText}>Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginVertical: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    marginLeft: 5,
    fontSize: 16,
    color: 'gray',
  },
  postButton: {
    backgroundColor: '#1877F2',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  postButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WriteBlog;