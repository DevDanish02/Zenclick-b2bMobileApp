// import React, {useEffect, useState} from 'react';
// import {ScrollView, StyleSheet, SafeAreaView, View} from 'react-native';
// import Header from '../components/HomeScreen/Header';
// import ImageSlider from '../slider/imageSlider';
// import ServiceSection from '../components/HomeScreen/ServiceSection';
// import {iconColor} from '../constants/Colors';
// import {
//   utilityData,
//   bankingData,
//   paymentData,
//   insuranceData,
//   travelData,
//   registrationData,
//   aadharData,
// } from '../data/serviceData';
// import WalletSection from '../components/HomeScreen/wallet';

// const HomeScreen = ({navigation, route}) => {
//   const [walletAmount, setWalletAmount] = useState(0);

//   useEffect(() => {
//     if (route.params?.walletAmount) {
//       const amount = Number(route.params.walletAmount);
//       setWalletAmount(prev => prev + amount);
//     }
//   }, [route.params?.walletAmount]);

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <Header />
//         <View style={styles.imgContainer1}>
//           <ImageSlider />
//         </View>

//         <WalletSection
//           walletAmount={walletAmount}
//           onAddMoneyPress={() => navigation.navigate('AddMoney')}
//         />

//         <ServiceSection
//           title="Utility Services"
//           data={utilityData}
//           iconColor={iconColor}
//           navigation={navigation}
//         />
//         <ServiceSection
//           title="Banking"
//           data={bankingData}
//           iconColor={iconColor}
//           navigation={navigation}
//         />
//         <ServiceSection
//           title="Aadhar Services"
//           data={aadharData}
//           iconColor={iconColor}
//           navigation={navigation}
//         />
//         <ServiceSection
//           title="Collect Payment"
//           data={paymentData}
//           iconColor={iconColor}
//           navigation={navigation}
//         />
//         <ServiceSection
//           title="Insurance"
//           data={insuranceData}
//           iconColor={iconColor}
//           navigation={navigation}
//         />
//         <ServiceSection
//           title="Travel"
//           data={travelData}
//           iconColor={iconColor}
//           navigation={navigation}
//         />
//         <ServiceSection
//           title="Registration"
//           data={registrationData}
//           iconColor={iconColor}
//           navigation={navigation}
//         />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollContainer: {
//     paddingBottom: 20,
//   },
//   imgContainer1: {
//     marginVertical: 10,
//   },
// });

// export default HomeScreen;
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, SafeAreaView, View} from 'react-native';
import Header from '../components/HomeScreen/Header';
import ImageSlider from '../slider/imageSlider';
import ServiceSection from '../components/HomeScreen/ServiceSection';
import {iconColor} from '../constants/Colors';
import axios from 'axios';
import {Alert} from 'react-native';

import {
  utilityData,
  rechargeAndBillPayment,
  paymentData,
  insuranceData,
  travelData,
  registrationData,
  aadharData,
} from '../data/serviceData';
import WalletSection from '../components/HomeScreen/wallet';
import {useFocusEffect} from '@react-navigation/native';

const HomeScreen = ({navigation, route}) => {
  const [walletAmount, setWalletAmount] = useState(0);

  useFocusEffect(
    React.useCallback(() => {
      if (route.params?.walletAmount) {
        console.log('Updated walletAmount:', route.params.walletAmount); // Log the received wallet amount
        setWalletAmount(prevAmount => prevAmount + route.params.walletAmount); // Update walletAmount
      }
    }, [route.params?.walletAmount]),
  );

  console.log('WalletHomeScreen', walletAmount);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header />
        <View style={styles.imgContainer1}>
          <ImageSlider />
        </View>

        <WalletSection
          walletAmount={walletAmount}
          onAddMoneyPress={() => navigation.navigate('AddMoney')} // Navigate to AddMoney screen
        />

        <ServiceSection
          title="Utility Services"
          data={utilityData}
          iconColor={iconColor}
          navigation={navigation}
        />

        <ServiceSection
          title="All Services"
          data={rechargeAndBillPayment}
          iconColor={iconColor}
          navigation={navigation}
        />

        <ServiceSection
          title="Travel"
          data={travelData}
          iconColor={iconColor}
          navigation={navigation}
        />
        <ServiceSection
          title="Aadhar Services"
          data={aadharData}
          iconColor={iconColor}
          navigation={navigation}
        />
        <ServiceSection
          title="Collect Payment"
          data={paymentData}
          iconColor={iconColor}
          navigation={navigation}
        />
        <ServiceSection
          title="Insurance"
          data={insuranceData}
          iconColor={iconColor}
          navigation={navigation}
        />

        <ServiceSection
          title="Registration"
          data={registrationData}
          iconColor={iconColor}
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 20,
  },
  imgContainer1: {
    marginVertical: 10,
  },
});

export default HomeScreen;
