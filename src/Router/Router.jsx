import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/MainLayout/Home/Home";
import Login from "../Pages/MainLayout/Authentication/Login";
import Register from "../Pages/MainLayout/Authentication/Register";
import PrivateRoute from "../Routes/PrivateRoute";
import AddCourse from "../Pages/MainLayout/AddCourse/AddCourse";
import ManageCourse from "../Pages/MainLayout/ManageCourse/ManageCourse";
import LoadingSpineer from "../Pages/MainLayout/LoadingSpineer/LoadingSpineer";
import EditCourse from "../Pages/MainLayout/EditCourse/EditCourse";
import Courses from "../Pages/MainLayout/Courses/Courses";
import axios from "axios";

const router = createBrowserRouter([
    {
        path:'/', 
        Component: MainLayout, 
        children: [
            {
                index: true,
                Component: Home
            }, 
            {
                path:'/login', 
                Component: Login
            }, 
            {
                path: "/register", 
                Component: Register
            }, 
            {
                path: '/addCourse', 
                element: <PrivateRoute><AddCourse></AddCourse></PrivateRoute>
            }, 
            {
                path: '/manageCourse', 
                element: <PrivateRoute><ManageCourse></ManageCourse></PrivateRoute>
            }, 
            {
                path: '/editCourse/', 
                element: <PrivateRoute><EditCourse></EditCourse></PrivateRoute>
            }, 
            {
                path: '/courses', 
                Component: Courses, 
                loader: () => axios.get(`${import.meta.env.VITE_API_URL}/courses`).then(res => res.data), 
                HydrateFallback: LoadingSpineer
            }
        ]
    }
])


export default router