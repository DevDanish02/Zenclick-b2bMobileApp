import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Ionicons} from '../constants/Icon'; // vector icons
import Colors from '../constants/Colors'; // your color theme
import {useNavigation} from '@react-navigation/native';

const notifications = [
  {
    id: '1',
    title: 'Payment Received',
    message: 'You have received ₹500 from Ravi.',
    time: '2 hours ago',
    icon: 'cash-outline',
  },
  {
    id: '2',
    title: 'Profile Updated',
    message: 'Your profile was updated successfully.',
    time: '1 day ago',
    icon: 'person-circle-outline',
  },
  {
    id: '3',
    title: 'Security Alert',
    message: 'New login from a different device.',
    time: '3 days ago',
    icon: 'lock-closed-outline',
  },
];

const NotificationCard = ({item}) => (
  <View style={styles.card}>
    <Ionicons
      name={item.icon}
      size={26}
      color={Colors.primary}
      style={styles.icon}
    />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.message}>{item.message}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  </View>
);

const NotificationsScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={Colors.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      {/* Notifications List */}
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={({item}) => <NotificationCard item={item} />}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    backgroundColor: '#fff',
    elevation: 2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 16,
    color: '#333',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
  },
  icon: {
    marginRight: 12,
    marginTop: 4,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 2,
    color: '#333',
  },
  message: {
    color: '#666',
    fontSize: 14,
  },
  time: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 4,
  },
});
