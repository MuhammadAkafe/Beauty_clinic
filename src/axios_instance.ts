import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = process.env.REACT_APP_BASE_URL;
if (!BASE_URL) {
    throw new Error('REACT_APP_BASE_URL is not defined in the environment variables');
}

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});



export default axiosInstance;

