import axios from 'axios';
import React, { use } from 'react';
import AuthContext from '../Context/AuthContext/AuthContext';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
});

const useAxiosSecure = () => {
    const { user} = use(AuthContext); 
    const token = user?.accessToken; 

    axiosInstance.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${token}`
        return config
    })


    
    return axiosInstance
};

export default useAxiosSecure;