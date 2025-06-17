import React, { useState } from 'react';
import GoogleSignIn from './Components/GoogleSignIn';
import GitHubSignIn from './Components/GitHubSignIn';
import useAuth from '../../../hooks/useAuth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser, updateUser } = useAuth(); 
    const [visible, setVisible] = useState(false); 
    const [confirmVisible, setConfirmVisible] = useState(); 
    const navigate = useNavigate(); 
    const location = useLocation(); 
    const from = location.state; 

    const handleRegister = e => {
        e.preventDefault(); 
        const form = e.target; 
        const formData = new FormData(form)
        const { password, confirmPassword , ...restUserData} = Object.fromEntries(formData.entries());

        // resset 
        setError('')
        
        if (!/^.{8,}$/.test(password)){
            setError('Password must be at-least 8 character long')
            return; 
        } else if (!/^(?=.*[A-Z]).+$/.test(password)){
            setError('Password must have 1 uppercase')
            return; 
        } else if (!/^(?=.*[a-z]).+$/.test(password)){
            setError('Password must have 1 lowercase letter')
            return; 
        } else if (!/^(?=.*[^a-zA-Z0-9]).+$/.test(password)){
            setError('Password must have 1 special character')
            return; 
        } else if (!/^(?=.*\d).+$/.test(password)){
            setError('Password must have 1 number')
            return; 
        } else if(password === restUserData.email) {
            setError('Your email address or password are same')
            return; 
        } else if(password !== confirmPassword) {
            setError("Password or confirm password must me same")
            return;
        }
        // console.log("Validation Successfull")

        createUser(restUserData.email, password) 
        .then(result => {
            if(result.user.email === restUserData.email) {
                updateUser({
                    displayName: restUserData.name, 
                    photoURL: restUserData.photo
                })
                .then(() => {
                    const userData = {
                        creationTime: result?.user?.metadata?.creationTime,
                        lastSignInTime: result?.user?.metadata?.lastSignInTime,
                        uid : result?.user?.uid, 
                        emailVerified: result?.user?.emailVerified,
                        ...restUserData
                    }

                    axios.post(`${import.meta.env.VITE_API_URL}/users`, userData)
                    .then(result => {
                        if (result.data.insertedId) {
                            toast.success('You have successfully registered'); 
                            navigate(from ? from : '/'); 
                        }
                    })
                    .catch(error => {
                        setError(error.message)
                    })
                })
                .catch(error => {
                    setError(error.message)
                })
            }
        })
        .catch(error => {
            setError(error.message)
        })
    }
    return (
        <div>
            <div>
                <title>Register a Account</title>
            </div>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md md:w-5/6 mx-auto border p-4">
                <legend className="fieldset-legend text-center text-xl md:text-2xl lg:text-3xl">Create An Account</legend>
                <p className="text-base text-center md:text-lg lg:text-xl font-semibold dark:text-gray-300 text-black">Enter your email and password and other neccesery data to below to Create an Account</p>

                {/* Scoaiol Register */}
                <div className="flex flex-col md:flex-row gap-2 md:gap-3 lg:gap-4 my-3 md:my-4 lg:my-5">
                    <div className="w-full">
                        <GoogleSignIn from={from} value='Continue with google'></GoogleSignIn>
                    </div>
                    <div className="w-full">
                        <GitHubSignIn from={from} value='Continue with github'></GitHubSignIn>
                    </div>
                </div>

                <div className="divider text-base md:text-lg lg:text-xl text-gray-500 font-medium"> Or Login With</div>

                {/* Register Form */}
                <form onSubmit={handleRegister} className="my-2 md:my-3 lg:my-4 space-y-1 md:space-y-2">
                    <div>
                        <label className="label text-lg">Name</label>
                        <input type="text" name="name" className="input w-full" placeholder="Type your name" />
                    </div>
                    <div>
                        <label className="label text-lg">Photo URL</label>
                        <input type="url" name="photo" className="input w-full" placeholder="Enter a Photo URL" />
                    </div>
                    <div>
                        <label className="label text-lg">Email</label>
                        <input type="email" name="email" className="input w-full" placeholder="Type Your Email" />
                    </div>
                    <div className='relative'>
                        <label className="label text-lg">Password</label>
                        <input type={visible ? 'text' : 'password'} name="password" className="input w-full" placeholder="Type A Password" />
                        <span className='absolute top-10 right-5 cursor-pointer' onClick={() => setVisible(previous => !previous)}>{visible ? <FaEyeSlash size={16} /> : <FaEye size={16} /> }</span>
                    </div>
                    <div className='relative'>
                        <label className="label text-lg">Password</label>
                        <input type={confirmVisible ? 'text' : 'password'} name="confirmPassword" className="input w-full" placeholder="Type Again Your Password" />
                        <span className='absolute top-10 right-5 cursor-pointer' onClick={() => setConfirmVisible(previous => !previous)}>{confirmVisible ? <FaEyeSlash size={16} /> : <FaEye size={16} />}</span>
                    </div>
                    {
                        error && <p className='text-red-500 font-medium text-base'>{error}</p>
                    }
                    <input type="submit" className="btn btn-secondary my-3" value="Register now" />
                </form>
            </fieldset>
        </div>
    );
};

export default Register;