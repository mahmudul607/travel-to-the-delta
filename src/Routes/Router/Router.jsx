
import { createBrowserRouter } from "react-router-dom";
import Destination from "../../Pages/Destination/Destination";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import News from "../../Pages/News/News";
import Root from "../../Layouts/Root/Root";
import Booking from "../../Pages/Booking/Booking";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";





    const Router = createBrowserRouter([
        {
            path: '/',
            element:<Root></Root>,
            children: [
                {
                    path: '/',
                    element:<News></News>

                },
                {
                    path: '/destination',
                    element:<Destination></Destination>
                },
                {
                    path: '/blog',
                    element:<Blog></Blog>
                },
                {
                    path: '/contact',
                    element:<Contact></Contact>
                },
                {
                    path: '/booking',
                    element:<PrivateRoute><Booking></Booking></PrivateRoute>
                },
                {
                    path: '/login',
                    element:<Login></Login>
                },
                {
                    path: '/register',
                    element:<Register></Register>
                }
            ]
        }
    ]);
 

export default Router;