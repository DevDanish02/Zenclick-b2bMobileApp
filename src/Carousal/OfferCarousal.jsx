// components/HomeScreen/OfferCarousel.js
import React, {useRef, useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Image, Dimensions} from 'react-native';
import Colors from '../constants/Colors';

const offers = [
  {id: '1', image: require('../assets/Cashback/cashback1.jpg')},
  {id: '2', image: require('../assets/Cashback/cashback2.jpg')},
  {id: '3', image: require('../assets/Cashback/cashback3.jpg')},
];

const {width} = Dimensions.get('window');

const OfferCarousel = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % offers.length;
      flatListRef.current?.scrollToIndex({animated: true, index: nextIndex});
      setCurrentIndex(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View style={styles.carouselContainer}>
      <FlatList
        ref={flatListRef}
        data={offers}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 10}} // 👈 Add this
        renderItem={({item}) => (
          <View style={styles.imageWrapper}>
            <Image source={item.image} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 15,
    marginBottom: 15,
  },
  imageWrapper: {
    width: width - 40,
    marginHorizontal: 10,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: Colors.white, // fallback in case image fails
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderRadius: 20, // ✅ Add this
  },
});

export default OfferCarousel;
