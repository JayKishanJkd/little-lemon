import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from './login.style';
import { useLogin, useSignUp } from '../hook';
import AuthContext from '../utils/authContext';
import LoginForm from '../components/loginForm';
import SignUpForm from '../components/signUpForm';

export default function LoginScreen({ navigation }) {
  // Context and State
  const { signIn } = useContext(AuthContext);
  const [activeButton, setActiveButton] = useState(true);
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to toggle between Login and Sign Up
  const handleToggle = (option) => {
    setActiveButton(option);
  };

  // Function to handle the Login action
  const handleLogin = async () => {
    try {
      const userData = { username, password };
      const response = await useLogin(userData);
      // Handle successful login (e.g., store authentication token)
      signIn(response);
    } catch (error) {
      // Handle login error (e.g., display an error message)
      console.error('Login unsuccessful:', error.response?.data.error);
    }
      finally{

      }
  };

  // Function to handle the Sign Up action
 const handleSignup = async () => {
    try {
      const userData = { username, password, email };
      const response = await useSignUp(userData);
      // Handle successful sign up (e.g., navigate to a success page)
      console.log('Sign Up successful:', response);
    } catch (error) {
      // Handle sign up error (e.g., display an error message)
      console.error('Sign Up unsuccessful:', error.response?.data.error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.containerKeyB}
    >
      <ScrollView
        keyboardDismissMode="none"
        contentContainerStyle={styles.containerScrollView}
      >
        <View style={styles.containerLogo}>
          <Image
            source={require('../assets/logo/LIttle-Lemon-Logo.png')}
            style={styles.logo}
          />
        </View>

        <View style={styles.containerData}>
          {/* Toggle Buttons */}
          <View style={{flex:0.5, width:'100%', }}>
            <View style={styles.toggleView}>
              <TouchableOpacity
                style={[
                  styles.toggleBtn,
                  activeButton === true && styles.selectedBtn,
                ]}
                onPress={() => handleToggle(true)}
              >
                <Text
                  style={[
                    styles.toggletxt,
                    activeButton === true && styles.selectedTxt,
                  ]}
                >
                  Login
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.toggleBtn,
                  activeButton === false && styles.selectedBtn,
                ]}
                onPress={() => handleToggle(false)}
              >
                <Text
                  style={[
                    styles.toggletxt,
                    activeButton === false && styles.selectedTxt,
                  ]}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>

            {/* Render Login or Sign Up Form */}
            {activeButton ? (
              // Login Form
              <LoginForm
                username={username}
                password={password}
                setUserName={setUserName}
                setPassword={setPassword}
                handleLogin={handleLogin}
              />
            ) : (
              // Sign Up Form
              <SignUpForm
                username={username}
                email={email}
                password={password}
                setUserName={setUserName}
                setEmail={setEmail}
                setPassword={setPassword}
                handleSignup={handleSignup}
              />
            )}
          </View>  
        
         
        </View>
      </ScrollView>
      <View style={styles.containerforgetPassword}>
            <Text style={styles.registerText}>
              Forget password? please reset here
            </Text>
          </View>
    </KeyboardAvoidingView>
  );
}

