import React from 'react';

const ManageCourseRow = ({course, index}) => {
    const {courseTitle, shortDescription } = course || {}; 
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{courseTitle}</td>
            <td>{shortDescription}</td>
            <td className='flex gap-1 md:gap-2 lg:gap-3'>
                <button className='btn btn-secondary hover:btn-accent focus:btn-active btn-sm'>Edit</button>
                <button className='btn btn-secondary hover:btn-accent focus:btn-active btn-sm'>Delete</button>
            </td>
        </tr>
    );
};

export default ManageCourseRow;