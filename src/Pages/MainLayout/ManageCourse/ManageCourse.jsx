import React, { Suspense } from 'react';
import useManageCourseApi from '../../../Services/useManageCourseApi';
import ManageCurseList from './ManageCurseList';
import useAuth from '../../../hooks/useAuth';
import LoadingSpineer from '../LoadingSpineer/LoadingSpineer';

const ManageCourse = () => {
    const { getCouresesByEmail } = useManageCourseApi(); 
    const {user} = useAuth(); 
    return (
        <div>
            <div>
                <title>Manage Course || Shikho now</title>
            </div>
            <div className='w-11/12 mx-auto'>
                <h2 className='text-3xl font-medium md:text-4xl md:font-semibold lg:text-5xl lg:font-bold text-center mt-4 md:mt-6 lg:mt-8'>Seamless Course Management </h2>
                <h3 className='text-xl md:text-2xl lg:text-3xl font-medium md:font-semibold  text-center mt-2 md:mt-3 lg:mt-5'>From planning to performance — manage your courses effortlessly with Shikho.</h3>
                <p className='text-sm md:text-base lg:text-lg font-light md:font-normal lg:font-medium text-center text-gray-500 mt-2 md:mt-3 lg:mt-5'>
                    Shikho’s Course Management panel puts full control at your fingertips. From designing curriculum structures and uploading learning materials to setting schedules and monitoring progress — everything you need is in one place. Spend less time on admin tasks and more time delivering high-quality education. Because great teaching deserves great tools.
                </p>
            </div>
            {/* Form Start for here  */}
            <div className='w-11/12 mx-auto my-4 md:my-6 lg:my-8'>
                <Suspense fallback={<LoadingSpineer></LoadingSpineer>}>
                    <ManageCurseList getCouresesByEmail={getCouresesByEmail(user.email)}></ManageCurseList>
                </Suspense>
            </div>
        </div>
    );
};

export default ManageCourse;