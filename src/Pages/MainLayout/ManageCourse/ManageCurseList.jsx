import React, { use, useState } from 'react';
import ManageCourseRow from './ManageCourseRow';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

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