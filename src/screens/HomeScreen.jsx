import React from 'react';
import {View, ScrollView, StyleSheet, Image, Text} from 'react-native';
import Header from '../components/HomeScreen/Header';
import OfferCarousel from '../Carousal/OfferCarousal';
import WalletSection from '../components/HomeScreen/wallet';
import ServiceSection from '../components/HomeScreen/ServiceSection';

import {
  rechargeAndBillPayment,
  travelData,
  utilityData,
  aadharData,
  paymentData,
  insuranceData,
  registrationData,
} from '../data/serviceData';
import Colors from '../constants/Colors';

const HomeScreen = ({navigation}) => {
  const walletAmount = 2500;
  const iconColor = Colors.primary;

  const sections = [
    {title: 'Travel', data: travelData},
    {title: 'Utility Services', data: utilityData},
    {title: 'All Services', data: rechargeAndBillPayment},
    {title: 'Aadhar Services', data: aadharData},
    {title: 'Collect Payment', data: paymentData},
    {title: 'Insurance', data: insuranceData},
    {title: 'Registration', data: registrationData},
  ];

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}>
      <View style={{flex: 1}}>
        <Header
          userName="Mohd Danish"
          profileImage={null}
          notificationCount={4}
          cashbackPoints={120}
        />
      </View>

      <OfferCarousel />

      <WalletSection
        walletAmount={walletAmount}
        onAddMoneyPress={() => navigation.navigate('AddMoney')}
      />

      {sections.map((section, index) => (
        <View style={styles.sectionWrapper} key={index}>
          <View style={styles.bbpsWrapper}>
            <Image
              source={require('../assets/images/bbps.png')}
              style={styles.bbpsIcon}
              resizeMode="contain"
            />
            <Text style={styles.bbpsLabel}>Pay Bills</Text>
          </View>
          <ServiceSection
            title={section.title}
            data={section.data}
            iconColor={iconColor}
            navigation={navigation}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 80,
  },
  sectionWrapper: {
    marginBottom: 20,
  },
  bbpsWrapper: {
    alignItems: 'flex-end',
    marginTop: 8,
    marginRight: 20,
  },
  bbpsIcon: {
    width: 35,
    height: 35,
  },
  bbpsLabel: {
    fontSize: 8,
    color: Colors.gray,
    fontWeight: '900',
    marginTop: 2,
  },
});

export default HomeScreen;
