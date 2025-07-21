import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Colors from '../../constants/Colors';
import {FontAwesome} from '../../constants/Icon';
import {useNavigation} from '@react-navigation/native';

// Sample data simulating home screen items
const allServices = [
  {name: 'Mobile Recharge', screen: 'MobileRecharge'},
  {name: 'DTH Recharge', screen: 'DTHRecharge'},
  {name: 'Electricity Bill', screen: 'ElectricityBill'},
  {name: 'Gas Booking', screen: 'GasBooking'},
  {name: 'Water Bill', screen: 'WaterBill'},
  {name: 'FASTag Recharge', screen: 'FastagRecharge'},
  {name: 'Loan EMI', screen: 'LoanEMI'},
  {name: 'Broadband Bill', screen: 'BroadbandBill'},
  {name: 'Insurance Premium', screen: 'InsurancePremium'},
  {name: 'Money Transfer', screen: 'MoneyTransfer'},
  {name: 'Flight Booking', screen: 'FlightBooking'},
  {name: 'Train Booking', screen: 'TrainBooking'},
];

const SearchScreen = () => {
  const navigation = useNavigation();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = text => {
    setQuery(text);
    const filtered = allServices.filter(service =>
      service.name.toLowerCase().includes(text.toLowerCase()),
    );
    setResults(filtered);
  };

  const handlePress = screen => {
    navigation.navigate(screen);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => handlePress(item.screen)}>
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome name="arrow-left" size={20} color={Colors.primary} />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Search for services"
            value={query}
            onChangeText={handleSearch}
            placeholderTextColor="#aaa"
          />
        </View>

        {query.length > 0 ? (
          results.length > 0 ? (
            <FlatList
              data={results}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
            />
          ) : (
            <Text style={styles.noResultText}>No results found.</Text>
          )
        ) : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    height: 40,
    color: Colors.black,
  },
  itemContainer: {
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
    color: Colors.black,
  },
  noResultText: {
    textAlign: 'center',
    color: Colors.gray,
    marginTop: 20,
  },
});

export default SearchScreen;
