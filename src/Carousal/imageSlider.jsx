import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const {width} = Dimensions.get('window');

const images = [
  {
    id: '1',
    uri: 'https://img.freepik.com/free-photo/3d-render-money-transfer-mobile-banking-online_107791-16729.jpg',
  },
  {
    id: '2',
    uri: 'https://img.freepik.com/premium-photo/cashless-payment-png-3d-credit-card-machine-remix-transparent-background_53876-1041011.jpg',
  },
  {
    id: '3',
    uri: 'https://img.freepik.com/free-vector/hand-drawn-installment-illustration_23-2149397096.jpg',
  },
  {
    id: '4',
    uri: 'https://img.freepik.com/free-vector/hand-holding-phone-with-digital-wallet-service-sending-money-payment-transaction-transfer-through-mobile-app-flat-illustration_74855-20589.jpg',
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const intervalRef = useRef(null);
  const isManualScroll = useRef(false); // Flag to track manual scroll

  useEffect(() => {
    startAutoScroll();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      if (!isManualScroll.current) {
        setCurrentIndex(prevIndex => {
          const nextIndex = (prevIndex + 1) % images.length;
          flatListRef.current?.scrollToIndex({
            index: nextIndex,
            animated: true,
          });
          return nextIndex;
        });
      }
    }, 2000); // Adjusted time interval (2 seconds)
  };

  const handleScroll = event => {
    isManualScroll.current = true; // Set flag to true when manually scrolling
    const newIndex = Math.floor(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(newIndex);
  };

  const handleDotPress = index => {
    setCurrentIndex(index);
    flatListRef.current?.scrollToIndex({index, animated: true});
  };

  const handleMomentumScrollEnd = () => {
    isManualScroll.current = false; // Reset the flag when scrolling ends
  };

  return (
    <View style={styles.sliderContainer}>
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        data={images}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Image source={{uri: item.uri}} style={styles.image} />
        )}
        onScroll={handleScroll}
        onMomentumScrollEnd={handleMomentumScrollEnd} // Reset flag after manual scroll
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.dotsContainer}>
        {images.map((_, i) => (
          <TouchableOpacity
            key={i}
            style={[
              styles.dot,
              currentIndex === i ? styles.activeDot : styles.inactiveDot,
            ]}
            onPress={() => handleDotPress(i)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    // width: width - 40,
    height: 170,
    marginHorizontal: 20,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // Shadow for Android
    elevation: 5,
  },
  image: {
    width: width - 40,
    height: 200,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  dotsContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // for default dots
  },
  activeDot: {
    backgroundColor: 'black', // bright white for active
  },
  inactiveDot: {
    backgroundColor: '#bbb', // light grey for inactive
  },
});

export default ImageSlider;
