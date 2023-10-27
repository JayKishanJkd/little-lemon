
import React from 'react';
import { View, TextInput, TouchableOpacity,Text } from 'react-native';
import styles from './login.style';


// SignUpForm Component
export default function SignUpForm({
    username,
    email,
    password,
    setUserName,
    setEmail,
    setPassword,
    handleSignup,
  }) {
    return (
      <View style={styles.containerData}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUserName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleSignup}>
          <Text style={styles.loginButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
  