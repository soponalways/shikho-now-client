import React from 'react';
import Home from '../Pages/MainLayout/Home/Home';
import { Outlet } from 'react-router';
import NavBar from '../Pages/MainLayout/Shared/NavBar';
import Footer from '../Pages/MainLayout/Shared/Footer';

const MainLayout = () => {
    return (
        <div>
            <header className='sticky top-0 z-10  bg-base-200 w-full mb-2 md:mb-4 lg:mb-5'>
                <NavBar></NavBar>
            </header>
            <main className='min-h-60 md:min-h-72 lg:min-h-96 container mx-auto'>
                <Outlet></Outlet>
            </main>
            <footer className='bg-base-200 '>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;