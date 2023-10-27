import { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = 'https://troubled-shorts-fox.cyclic.cloud'; // Replace with your API URL
const LOGIN_ENDPOINT = '/login';
var response

const useLogin = async (userData) => {
    try {
        
      // console.log(userData);  
      response = await axios.post(`${API_BASE_URL}/login`, userData );

      //console.log('Received response:', response.data);
      return response.data; // Handle the response data as needed
    } catch (error) {
      //console.log('kamal')
      console.log('Login error:', error.response.data);
      //console.log(response.data);
      // Handle login error (e.g., display an error message)
      throw error;
      //return(error.response.data.message)
    }
  };
  

  export default useLogin ;