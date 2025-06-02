// screens/MiniStatement.js
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Ionicons} from '../../constants/Icon';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../constants/Colors';

const MiniStatement = ({navigation}) => {
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
          <Text style={styles.header}>Mini Statement</Text>
        </View>

        {/* Transactions List */}
        <ScrollView contentContainerStyle={styles.transactionContainer}>
          <Text style={styles.transactionTitle}>Last 5 Transactions</Text>

          {[
            {desc: 'Payment to ABC Corp', amt: '- ₹1,000'},
            {desc: 'Deposit from XYZ Bank', amt: '+ ₹2,500'},
            {desc: 'ATM Withdrawal', amt: '- ₹500'},
            {desc: 'Online Purchase', amt: '- ₹1,200'},
            {desc: 'Salary Credit', amt: '+ ₹50,000'},
          ].map((tx, i) => (
            <View key={i} style={styles.transaction}>
              <Text style={styles.transactionDescription}>{tx.desc}</Text>
              <Text style={styles.transactionAmount}>{tx.amt}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default MiniStatement;

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
  transactionContainer: {
    paddingBottom: 20,
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
    paddingVertical: 12,
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
});
