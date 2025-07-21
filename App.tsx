import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import StackNavigator from './src/navigationTab/StackNavigator';
import Toast from 'react-native-toast-message';
import ThemeWrapper from './src/constants/ThemeWrapper';

const App = () => (
  <GestureHandlerRootView style={{flex: 1}}>
    <ThemeWrapper>
      <NavigationContainer theme={DarkTheme}>
        {' '}
        {/* Theme comes from context */}
        <StackNavigator />
      </NavigationContainer>
    </ThemeWrapper>
    <Toast />
  </GestureHandlerRootView>
);

export default App;
