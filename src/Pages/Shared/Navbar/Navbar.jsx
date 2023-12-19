import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png"

const Navbar = () => {

    const navLinks = <>
            <li><NavLink to='/'>News</NavLink></li>
            <li><NavLink to='/destination'>Destination</NavLink></li>
            <li><NavLink to='/blog'>Blog</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
    
    </>


    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            navLinks
        }
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl font-bold">
        <img className="w-full h-full text-white" src={logo} alt="" />
    </a>
    
        <form className="w-full">
        <input type="text" placeholder="Search" className="input input-bordered  w-full" />
        </form>
      
    
  </div>
  <div className="navbar-center justify-center w-2/5 hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        navLinks
      }
    </ul>
  </div>
  <div className="justify-end lg:max-w-3/6 md:max-w-3/6">
    <a className="btn">Login</a>
  </div>
</div>


    );
};

export default Navbar;