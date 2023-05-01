import axios from 'axios';

const API = axios.create({
    baseURL: 'http://docker.thewineriesworld.com/vinicolas',
});

export { API }