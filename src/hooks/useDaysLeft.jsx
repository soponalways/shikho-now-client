import React from 'react';

const useDaysLeft = () => {
    const daysLeft = (startDate) => {
        const now = Date.now(); 
        const startTimeStamp = new Date(startDate).getTime(); 
        const timeDiffMs = startTimeStamp - now ; 
        const diff = Math.ceil(timeDiffMs / (1000 * 60 * 60 * 24)); 
        return diff; 
    }
    return {
        daysLeft
    }
};

export default useDaysLeft;