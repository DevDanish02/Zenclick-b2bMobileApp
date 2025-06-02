// SplashScreen.js
import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login'); // Home screen ka naam
    }, 1000); // 2 second delay
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/Zc.jpeg')} // Apna logo lagana
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to ZenKlick</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(87, 27, 216)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
