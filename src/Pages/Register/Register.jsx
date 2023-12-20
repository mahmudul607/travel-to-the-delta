import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext, useState } from "react";


const Register = () => {
    const { createUser} = useContext(AuthContext);
    const [successAlert, setSuccessAlert] = useState(null);
    const [errorAlert, setErrorAlert] = useState(null);

    const handleRegister = (e) =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        setSuccessAlert(null);
        setErrorAlert(null);
        createUser(email, password)
        .then(result =>{
            setSuccessAlert("User created successfully");
            alert("User created successfully")
            const user = result.user;
            console.log(user);

        } )
        .catch(err => {
            setErrorAlert(err.message)
            alert(err.message);
        
        });

        
    }
    return (
        <div>
            <Navbar></Navbar>

<div>
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col w-1/2">
            <div className="text-center">
                <h1 className="text-5xl font-bold">Register now!</h1>
               
            </div>
            <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                <form className="card-body pb-0" onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <span className="ml-8 text-sm pb-6">Already have an Account? Please <Link to='/login' className="text-green-800 font-bold">Login</Link></span>
                <div>
                    
                        <div className={`mx-auto w-4/5 pb-6 font-bold ${successAlert? "text-green-800" : "text-red-800"}`}>
                            {
                                successAlert&& <p>{successAlert}</p>
                            }
                            {
                                 errorAlert&& <p>{errorAlert}</p>
                            }
                        </div>
                        
                    
                 
                    
                       
                    
                </div>
               
            </div>
        </div>
    </div>
</div>
            
        </div>
    );
};

export default Register;