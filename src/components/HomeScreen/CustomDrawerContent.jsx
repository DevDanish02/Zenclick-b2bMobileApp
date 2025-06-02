// src/components/CustomDrawerContent.js
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Image
          source={{uri: 'https://i.pravatar.cc/200'}}
          style={styles.avatar}
        />
        <Text style={styles.username}>Random</Text>
        <Text style={styles.useremail}>random@gmail.com</Text>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    // backgroundColor: '#f2f2f2',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: '600',
  },
  useremail: {
    fontSize: 14,
  },
});

export default CustomDrawerContent;
