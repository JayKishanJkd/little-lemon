import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('https://troubled-shorts-fox.cyclic.cloud/Menu_items');
    return response.data; // Assuming the API returns an array of data
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
export default fetchData;