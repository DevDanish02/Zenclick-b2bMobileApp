import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Ionicons} from '../../constants/Icon';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../constants/Colors';

const RTLogin = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <LinearGradient
        colors={['#dbeafe', '#fff']}
        style={styles.gradient}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color={Colors.primary} />
              </TouchableOpacity>
              <Text style={styles.header}>RT Login</Text>
            </View>

            {/* RT Login Form Section */}
            <View style={styles.formContainer}>
              <Text style={styles.formTitle}>Enter RT Login Details</Text>
              <Text style={styles.formLabel}>Aadhar Number</Text>
              <Text style={styles.input}>Enter Aadhar Number</Text>

              <Text style={styles.formLabel}>OTP</Text>
              <Text style={styles.input}>Enter OTP</Text>

              <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default RTLogin;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1, // 👈 yeh sabse important
    justifyContent: 'center', // 👈 center karne ke liye
    padding: 20, // 👈 padding screen ke andar karne ke liye
  },
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 4},
    marginBottom: 30,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  formLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
