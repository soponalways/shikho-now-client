import React from 'react';
import useDaysLeft from '../../../hooks/useDaysLeft';
import { Link } from 'react-router';

const CourseCard = ({ course }) => {
    const { courseTitle, startDate, lessons, imageURL, _id , slug} = course || {};
    const { daysLeft } = useDaysLeft(); 
    const dayLeft = daysLeft(startDate); 
    return (
        <div className="card bg-base-200 hover:border hover:border-accent-content shadow-sm">
            <figure>
                <img
                    src={imageURL}
                    alt={courseTitle} />
            </figure>
            <div className="card-body">
                <div className="card-actions justify-around border-b border-base-content/30 pb-3 md:pb-4 lg:pb-5">
                    <div className="badge badge-outline">{lessons} lessons</div>
                    <div className="badge badge-outline">{dayLeft > 0 ? `${dayLeft} day left` : 'Running'}</div>
                </div>
                <h2 className="card-title">
                    {courseTitle}
                </h2>

            </div>
                <Link to={`/course/${slug}/${_id}`} className='btn btn-accent hover:btn-secondary w-11/12 mx-auto my-3 md:my-4 lg:my-5'>See More</Link>
        </div>
    );
};

export default CourseCard;