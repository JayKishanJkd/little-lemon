import { View,Text,TouchableOpacity } from "react-native"; 
import React, { useState,useContext } from 'react';   
import AuthContext from '../utils/authContext';
import { COLORS, FONT, SIZES } from '../constants';
import styles from "./welcome.style";    
        
   export default function SignOut(){
    const { signOut } = useContext(AuthContext);     
      return(
        <View style={{flex:1}}>
        <TouchableOpacity style={styles.loginButton} onPress={signOut}>
          <Text style={styles.loginButtonText}>Sign Out</Text>
        </TouchableOpacity>
        </View>
        
    )
}