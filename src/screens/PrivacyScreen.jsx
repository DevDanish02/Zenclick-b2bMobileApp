import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Switch} from 'react-native';
import Colors from '../constants/Colors'; // your color theme

const PrivacyScreen = () => {
  const [isLocationEnabled, setIsLocationEnabled] = React.useState(false);
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = React.useState(true);

  const handleToggleLocation = () =>
    setIsLocationEnabled(previousState => !previousState);
  const handleToggleTwoFactor = () =>
    setIsTwoFactorEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Privacy Settings</Text>

      <View style={styles.section}>
        <Text style={styles.title}>Location Tracking</Text>
        <Text style={styles.description}>
          Enable or disable location tracking for personalized services.
        </Text>
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Location</Text>
          <Switch
            trackColor={{false: '#767577', true: Colors.primary}}
            thumbColor={isLocationEnabled ? Colors.primary : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={handleToggleLocation}
            value={isLocationEnabled}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Two-Factor Authentication</Text>
        <Text style={styles.description}>
          Add an extra layer of security to your account with two-factor
          authentication.
        </Text>
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Enable 2FA</Text>
          <Switch
            trackColor={{false: '#767577', true: Colors.primary}}
            thumbColor={isTwoFactorEnabled ? Colors.primary : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={handleToggleTwoFactor}
            value={isTwoFactorEnabled}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrivacyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F9F9F9',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  section: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switchLabel: {
    fontSize: 16,
    color: '#333',
  },
  saveButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
