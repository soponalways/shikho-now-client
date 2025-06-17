import React, { use, useState } from 'react';
import ManageCourseRow from './ManageCourseRow';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const ManageCurseList = ({ getCouresesByEmail }) => {
    const axiosSecure = useAxiosSecure();
    const [courses, setCourses] = useState(use(getCouresesByEmail))

    const handleDeleteCourse = (adminEmail, _id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/course/${adminEmail}/${_id}`)
                    .then(res => {
                        const data = res.data;
                        if (data.deletedCount) {
                            const remainingCourse = courses.filter(course => course._id !== _id); 
                            setCourses(remainingCourse); 
                            
                            Swal.fire({
                                title: "Deleted!",
                                text: "These course has been successfully Delete",
                                icon: "success"
                            });
                        }
                    }).catch(error => {
                        console.log(error)
                        toast.warning(error.message);
                    })
            }
        });
    }

    if(courses.length === 0 ) {
            return <div>
                <h3 className='text-2xl md:text-3xl lg:text-4xl font-medium md:font-semibold lg:font-bold text-center'>You Have not add a Course</h3>
                <p className='text-center text-lg md:text-xl lg:text-2xl font-normal md:font-medium lg:font-bold my-4 md:my-6'>Please go to <Link className='text-blue-600 underline' to={'/addCourse'}>Add course</Link> page and then course add</p>
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
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* rows are here */}
                    {
                        courses?.map((course, index) => <ManageCourseRow
                            course={course}
                            index={index}
                            key={index}
                            handleDeleteCourse={handleDeleteCourse}
                        ></ManageCourseRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageCurseList;