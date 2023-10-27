import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ItemDisplay({ route }) {
  const { item } = route.params;
  const navigation = useNavigation();

  // State to keep track of the number of items added to the card
  const [itemsAdded, setItemsAdded] = useState(0);

  // Function to increment the number of items added
  const incrementItem = () => {
    setItemsAdded(itemsAdded + 1);
  };

  // Function to decrement the number of items added
  const decrementItem = () => {
    if (itemsAdded > 0) {
      setItemsAdded(itemsAdded - 1);
    }
  };

  return (
    <View>
      {/* Custom header with the number of items added */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 16,
        }}
      >
        <Text>Item Details:</Text>
        <View
          style={{
            backgroundColor: 'blue',
            borderRadius: 10,
            padding: 4,
          }}
        >
          <Text style={{ color: 'white' }}>{itemsAdded}</Text>
        </View>
      </View>

      {/* Item details */}
      <Text>Name: {item.name}</Text>
      <Text>Category: {item.category}</Text>
      <Text>Price (INR): {item.price_inr}</Text>
      <Text>Description: {item.description}</Text>

      {/* Plus and minus buttons */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16,justifyContent:"center" }}>
        <TouchableOpacity onPress={decrementItem}>
          <View
            style={{
              backgroundColor: 'red',
              padding: 4,
              borderRadius: 4,
              marginRight: 8,
            }}
          >
            <Text style={{ color: 'white' }}>-</Text>
          </View>
        </TouchableOpacity>
        <Text style={{ fontSize: 18 }}>{itemsAdded}</Text>
        <TouchableOpacity onPress={incrementItem}>
          <View
            style={{
              backgroundColor: 'green',
              padding: 4,
              borderRadius: 4,
              marginLeft: 8,
            }}
          >
            <Text style={{ color: 'white' }}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ItemDisplay;
