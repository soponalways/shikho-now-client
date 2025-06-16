import { Link, useLocation } from 'react-router';
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

    if(!email || !slug || !course_id) {
        return <div>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-medium md:font-semibold lg:font-bold text-center my-3 md:my-4 lg:my-5'>Edit Course</h1>
            <h2 className='text-lg md:text-xl lg:text-2xl font-normal md:font-medium lg:font-semibold text-center text-red-500'>Sorry You can't directly access the course edit page</h2>
            <h3 className='text-sm md:text-base font-normal md:font-semibold text-center'>Please go first the <Link className='text-blue-400 underline' to='manageCourse'>Manage course</Link> and then try to edit course</h3>
        </div>
    }

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