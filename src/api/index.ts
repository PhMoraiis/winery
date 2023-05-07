import axios from 'axios';

const API = axios.create({
    baseURL: 'http://api.thewineriesworld.com/vinicolas',
});

export { API }