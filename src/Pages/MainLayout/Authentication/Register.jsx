import React from 'react';
import GoogleSignIn from './Components/GoogleSignIn';
import GitHubSignIn from './Components/GitHubSignIn';

const Register = () => {
    return (
        <div>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md md:w-5/6 mx-auto border p-4">
                <legend className="fieldset-legend text-center text-xl md:text-2xl lg:text-3xl">Create An Account</legend>
                <p className="text-base text-center md:text-lg lg:text-xl font-semibold dark:text-gray-300 text-black">Enter your email and password and other neccesery data to below to Create an Account</p>

                {/* Scoaiol Register */}
                <div className="flex flex-col md:flex-row gap-2 md:gap-3 lg:gap-4 my-3 md:my-4 lg:my-5">
                    <div className="w-full">
                        <GoogleSignIn value='Continue with google'></GoogleSignIn>
                    </div>
                    <div className="w-full">
                        <GitHubSignIn value='Continue with github'></GitHubSignIn>
                    </div>
                </div>

                <div className="divider text-base md:text-lg lg:text-xl text-gray-500 font-medium"> Or Login With</div>

                {/* Register Form */}
                <form className="my-2 md:my-3 lg:my-4 space-y-1 md:space-y-2">
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
                    <div>
                        <label className="label text-lg">Password</label>
                        <input type="password" name="password" className="input w-full" placeholder="Type A Password" />
                    </div>
                    <div>
                        <label className="label text-lg">Password</label>
                        <input type="password" name="confirmPassword" className="input w-full" placeholder="Type Again Your Password" />
                    </div>
                    <input type="submit" className="btn btn-secondary my-3" value="Register now" />
                </form>
            </fieldset>
        </div>
    );
};

export default Register;