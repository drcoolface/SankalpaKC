import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <nav className="w-full bg-white">
      <div
        className={` container mx-auto  flex flex-row    py-4 px-8 justify-between text-black`}
      >
        {/* <div className="  text-xl font-bold ">&lt;S/K&gt;</div> */}
        <div className="flex flex-grow text-lg items-center space-x-4 justify-center">
          <NavLink to="/" className={`hover:font-bold`}>
            Home
          </NavLink>

          <NavLink to="/Research" className={`hover:font-bold`}>
            Research
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
