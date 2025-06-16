import React, { use } from 'react';
import ManageCourseRow from './ManageCourseRow';

const ManageCurseList = ({ getCouresesByEmail }) => {
    const courses = use(getCouresesByEmail)
    console.log('data from the server ' , courses)
    console.log(getCouresesByEmail)
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
                        courses?.map((course, index) => <ManageCourseRow course={course} index={index} key={index}></ManageCourseRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageCurseList;