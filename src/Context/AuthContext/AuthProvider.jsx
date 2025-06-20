import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { auth } from '../../Firebase/firebase.config';


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true); 

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const updateUser = (updatedInfo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, updatedInfo)
    }
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
        updateUser,
        popUpSignIn,
        passwordSignIn,
        logoutUser,
    }; 

    // Handle Side Effect 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth,async savedUser => {
            
            if(savedUser?.email){
                const token = await savedUser.getIdToken(); 
                setLoading(false);
                setUser({
                    ...savedUser, 
                    accessToken : token
                })
            }else {
                setLoading(false)
                setUser(null)
            }
        });
        return () => {
            unSubscribe();
            setUser(null)
        }
    }, [])
    
    return <AuthContext value={userInfo}>{children}</AuthContext>
};

export default AuthProvider;