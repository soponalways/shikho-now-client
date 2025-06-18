import React from 'react';
import image from '../../assets/404.gif'
import NavBar from '../MainLayout/Shared/NavBar';
import { useLocation } from 'react-router';

const ErrorPage = () => {
    const location = useLocation(); 
    return (
        <div>
            <NavBar></NavBar>
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-semibold md:font-bold lg:font-black text-center my-10 md:my-16 lg:my-20 '>404</h1>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold md:font-bold lg:font-black text-center my-10 md:my-16 lg:my-20 '>We are not found the url : {location.pathname}</h1>
            <div className='w-3/7 mx-auto'>
                <img src={image} className='w-full rounded-2xl md:rounded-3xl' alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;