// src/components/ThemeWrapper.js
import React from 'react';
import {
  View,
  useColorScheme,
  StatusBar,
  StyleSheet,
  Platform,
} from 'react-native';

const ThemeWrapper = ({children}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundColor = isDarkMode ? '#121212' : '#FFFFFF';
  const barStyle = isDarkMode ? 'light-content' : 'dark-content';

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <StatusBar
        barStyle={barStyle}
        backgroundColor={
          Platform.OS === 'android' ? backgroundColor : undefined
        }
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ThemeWrapper;
