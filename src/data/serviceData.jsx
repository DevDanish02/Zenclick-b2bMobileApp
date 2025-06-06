import {
  MaterialIcons,
  MaterialCommunityIcons,
  Foundation,
  Ionicons,
  FontAwesome,
  FontAwesome5,
} from '../constants/Icon';
// import Colors from '../constants/Colors';

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

export const bankingData = [
  [
    {
      icon: color => <FontAwesome5 name="university" size={30} color={color} />,
      title: 'Bank Balance',
      screen: 'BankBalance',
    },
    {
      icon: color => <Ionicons name="cash-outline" size={30} color={color} />,
      title: 'Money Transfer',
      screen: 'MoneyTransfer',
    },
    {
      icon: color => (
        <MaterialIcons name="qr-code-scanner" size={30} color={color} />
      ),
      title: 'Scan & Pay',
      screen: 'ScanAndPay',
    },
    {
      icon: color => (
        <FontAwesome5 name="file-alt" size={30} color={color} />
      ),
      title: 'Bank Statement',
      screen: 'BankSatement',
    },
  ],
];

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
