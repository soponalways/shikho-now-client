import React, { use, useState } from 'react';
import MyEnrolledRow from './MyEnrolledRow';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyEnrolledList = ({ getEnrolledByEmail }) => {
    const [enrolledCourse, setEnrolledCourse] = useState(use(getEnrolledByEmail));
    
    if(enrolledCourse.length === 0 ) {
        return <div>
            <h3 className='text-2xl md:text-3xl lg:text-4xl font-medium md:font-semibold lg:font-bold text-center'>You Have not course enrolled yet</h3>
            <p className='text-center text-lg md:text-xl lg:text-2xl font-normal md:font-medium lg:font-bold my-4 md:my-6'>Please See our <Link className='text-blue-600 underline' to={'/courses'}>courses</Link> page and enrolled now to enrolle</p>
        </div>
    }
    return (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Title</th>
                        <th>Short Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* rows are here */}
                    {
                        enrolledCourse?.map((course, index) => <MyEnrolledRow
                            key={course._id}
                            course={course}
                            index={index}
                            setEnrolledCourse={setEnrolledCourse}
                            enrolledCourse={enrolledCourse}
                        ></MyEnrolledRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyEnrolledList;