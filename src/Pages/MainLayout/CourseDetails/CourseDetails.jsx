import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const CourseDetails = () => {
    const course = useLoaderData();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure(); 
    const [isEnrolled, setIsEnrolled] = useState(false); 
    const userEmail = user?.email; 
    const {
        _id, 
        adminEmail,
        courseTitle,
        shortDescription,
        imageURL,
        duration,
        level,
        language,
        lessons,
        courseType,
        price,
        startDate,
        maxSeat,
        instractor,
        instractorImage,
        instractorBio,
        prerequisites,
        fullDescription, 
        enrolledStudents
    } = course || {};

    const handleEnrolle = (course_id , studentEmail) => {
        axiosSecure.put('/course/enroll', {course_id, studentEmail} )
        .then(res => {
            const data = res.data; 
            if (data.modifiedCount) {
                setIsEnrolled(true); 
                toast.success("You have succesfully enrolled for these course")
            }
        }).catch(error => {
            console.log(error)
            toast.error(error.message)
        })
    }; 

    // Hanlde side effect
    useEffect(() => {
        const enrolledStatus = enrolledStudents?.map(student => student.email === user?.email); 
        if(enrolledStatus === true) {
            setIsEnrolled(true)
        } else {
            setIsEnrolled(false); 
        }
        setIsEnrolled(enrolledStatus)
    }, [enrolledStudents, userEmail, course, user])
    return (
        <>
        <div>
            <title>Course Details | {courseTitle}</title>
        </div>
            <div className='w-11/12 mx-auto my-4 md:my-6 lg:my-8'>
                <div className='flex flex-col-reverse md:flex-row gap-4 md:gap-6 lg:gap-10 '>
                    <div className='space-y-2 md:space-y-4 lg:space-y-6'>
                        <div className='space-y-4 md:space-y-6 lg:space-y-8'>
                            <h2 className='text-xl md:text-2xl lg:text-3xl font-medium md:font-semibold lg:font-bold'>{courseTitle}</h2>
                            <p className='text-sm md:text-base lg:text-lg font-light md:font-normal lg:font-semibold'>{shortDescription}</p>
                        </div>
                        <div className='flex gap-4 md:gap-6 lg:gap-8 items-center'>
                            {/* Enrolled now button  */}
                            {
                                user ? <>
                                    <button onClick={() => handleEnrolle(_id, user?.email)} className='btn btn-secondary'>{isEnrolled ? "Alrady Enrolled" : "Enroll Now"}</button>
                                </>
                                    :
                                    <>
                                        <button disabled className='btn btn-secondary'>Enroll Now</button>
                                        <p className='text-red-500 '>Please login to Enroll</p>
                                    </>
                            }
                            <h1 className='text-lg md:text-xl lg:text-2xl font-medium md:font-semibold lg:font-bold hover:bg-base-300 p-2 md:p-3 lg:p-4 rounded-lg md:rounded-xl w-fit bg-base-200'>{price} BDT</h1>
                        </div>
                        {/* some simple Data */}
                        <div className='flex flex-wrap gap-2 md:gap-4 lg:gap-6'>
                            <p className='px-1 md:px-2 border border-base-content rounded-lg md:rounded-xl lg:rounded-2xl w-fit'>duration : {duration}</p>
                            <p className='px-1 md:px-2 border border-base-content rounded-lg md:rounded-xl lg:rounded-2xl w-fit'>Max seat {maxSeat}</p>
                            <p className='px-1 md:px-2 border border-base-content rounded-lg md:rounded-xl lg:rounded-2xl w-fit'>{courseType}</p>
                            <p className='px-1 md:px-2 border border-base-content rounded-lg md:rounded-xl lg:rounded-2xl w-fit'>{lessons} lessons</p>
                            <p className='px-1 md:px-2 border border-base-content rounded-lg md:rounded-xl lg:rounded-2xl w-fit'>Language: {language}</p>
                            <p className='px-1 md:px-2 border border-base-content rounded-lg md:rounded-xl lg:rounded-2xl w-fit'>Course level : {level}</p>
                        </div>
                    </div>
                    {/* Container two */}
                    <div>
                        <img className='w-full rounded-xl md:rounded-2xl lg:rounded-4xl' src={imageURL} alt={courseTitle} />
                    </div>
                </div>
                {/* below section  */}
                <div className='my-4 md:my-6 lg:my-8'>
                    <div className='my-4 md:my-6 lg:my-8 space-y-4 md:space-y-6 lg:space-y-8'>
                        <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold'>Instractor Information: </h3>
                        <div className='border border-base-content px-4 md:px-6 lg:px-8 py-2 md:py-4 lg:py-6 flex gap-4 md:gap-5 lg:gap-7 items-center rounded-2xl md:rounded-3xl lg:rounded-4xl'>
                            <div>
                                <h2 className='text-lg md:text-xl lg:text-4xl font-medium md:font-semibold lg:font-bold'>{instractor}</h2>
                                <h4 className='text-sm md:text-base lg:text-lg font-light md:font-normal lg:font-medium'>{adminEmail}</h4>
                                <h4 className='text-sm md:text-base lg:text-lg font-light md:font-normal lg:font-medium'>{instractorBio}</h4>
                            </div>
                            <div>
                                <img className='w-24 md:w-36 lg:w-48 rounded-xl md:rounded-2xl lg:rounded-3xl' src={instractorImage} />
                            </div>
                        </div>
                    </div>

                    <div className='space-y-3 md:space-y-4 lg:space-y-5'>
                        <div className='space-y-1 md:space-x-3 lg:space-x-4'>
                            <h3 className='text-base md:text-lg lg:text-xl font-normal md:font-medium lg:font-semibold'>Course Start Date {startDate}</h3>
                            <h3 className='text-base md:text-lg lg:text-xl font-normal md:font-medium lg:font-semibold'>Course Prerequisite : {prerequisites?.map((pre, i) => <span key={i}>{pre}</span>)}</h3>
                        </div>
                        <h3><span className='text-base md:text-lg lg:text-xl font-light md:font-normal lg:font-medium'>Description :</span> <br /> {fullDescription}</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseDetails;