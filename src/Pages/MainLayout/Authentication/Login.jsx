import { useLocation, useNavigate } from "react-router";
import GitHubSignIn from "./Components/GitHubSignIn";
import GoogleSignIn from "./Components/GoogleSignIn";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
    const location = useLocation(); 
    const from = location.state; 
    const { passwordSignIn, setUser } = useAuth(); 
    const navigate = useNavigate(); 

    const handleSignin = (e) => {
        e.preventDefault(); 
        const form = e.target; 
        const email = form.email.value; 
        const password = form.password.value; 
        
        passwordSignIn(email, password)
        .then(result => {
            setUser(result.user); 
            const userData = result?.user?.metadata?.lastSignInTime; 
            axios.patch(`${import.meta.env.VITE_API_URL}/users/${result?.user?.email}`, {userData})
            .then(data => {
                if (data.data.matchedCount) {
                    toast.success('You have Successfully Sign in with email and password')
                    navigate(from ? from :'/'); 
                }
            })
            .catch(error => toast.warning(error.message))
        })
        .catch(error => {
            console.log(error.message); 
            toast.warning(error.message)
        })
    }
    return (
        <div>
            <div>
                <title>Login Your Account</title>
            </div>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md mx-auto border p-4">
                <legend className="fieldset-legend text-center text-xl md:text-2xl lg:text-3xl">Login Your Account</legend>
                <p className="text-base md:text-lg lg:text-xl font-semibold dark:text-gray-300 text-black">Enter your email and password to below to Login your account</p>
                <div className="flex flex-col md:flex-row gap-2 md:gap-3 lg:gap-4 my-3 md:my-4 lg:my-5">
                    <div className="w-full">
                        <GoogleSignIn from={from} value='Login with google'></GoogleSignIn>
                    </div>
                    <div className="w-full">
                        <GitHubSignIn from={from} value='Login with github'></GitHubSignIn>
                    </div>
                </div>
                <div className="divider text-base md:text-lg lg:text-xl text-gray-500 font-medium"> Or Login With</div>
                <form onSubmit={handleSignin} className="my-2 md:my-3 lg:my-4 space-y-1 md:space-y-2">
                    <div>
                        <label className="label text-lg">Email</label>
                        <input type="email" name="email" className="input w-full" placeholder="Enter Your Email" />
                    </div>
                    <div>
                        <label className="label text-lg">Password</label>
                        <input type="password" name="password" className="input w-full" placeholder="Enter Your Password" />
                    </div>
                    <input type="submit" className="btn btn-secondary my-3" value="Login now" />
                </form>
            </fieldset>
        </div>
    );
};

export default Login;