import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import StackNavigator from './src/navigationTab/StackNavigator';
import Toast from 'react-native-toast-message';

const App = () => (
  <GestureHandlerRootView style={{flex: 1}}>
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
    <Toast />
  </GestureHandlerRootView>
);

export default App;
