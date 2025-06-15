import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user} = useAuth(); 
    const location = useLocation(); 
    
    if(!user){
        return <Navigate to={'/login'} state={location.pathname}></Navigate>
    }
    
    return children
};

export default PrivateRoute;