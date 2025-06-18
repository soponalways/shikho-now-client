import React from 'react';
import Home from '../Pages/MainLayout/Home/Home';
import { Outlet } from 'react-router';
import NavBar from '../Pages/MainLayout/Shared/NavBar';
import Footer from '../Pages/MainLayout/Shared/Footer';

const MainLayout = () => {
    return (
        <div className='container mx-auto'>
            <header>
                <NavBar></NavBar>
            </header>
            <main className='min-h-60 md:min-h-72 lg:min-h-96'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;