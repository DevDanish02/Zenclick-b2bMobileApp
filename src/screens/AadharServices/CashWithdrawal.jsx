import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Ionicons} from '../../constants/Icon'; // Assuming you have Ionicons in your Icon file
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../constants/Colors'; // Assuming you have Colors defined

const CashWithdrawal = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#dbeafe', '#fff']}
      style={{flex: 1}}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={Colors.primary} />
          </TouchableOpacity>
          <Text style={styles.header}>Cash Withdrawal</Text>
        </View>

        {/* Balance Info */}
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceLabel}>Available Cash</Text>
          <Text style={styles.balanceAmount}>₹50,000.00</Text>
        </View>

        {/* Withdrawal History */}
        <View style={styles.transactionContainer}>
          <Text style={styles.transactionTitle}>Withdrawal History</Text>

          <View style={styles.transaction}>
            <Text style={styles.transactionDescription}>Withdrawal at ATM</Text>
            <Text style={styles.transactionAmount}>- ₹5,000</Text>
          </View>
          <View style={styles.transaction}>
            <Text style={styles.transactionDescription}>Cash Pickup</Text>
            <Text style={styles.transactionAmount}>- ₹10,000</Text>
          </View>
          <View style={styles.transaction}>
            <Text style={styles.transactionDescription}>Branch Withdrawal</Text>
            <Text style={styles.transactionAmount}>- ₹2,500</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Withdraw Cash</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Request Pickup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default CashWithdrawal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginLeft: 10,
  },
  balanceContainer: {
    backgroundColor: '#4CAF50',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 30,
  },
  balanceLabel: {
    fontSize: 18,
    color: '#fff',
  },
  balanceAmount: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  transactionContainer: {
    marginBottom: 40,
  },
  transactionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  transactionDescription: {
    fontSize: 16,
    color: '#555',
  },
  transactionAmount: {
    fontSize: 16,
    color: Colors.primary,
    fontWeight: 'bold',
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
