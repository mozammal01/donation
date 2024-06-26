import { NavLink } from "react-router-dom";

const Navber = () => {
  return (
    <div className="navbar bg-white">

      <div className="navbar-start">

        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>

          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/donation">Donation</NavLink></li>
            <li><NavLink to="/statistics">Statistics</NavLink></li>
          </ul>

        </div>

        <div className="w-40">
          <img src="/public/images/Logo.png" alt="" />
        </div>

      </div>

      <div className="navbar-end hidden lg:flex">

        <ul className="menu menu-horizontal px-1 font-semibold">
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/donation">Donation</NavLink></li>
          <li><NavLink to="/statistics">Statistics</NavLink></li>
        </ul>

      </div>

    </div>
  );
};

export default Navber;