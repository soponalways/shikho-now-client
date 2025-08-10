import React from 'react';
import image from '../../assets/404.gif'
import NavBar from '../MainLayout/Shared/NavBar';
import { Link, useLocation, useRouteError } from 'react-router';

const ErrorPage = () => {
    const location = useLocation(); 
    const error = useRouteError(); 
    console.log(error)
    return (
        <div>
            <title>
                {error?.message}
            </title>
            <NavBar></NavBar>
            <div className='flex justify-center items-center my-10 md:my-16 lg:my-20'>
                <Link to='/' className='btn btn-secondary hover:bg-accent mx-auto btn-sm md:btn-md lg:btn-lg'>Go to Home</Link>
            </div>
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-semibold md:font-bold lg:font-black text-center my-10 md:my-16 lg:my-20 '>{error?.status} {error?.response?.statusText}</h1>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold md:font-bold lg:font-black text-center my-3 md:my-6 lg:my-9 '>Error On this URL : {location.pathname}</h1>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold md:font-bold lg:font-black text-center my-3 md:my-6 lg:my-9 '>{error?.message}</h1>
            <div className='w-3/7 mx-auto'>
                <img src={image} className='w-full rounded-2xl md:rounded-3xl' alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;