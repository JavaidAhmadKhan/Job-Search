import React from "react";
import { Link } from "react-router-dom";

import Logo from '../assets/images/absolute_informations.webp'

const Navbar = () => {
  return (
    <nav className="flex items-center p-6 border-b sticky top-0 z-20 bg-white">
      <Link to='/' className="text-black/60 font-bold text-xl">
        <img
        className="w-36 h-auto object-cover object-center"
          src={Logo}
        />
      </Link>
      <ul className="flex items-center justify-between gap-4 ml-auto font-semibold text-[16px] text-black/60">
        <Link to={'/'}>
          <li>Home</li>
        </Link>
        <Link to={'/services'}>
          <li>Servies</li>
        </Link>
        <li>Team</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  )
};

export default Navbar;
