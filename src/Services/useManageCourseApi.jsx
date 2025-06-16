import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const useManageCourseApi = () => {
    const axiosSecure = useAxiosSecure(); 

    const getCouresesByEmail = email => {
        return axiosSecure.get(`/manageCourse/?email=${email}`).then(res => res.data)
    }
    return {
        getCouresesByEmail
    };
};

export default useManageCourseApi;