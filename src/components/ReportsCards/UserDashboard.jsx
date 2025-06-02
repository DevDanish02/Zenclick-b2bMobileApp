import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const UserDashboard = ({rank, name, rankDiff}) => {
  return (
    <View style={styles.userContainer}>
      <Text>{rank}</Text>
      <Text>{name}</Text>
      <Text>{rankDiff}</Text>
    </View>
  );
};

export default UserDashboard;

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    gap: 80,
  },
});
