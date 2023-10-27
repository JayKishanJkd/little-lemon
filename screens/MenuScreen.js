import { StyleSheet, Text, View,Image,SafeAreaView,TouchableOpacity } from 'react-native';
import AuthContext from '../utils/authContext';
import { COLORS, FONT, SIZES } from '../constants';
import styles from './login.style';
import { useRoute } from '@react-navigation/native';

const MenuScreen = ({navigation}) => {
  


    // Navigate to the desired screen when the button is clicked
   
  

  return (
    <SafeAreaView  style={{flex:1 , backgroundColor:'#495E57'}}>
      <View style={{flex:1,backgroundColor:'#495E57',justifyContent:"center"}}>
      <Text>Menu screen</Text>
    </View>
      
    </SafeAreaView>
    
  );
}


export default MenuScreen;

//<Image source={require('./assets/logo/LIttle-Lemon-Logo.png')} style={styles.logo} />
