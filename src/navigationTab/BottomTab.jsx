import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons, MaterialIcons, Feather} from '../constants/Icon';
import HomeScreen from '../screens/HomeScreen';
import Reports from '../screens/Reports';
import Margin from '../screens/Margin';
import Menu from '../screens/Menu';
import Colors from '../constants/Colors';
import CustomerHistoryScreen from '../screens/HistoryScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.primary,
      tabBarInactiveTintColor: 'gray',
    }}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="home-outline" size={size} color={color} />
        ),
      }}
    />

    <Tab.Screen
      name="Reports"
      component={Reports}
      options={{
        tabBarLabel: 'Reports',
        tabBarIcon: ({color, size}) => (
          <MaterialIcons name="report" size={size} color={color} />
        ),
      }}
    />

    <Tab.Screen
      name="Margin"
      component={Margin}
      options={{
        tabBarLabel: 'Margin',
        tabBarIcon: ({color, size}) => (
          <MaterialIcons name="margin" size={size} color={color} />
        ),
      }}
    />

    <Tab.Screen
      name="History"
      component={CustomerHistoryScreen}
      options={{
        tabBarLabel: 'History',
        tabBarIcon: ({color, size}) => (
          <MaterialIcons name="history" size={size} color={color} />
        ),
      }}
    />

    <Tab.Screen
      name="Menu"
      component={Menu}
      options={{
        tabBarLabel: 'Menu',
        tabBarIcon: ({color, size}) => (
          <Feather name="menu" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default BottomTabNavigator;
