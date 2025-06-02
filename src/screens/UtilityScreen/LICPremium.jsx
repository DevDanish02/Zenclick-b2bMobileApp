import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ToastAndroid,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Ionicons, FontAwesome5, FontAwesome} from '../../constants/Icon'; // Use FontAwesome from constants
import Colors from '../../constants/Colors';

const LICPremium = ({navigation}) => {
  const [policyNumber, setPolicyNumber] = useState('');
  const [premiumAmount, setPremiumAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePayment = () => {
    if (!policyNumber || !premiumAmount) {
      ToastAndroid.show('Please fill in all fields!', ToastAndroid.SHORT);
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
            {/* Replace with FontAwesome icon */}
          </TouchableOpacity>
          <Text style={styles.headerTitle}>LIC Premium Payment</Text>
        </View>

        {/* Form Card */}
        <View style={styles.formCard}>
          {/* Policy Number */}
          <Text style={styles.label}>Policy Number</Text>
          <View style={styles.inputContainer}>
            <FontAwesome
              name="file-text"
              size={20}
              color={Colors.primary}
              style={styles.inputIcon} // Replace Ionicons with FontAwesome
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Policy Number"
              placeholderTextColor="#999"
              value={policyNumber}
              onChangeText={setPolicyNumber}
              keyboardType="numeric"
            />
          </View>

          {/* Premium Amount */}
          <Text style={styles.label}>Premium Amount</Text>
          <View style={styles.inputContainer}>
            <FontAwesome5
              name="wallet"
              size={20}
              color={Colors.primary}
              style={styles.inputIcon} // Replace Ionicons with FontAwesome
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Premium Amount"
              placeholderTextColor="#999"
              value={premiumAmount}
              onChangeText={setPremiumAmount}
              keyboardType="numeric"
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

export default LICPremium;

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
