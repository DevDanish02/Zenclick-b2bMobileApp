// src/screens/SettingsScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {Ionicons} from '../constants/Icon';
import {useNavigation} from '@react-navigation/native';
import Colors from '../constants/Colors';

const settingsOptions = [
  {label: 'Account', icon: 'person-outline'},
  {label: 'Notifications', icon: 'notifications-outline'},
  {label: 'Privacy', icon: 'lock-closed-outline'},
  {label: 'Language', icon: 'language-outline'},
  {label: 'Help & Support', icon: 'help-circle-outline'},
  {label: 'Logout', icon: 'log-out-outline'},
];

const SettingsScreen = () => {
  const navigation = useNavigation();

  const handleOptionPress = label => {
    switch (label) {
      case 'Account':
        navigation.navigate('AccountScreen');
        break;
      case 'Notifications':
        navigation.navigate('NotificationsScreen');
        break;
      case 'Privacy':
        navigation.navigate('PrivacyScreen');
        break;
      case 'Language':
        navigation.navigate('LanguageScreen');
        break;
      case 'Help & Support':
        navigation.navigate('HelpSupportScreen');
        break;
      case 'Logout':
        Alert.alert(
          'Logout',
          'Are you sure you want to log out?',
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'Yes',
              onPress: () =>
                navigation.reset({
                  index: 0,
                  routes: [{name: 'Login'}],
                }),
            },
          ],
          {cancelable: true},
        );
        break;
      default:
        break;
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Settings</Text>
      </View>

      {/* Options List */}
      {settingsOptions.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.option}
          onPress={() => handleOptionPress(item.label)}>
          <View style={styles.iconContainer}>
            <Ionicons name={item.icon} size={22} color={Colors.primary} />
          </View>
          <Text style={styles.optionText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    elevation: 1,
  },
  iconContainer: {
    marginRight: 15,
  },
  optionText: {
    fontSize: 16,
  },
});

export default SettingsScreen;
