import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const MyEnrolledRow = ({ course, index, enrolledCourse, setEnrolledCourse }) => {
    const {user} = useAuth(); 
    const axiosSecure = useAxiosSecure();

    const { courseTitle , shortDescription, _id} = course || {}; 

     const handleRemoveEnrollment = email => {
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
                    axiosSecure.put(`/course/unEnrolle?studentEmail=${email}`)
                        .then(res => {
                            const data = res.data;
                            if (data.modifiedCount) {
                                Swal.fire({
                                    title: "Removed Enrolledment",
                                    text: "You Have Successfully UnEnrolled",
                                    icon: "success"
                                });
                                const remainingEnrolledCourses = enrolledCourse.filter(course => course._id !== _id);
                                setEnrolledCourse(remainingEnrolledCourses)
                            }
                        }).catch(error => {
                            console.log(error)
                            toast.error(error.message)
                        })
                }
            });
        }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{courseTitle}</td>
            <td>{shortDescription}</td>
            <td className='flex gap-1 md:gap-2 lg:gap-3'>
                <button onClick={() => handleRemoveEnrollment(user?.email)} className='btn btn-secondary hover:btn-accent focus:btn-active btn-sm'>Remove Enrollment</button>
            </td>
        </tr>
    );
};

export default MyEnrolledRow;