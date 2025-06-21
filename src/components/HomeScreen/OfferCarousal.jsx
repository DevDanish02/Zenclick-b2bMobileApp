// components/HomeScreen/OfferCarousel.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';

const offers = [
  {
    id: '1',
    title: 'Get ₹10 Discount',
    description: 'On Electricity Bill Payment & Credit Card Bill Payment',
    image: require('../../assets/images/mobileUtilities.webp'),
  },
  {
    id: '2',
    title: 'Bus Ticket Cashback',
    description: 'Cancel within 6 hrs & get 100% refund',
    image: require('../../assets/images/flight.png'),
  },
];

const {width} = Dimensions.get('window');

const OfferCarousel = () => {
  return (
    <View style={styles.carouselContainer}>
      <FlatList
        data={offers}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    marginVertical: 15,
  },
  card: {
    width: width - 40,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e63946',
  },
  description: {
    fontSize: 13,
    color: '#555',
  },
});

export default OfferCarousel;
