import React from 'react';

const LoadingSpineer = () => {
    return (
        <div className='flex justify-center items-center w-full min-h-10 md:min-h-14 lg:min-h-20'>
            <span className="loading loading-bars loading-xl text-green-500"></span>
        </div>
    );
};

export default LoadingSpineer;