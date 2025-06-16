import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const useEditCourseApi = () => {
    const axiosSecure = useAxiosSecure(); 
    const getCourseByIdEmailSlug = (id, email , slug) => {
        return axiosSecure.get(`/course/`, {
            params : {
                course_id : id, 
                email, 
                slug
            }
        }).then(res => res.data)
    }
    return {
        getCourseByIdEmailSlug
    }
};

export default useEditCourseApi;
