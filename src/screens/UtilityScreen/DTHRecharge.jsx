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

const DTHRechargeScreen = ({navigation}) => {
  const [customerId, setCustomerId] = useState('');
  const [operator, setOperator] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRecharge = () => {
    if (!customerId || !operator || !amount) {
      ToastAndroid.show('Please fill all fields!', ToastAndroid.SHORT);
      return;
    }
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      ToastAndroid.show('Recharge Successful!', ToastAndroid.SHORT);
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
          <Text style={styles.headerTitle}>DTH Recharge</Text>
        </View>

        {/* Form Card */}
        <View style={styles.formCard}>
          {/* Customer ID */}
          <Text style={styles.label}>Customer ID</Text>
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
              placeholder="Enter Customer ID"
              placeholderTextColor="#999"
              value={customerId}
              onChangeText={setCustomerId}
            />
          </View>

          {/* Operator Picker */}
          <Text style={styles.label}>Select Operator</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={operator}
              onValueChange={itemValue => setOperator(itemValue)}
              style={{color: operator ? '#000' : '#999'}}>
              <Picker.Item label="Select Operator" value="" />
              <Picker.Item label="Tata Sky" value="tatasky" />
              <Picker.Item label="Dish TV" value="dishtv" />
              <Picker.Item label="Airtel Digital TV" value="airteldigital" />
              <Picker.Item label="Videocon d2h" value="videocon" />
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
            onPress={handleRecharge}
            disabled={loading}>
            {loading ? (
              <ActivityIndicator color={Colors.white} />
            ) : (
              <Text style={styles.buttonText}>Recharge Now</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default DTHRechargeScreen;

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
