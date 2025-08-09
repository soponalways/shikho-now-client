import React from 'react';
import { Link } from 'react-router';
import { motion } from "motion/react"

const CourseCard = ({ course }) => {
    const { courseTitle, startDate, shortDescription,  imageURL, _id , slug} = course || {};

    const transition = {
        ease: [0, 0.71, 0.2, 1.01],
        duration: 2, 
        type: "spring",
        bounce: 0.25
    }
    return (
        <motion.div 
        className="card bg-base-200 hover:border hover:border-accent-content/20 shadow-sm"
        initial={{transform: 'translateY(100px)', opacity: 0}}
        whileInView={{transform: 'translateY(0)', opacity: 1}}
        transition={transition}
        >
            <figure>
                <img
                    className='hover:scale-105 w-full h-48 md:h-60 lg:h-72 object-center transform transform-3d duration-150'
                    src={imageURL}
                    alt={courseTitle} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {courseTitle}
                </h2>
                <p>{shortDescription?.slice(0, 100)}...</p>

            </div>
            <Link to={`/course/${slug}/${_id}`} className='btn hover:btn-accent btn-secondary w-11/12 mx-auto my-3 md:my-4 lg:my-5'>See More</Link>
        </motion.div>
    );
};

export default CourseCard;