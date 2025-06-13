import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/MainLayout/Home/Home";

const router = createBrowserRouter([
    {
        path:'/', 
        Component: MainLayout, 
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    }
])


export default router