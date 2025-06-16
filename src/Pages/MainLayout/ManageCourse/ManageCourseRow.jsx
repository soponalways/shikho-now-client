import React from 'react';
import { Link } from 'react-router';

const ManageCourseRow = ({course, index}) => {
    const {courseTitle, shortDescription, _id, slug , adminEmail} = course || {}; 
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{courseTitle}</td>
            <td>{shortDescription}</td>
            <td className='flex gap-1 md:gap-2 lg:gap-3'>
                <Link to={`/editCourse/?slug=${slug}&email=${adminEmail}&course_id=${_id}`} className='btn btn-secondary hover:btn-accent focus:btn-active btn-sm'>Edit</Link>
                <button className='btn btn-secondary hover:btn-accent focus:btn-active btn-sm'>Delete</button>
            </td>
        </tr>
    );
};

export default ManageCourseRow;