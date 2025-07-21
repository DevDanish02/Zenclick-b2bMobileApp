import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Fontisto} from '../../constants/Icon';
import Colors from '../../constants/Colors';
import {useNavigation} from '@react-navigation/native';

const Header = ({
  userName = 'Random',
  profileImage = 'https://i.pravatar.cc/200',
  notificationCount = 5,
  cashbackAmount = 150, // New: Cashback amount
}) => {
  const navigation = useNavigation();

  const getInitials = name => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  const renderProfileImage = () => {
    if (profileImage) {
      const imageSource =
        typeof profileImage === 'string' ? {uri: profileImage} : profileImage;

      return <Image style={styles.profileImage} source={imageSource} />;
    } else {
      return (
        <View style={styles.initialsCircle}>
          <Text style={styles.initialsText}>{getInitials(userName)}</Text>
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.headerContainer}>
        {/* Top Row: Profile + Bell */}
        <View style={styles.headerTop}>
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={styles.profileContainer}>
            {renderProfileImage()}
            <View>
              <Text style={styles.profileName}>{userName}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('NotificationsScreen')}
            style={styles.bellContainer}>
            <Fontisto name="bell-alt" size={20} color="white" />
            {notificationCount > 0 && (
              <View style={styles.notificationBadge}>
                <Text style={styles.notificationText}>{notificationCount}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        {/* Cashback Row */}
        <View style={styles.cashbackRow}>
          <Text style={styles.cashbackText}>
            {cashbackAmount} Cashback Points
          </Text>
          <TouchableOpacity
            style={styles.claimButton}
            onPress={() => navigation.navigate('CashbackScreen')}>
            <Text style={styles.claimText}>Claim</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 0,
  },
  headerContainer: {
    backgroundColor: Colors.primary,
    padding: 15,
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  initialsCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  initialsText: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
  profileName: {
    color: Colors.white,
    fontSize: 16,
    lineHeight: 20,
  },
  bellContainer: {
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },

  // Cashback Row Styling
  cashbackRow: {
    marginTop: 15,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cashbackText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  claimButton: {
    backgroundColor: Colors.white,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  claimText: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default Header;
