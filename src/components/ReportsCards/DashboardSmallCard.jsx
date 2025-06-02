import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';

const DashboardSmallCard = ({icon}) => {
  const [isPressed, setIsPressed] = useState(true);

  return (
    <View>
      <TouchableHighlight
        onPress={() => setIsPressed(false)}
        //   onPressOut={() => setIsPressed(false)}
        style={[
          styles.innerSmallCard,
          {backgroundColor: isPressed ? 'blue' : '#72C37AFF'}, // 🔄 color change
        ]}>
        {icon}
      </TouchableHighlight>
    </View>
  );
};

export default DashboardSmallCard;

const styles = StyleSheet.create({
  innerSmallCard: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
});
