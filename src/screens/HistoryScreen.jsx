import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-paper';
import {MaterialIcons} from '../constants/Icon';
import LinearGradient from 'react-native-linear-gradient';

const customerHistory = [
  {
    id: '1',
    date: '2025-04-27',
    description: 'Electricity Bill Paid - UPPCL',
    amount: '- ₹1200',
    status: 'Completed',
  },
  {
    id: '2',
    date: '2025-04-25',
    description: 'Mobile Recharge - Airtel ₹299',
    amount: '- ₹299',
    status: 'Completed',
  },
  {
    id: '3',
    date: '2025-04-24',
    description: 'Water Bill Paid - Jal Board',
    amount: '- ₹350',
    status: 'Completed',
  },
  {
    id: '4',
    date: '2025-04-23',
    description: 'DTH Recharge - Tata Sky ₹450',
    amount: '- ₹450',
    status: 'Completed',
  },
  {
    id: '5',
    date: '2025-04-22',
    description: 'Gas Bill Payment - Indane',
    amount: '- ₹780',
    status: 'Completed',
  },
  {
    id: '6',
    date: '2025-04-21',
    description: 'Loan EMI Paid - HDFC Personal Loan',
    amount: '- ₹2500',
    status: 'Completed',
  },
  {
    id: '7',
    date: '2025-04-20',
    description: 'Payment Received from Ramesh',
    amount: '+ ₹5000',
    status: 'Received',
  },
  {
    id: '8',
    date: '2025-04-19',
    description: 'Mobile Recharge - Jio ₹239',
    amount: '- ₹239',
    status: 'Completed',
  },
  {
    id: '9',
    date: '2025-04-18',
    description: 'Bank Transfer to ICICI',
    amount: '- ₹1000',
    status: 'Completed',
  },
  {
    id: '10',
    date: '2025-04-17',
    description: 'Mobile Recharge - VI ₹199',
    amount: '- ₹199',
    status: 'Completed',
  },
  {
    id: '11',
    date: '2025-04-16',
    description: 'Electricity Bill Paid - BESCOM',
    amount: '- ₹980',
    status: 'Completed',
  },
  {
    id: '12',
    date: '2025-04-15',
    description: 'Payment Received from Priya',
    amount: '+ ₹3000',
    status: 'Received',
  },
  {
    id: '13',
    date: '2025-04-14',
    description: 'Mobile Recharge - BSNL ₹147',
    amount: '- ₹147',
    status: 'Completed',
  },
  {
    id: '14',
    date: '2025-04-13',
    description: 'Gas Bill Payment - Bharat Gas',
    amount: '- ₹690',
    status: 'Completed',
  },
  {
    id: '15',
    date: '2025-04-12',
    description: 'Water Bill Paid - Jal Nigam',
    amount: '- ₹410',
    status: 'Completed',
  },
  {
    id: '16',
    date: '2025-04-11',
    description: 'Loan EMI Paid - SBI Car Loan',
    amount: '- ₹3500',
    status: 'Completed',
  },
  {
    id: '17',
    date: '2025-04-10',
    description: 'Bank Transfer to Axis Bank',
    amount: '- ₹2000',
    status: 'Completed',
  },
  {
    id: '18',
    date: '2025-04-09',
    description: 'DTH Recharge - Dish TV ₹320',
    amount: '- ₹320',
    status: 'Completed',
  },
  {
    id: '19',
    date: '2025-04-08',
    description: 'Mobile Recharge - Airtel ₹399',
    amount: '- ₹399',
    status: 'Completed',
  },
  {
    id: '20',
    date: '2025-04-07',
    description: 'Payment Received from Ankit',
    amount: '+ ₹2500',
    status: 'Received',
  },
  {
    id: '21',
    date: '2025-04-06',
    description: 'Mobile Recharge - Jio ₹666',
    amount: '- ₹666',
    status: 'Completed',
  },
  {
    id: '22',
    date: '2025-04-05',
    description: 'Bank Transfer to HDFC',
    amount: '- ₹1200',
    status: 'Completed',
  },
];

const CustomerHistoryScreen = ({navigation}) => {
  // Add navigation prop
  const [searchText, setSearchText] = useState('');
  const [expandedItem, setExpandedItem] = useState(null);

  const filteredData = customerHistory.filter(item =>
    item.description.toLowerCase().includes(searchText.toLowerCase()),
  );

  const getIconForDescription = description => {
    if (description.toLowerCase().includes('recharge')) {
      return 'phone-android';
    }
    if (description.toLowerCase().includes('bill')) {
      return 'receipt';
    }
    if (description.toLowerCase().includes('emi')) {
      return 'credit-card';
    }
    if (description.toLowerCase().includes('payment received')) {
      return 'payment';
    }
    return 'history';
  };

  const renderItem = ({item}) => (
    <Card style={styles.card}>
      <TouchableOpacity
        onPress={() =>
          setExpandedItem(expandedItem === item.id ? null : item.id)
        }>
        <View style={styles.cardContent}>
          <View style={styles.iconBox}>
            <MaterialIcons
              name={getIconForDescription(item.description)}
              size={24}
              color="#555"
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <Text
              style={[
                styles.amount,
                item.amount.startsWith('+') ? styles.credit : styles.debit,
              ]}>
              {item.amount}
            </Text>
            <Text style={styles.status}>{item.status}</Text>
          </View>
        </View>
      </TouchableOpacity>

      {expandedItem === item.id && (
        <View style={styles.expandedContent}>
          <Text style={styles.expandedText}>
            Full Details of {item.description}:
          </Text>
          <Text style={styles.expandedText}>Amount: {item.amount}</Text>
          <Text style={styles.expandedText}>Status: {item.status}</Text>
        </View>
      )}
    </Card>
  );

  return (
    <LinearGradient
      colors={['#dbeafe', '#fff']}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={{flex: 1}}>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backButton}>
                <MaterialIcons name="arrow-back" size={24} color="#111" />
              </TouchableOpacity>
              <Text style={styles.title}>Customer History</Text>
            </View>

            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Filter by description (e.g. Mobile Recharge)"
                placeholderTextColor="#777"
                value={searchText}
                onChangeText={setSearchText}
              />
              {searchText.length > 0 && (
                <TouchableOpacity onPress={() => setSearchText('')}>
                  <MaterialIcons
                    name="close"
                    size={20}
                    color="#555"
                    style={styles.clearIcon}
                  />
                </TouchableOpacity>
              )}
            </View>
          </>
        }
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingBottom: 20}}
        ListEmptyComponent={
          <Text style={styles.noData}>No matching records found.</Text>
        }
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#111',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    color: '#000',
  },
  clearIcon: {
    marginLeft: -20,
  },
  card: {
    marginBottom: 12,
    padding: 12,
    borderRadius: 12,
    elevation: 3,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    marginRight: 12,
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111',
  },
  date: {
    fontSize: 14,
    color: '#777',
  },
  amount: {
    fontSize: 16,
    fontWeight: '600',
  },
  credit: {
    color: 'green',
  },
  debit: {
    color: 'red',
  },
  status: {
    fontSize: 14,
    color: '#444',
  },
  expandedContent: {
    paddingVertical: 12,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    marginTop: 8,
  },
  expandedText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6,
  },
  noData: {
    textAlign: 'center',
    fontSize: 18,
    color: '#777',
    marginTop: 30,
  },
});

export default CustomerHistoryScreen;
