import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import './Root.css'

const Root = () => {
    return (
        <div className="md:max-w-6xl mx-auto font-poppins main-section ">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;