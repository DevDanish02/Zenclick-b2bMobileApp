import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Ionicons, FontAwesome5} from '../../constants/Icon'; // Import custom icons
import LinearGradient from 'react-native-linear-gradient'; // <-- install if needed
import Colors from '../../constants/Colors'; // Import your color constants

const CreditCardPaymentScreen = ({navigation}) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePayment = () => {
    if (!cardNumber || !expiryDate || !cvv || !amount) {
      ToastAndroid.show('Please fill all fields!', ToastAndroid.SHORT);
      return;
    }
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      ToastAndroid.show('Payment Successful!', ToastAndroid.SHORT);
      navigation.goBack();
    }, 2000);
  };

  return (
    <LinearGradient
      colors={['#dbeafe', '#fff']}
      style={{flex: 1}}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header with Back */}
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={26} color={Colors.primary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Credit Card Payment</Text>
        </View>

        {/* Form Card */}
        <View style={styles.formCard}>
          {/* Card Number */}
          <Text style={styles.label}>Card Number</Text>
          <View style={styles.inputContainer}>
            <FontAwesome5
              name="credit-card"
              size={20}
              color={Colors.primary}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              maxLength={16}
              value={cardNumber}
              placeholder="Enter card number"
              placeholderTextColor="#999"
              onChangeText={setCardNumber}
            />
          </View>

          {/* Expiry Date and CVV */}
          <View style={styles.row}>
            <View style={styles.halfWidth}>
              <Text style={styles.label}>Expiry Date</Text>
              <View style={styles.inputContainer}>
                <Ionicons
                  name="calendar"
                  size={20}
                  color={Colors.primary}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  keyboardType="number-pad"
                  maxLength={5}
                  value={expiryDate}
                  placeholder="MM/YY"
                  placeholderTextColor="#999"
                  onChangeText={setExpiryDate}
                />
              </View>
            </View>

            <View style={styles.halfWidth}>
              <Text style={styles.label}>CVV</Text>
              <View style={styles.inputContainer}>
                <Ionicons
                  name="lock-closed"
                  size={20}
                  color={Colors.primary}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  keyboardType="number-pad"
                  maxLength={3}
                  value={cvv}
                  placeholder="CVV"
                  placeholderTextColor="#999"
                  onChangeText={setCvv}
                />
              </View>
            </View>
          </View>

          {/* Amount */}
          <Text style={styles.label}>Amount</Text>
          <View style={styles.inputContainer}>
            <FontAwesome5
              name="money-bill-wave"
              size={20}
              color={Colors.primary}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={amount}
              placeholder="Enter Amount"
              placeholderTextColor="#999"
              onChangeText={setAmount}
            />
          </View>

          {/* Pay Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={handlePayment}
            disabled={loading}>
            {loading ? (
              <ActivityIndicator color={Colors.white} />
            ) : (
              <Text style={styles.buttonText}>Pay Now</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default CreditCardPaymentScreen;

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
  formCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#f7f7f7',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidth: {
    width: '48%',
  },
  button: {
    backgroundColor: Colors.primary, // Use primary color from Colors.js
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: Colors.white, // Use white color from Colors.js
    fontSize: 18,
    fontWeight: 'bold',
  },
});
