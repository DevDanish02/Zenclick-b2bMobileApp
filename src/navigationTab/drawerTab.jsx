// src/navigationTab/DrawerNavigator.js
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTab';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingScreen';
import CustomDrawerContent from '../components/HomeScreen/CustomDrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      {/* Main bottom tabs */}
      <Drawer.Screen name="HomeTab" component={BottomTabNavigator} />

      {/* New drawer entries */}
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{drawerLabel: 'My Profile'}}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{drawerLabel: 'App Settings'}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
