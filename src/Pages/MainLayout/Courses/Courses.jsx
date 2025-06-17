import React from 'react';
import { useLoaderData } from 'react-router';
import CourseCard from './CourseCard';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div>
            <div>
                <title>All Course</title>
            </div>
            <div className='w-10/12 mx-auto'>
                <h2 className='text-2xl md:text-3xl lg:text-5xl font-medium md:font-semibold lg:font-bold text-center my-4 md:my-6 lg:my-8'>Learn More. Do More. Be More</h2>
                <h4 className='text-base md:text-lg lg:text-xl font-normal md:font-medium lg:font-semibold text-center'>Discover all that Shikho has to offer. From academic essentials to career-building skills, browse through our comprehensive catalog of courses and take the next step in your learning journey.</h4>
            </div>

            {/* All courses are here */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-5 my-4 md:my-6 lg:my-8 w-11/12 mx-auto'>
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

export default Courses;