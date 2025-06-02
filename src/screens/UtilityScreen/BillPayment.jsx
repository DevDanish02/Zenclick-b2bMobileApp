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
import {Ionicons, FontAwesome5} from '../../constants/Icon';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../constants/Colors';

const BillPaymentScreen = ({navigation}) => {
  const [consumerNumber, setConsumerNumber] = useState('');
  const [billType, setBillType] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePayment = () => {
    if (!consumerNumber || !billType || !amount) {
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
          <Text style={styles.headerTitle}>Bill Payment</Text>
        </View>

        {/* Form Card */}
        <View style={styles.formCard}>
          {/* Consumer Number */}
          <Text style={styles.label}>Consumer Number</Text>
          <View style={styles.inputContainer}>
            <Ionicons
              name="person"
              size={20}
              color={Colors.primary}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              placeholder="Enter Consumer Number"
              placeholderTextColor="#999"
              value={consumerNumber}
              onChangeText={setConsumerNumber}
            />
          </View>

          {/* Bill Type */}
          <Text style={styles.label}>Select Bill Type</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={billType}
              onValueChange={itemValue => setBillType(itemValue)}
              style={{color: billType ? '#000' : '#999'}}>
              <Picker.Item label="Select Bill Type" value="" />
              <Picker.Item label="Electricity" value="electricity" />
              <Picker.Item label="Water" value="water" />
              <Picker.Item label="Gas" value="gas" />
              <Picker.Item label="Broadband" value="broadband" />
              <Picker.Item label="Mobile" value="mobile" />
            </Picker>
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
              placeholder="Enter Amount"
              placeholderTextColor="#999"
              value={amount}
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
              <Text style={styles.buttonText}>Pay Bill Now</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default BillPaymentScreen;

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
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#f7f7f7',
    marginBottom: 20,
    overflow: 'hidden',
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
