// MenuList.js
import React from 'react';
import { ScrollView } from 'react-native';
import MenuItem from './MenuItem';

const MenuList = ({ filteredData }) => {
  return (
    <ScrollView>
      {filteredData.map((item) => (
        <MenuItem key={item.serial_number} item={item} />
      ))}
    </ScrollView>
  );
};

export default MenuList;
