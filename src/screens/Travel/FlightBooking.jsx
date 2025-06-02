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
import {Ionicons, FontAwesome5, MaterialIcons} from '../../constants/Icon';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../constants/Colors';

const FlightBooking = ({navigation}) => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [flightDate, setFlightDate] = useState('');
  const [passengers, setPassengers] = useState('');
  const [loading, setLoading] = useState(false);

  const handleBookFlight = () => {
    if (!departure || !destination || !flightDate || !passengers) {
      ToastAndroid.show('Please fill all fields!', ToastAndroid.SHORT);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      ToastAndroid.show('Flight booked successfully!', ToastAndroid.SHORT);
      navigation.goBack();
    }, 2000);
  };

  return (
    <LinearGradient
      colors={['#dbeafe', '#fff']}
      style={{flex: 1}}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={26} color={Colors.primary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Flight Booking</Text>
        </View>

        {/* Form Card */}
        <View style={styles.formCard}>
          {/* Departure */}
          <Text style={styles.label}>Departure City</Text>
          <View style={styles.inputContainer}>
            <FontAwesome5
              name="plane-departure"
              size={20}
              color={Colors.primary}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter departure city"
              placeholderTextColor="#999"
              value={departure}
              onChangeText={setDeparture}
            />
          </View>

          {/* Destination */}
          <Text style={styles.label}>Destination City</Text>
          <View style={styles.inputContainer}>
            <FontAwesome5
              name="plane-arrival"
              size={20}
              color={Colors.primary}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter destination city"
              placeholderTextColor="#999"
              value={destination}
              onChangeText={setDestination}
            />
          </View>

          {/* Flight Date */}
          <Text style={styles.label}>Flight Date</Text>
          <View style={styles.inputContainer}>
            <MaterialIcons
              name="date-range"
              size={20}
              color={Colors.primary}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter flight date (YYYY-MM-DD)"
              placeholderTextColor="#999"
              value={flightDate}
              onChangeText={setFlightDate}
            />
          </View>

          {/* Passengers */}
          <Text style={styles.label}>Passengers</Text>
          <View style={styles.inputContainer}>
            <Ionicons
              name="people"
              size={20}
              color={Colors.primary}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter number of passengers"
              placeholderTextColor="#999"
              keyboardType="numeric"
              value={passengers}
              onChangeText={setPassengers}
            />
          </View>

          {/* Book Flight Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={handleBookFlight}
            disabled={loading}>
            {loading ? (
              <ActivityIndicator color={Colors.white} />
            ) : (
              <Text style={styles.buttonText}>Book Flight</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default FlightBooking;

const styles = StyleSheet.create({
  scrollContainer: {
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
