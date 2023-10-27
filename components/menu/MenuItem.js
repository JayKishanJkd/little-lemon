// MenuItem.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './menu.styles';
import { useNavigation } from '@react-navigation/native';
import ItemDisplay from './ItemDisplay';






const MenuItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity  onPress={() => navigation.navigate('ItemDisplay', { item })} >
      <View style={styles.cardContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={styles.itemContainer}>
            <Text style={styles.nameText}>{item.category}</Text>
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>{item.name}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>{item.price_inr}</Text>
            <Text style={styles.priceTextConst}>Price (INR)</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text numberOfLines={3} ellipsizeMode="tail" style={styles.descriptionText}>
              Description: {item.description}
            </Text>
          </View>
        </View>
        <View></View>
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;
