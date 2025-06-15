import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/MainLayout/Home/Home";
import Login from "../Pages/MainLayout/Authentication/Login";
import Register from "../Pages/MainLayout/Authentication/Register";
import PrivateRoute from "../Routes/PrivateRoute";
import AddCourse from "../Pages/MainLayout/AddCourse/AddCourse";

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
            }
        ]
    }
])


export default router