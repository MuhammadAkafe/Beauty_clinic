import axios from 'axios';

console.log('Current environment:', import.meta.env.MODE);
console.log('API URL:', import.meta.env.VITE_API_URL);

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;

