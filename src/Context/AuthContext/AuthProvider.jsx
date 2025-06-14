import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../../Firebase/firebase.config';


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true); 

    console.log(auth)
    
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const popUpSignIn = provider => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    };
    const passwordSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };
    const logoutUser = () => {
        setLoading(true)
        return signOut(auth);
    }
    
    const userInfo = {
        user, 
        setUser, 
        loading, 
        setLoading,
        createUser,
        popUpSignIn,
        passwordSignIn,
        logoutUser,
    }; 

    // Handle Side Effect 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, savedUser => {
            setLoading(false);
            setUser(savedUser)
            console.log(savedUser)
        });
        return () => {
            unSubscribe();
            setUser(null)
        }
    }, [])
    
    return <AuthContext value={userInfo}>{children}</AuthContext>
};

export default AuthProvider;