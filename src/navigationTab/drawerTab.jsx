import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTab';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingScreen';
import CustomDrawerContent from '../components/HomeScreen/CustomDrawerContent';
import Colors from '../constants/Colors';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: Colors.grayWhite, // Drawer background color
          width: 260,
        },
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: '500',
        },
        drawerActiveTintColor: Colors.primary, // Active text color
        drawerInactiveTintColor: Colors.textDark, // Inactive text color
        drawerActiveBackgroundColor: Colors.mintGreen, // Background when active
      }}>
      <Drawer.Screen name="HomeTab" component={BottomTabNavigator} />
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
