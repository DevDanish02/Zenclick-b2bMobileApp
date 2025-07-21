import React from 'react';
import {View, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from '../constants/Icon';
import HomeScreen from '../screens/HomeScreen';
import AllServices from '../screens/AllServices';
import Offers from '../screens/Offers';
import CustomerHistoryScreen from '../screens/HistoryScreen';
import Colors from '../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const withBottomPadding = Component => props => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.screenWrapper,
        {paddingBottom: insets.bottom + 10}, // Safe padding
      ]}>
      <Component {...props} />
    </View>
  );
};

const BottomTabNavigator = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.primary,
          height: Platform.OS === 'ios' ? 80 : 60,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
          elevation: 10,
        },
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: Colors.green,
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: Platform.OS === 'ios' ? 10 : 5,
        },
      })}>
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
          tabBarLabel: 'Services',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="dashboard" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Dummy"
        component={() => null}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.scannerTabWrapper}
              onPress={() => navigation.navigate('ScanAndPay')}>
              <View style={styles.scannerTabButton}>
                <MaterialCommunityIcons
                  name="qrcode-scan"
                  size={28}
                  color={Colors.white}
                />
              </View>
            </TouchableOpacity>
          ),
        }}
        listeners={{
          tabPress: e => {
            e.preventDefault(); // Prevent tab from navigating
          },
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
};

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    backgroundColor: Colors.grayWhite,
  },
  scannerTabWrapper: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? -30 : -25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scannerTabButton: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: Colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: Colors.gray,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
  },
});

export default BottomTabNavigator;
