import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Ionicons} from '../../constants/Icon'; // Make sure path is correct
import Colors from '../../constants/Colors'; // Your color constants

const BankStatement = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#dbeafe', '#fff']}
      style={{flex: 1}}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={26} color={Colors.primary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Bank Statement</Text>
        </View>

        {/* Transaction List Card */}
        <View style={styles.statementCard}>
          <View style={styles.transaction}>
            <Text style={styles.transactionText}>Transaction 1</Text>
            <Text style={styles.transactionAmount}>$100.00</Text>
          </View>

          <View style={styles.transaction}>
            <Text style={styles.transactionText}>Transaction 2</Text>
            <Text style={styles.transactionAmount}>$50.00</Text>
          </View>

          {/* Add more transactions if needed */}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default BankStatement;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#111',
  },
  statementCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f7f7f7',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  transactionText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  transactionAmount: {
    fontSize: 16,
    color: Colors.primary, // Highlighted with your app's primary color
    fontWeight: '600',
  },
});
