import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/index";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex justify-between items-center navbar py-6">
      <img src={logo} alt="hoobank" className="w-[125px] h-[30px]" />
      <ul className="list-none flex-1 justify-end items-center sm:flex hidden">
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={`text-white cursor-pointer text-[16px] ${
              i === navLinks.length - 1 ? "mr-0" : "mr-10"
            } `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="flex sm:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
      </div>
      <div
        className={`${
          toggle ? "flex" : "hidden"} p-6 mx-4 my-2 absolute top-20 right-0 bg-gray-600 min-w-[140px] rounded-xl sidebar xl:hidden md:hidden lg:hidden`}
      >
         <ul className="list-none flex-1 justify-end items-center flex flex-col">
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={`text-white cursor-pointer text-[16px] ${
              i === navLinks.length - 1 ? "mr-0" : "mb-4"
            } `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
