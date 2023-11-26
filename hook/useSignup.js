import axios from 'axios';
import { useState, useEffect } from "react";


const API_BASE_URL = 'https://troubled-shorts-fox.cyclic.cloud'; // Replace with your API URL
const SIGNUP_ENDPOINT = '/signup';


const UseSignUp = async (userData) => {
    try {
      //console.log({userData})
      const response = await axios.post(`${API_BASE_URL}/signup`, userData );
      
      return response.data; // Handle the response data as needed
    } catch (error) {
      // Handle sign-up error (e.g., display an error message)
      //console.log("Kamal")
      console.log('Sign-up error:',     error.response.status );
      //return error.response.data
      throw error
    }
    finally{
      console.log("inside usesign finally");
    }
  };

  export default UseSignUp;