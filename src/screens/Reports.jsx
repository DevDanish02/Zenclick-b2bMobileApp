import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Entypo, MaterialIcons} from '../constants/Icon';

const HelpCenter = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Entypo name="cross" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Help & Support</Text>
        <View style={{width: 24}} />
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={require('../assets/images/ZenKlick.jpeg')} // Replace with your illustration
          style={styles.banner}
          resizeMode="contain"
        />

        <Text style={styles.subtitle}>How can we help you today?</Text>

        <View style={styles.card}>
          <MaterialIcons name="report-problem" size={24} color="#e60023" />
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>Report a Problem</Text>
            <Text style={styles.cardDesc}>Tell us what went wrong</Text>
          </View>
        </View>

        <View style={styles.card}>
          <MaterialIcons name="chat-bubble-outline" size={24} color="#007aff" />
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>Live Chat Support</Text>
            <Text style={styles.cardDesc}>Connect with our team instantly</Text>
          </View>
        </View>

        <View style={styles.card}>
          <MaterialIcons name="privacy-tip" size={24} color="#ff9500" />
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>Privacy & Policy</Text>
            <Text style={styles.cardDesc}>Know how we protect your data</Text>
          </View>
        </View>

        {/* Main Action */}
        <TouchableOpacity style={styles.mainBtn}>
          <Text style={styles.mainBtnText}>Start a New Complaint</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HelpCenter;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f5f5f5'},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    elevation: 4,
  },
  title: {fontSize: 18, fontWeight: '600'},
  content: {padding: 20},
  banner: {
    width: '100%',
    height: 160,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
  },
  cardText: {
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  cardDesc: {
    fontSize: 13,
    color: '#555',
  },
  mainBtn: {
    backgroundColor: '#e60023',
    padding: 14,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  mainBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
