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
  notificationCount = 5, // For demo, you can pass the notification count
}) => {
  const navigation = useNavigation();

  // Get initials like "MD"
  const getInitials = name => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  const renderProfileImage = () => {
    if (profileImage) {
      // If it's a string (URI), wrap it with {uri: ...}
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
        <View style={styles.headerTop}>
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={styles.profileContainer}>
            {renderProfileImage()}
            <View>
              <Text style={styles.profileName}>{userName}</Text>
            </View>
          </TouchableOpacity>

          {/* Bell Icon with Notification Badge */}
          <TouchableOpacity
            onPress={() => navigation.navigate('NotificationsScreen')}
            style={styles.bellContainer}>
            <Fontisto name="bell-alt" size={20} color="white" />
            {/* Notification Badge */}
            {notificationCount > 0 && (
              <View style={styles.notificationBadge}>
                <Text style={styles.notificationText}>{notificationCount}</Text>
              </View>
            )}
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
    flex: 1,
    backgroundColor: Colors.primary,
    padding: 15,
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
});

export default Header;
