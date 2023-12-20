import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const [successAlert, setSuccessAlert] = useState(null);
    const [errorAlert, setErrorAlert] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        setSuccessAlert(null);
        setErrorAlert(null);
        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                alert('User logged in successfully');
                setSuccessAlert('User logged in successfully');
                {
                    navigate(location?.state? location.state : '/');
                }
            })
            .catch(err =>{
                console.log(err)
                alert(err.message);
                setErrorAlert(err.message);
            })


    }
    return (
        <div>
            <Navbar></Navbar>

            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col w-1/2">
                        <div className="text-center">
                            
                            <div className={`mx-auto w-4/5 pb-6 font-bold ${successAlert ? "text-green-800" : "text-red-800"}`}>
                                {
                                    successAlert && <p>{successAlert}</p>
                                }
                                {
                                    errorAlert && <p>{errorAlert}</p>
                                }
                            </div>
                            <h1 className="text-5xl font-bold">Login now!</h1>
                        </div>
                        <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                            <form className="card-body pb-0" onSubmit={handleLogin}>
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
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <span className="ml-8 text-sm">Do not have an Account ? Please <Link to='/register' className="text-green-800 font-bold">Register</Link></span>
                            <div className="w-1/2 mx-auto p-4">
                                <span className="flex items-center p-2 mb-2 btn btn-outline">Login With Google <FaGoogle className="ml-2"></FaGoogle></span>
                                <span className="flex items-center p-2 btn btn-outline">Login With Github <FaGithub className="ml-2"></FaGithub ></span>

                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;