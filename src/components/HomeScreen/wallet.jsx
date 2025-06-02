import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';
import AddMoney from './AddMoney';

const WalletSection = ({walletAmount, onAddMoneyPress}) => {
  console.log('walletAmount is :', walletAmount);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.primary,
        padding: 16,
        borderRadius: 20,
        marginHorizontal: 16,
      }}>
      <Text style={{color: Colors.white, fontSize: 18, fontWeight: 'bold'}}>
        Wallet: ₹{walletAmount}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.white,
          paddingVertical: 3,
          paddingHorizontal: 16,
          borderRadius: 20,
        }}
        onPress={onAddMoneyPress}>
        <Text style={{color: Colors.primary, fontWeight: 'bold'}}>
          + Add Money
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WalletSection;
