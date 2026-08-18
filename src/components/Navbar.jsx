import { NavLink } from "react-router-dom";

import { Logo } from "../assets/images";

const linkClass = ({ isActive }) => (isActive ? "text-blue-600" : "text-black");

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={Logo} alt='Suman Raj' className='w-18 h-18 object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={linkClass}>
          About
        </NavLink>
        <NavLink to='/projects' className={linkClass}>
          Projects
        </NavLink>
        <NavLink to='/contact' className={linkClass}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
