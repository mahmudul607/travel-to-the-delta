import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo1.png"
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const navLinks = <>
    <li><NavLink to='/'>News</NavLink></li>
    <li><NavLink to='/destination'>Destination</NavLink></li>
    <li><NavLink to='/blog'>Blog</NavLink></li>
    <li><NavLink to='/contact'>Contact</NavLink></li>

  </>

  const handleLogOut = () => {
    logOutUser();
  }


  return (
    <div className="navbar text-white backdrop-saturate-150 bg-black/30">
      <div className="navbar-start w-7/12">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {
              navLinks
            }
          </ul>
        </div>

        <div className="" >

          <img className="w-4/5 rounded" src={logo} alt="" />
        </div>



        <form className="w-full">
          <input type="text" placeholder="Search" className="input input-bordered text-black  w-full" />
        </form>


      </div>
      <div className="navbar-center justify-center w-2/6 hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            navLinks
          }
        </ul>
      </div>
      <div className="justify-end lg:max-w-3/6 md:max-w-3/6">
        {
          user ? <Link onClick={handleLogOut}>LogOut</Link> : <Link to='/login'>Login</Link>
        }

      </div>
    </div>


  );
};

export default Navbar;