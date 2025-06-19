import axios from 'axios';
import React, { useContext, useEffect} from 'react';
import AuthContext from '../Context/AuthContext/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
});

const useAxiosSecure = () => {
    const { user, logoutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        // Only add interceptor if token exists
        if (!user?.accessToken) return;

        const requestInterceptor = axiosInstance.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${user.accessToken}`;
            return config;
        });

        const responseInterceptor = axiosInstance.interceptors.response.use(
            response => response,
            async error => {
                const status = error.response?.status;
                if (status === 401 || status === 403) {
                    await logoutUser();
                    toast.error('Session expired. Please log in again.');
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        );

        // Cleanup to remove interceptors when component unmounts or user changes
        return () => {
            axiosInstance.interceptors.request.eject(requestInterceptor);
            axiosInstance.interceptors.response.eject(responseInterceptor);
        };
    }, [user?.accessToken, logoutUser, navigate]);
    return axiosInstance;
  };

export default useAxiosSecure;