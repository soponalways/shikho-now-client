import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const useEnrolledApi = () => {
    const axiosSecure = useAxiosSecure(); 
    const getEnrolledByEmail = (email) => {
        return axiosSecure.get(`/enrolled/course/?studentEmail=${email}`).then(res => res.data); 
    }
    return { getEnrolledByEmail }
};

export default useEnrolledApi;