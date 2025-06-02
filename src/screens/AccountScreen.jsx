import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Ionicons} from '../constants/Icon'; // use vector-icons wrapper
import Colors from '../constants/Colors'; // primary color constant

const AccountScreen = () => {
  const user = {
    name: 'Mohd Danish',
    email: 'md0307121@gmail.com',
    phone: '+91 8864836105',
    profileImage: 'https://i.pravatar.cc/150?img=3', // Replace with your URI or local image
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Image */}
      <View style={styles.profileContainer}>
        <Image source={{uri: user.profileImage}} style={styles.profileImage} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.phone}>{user.phone}</Text>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Account Options */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option}>
          <Ionicons name="settings-outline" size={22} color={Colors.primary} />
          <Text style={styles.optionText}>Account Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons
            name="shield-checkmark-outline"
            size={22}
            color={Colors.primary}
          />
          <Text style={styles.optionText}>Privacy & Security</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons
            name="notifications-outline"
            size={22}
            color={Colors.primary}
          />
          <Text style={styles.optionText}>Notification Preferences</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons
            name="help-circle-outline"
            size={22}
            color={Colors.primary}
          />
          <Text style={styles.optionText}>Help & Support</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  phone: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 10,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: '500',
  },
  optionsContainer: {
    marginTop: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 1,
  },
  optionText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
  },
});

export default AccountScreen;
