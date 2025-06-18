import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import CourseCard from '../../Courses/CourseCard';

const CoursesSection = () => {
    const [courses , setCourses] = useState([]); 

    // Handle Side Effect 
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/courses/latest`)
        .then(res => setCourses(res.data))
        .catch(error => {
            toast.error(error.message)
        })
    }, [])
    return (
        <div>
            <div className='text-center space-y-2 md:space-y-3 lg:space-y-4'>
                <h3 className='text-3xl md:text-4xl lg:text-5xl font-medium md:font-semibold lg:font-bold'>Our Latest Courses</h3>
                <p className='font-normal md:font-medium lg:font-semibold'>Here are our latest courses. Student Can see our latest courses and enrolled the course there own persepective.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5 my-4 md:my-6 lg:my-8 w-11/12 mx-auto'>
                {
                    courses?.map(course => <CourseCard
                    key={course._id}
                    course={course}
                    ></CourseCard>)
                }
            </div>
        </div>
    );
};

export default CoursesSection;