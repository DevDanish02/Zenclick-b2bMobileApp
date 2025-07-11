import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from '../constants/Icon';
import HomeScreen from '../screens/HomeScreen';
import AllServices from '../screens/AllServices';
// import Reports from '../screens/Reports';
//import Margin from '../screens/Margin';
import Offers from '../screens/Offers';
import Colors from '../constants/Colors';
import CustomerHistoryScreen from '../screens/HistoryScreen';
import Scanner from '../screens/Scanner';
import {blue} from '../constants/Colors';
const Tab = createBottomTabNavigator();

// Wrapper to ensure screens don’t cover the tab bar
const withBottomPadding = Component => props =>
  (
    <View style={styles.screenWrapper}>
      <Component {...props} />
    </View>
  );

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.primary,
      tabBarInactiveTintColor: 'gray',
    }}>
    <Tab.Screen
      name="Home"
      component={withBottomPadding(HomeScreen)}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="home-outline" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Services"
      component={withBottomPadding(AllServices)}
      options={{
        tabBarLabel: 'AllServices',
        tabBarIcon: ({color, size}) => (
          <MaterialIcons name="dashboard" size={size} color={color} />
        ),
      }}
    />
    {/* <Tab.Screen
      name="Margin"
      component={withBottomPadding(Margin)}
      options={{
        tabBarLabel: 'Margin',
        tabBarIcon: ({color, size}) => (
          <MaterialIcons name="margin" size={size} color={color} />
        ),
      }}
    /> */}
    <Tab.Screen
      name="Scanner"
      component={withBottomPadding(Scanner)}
      options={{
        tabBarLabel: () => null,
        tabBarIcon: ({size}) => (
          <View style={styles.scannerTabButton}>
            <MaterialCommunityIcons
              name="barcode-scan"
              size={size + 8}
              color="#fff"
            />
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="History"
      component={withBottomPadding(CustomerHistoryScreen)}
      options={{
        tabBarLabel: 'History',
        tabBarIcon: ({color, size}) => (
          <MaterialIcons name="history" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Offers"
      component={withBottomPadding(Offers)}
      options={{
        tabBarLabel: 'Offers',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="sale" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    // paddingBottom: 80, // 👈 this makes space for the tab bar
    backgroundColor: '#fff',
  },
  scannerTabButton: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary, // uses your existing blue color from Colors.js
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 10,
    position: 'absolute',
    bottom: -10,
    elevation: 8, // Android shadow
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
});

export default BottomTabNavigator;
