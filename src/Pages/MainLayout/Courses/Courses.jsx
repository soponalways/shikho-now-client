import React from 'react';
import CourseCard from './CourseCard';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useState } from 'react';
import LoadingSpineer from '../LoadingSpineer/LoadingSpineer';

const Courses = () => {
    const axiosPublic = useAxiosPublic(); 
    const [sortValue , setSortValue] = useState("latest");
    const {data:courses=[], isLoading} = useQuery({
        queryKey: ['courses', sortValue],
        queryFn: () => axiosPublic.get(`/courses?sort=${sortValue}`).then(res => res.data)
    })

    // Handler Function
    const handleSortChange = (e) => {
        setSortValue(e.target.value);
    };
    if(isLoading) {
        return <div>
            <title>Loading courses</title>
            <LoadingSpineer></LoadingSpineer>
        </div>
    }
    return (
        <div>
            <div>
                <title>All Course</title>
            </div>
            <div className='w-10/12 mx-auto'>
                <h2 className='text-2xl md:text-3xl lg:text-5xl font-medium md:font-semibold lg:font-bold text-center my-4 md:my-6 lg:my-8'>Learn More. Do More. Be More</h2>
                <h4 className='text-base md:text-lg lg:text-xl font-normal md:font-medium lg:font-semibold text-center'>Discover all that Shikho has to offer. From academic essentials to career-building skills, browse through our comprehensive catalog of courses and take the next step in your learning journey.</h4>
            </div>
            {/* Sorting are here */}
            <div className='w-11/12 mx-auto my-4 md:my-6 lg:my-8'>
                <h3 className='text-lg md:text-xl lg:text-2xl font-medium md:font-semibold lg:font-bold mb-2 md:mb-3 lg:mb-4'>Explore Our Courses</h3>
                <p className='text-sm md:text-base lg:text-lg font-light md:font-normal lg:font-medium text-gray-500'>Browse through our extensive course offerings and find the perfect fit for your learning goals.</p>
                <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                    <div className='flex items-center mb-2 md:mb-0'>
                        <label htmlFor="sort" className='text-sm md:text-base lg:text-lg font-normal md:font-medium lg:font-semibold text-gray-500 mr-2'>Sort by:</label>
                        <select onChange={handleSortChange} id="sort" className='border text-primary border-gray-300 rounded-md p-1'>
                            <option value="latest">Latest</option>
                            <option value="oldest">Oldest</option>
                            <option value="highest-rated">Highest Rated</option>
                            <option value="lowest-rated">Lowest Rated</option>
                        </select>
                    </div>
                    {/* Do filtering functionality TODO: */}
                    {/* <div className='flex items-center'>
                        <label htmlFor="filter" className='text-sm md:text-base lg:text-lg font-normal md:font-medium lg:font-semibold text-gray-500 mr-2'>Filter by:</label>
                        <select id="filter" className='border text-primary border-gray-300 rounded-md p-1'>
                            <option value="all">All</option>
                            <option value="web-development">Web Development</option>
                            <option value="data-science">Data Science</option>
                            <option value="graphic-design">Graphic Design</option>
                        </select>
                    </div> */}
                </div>
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