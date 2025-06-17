import React, { Suspense } from 'react';
import MyEnrolledList from './MyEnrolledList';
import useEnrolledApi from '../../../Services/useEnrolledApi';
import LoadingSpineer from '../LoadingSpineer/LoadingSpineer';
import useAuth from '../../../hooks/useAuth';

const MyEnrolledCourses = () => {
    const { getEnrolledByEmail } = useEnrolledApi(); 
    const {user} = useAuth(); 
    return (
        <div>
            <div className='w-11/12 mx-auto'>
                <h2 className='text-3xl font-medium md:text-4xl md:font-semibold lg:text-5xl lg:font-bold text-center mt-4 md:mt-6 lg:mt-8'>Your Learning Journey Starts Here </h2>
                <h3 className='text-xl md:text-2xl lg:text-3xl font-medium md:font-semibold  text-center mt-2 md:mt-3 lg:mt-5'>Keep learning with Shikho Now – here are your enrolled courses.</h3>
                <p className='text-sm md:text-base lg:text-lg font-light md:font-normal lg:font-medium text-center text-gray-500 mt-2 md:mt-3 lg:mt-5'>
                    This section shows all the courses you’ve joined. Resume your lessons, check progress, and stay on track.View and manage all the courses you’ve enrolled in. Pick up where you left off and continue learning at your own pace.Here are the courses you've signed up for. Dive in and continue growing your skills anytime, anywhere.
                </p>
            </div>
            <div className='w-11/12 mx-auto my-4 md:my-6 lg:my-8'>
                <Suspense fallback={<LoadingSpineer></LoadingSpineer>}>
                    <MyEnrolledList getEnrolledByEmail={getEnrolledByEmail(user?.email)}></MyEnrolledList>
                </Suspense>
            </div>
        </div>
    );
};

export default MyEnrolledCourses;