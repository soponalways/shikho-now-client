import React from 'react';
import { Link, NavLink } from 'react-router';
import logoImage from '../../../assets/Logo/shikhonow.png'
import useAuth from '../../../hooks/useAuth';

const NavBar = () => {
    const { user } = useAuth();
    console.log('user on navbar ', user)

    const links = <>
        <li className='hover:bg-secondary rounded-sm'><NavLink to={'/'}>Home</NavLink></li>
        <li className='hover:bg-secondary rounded-sm'><NavLink to={'/courses'}>Courses</NavLink></li>
        <li className='hover:bg-secondary rounded-sm'><NavLink to={'/addCourse'}>Add Course</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/'><img className='w-12 md:w-24 lg:w-32 rounded-sm md:rounded-lg' src={logoImage} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal px-1">
                    {
                        user ? <>
                                <div className="avatar">
                                    <div className="w-6 md:w-8 lg:w-12 cursor-pointer rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </div>
                        </>
                            :
                            <>
                                <li className='hover:bg-secondary rounded-sm'><NavLink to='login'>Login</NavLink></li>
                                <li className='hover:bg-secondary rounded-sm'><NavLink to='Register'>Register</NavLink></li>
                            </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default NavBar;