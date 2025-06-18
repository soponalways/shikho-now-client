import React from 'react';

const ArrowButton = ({ className, style, onClick }) => {
    return (
        <div
            className={`${className} btn`}
            style={{ ...style, display: "block", background: "gray", borderRadius: '9999px' }}
            onClick={onClick}
        />
    );
};

export default ArrowButton;