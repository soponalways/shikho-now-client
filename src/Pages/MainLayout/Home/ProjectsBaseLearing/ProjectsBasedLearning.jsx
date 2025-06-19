import React from 'react';
import image from '../../../../assets/home/ProjectBasedelaring.webp'
import { Link } from 'react-router';
import {motion} from 'motion/react'

const ProjectsBasedLearning = () => {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2 }}
            className='flex gap-4 md:gap-6 lg:gap-8 flex-col-reverse md:flex-row-reverse bg-base-200 w-11/12 mx-auto p-4 md:p-6 lg:p-10 rounded-xl md:rounded-2xl lg:rounded-3xl'>
            <div className='w-full md:w-1/2'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium md:font-semibold lg:font-bold mb-2 md:mb-4 lg:mb-5'>Project Based Learning</h2>
                <p className='text-xl md:text-2xl lg:text-3xl font-medium md:font-semibold lg:font-bold mb-0.5 md:mb-1 lg:mb-2'>Empowering Students Through Real-World Challenges</p>
                <p className='text-base md:text-lg lg:text-xl font-normal md:font-medium lg:font-semibold  mb-0.5 md:mb-1 lg:mb-2'>
                    Project-Based Learning (PBL) is a student-centered teaching method in which learners gain knowledge and skills by working over an extended period to investigate and respond to a complex question, problem, or challenge.
                </p>
                <Link to='/courses' className='btn btn-secondary hover:btn-accent'>View Courses</Link>
            </div>
            <div className='w-full md:w-1/2'>
                <img src={image} className='w-full rounded-xl md:rounded-2xl lg:rounded-r-2xl' alt="" />
            </div>
        </motion.div>
    );
};

export default ProjectsBasedLearning;