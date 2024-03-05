
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HeaderTitle, HeaderBackImage } from '@react-navigation/stack';

const CustomHeader = () => {
  const navigation = useNavigation();

  const handleDropdownPress = () => {
    alert('Dropdown icon pressed');
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TouchableOpacity onPress={handleDropdownPress}>
        <HeaderBackImage />
      </TouchableOpacity>
      <HeaderTitle style={{ marginLeft: 10 }}>Your Title</HeaderTitle>
    </View>
  );
};

export default CustomHeader;
