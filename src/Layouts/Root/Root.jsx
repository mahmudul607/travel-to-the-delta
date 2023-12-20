import { Outlet } from "react-router-dom";

import './Root.css'

const Root = () => {
    return (
        <div className="md:max-w-6xl mx-auto font-poppins main_section">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;