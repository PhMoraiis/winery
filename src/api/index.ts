import axios from 'axios';

const API = axios.create({
    baseURL: 'https://nodedeploywineryoo-api.onrender.com',
});

export { API }