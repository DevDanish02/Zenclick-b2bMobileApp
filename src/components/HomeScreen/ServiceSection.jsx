import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
const {width} = Dimensions.get('window');
import Colors from '../../constants/Colors';

const ServiceSection = ({
  title,
  data,
  iconColor = Colors.primary,
  navigation,
}) => {
  const [pressedItem, setPressedItem] = useState(null);

  const handlePressIn = id => setPressedItem(id);
  const handlePressOut = () => setPressedItem(null);

  // ✅ Handle if data is not nested array
  const flattenedData = Array.isArray(data[0]) ? data.flat() : data;

  return (
    <View style={styles.cardContainer}>
      <View style={styles.utilityHeader}>
        <Text style={styles.utilityTitle}>{title}</Text>
        <Entypo name="pin" size={18} color={iconColor} />
      </View>

      <View style={styles.gridRow}>
        {flattenedData.map((item, index) => {
          const itemKey = `${title}-${index}`;
          const isPressed = pressedItem === itemKey;
          return (
            <TouchableOpacity
              key={index}
              style={styles.gridItem}
              onPress={() => navigation.navigate(item.screen)}
              onPressIn={() => handlePressIn(itemKey)}
              onPressOut={handlePressOut}>
              {item.icon(isPressed ? 'black' : iconColor)}
              <Text style={styles.gridLabel} numberOfLines={2}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.white,
    margin: 10,
    borderRadius: 15,
    padding: 10,
    elevation: 5,
  },
  utilityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  utilityTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  gridRow: {
    flexDirection: 'row',
    flexWrap: 'wrap', // ✅ Add this
    justifyContent: 'flex-start', // ✅ Make items align left first
    marginVertical: 10,
    // marginHorizontal: 10,
    gap: 6,
  },
  gridItem: {
    alignItems: 'center',
    width: width / 4 - 15, // ✅ Adjust width slightly
    marginBottom: 15, // ✅ Space between rows
  },
  gridLabel: {
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
});

export default ServiceSection;
