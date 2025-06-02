import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const DashboardHeroCard = ({
  Image: imageSource,
  color,
  text,
  buttonText,
  btnColor,
}) => {
  return (
    <View style={[styles.cardContainer, {backgroundColor: color}]}>
      <Image
        source={imageSource}
        style={styles.cardImage}
        resizeMode="contain"
      />
      <Text style={styles.cardText}>{text}</Text>
      <TouchableOpacity style={[styles.button, {backgroundColor: btnColor}]}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashboardHeroCard;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 15,
    padding: 16,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  cardImage: {
    width: 100,
    height: 100,
    marginBottom: 12,
  },
  cardText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    marginBottom: 12,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
  },
});
