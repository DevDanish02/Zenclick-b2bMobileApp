import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ReportCard = ({text, value}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.valueText}>{value}</Text>
      </View>
    </View>
  );
};

export default ReportCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    backgroundColor: '#CABFEEFF',
    padding: 20,
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    color: 'blue',
    fontSize: 15,
  },
  valueText: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
