// Welcome.js (Updated)
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import fetchData from '../hook/useMenuItem';
import FilterBar from '../components/common/FilterBar';
import MenuList from '../components/menu/MenuList';
import styles from './welcome.style';

const Welcome = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [filterCategory, setFilterCategory] = useState('');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData()
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        // Handle error
      });
  }, []);

   const filteredData = data.filter(
    (item) =>
      item.category.includes(filterCategory) &&
      item.name.toLowerCase().includes(searchText.toLowerCase())
  );
  filteredData.sort((a, b) => a.category.localeCompare(b.category));

  const onFilterPress = () => {
    // Apply category filter when the button is pressed
    // You can use this function to trigger filtering
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FilterBar
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          searchText={searchText}
          setSearchText={setSearchText}
          onFilterPress={onFilterPress}
        />
        <MenuList filteredData={filteredData} />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;




/*
import React, { useEffect, useContext, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import fetchData from '../hook/useMenuItem';
import AuthContext from '../utils/authContext';
import styles from './welcome.style';
import { COLORS } from '../constants';


const Welcome = ({navigation}) => {


    // Navigate to the desired screen when the button is clicked
    
    const [data, setData] = useState([]);
    const [filterCategory, setFilterCategory] = useState(''); // Category filter
    const [searchText, setSearchText] = useState(''); // Search text

    

      useEffect(() => {
        fetchData()
          .then((responseData) => {
            setData(responseData);
          })
          .catch((error) => {
            // Handle error
          });
      }, []);
  
   // Filter data based on category and search text
   const filteredData = data.filter(
    (item) =>
      item.category.includes(filterCategory) &&
      item.name.toLowerCase().includes(searchText.toLowerCase())
  );
  filteredData.sort((a, b) => a.category.localeCompare(b.category));

  return (

    <SafeAreaView  style={styles.container}>

      
      
      <View style={styles.container}>
        <View style={{flexDirection:'row' , margin:10}}> 
         
          <TextInput
            style={styles.filterInput}
            placeholder="Filter by category"
            value={filterCategory}
            onChangeText={(text) => setFilterCategory(text)}
          />
         
          <TextInput
            style={styles.filterInput}
            placeholder="Search by name"
            placeholderTextColor={COLORS.primary}
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
          
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => {
              // Apply category filter when the button is pressed
              // You can use this button to trigger filtering
          }}
          >
            <Text style={styles.filterButtonText}>Filter</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
        
          {filteredData.map((item) => (
            
            <TouchableOpacity>
                  <View key={item.serial_number} style={styles.cardContainer}>
              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                
                <View style={styles.itemContainer}>
                  <Text style={styles.nameText} >{item.category}</Text>                                                         
                </View>
                <View style={styles.nameContainer}>
                    
                  <Text style={styles.nameText} >{item.name}</Text>
                </View>
              </View>
              <View style={{flexDirection:'row', }}>
                 
                <View style={styles.priceContainer}>
                  <Text style={styles.priceText} > {item.price_inr}</Text>
                  <Text style={styles.priceTextConst} > Price  (INR)</Text>
                </View>
                <View style={styles.descriptionContainer}>
                  <Text 
                    numberOfLines={3} 
                    ellipsizeMode="tail"
                    style={styles.descriptionText}
                    >
                    Description: {item.description}
                  </Text>
                </View>                 
              </View>
              <View> 
                </View>
              </View>
            </TouchableOpacity>
          
          ))}
          

          
          </ScrollView>

        
        
      </View>
    </SafeAreaView>
    
  );
}


export default Welcome;
//<View style={{ borderBottomWidth: 1, borderBottomColor: 'gray' }} />
//<Image source={require('./assets/logo/LIttle-Lemon-Logo.png')} style={styles.logo} />


*/