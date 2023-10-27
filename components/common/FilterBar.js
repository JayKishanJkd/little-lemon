// FilterBar.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants';
import styles from './filterBar.style';


const FilterBar = ({ filterCategory, setFilterCategory, searchText, setSearchText, onFilterPress }) => {
  return (
    <View style={{ flexDirection: 'row', margin: 10 }}>
      {/* Category filter input */}
      <TextInput
        style={styles.filterInput}
        placeholder="Filter by category"
        value={filterCategory}
        onChangeText={(text) => setFilterCategory(text)}
      />
      {/* Search input */}
      <TextInput
        style={styles.filterInput}
        placeholder="Search by name"
        placeholderTextColor={COLORS.primary}
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      {/* Filter button */}
      <TouchableOpacity style={styles.filterButton} onPress={onFilterPress}>
        <Text style={styles.filterButtonText}>Filter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilterBar;
