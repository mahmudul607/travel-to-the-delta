
import { createBrowserRouter } from "react-router-dom";
import Destination from "../../Pages/Destination/Destination";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import News from "../../Pages/News/News";
import Root from "../../Layouts/Root/Root";





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
                }
            ]
        }
    ]);
 

export default Router;