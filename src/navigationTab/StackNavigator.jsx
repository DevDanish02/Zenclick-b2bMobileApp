import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import OtpScreen from '../screens/OtpScreen';
import SignUpScreen from '../screens/SignUpScreen';
import DrawerNavigator from './drawerTab';
import SplashScreen from '../screens/SplashScreen';
// Utility Screens
import MobileRechargeScreen from '../screens/UtilityScreen/MobileRechargeScreen';
import DTHRecharge from '../screens/UtilityScreen/DTHRecharge';
import ElectricityBill from '../screens/UtilityScreen/ElectricityBill';
import BillPayment from '../screens/UtilityScreen/BillPayment';
import CreaditCard from '../screens/UtilityScreen/CreaditCard';
import OTTSubscription from '../screens/UtilityScreen/OTTSubscription';
import PANCardNSDL from '../screens/UtilityScreen/PANCardNSDL';
import LICPremium from '../screens/UtilityScreen/LICPremium';
// Bank Screens
import BankBalanceScreen from '../screens/BankScreen/BankBalanceScreen';
import MoneyTransfer from '../screens/BankScreen/MoneyTransfer';
import ScanAndPayScreen from '../screens/BankScreen/ScanAndPayScreen';
import BankStatement from '../screens/BankScreen/BankStatement';
// Collect Payment
import UPICollect from '../screens/CollectPayment/UPICollect';
import CustomerList from '../screens/CollectPayment/CustomerList';
// Insurance
import BuyInsurance from '../screens/Insurance/BuyInsurance';
import RenewPolicy from '../screens/Insurance/RenewPolicy';
// Travel
import BusBooking from '../screens/Travel/BusBooking';
import TrainBooking from '../screens/Travel/TrainBooking';
import FlightBooking from '../screens/Travel/FlightBooking';
// Registration
import NewRegistration from '../screens/Registration/NewRegistration';
import ESignServices from '../screens/Registration/ESignServices';
// Aadhaar Services
import CashWithdrawal from '../screens/AadharServices/CashWithdrawal';
import BalanceEnquiry from '../screens/AadharServices/BalanceEnquiry';
import CashDeposite from '../screens/AadharServices/CashDeposite';
import MiniStatement from '../screens/AadharServices/MiniStatement';
import RTLogin from '../screens/AadharServices/RTLogin';
import ViewPlansScreen from '../screens/UtilityScreen/ViewPlanScreen';
import AccountScreen from '../screens/AccountScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import PrivacyScreen from '../screens/PrivacyScreen';
import LanguageScreen from '../screens/LanguageScreen';
import HelpSupportScreen from '../screens/HelpSupportScreen';
import AddMoney from '../components/HomeScreen/AddMoney';
import ContactListScreen from '../screens/UtilityScreen/ContactListScreen';
import HomeScreen from '../screens/HomeScreen';
import DashBoardScreen from '../screens/DashBoardScreen';
import BottomTabNavigator from './BottomTab';

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Otp" component={OtpScreen} />
    <Stack.Screen name="Main" component={DrawerNavigator} />
    {/* <Stack.Screen name='Home' component={HomeScreen}/> */}

    <Stack.Screen name="SignUp" component={SignUpScreen} />
    <Stack.Screen name="DashBoard" component={DashBoardScreen} />
    {/* <Stack.Screen name="Drawer" component={DrawerNavigator} /> */}

    {/* Utility */}
    <Stack.Screen name="MobileRecharge" component={MobileRechargeScreen} />
    <Stack.Screen name="ContactListScreen" component={ContactListScreen} />
    <Stack.Screen name="ViewPlans" component={ViewPlansScreen} />
    <Stack.Screen name="DTHRecharge" component={DTHRecharge} />
    <Stack.Screen name="ElectricityBill" component={ElectricityBill} />
    <Stack.Screen name="BillPayment" component={BillPayment} />
    <Stack.Screen name="CreaditCard" component={CreaditCard} />
    <Stack.Screen name="OTTSubscription" component={OTTSubscription} />
    <Stack.Screen name="PANCardNSDL" component={PANCardNSDL} />
    <Stack.Screen name="LICPremium" component={LICPremium} />

    {/* Banking */}
    <Stack.Screen name="BankBalance" component={BankBalanceScreen} />
    <Stack.Screen name="MoneyTransfer" component={MoneyTransfer} />
    <Stack.Screen name="ScanAndPay" component={ScanAndPayScreen} />
    <Stack.Screen name="BankStatement" component={BankStatement} />

    {/* Collect Payment */}
    <Stack.Screen name="UPICollect" component={UPICollect} />
    <Stack.Screen name="CustomerList" component={CustomerList} />

    {/* Insurance */}
    <Stack.Screen name="BuyInsurance" component={BuyInsurance} />
    <Stack.Screen name="RenewPolicy" component={RenewPolicy} />

    {/* Travel */}
    <Stack.Screen name="BusBooking" component={BusBooking} />
    <Stack.Screen name="TrainBooking" component={TrainBooking} />
    <Stack.Screen name="FlightBooking" component={FlightBooking} />

    {/* Registration */}
    <Stack.Screen name="NewRegistration" component={NewRegistration} />
    <Stack.Screen name="ESignServices" component={ESignServices} />

    {/* Aadhaar Services */}
    <Stack.Screen name="CashWithdrawal" component={CashWithdrawal} />
    <Stack.Screen name="BalanceEnquiry" component={BalanceEnquiry} />
    <Stack.Screen name="CashDeposite" component={CashDeposite} />
    <Stack.Screen name="MiniStatement" component={MiniStatement} />
    <Stack.Screen name="RTLogin" component={RTLogin} />

    <Stack.Screen name="AccountScreen" component={AccountScreen} />
    <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
    <Stack.Screen name="PrivacyScreen" component={PrivacyScreen} />
    <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
    <Stack.Screen name="HelpSupportScreen" component={HelpSupportScreen} />
    <Stack.Screen name="Logout" component={LoginScreen} />

    <Stack.Screen name="AddMoney" component={AddMoney} />
  </Stack.Navigator>
);

export default StackNavigator;
