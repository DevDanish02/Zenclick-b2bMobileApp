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
import {Ionicons, FontAwesome5} from '../../constants/Icon'; // Icon constants
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../constants/Colors'; // Your colors file

const RenewPolicy = ({navigation}) => {
  const [policyNumber, setPolicyNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [renewalDate, setRenewalDate] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRenewal = () => {
    if (!policyNumber || !amount || !renewalDate) {
      ToastAndroid.show('Please fill all fields!', ToastAndroid.SHORT);
      return;
    }
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      ToastAndroid.show('Policy Renewed Successfully!', ToastAndroid.SHORT);
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
        {/* Header */}
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={26} color={Colors.primary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Renew Policy</Text>
        </View>

        {/* Form Card */}
        <View style={styles.formCard}>
          {/* Policy Number */}
          <Text style={styles.label}>Policy Number</Text>
          <View style={styles.inputContainer}>
            <Ionicons
              name="document-text"
              size={20}
              color={Colors.primary}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Policy Number"
              placeholderTextColor="#999"
              value={policyNumber}
              onChangeText={setPolicyNumber}
            />
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
              placeholder="Enter Amount"
              placeholderTextColor="#999"
              keyboardType="numeric"
              value={amount}
              onChangeText={setAmount}
            />
          </View>

          {/* Renewal Date */}
          <Text style={styles.label}>Renewal Date</Text>
          <View style={styles.inputContainer}>
            <Ionicons
              name="calendar"
              size={20}
              color={Colors.primary}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Renewal Date (DD/MM/YYYY)"
              placeholderTextColor="#999"
              value={renewalDate}
              onChangeText={setRenewalDate}
            />
          </View>

          {/* Renew Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={handleRenewal}
            disabled={loading}>
            {loading ? (
              <ActivityIndicator color={Colors.white} />
            ) : (
              <Text style={styles.buttonText}>Renew Policy</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default RenewPolicy;

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
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
