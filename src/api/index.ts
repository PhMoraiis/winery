import axios from 'axios';

const API = axios.create({
    baseURL: 'docker.thewineriesworld.com',
});

export { API }