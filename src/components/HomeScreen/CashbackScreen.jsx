import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import Colors from '../../constants/Colors';

const CashbackScreen = () => {
  const [cashbackPoints, setCashbackPoints] = useState(320); // Example points
  const [claimed, setClaimed] = useState(false);

  const handleClaim = () => {
    setClaimed(true);
    Alert.alert(
      'Cashback Claimed!',
      'Your cashback has been transferred to your wallet.',
    );
    setCashbackPoints(0);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>🎁 Cashback Rewards</Text>

      <View style={styles.card}>
        <Image
          source={require('../../assets/Cashback/cashback1.jpg')} // Place cashback.png in assets
          style={styles.image}
        />
        <Text style={styles.pointsLabel}>Your Cashback Points</Text>
        <Text style={styles.points}>{cashbackPoints} pts</Text>

        {!claimed && cashbackPoints > 0 ? (
          <TouchableOpacity style={styles.claimButton} onPress={handleClaim}>
            <Text style={styles.claimText}>Claim Now</Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.statusText}>
            {cashbackPoints === 0
              ? 'No cashback left to claim.'
              : 'Already Claimed 🎉'}
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f2f6ff',
    flexGrow: 1,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 25,
    alignItems: 'center',
    width: '100%',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  pointsLabel: {
    fontSize: 16,
    color: '#555',
  },
  points: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.primary,
    marginVertical: 10,
  },
  claimButton: {
    marginTop: 20,
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  claimText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  statusText: {
    marginTop: 15,
    fontSize: 14,
    color: 'gray',
  },
});

export default CashbackScreen;
