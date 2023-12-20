import { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Contact = () => {
    const {data} = useContext(AuthContext);
    console.log(data);
    return (
        <div>
            <Navbar></Navbar>
            this is contact page
            
        </div>
    );
};

export default Contact;