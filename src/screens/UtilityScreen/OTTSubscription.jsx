import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Ionicons} from '../../constants/Icon'; // <-- Added import for Ionicons
import Colors from '../../constants/Colors'; // Assuming Colors.js file for managing colors

const OTTSubscription = ({navigation}) => {
  const platforms = [
    'Netflix',
    'Amazon Prime',
    'Disney+ Hotstar',
    'Sony Liv',
    'Zee5',
  ];

  const handleSubscribe = platform => {
    // Logic to handle subscription (showing a simple loading spinner for now)
    console.log(`Subscribing to ${platform}`);
  };

  return (
    <LinearGradient
      colors={['#dbeafe', '#fff']}
      style={{flex: 1}}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header with Back Button */}
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={Colors.primary} />
          </TouchableOpacity>
          <Text style={styles.header}>OTT Subscription</Text>
        </View>

        {/* Platforms List */}
        {platforms.map((platform, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.platformName}>{platform}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSubscribe(platform)}>
              <Text style={styles.buttonText}>Subscribe</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

export default OTTSubscription;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10,
    color: '#111',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  platformName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  button: {
    backgroundColor: Colors.primary, // Use primary color from Colors.js
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
