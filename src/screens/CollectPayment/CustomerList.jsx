import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Ionicons, MaterialIcons} from '../../constants/Icon'; // Update path if needed
import Colors from '../../constants/Colors'; // Your color constants

// Sample customer data
const customers = [
  {id: '1', name: 'John Doe'},
  {id: '2', name: 'Jane Smith'},
  {id: '3', name: 'Robert Johnson'},
  {id: '4', name: 'Emily Davis'},
  {id: '5', name: 'Michael Brown'},
];

const CustomerList = ({navigation}) => {
  const renderItem = ({item}) => (
    <View style={styles.customerItem}>
      <MaterialIcons name="person" size={24} color={Colors.primary} />
      <Text style={styles.customerName}>{item.name}</Text>
    </View>
  );

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
          <Text style={styles.headerTitle}>Customer List</Text>
        </View>

        {/* Customer List */}
        <View style={styles.listCard}>
          <FlatList
            scrollEnabled={false}
            data={customers}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default CustomerList;

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
  listCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  customerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  customerName: {
    fontSize: 18,
    color: '#333',
    marginLeft: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginHorizontal: 10,
  },
});
