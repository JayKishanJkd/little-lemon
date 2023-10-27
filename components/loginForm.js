
import React from 'react';
import { View, TextInput, TouchableOpacity,Text } from 'react-native';
import { COLORS, FONT, SIZES } from '../constants';

import styles from './login.style';

// LoginForm Component
export default function LoginForm({
    username,
    password,
    setUserName,
    setPassword,
    handleLogin,
  }) {
    return (
      <View style={styles.containerData}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUserName}
            placeholderTextColor={COLORS.primary}
            
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

