// screens/ContactListScreen.js
import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

const ContactListScreen = ({route, navigation}) => {
  const {contacts, onSelect} = route.params;

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.contactItem}
      onPress={() => {
        onSelect(item);
        navigation.goBack();
      }}>
      <Text style={styles.name}>{item.displayName}</Text>
      <Text style={styles.number}>
        {item.phoneNumbers[0]?.number || 'No Number'}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={item => item.recordID}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10},
  contactItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  name: {fontSize: 16, fontWeight: '600'},
  number: {fontSize: 14, color: '#555'},
});

export default ContactListScreen;
