import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';
import LoadingSpineer from '../Pages/MainLayout/LoadingSpineer/LoadingSpineer';

const PrivateRoute = ({children}) => {
    const { user, loading } = useAuth(); 
    const location = useLocation(); 
    
    if(loading) {
        return <LoadingSpineer></LoadingSpineer>
    }
    
    if(!user){
        return <Navigate to={'/login'} state={location.pathname}></Navigate>
    }
    
    return children
};

export default PrivateRoute;