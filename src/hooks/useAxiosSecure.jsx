import axios from 'axios';
import React, { use } from 'react';
import AuthContext from '../Context/AuthContext/AuthContext';
import { toast } from 'react-toastify';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
});

const useAxiosSecure = () => {
    const { user, logoutUser } = use(AuthContext); 
    const token = user?.accessToken; 

    axiosInstance.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${token}`
        return config
    })

    axiosInstance.interceptors.response.use((response) => {
        return response
    }, error => {
        if (error.status === 401 || error.status === 403) {
            logoutUser()
            .then(() => toast.success('You are succesfully signout'))
        }
        return Promise.reject(error)
    })
    
    return axiosInstance
};

export default useAxiosSecure;