import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', //Nuestro backend (Express)
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;