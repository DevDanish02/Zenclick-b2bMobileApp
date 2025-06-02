import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

const PlanCard = ({plan, onSelect}) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.card}>
      <Text style={styles.amount}>{plan.amount}</Text>
      <Text style={styles.desc}>{plan.description}</Text>
    </TouchableOpacity>
  );
};

export default PlanCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#eef',
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    width: 140,
    alignItems: 'center',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  desc: {
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
    color: '#555',
  },
});
