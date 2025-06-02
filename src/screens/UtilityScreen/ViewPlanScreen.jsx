import React from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
// import {Ionicons} from '../../constants/Icon'; // Import Ionicons
import Colors from '../../constants/Colors'; // Your custom color file

const plansData = {
  jio: [
    {id: '1', amount: '199', description: '1.5GB/day, 28 Days'},
    {id: '2', amount: '399', description: '1.5GB/day, 56 Days'},
    {id: '3', amount: '666', description: '2GB/day, 84 Days'},
    {id: '4', amount: '999', description: '3GB/day, 84 Days'},
    {id: '5', amount: '1499', description: '2GB/day, 365 Days'},
  ],
  airtel: [
    {id: '6', amount: '209', description: '1GB/day, 28 Days'},
    {id: '7', amount: '449', description: '2GB/day, 56 Days'},
    {id: '8', amount: '799', description: '3GB/day, 84 Days'},
    {id: '9', amount: '1599', description: '2GB/day, 365 Days'},
  ],
  vi: [
    {id: '10', amount: '199', description: '1GB/day, 28 Days'},
    {id: '11', amount: '399', description: '2GB/day, 56 Days'},
    {id: '12', amount: '666', description: '2GB/day, 84 Days'},
    {id: '13', amount: '999', description: '3GB/day, 84 Days'},
    {id: '14', amount: '1799', description: '2GB/day, 365 Days'},
  ],
  bsnl: [
    {id: '15', amount: '97', description: '2GB/day, 18 Days'},
    {id: '16', amount: '365', description: '2GB/day, 60 Days'},
    {id: '17', amount: '666', description: '3GB/day, 84 Days'},
    {id: '18', amount: '999', description: '2GB/day, 180 Days'},
    {id: '19', amount: '1499', description: '3GB/day, 365 Days'},
  ],
};

const ViewPlans = ({route, navigation}) => {
  const {operator, mobile} = route.params;
  const plans = plansData[operator] || [];

  const handleSelectPlan = plan => {
    navigation.navigate('MobileRecharge', {
      selectedAmount: plan.amount,
      mobile,
      operator,
    });
  };

  return (
    <View style={styles.container}>
      {/* Custom Back Button */}
      {/* <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color={Colors.primary} />
      </TouchableOpacity> */}

      {/* Header */}
      <Text style={styles.header}>All {operator.toUpperCase()} Plans</Text>

      <FlatList
        data={plans}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.planItem}
            onPress={() => handleSelectPlan(item)}>
            <Text style={styles.amount}>₹{item.amount}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ViewPlans;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20, // Adjusted top padding for better layout
    backgroundColor: '#f0f4f8',
  },
  backButton: {
    position: 'absolute',
    top: 10, // Positioned closer to the top
    left: 15,
    zIndex: 10,
    padding: 5,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Colors.primary,
    textAlign: 'center',
    marginTop: 40, // Added top margin to give space for the back button
  },
  planItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  description: {
    fontSize: 14,
    marginTop: 5,
    color: '#555',
  },
});
