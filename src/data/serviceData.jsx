import {
  MaterialIcons,
  MaterialCommunityIcons,
  Foundation,
  Ionicons,
  Entypo,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
} from '../constants/Icon';
// import Colors from '../constants/Colors';

export const travelData = [
  [
    {
      icon: color => <FontAwesome5 name="bus" size={30} color={color} />,
      title: 'Bus        Booking',
      screen: 'BusBooking',
    },
    {
      icon: color => <FontAwesome5 name="train" size={30} color={color} />,
      title: 'Train      Booking',
      screen: 'TrainBooking',
    },
    {
      icon: color => (
        <FontAwesome5 name="plane-departure" size={30} color={color} />
      ),
      title: 'Flight Booking',
      screen: 'FlightBooking',
    },
  ],
];


export const utilityData = [
  [
    {
      icon: color => (
        <MaterialIcons name="mobile-friendly" size={30} color={color} />
      ),
      title: 'Mobile Recharge',
      screen: 'MobileRecharge',
    },
    {
      icon: color => (
        <MaterialCommunityIcons name="set-top-box" size={30} color={color} />
      ),
      title: 'DTH        Recharge',
      screen: 'DTHRecharge',
    },
    {
      icon: color => <Foundation name="lightbulb" size={30} color={color} />,
      title: 'Electricity        Bill',
      screen: 'ElectricityBill',
    },
    {
      icon: color => (
        <Ionicons name="receipt-outline" size={30} color={color} />
      ),
      title: 'Bill         Payment',
      screen: 'BillPayment',
    },
  ],
  [
    {
      icon: color => <FontAwesome name="credit-card" size={30} color={color} />,
      title: 'Credit             Card',
      screen: 'CreaditCard',
    },
    {
      icon: color => (
        <MaterialCommunityIcons
          name="television-classic"
          size={30}
          color={color}
        />
      ),
      title: 'OTT Subscription',
      screen: 'OTTSubscription',
    },
    {
      icon: color => <FontAwesome name="id-card-o" size={30} color={color} />,
      title: 'PAN              card NSDL',
      screen: 'PANCardNSDL',
    },
    {
      icon: color => (
        <FontAwesome5 name="hand-holding-medical" size={30} color={color} />
      ),
      title: 'LIC Premium',
      screen: 'LICPremium',
    },
  ],
];

export const rechargeAndBillPayment = [
  [
    {
      icon: color => <FontAwesome name="mobile" size={30} color={color} />,
      title: 'Prepaid Mobile',
      screen: 'PrepaidMobile',
    },
    {
      icon: color => <Ionicons name="call" size={30} color={color} />,
      title: 'Postpaid Mobile',
      screen: 'PostpaidMobile',
    },
    {
      icon: color => (
        <FontAwesome5 name="broadcast-tower" size={30} color={color} />
      ),
      title: 'Broad Band',
      screen: 'Broadband',
    },
    {
      icon: color => (
        <Entypo name="landline" size={30} color={color} />
      ),
      title: 'Land Line',
      screen: 'LandLine',
    },
    {
    icon: color=>(
      <Ionicons name="tv-outline" size={30} color={color} />
      ),
      title: 'DTH',
      screen: 'DTH'
    },
     {
    icon: color=>(
      <FontAwesome6 name="cable-car" size={30} color={color} />
      ),
      title: 'Cable',
      screen: 'Cable'
    },
    {
    icon: color=>(
      <MaterialCommunityIcons name="cable-data" size={30} color={color} />
      ),
      title: 'Data Card',
      screen: 'DataCard'
    },
     {
    icon: color=>(
      <MaterialIcons name="electrical-services" size={30} color={color} />
      ),
      title: 'Electricity',
      screen: 'Electricity'
    },
     {
    icon: color=>(
      <MaterialCommunityIcons name="gas-cylinder" size={30} color={color} />
      ),
      title: 'LPG Cylinder',
      screen: 'LPGCylinder'
    },
     {
    icon: color=>(
      <MaterialCommunityIcons name="gas-station" size={30} color={color} />
      ),
      title: 'Piped Gas',
      screen: 'PipedGas'
    },
     {
    icon: color=>(
      <MaterialCommunityIcons name="pipe-valve" size={30} color={color} />
      ),
      title: 'Water',
      screen: 'Water'
    },
    {
    icon: color=>(
      <MaterialCommunityIcons name="fast-forward" size={30} color={color} />
      ),
      title: 'Fas tag',
      screen: 'Fastag'
    },
    {
    icon: color=>(
      <FontAwesome5 name="house-user" size={30} color={color} />
      ),
      title: 'Housing Society',
      screen: 'HousingSociety'
    },
    {
    icon: color=>(
      <FontAwesome5 name="hospital" size={30} color={color} />
      ),
      title: 'Hospital',
      screen: 'Hospital'
    },
    {
    icon: color=>(
      <FontAwesome5 name="money-check" size={30} color={color} />
      ),
      title: 'Credit Card',
      screen: 'CreditCard'
    },
    {
    icon: color=>(
      <FontAwesome5 name="hand-holding-usd" size={30} color={color} />
      ),
      title: 'Loan',
      screen: 'Loan'
    },
  ],
];

// export const travelData = [
//   [
//     {
//       icon: color => <FontAwesome5 name="bus" size={30} color={color} />,
//       title: 'Bus        Booking',
//       screen: 'BusBooking',
//     },
//     {
//       icon: color => <FontAwesome5 name="train" size={30} color={color} />,
//       title: 'Train      Booking',
//       screen: 'TrainBooking',
//     },
//     {
//       icon: color => (
//         <FontAwesome5 name="plane-departure" size={30} color={color} />
//       ),
//       title: 'Flight Booking',
//       screen: 'FlightBooking',
//     },
//   ],
// ];

export const paymentData = [
  [
    {
      icon: color => (
        <FontAwesome5 name="hand-holding" size={30} color={color} />
      ),
      title: 'UPI Collect',
      screen: 'UPICollect',
    },
    {
      icon: color => <Ionicons name="people" size={30} color={color} />,
      title: 'Customer List',
      screen: 'CustomerList',
    },
  ],
];

export const insuranceData = [
  [
    {
      icon: color => (
        <FontAwesome5 name="user-shield" size={30} color={color} />
      ),
      title: 'Buy Insurance',
      screen: 'BuyInsurance',
    },
    {
      icon: color => (
        <MaterialCommunityIcons
          name="file-document-edit"
          size={30}
          color={color}
        />
      ),
      title: 'Renew Policy',
      screen: 'RenewPolicy',
    },
  ],
];

export const registrationData = [
  [
    {
      icon: color => (
        <MaterialIcons name="assignment" size={30} color={color} />
      ),
      title: 'New Registration',
      screen: 'NewRegistration',
    },
    {
      icon: color => (
        <FontAwesome5 name="file-signature" size={30} color={color} />
      ),
      title: 'E-sign Services',
      screen: 'ESignServices',
    },
  ],
];
export const aadharData = [
  [
    {
      icon: color => (
        <FontAwesome5 name="money-bill-wave" size={30} color={color} />
      ),
      title: 'Cash Withdrawal',
      screen: 'CashWithdrawal',
    },
    {
      icon: color => <FontAwesome5 name="piggy-bank" size={30} color={color} />,
      title: 'Cash Deposit',
      screen: 'CashDeposite',
    },
    {
      icon: color => (
        <FontAwesome5 name="file-invoice" size={30} color={color} />
      ),
      title: 'Mini Statement',
      screen: 'MiniStatement',
    },
    {
      icon: color => (
        <MaterialIcons name="account-balance-wallet" size={30} color={color} />
      ),
      title: 'Balance Enquiry',
      screen: 'BalanceEnquiry',
    },
    {
      icon: color => (
        <MaterialCommunityIcons name="login" size={30} color={color} />
      ),
      title: 'RT Login',
      screen: 'RTLogin',
    },
  ],
];
