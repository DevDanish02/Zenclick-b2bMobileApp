import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../constants/Colors';

const AddMoney = ({navigation}) => {
  const [upiId, setUpiId] = useState('');
  const [amount, setAmount] = useState(0);

  const handleAddMoney = () => {
    if (amount > 0 && upiId.trim()) {
      console.log('Addmoney', amount);
      // Navigate back to HomeScreen with the updated wallet amount
      navigation.navigate('Main', {
        walletAmount: amount, // Passing the updated amount back
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Money to Wallet</Text>
      <Text style={styles.subHeading}>Enter your UPI ID</Text>

      <TextInput
        value={upiId}
        onChangeText={setUpiId}
        style={styles.input}
        placeholder="Your UPI ID"
        placeholderTextColor={Colors.white}
      />

      <TextInput
        value={amount.toString()}
        onChangeText={text => setAmount(Number(text))}
        style={styles.input}
        placeholder="Amount"
        placeholderTextColor={Colors.white}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleAddMoney}>
        <Text style={styles.buttonText}>Add Money</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddMoney;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 16,
    color: Colors.white,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 12,
    backgroundColor: Colors.white,
    borderRadius: 8,
    fontSize: 16,
    color: Colors.primary,
    marginBottom: 20,
  },
  button: {
    backgroundColor: Colors.white,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 18,
    color: Colors.primary,
    fontWeight: 'bold',
  },
});
