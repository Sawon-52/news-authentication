import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navber = () => {
  const links = (
    <>
      <li className="">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="">
        <NavLink to="/career">Career</NavLink>
      </li>
    </>
  );
  return (
    <div className="my-8">
      <div className="navbar bg-base-100 px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
              {links}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          <Link to="/login">
            <a className="bg-gray-700 text-white text-md p-2 px-5 cursor-pointer">Login</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
