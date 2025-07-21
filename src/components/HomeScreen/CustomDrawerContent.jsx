import React from 'react';
import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Colors from '../../constants/Colors';

const CustomDrawerContent = props => {
  const {height} = useWindowDimensions();

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={[styles.container, {minHeight: height}]}
      keyboardShouldPersistTaps="handled">
      <View style={styles.header}>
        <Image
          source={{uri: 'https://i.pravatar.cc/200'}}
          style={styles.avatar}
        />
        <Text style={styles.username}>Random</Text>
        <Text style={styles.useremail}>random@gmail.com</Text>
      </View>

      <View style={styles.body}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grayWhite,
    flexGrow: 1, // allow container to grow with content
  },
  header: {
    padding: 20,
    alignItems: 'center',
    borderRadius: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: Colors.green,
  },
  username: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors.gray,
  },
  useremail: {
    fontSize: 14,
    color: Colors.gray,
    fontWeight: '900',
  },
  body: {
    paddingTop: 10,
  },
});

export default CustomDrawerContent;
