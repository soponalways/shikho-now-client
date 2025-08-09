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
    const { user, logoutUser, loading } = useContext(AuthContext);
    const navigate = useNavigate(); 
    
    useEffect(() => {
        if(!user && !loading) return Promise.reject("User not loggedin")
        if (user?.accessToken) {
            // Add request interceptor
            const requestInterceptor = axiosInstance.interceptors.request.use(
                async(config) => {
                    config.headers.Authorization = `Bearer ${user.accessToken}`;
                    return config;
                }
            );

            // Add response interceptor
            const responseInterceptor = axiosInstance.interceptors.response.use(
                (res) => res,
                (err) => {
                    if (err?.response?.status === 401 || err?.response?.status === 403) {
                        logoutUser()
                            .then(() => {
                                console.log("Logged out due to token issue.");
                                toast.success('Logged out due to token issue.')
                                navigate('/login')
                            })
                            .catch(console.error);
                    }
                    return Promise.reject(err);
                }
            );

            // Cleanup to prevent multiple interceptors on re-renders
            return () => {
                axiosInstance.interceptors.request.eject(requestInterceptor);
                axiosInstance.interceptors.response.eject(responseInterceptor);
            };
        }
    }, [user, logoutUser,  loading, navigate]);

    return axiosInstance;

};

export default useAxiosSecure;