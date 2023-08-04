import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center p-6 border-b sticky top-0 z-20 bg-white">
      <h1 className="text-black/60 font-bold text-xl">Job Search</h1>
      <ul className="flex items-center justify-between gap-4 ml-auto font-semibold text-[16px] text-black/60">
        <li>Home</li>
        <li>Servies</li>
        <li>Team</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  )
};

export default Navbar;
