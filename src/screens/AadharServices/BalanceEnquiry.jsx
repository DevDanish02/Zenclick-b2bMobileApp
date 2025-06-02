// screens/BalanceEnquiry.js

import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Ionicons} from '../../constants/Icon';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../constants/Colors';

const BalanceEnquiry = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#dbeafe', '#fff']}
      style={styles.gradient}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={Colors.primary} />
          </TouchableOpacity>
          <Text style={styles.header}>Balance Enquiry</Text>
        </View>

        {/* Balance Enquiry Section */}
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceTitle}>Current Balance</Text>
          <Text style={styles.balanceAmount}>₹10,000.00</Text>
          <Text style={styles.balanceDescription}>
            Available for withdrawal
          </Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Download Statement</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Check Other Accounts</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default BalanceEnquiry;

const styles = StyleSheet.create({
  gradient: {flex: 1},
  container: {flex: 1, padding: 20},
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  balanceContainer: {
    backgroundColor: '#4CAF50',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 30,
  },
  balanceTitle: {
    fontSize: 18,
    color: '#fff',
  },
  balanceAmount: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  balanceDescription: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  actionButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginTop: 10,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
