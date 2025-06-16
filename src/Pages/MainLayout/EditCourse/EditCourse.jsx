import { useLocation } from 'react-router';
import useEditCourseApi from '../../../Services/useEditCourseApi';
import { Suspense } from 'react';
import EditCourseForm from './EditCourseForm';
import LoadingSpineer from '../LoadingSpineer/LoadingSpineer';

const EditCourse = () => {
    
    // For get the serach query
    const { search } = useLocation(); 

    const query = new URLSearchParams(search)
    const email = query.get('email'); 
    const slug = query.get('slug'); 
    const course_id = query.get('course_id')
    
    const { getCourseByIdEmailSlug } = useEditCourseApi();

    return (
        <>
            <div>
                <title>Edit The course</title>
            </div>
            <div className='w-11/12 mx-auto'>
                <div className='text-center space-y-2'>
                    <h2 className='text-xl  md:text-2xl lg:text-3xl font-medium md:font-semibold lg:font-bold'>Edit The Course</h2>
                    <p>Turn your expertise into impact — Update course and empower learners across the world with your knowledge.</p>
                </div>
                {/* Update form */}
                <Suspense fallback={<LoadingSpineer></LoadingSpineer>}>
                    <EditCourseForm
                        pendingPromise={getCourseByIdEmailSlug(course_id, email, slug)}
                    ></EditCourseForm>
                </Suspense>
            </div>
        </>
    );
};

export default EditCourse;