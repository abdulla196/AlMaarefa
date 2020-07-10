import axios from 'axios'; 
export async function getUsers() { 
      const response = await axios.get('http://test.com/api/students');
      console.log(response);
      return response; 
  }