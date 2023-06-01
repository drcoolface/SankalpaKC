import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ isDarkMode, toggleDarkMode }) => 
{
  return (
    <nav
      className={`sticky ${isDarkMode ? 'bg-gray-800' : 'bg-white'} py-4 px-8 flex justify-between items-center`}>
        
      <div className={`text-xl font-bold ${isDarkMode}? text-white : text-black`}>&lt;S/K&gt;</div>
      <div className="flex space-x-4">
        
      <NavLink to='/' className={`${
            isDarkMode ? 'text-white' :  'text-gray-800 '
          } hover:font-bold`}>  Home </NavLink>

      <NavLink to='/Research' className={`${
            isDarkMode ? 'text-white' : 'text-gray-800'
          } hover:font-bold`}> Research </NavLink>

      </div>
      <div>
      <button
  className={`${isDarkMode ? 'bg-white' : 'bg-gray-200'} text-gray-800 hover:bg-gray-100 px-4 py-2 rounded-full focus:outline-none`}
  onClick={toggleDarkMode}
>
  {!isDarkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
</button>
    </div>
    </nav>
  );
};

export default Navbar;

