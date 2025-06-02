import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {FontAwesome, MaterialIcons, Feather} from '../constants/Icon';
import Colors from '../constants/Colors';

const IconLibraries = {
  Feather,
  FontAwesome,
  MaterialIcons,
};

const MenuScreen = () => {
  const menuItems = [
    {icon: 'gamepad', label: 'Games', library: 'FontAwesome'},
    {icon: 'credit-card', label: 'Wallet Transfer', library: 'Feather'},
    {icon: 'map', label: 'Location Scan', library: 'MaterialIcons'},
    {icon: 'download', label: 'Withdraw Request', library: 'Feather'},
    {icon: 'globe', label: 'Language', library: 'Feather'},
    {icon: 'gift', label: 'Reward Library', library: 'FontAwesome'},
    {icon: 'dollar-sign', label: 'Merchant Loan', library: 'Feather'},
    {icon: 'settings', label: 'Settings', library: 'Feather'},
    {icon: 'sign-out', label: 'Logout', library: 'FontAwesome'},
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>
            <Text style={styles.brandName}>Zen</Text>
            <Text style={{color: 'green', fontWeight: 'bold'}}>Klick</Text>
          </Text>
          <Text style={styles.tagline}>Making Life Easy</Text>
        </View>

        <View style={styles.menuList}>
          {menuItems.map((item, index) => {
            const IconComponent = IconLibraries[item.library] || Feather;
            return (
              <TouchableOpacity
                key={index}
                style={styles.menuItem}
                activeOpacity={0.7}>
                <View style={styles.iconWrapper}>
                  <IconComponent
                    name={item.icon}
                    size={22}
                    color={Colors.primary}
                  />
                </View>
                <Text style={styles.label}>{item.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <Text style={styles.version}>Version : 5.0.7</Text>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Privacy Policy</Text>
          <Text style={styles.footerSeparator}>•</Text>
          <Text style={styles.footerText}>Terms of Service</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  brandName: {
    color: '#6A0DAD', // Purple - or use '#2E8B57' for green
    fontWeight: 'bold',
  },
  tagline: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
  },
  menuList: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
  },
  iconWrapper: {
    width: 32,
    height: 40,
    // backgroundColor: '#e6f7fb',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  version: {
    marginTop: 30,
    textAlign: 'center',
    color: '#888',
    fontSize: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },
  footerText: {
    fontSize: 12,
    color: '#555',
  },
  footerSeparator: {
    marginHorizontal: 8,
    fontSize: 12,
    color: '#555',
  },
});
