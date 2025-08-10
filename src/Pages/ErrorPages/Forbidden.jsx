import React from 'react';
import { Link } from 'react-router';

const Forbidden = () => {
    return (
        <div className='mb-5 md:mb-7 lg:mb-8'>
            <div className='flex flex-col items-center justify-center gap-4 my-10'>
                <Link to='/' className='btn btn-sm md:btn-md lg:btn-lg btn-secondary hover:btn-accent '>Go to Home</Link>
            </div>
            <div className='flex items-center justify-center'>
                <img
                    src='/403Forbidden.gif'
                    alt='Forbidden'
                    className='w-1/2 md:w-1/3 lg:w-1/4 rounded-lg md:rounded-xl lg:rounded-2xl shadow' />
            </div>
        </div>
    );
};

export default Forbidden;