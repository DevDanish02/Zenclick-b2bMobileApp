import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
  Alert,
  PermissionsAndroid,
  Platform,
  ActivityIndicator,
} from 'react-native';
import Contacts from 'react-native-contacts';
import LinearGradient from 'react-native-linear-gradient';
import {Ionicons, FontAwesome5} from '../../constants/Icon';
import Picker from 'react-native-picker-select';
import Colors from '../../constants/Colors';

const MobileRechargeScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [billerList, setBillerList] = useState([]);
  const [selectedBiller, setSelectedBiller] = useState(null);
  const [mobileNumber, setMobileNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchBillerData();
    ReadContacts();
  }, []);

  const ReadContacts = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    })
      .then(res => {
        if (res === 'granted') {
          Contacts.getAll()
            .then(contacts => {
              // work with contacts
              console.log(contacts);
            })
            .catch(e => {
              console.log(e);
            });
        }
      })
      .catch(error => console.log(error));
  };

  const fetchBillerData = async () => {
    try {
      setLoading(true);
      const records = []; // Replace with real API
      if (records.length > 0) {
        setBillerList(
          records.map(biller => ({
            label: biller.billerName,
            value: biller.billerId,
          })),
        );
      } else {
        setBillerList([
          {label: 'Airtel', value: 'AIRTEL01'},
          {label: 'Jio', value: 'JIO01'},
          {label: 'Vi', value: 'VI01'},
        ]);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch biller list');
    } finally {
      setLoading(false);
    }
  };

  const handleRechargeClick = () => {
    if (!selectedBiller || !mobileNumber || !amount) {
      Alert.alert('Validation', 'Please fill all the fields.');
      return;
    }

    if (!/^\d{10}$/.test(mobileNumber)) {
      Alert.alert('Validation', 'Please enter a valid 10-digit mobile number.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Recharge Preview', 'Recharge API is disabled. UI only.');
    }, 1500);
  };

  return (
    <LinearGradient colors={['#dbeafe', '#fff']} style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={26} color={Colors.primary} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Mobile Recharge</Text>
          </View>

          {loading ? (
            <ActivityIndicator size="large" color={Colors.primary} />
          ) : (
            <View style={styles.formCard}>
              <Text style={styles.title}>Mobile Number</Text>
              <View style={styles.inputContainer}>
                <Ionicons
                  name="call"
                  size={20}
                  color={Colors.primary}
                  style={styles.inputIcon}
                />
                <TextInput
                  placeholder="Enter Mobile Number"
                  keyboardType="phone-pad"
                  style={styles.input}
                  value={mobileNumber}
                  onChangeText={setMobileNumber}
                  maxLength={10}
                />
                <TouchableOpacity>
                  {/* onPress={handleSelectContact} */}
                  <FontAwesome5
                    name="address-book"
                    size={22}
                    color={Colors.primary}
                    style={{marginLeft: 10}}
                  />
                </TouchableOpacity>
              </View>

              <Text style={styles.title}>Select Operator</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  onValueChange={value => setSelectedBiller(value)}
                  items={billerList}
                  placeholder={{label: 'Select a biller...', value: null}}
                  style={{
                    inputIOS: {padding: 12, color: '#000'},
                    inputAndroid: {padding: 12, color: '#000'},
                  }}
                  value={selectedBiller}
                />
              </View>

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
                  value={amount}
                  onChangeText={setAmount}
                />
              </View>

              <TouchableOpacity
                style={styles.rechargeButton}
                onPress={handleRechargeClick}
                disabled={loading}>
                <Text style={styles.rechargeText}>Recharge Now</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollContainer: {
    paddingBottom: 40,
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
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
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
  rechargeButton: {
    marginTop: 10,
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
  },
  rechargeText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default MobileRechargeScreen;
