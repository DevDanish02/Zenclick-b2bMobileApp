import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors'; // use your existing Colors file

const DashboardScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <Text style={styles.welcomeText}>Welcome Back 👋</Text>
      <Text style={styles.subText}>Here’s your dashboard summary</Text>

      {/* Summary Cards */}
      <View style={styles.cardRow}>
        <View style={styles.card}>
          <Ionicons name="wallet" size={30} color="#fff" />
          <Text style={styles.cardTitle}>Balance</Text>
          <Text style={styles.cardValue}>₹12,500</Text>
        </View>
        <View style={styles.card}>
          <Ionicons name="swap-horizontal" size={30} color="#fff" />
          <Text style={styles.cardTitle}>Transactions</Text>
          <Text style={styles.cardValue}>56</Text>
        </View>
      </View>

      {/* Quick Actions */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.grid}>
        <TouchableOpacity style={styles.actionBox}>
          <Ionicons name="send" size={24} color={Colors.primary} />
          <Text style={styles.actionText}>Send Money</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBox}>
          <Ionicons name="download" size={24} color={Colors.primary} />
          <Text style={styles.actionText}>Receive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBox}>
          <Ionicons name="card" size={24} color={Colors.primary} />
          <Text style={styles.actionText}>Recharge</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBox}>
          <Ionicons name="document-text" size={24} color={Colors.primary} />
          <Text style={styles.actionText}>Reports</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subText: {
    fontSize: 14,
    color: '#777',
    marginBottom: 20,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  card: {
    flex: 1,
    backgroundColor: Colors.primary,
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  cardTitle: {
    color: '#fff',
    marginTop: 10,
    fontSize: 14,
  },
  cardValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionBox: {
    width: '47%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 2, // for Android shadow
  },
  actionText: {
    marginTop: 8,
    fontSize: 14,
    color: '#333',
  },
});
