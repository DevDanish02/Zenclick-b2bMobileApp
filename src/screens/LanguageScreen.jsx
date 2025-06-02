import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {Ionicons} from '../constants/Icon';
import Colors from '../constants/Colors';

const languages = [
  {code: 'en', label: 'English'},
  {code: 'hi', label: 'हिंदी'},
  {code: 'es', label: 'Español'},
  {code: 'fr', label: 'Français'},
  {code: 'de', label: 'Deutsch'},
  {code: 'zh', label: '中文'},
];

const LanguageScreen = () => {
  const [selected, setSelected] = useState('en');

  const renderItem = ({item}) => {
    const isSelected = item.code === selected;
    return (
      <TouchableOpacity
        style={[styles.option, isSelected && styles.selectedOption]}
        onPress={() => setSelected(item.code)}>
        <Text style={[styles.optionText, isSelected && styles.selectedText]}>
          {item.label}
        </Text>
        {isSelected && (
          <Ionicons name="checkmark-outline" size={20} color={Colors.primary} />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Language</Text>
      <FlatList
        data={languages}
        keyExtractor={item => item.code}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => {
          /* Save logic */
        }}>
        <Text style={styles.saveButtonText}>Save Language</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F9F9F9',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  list: {
    paddingBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    elevation: 1,
    justifyContent: 'space-between',
  },
  selectedOption: {
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  selectedText: {
    fontWeight: '600',
    color: Colors.primary,
  },
  saveButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 'auto',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
