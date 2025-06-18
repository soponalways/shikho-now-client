import React from 'react';
import image from '../../../../assets/home/learnToEarn.jpg'
import { Link } from 'react-router';

const LearingingIsEarning = () => {
    return (
        <div className='flex gap-4 md:gap-6 lg:gap-8 flex-col-reverse md:flex-row bg-base-200 w-11/12 mx-auto p-4 md:p-6 lg:p-10 rounded-xl md:rounded-2xl lg:rounded-3xl'>
            <div className='w-full md:w-1/2'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium md:font-semibold lg:font-bold mb-2 md:mb-4 lg:mb-5'>Learn to Earn</h2>
                <p className='text-xl md:text-2xl lg:text-3xl font-medium md:font-semibold lg:font-bold mb-0.5 md:mb-1 lg:mb-2'>The Smarter You Get, the Richer You Become</p>
                <p className='text-base md:text-lg lg:text-xl font-normal md:font-medium lg:font-semibold  mb-0.5 md:mb-1 lg:mb-2'>
                    Learn to Earn is your gateway to transforming knowledge into real-world success. Whether you're just starting out or looking to sharpen your skills, this section empowers you with practical learning designed to boost your earning potential. Discover courses, tools, and resources that help you grow personally and professionally — because the more you learn, the more you can earn.
                </p>
                <Link to='/courses' className='btn btn-secondary hover:btn-accent'>View Courses</Link>
            </div>
            <div className='w-full md:w-1/2'>
                <img src={image} className='w-full rounded-xl md:rounded-2xl lg:rounded-r-2xl' alt="" />
            </div>
        </div>
    );
};

export default LearingingIsEarning;