import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/Logo.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Drawer } from "flowbite-react";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  let navlinkClass1 = ({ isActive }) =>
    `font-medium text-lg hover:text-[#8493FF] transition-colors duration-250 ease-linear tracking-wide ${
      isActive ? "text-[#8493FF]" : "text-[#212529]"
    }`;

  let navlinkClass2 = ({ isActive }) =>
    `font-medium text-xl transition-colors duration-250 ease-linear tracking-wide ${
      isActive ? "text-[#8493FF]" : "text-[#212529]"
    }`;

  // Hamburger's Drawer
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <nav className="z-40 fixed top-0 left-0 w-screen h-24 bg-[#F9F9FF] px-6 sm:px-10 flex items-center justify-between">
      {/* Logo */}
      <div>
        <img
          src={logo}
          alt="PTS LOGO"
          className="max-w-52"
          style={{
            boxShadow:
              "-5px -5px 0px 0px white, -9px -9px 0px 0px black, -12px -12px 0px 0px white, 5px 5px 0px 0px white, 9px 9px 0px 0px black, 12px 12px 0px 0px white",
          }}
        />
      </div>

      {/* Navlinks */}
      <ul className="hidden md:flex items-center gap-6 lg:gap-8">
        <li>
          <NavLink className={navlinkClass1} to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink className={navlinkClass1} to="/about">
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink className={navlinkClass1} to="/service">
            SERVICE
          </NavLink>
        </li>
        <li>
          <NavLink className={navlinkClass1} to="/review">
            REVIEW
          </NavLink>
        </li>
        <li>
          <NavLink className={navlinkClass1} to="/contact">
            CONTACT
          </NavLink>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <button
        className="md:hidden text-3xl p-1 border-2 border-black"
        onClick={() => setIsOpen(true)}
      >
        <GiHamburgerMenu />
      </button>

      {/* <=================== Drawer ======================> */}
      <Drawer
        open={isOpen}
        position="right"
        className="w-screen h-screen overflow-hidden p-0"
      >
        <nav className="w-full h-24 bg-[#F9F9FF] px-10 flex items-center justify-between mb-16">
          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="PTS LOGO"
              className="max-w-52"
              style={{
                boxShadow:
                  "-5px -5px 0px 0px white, -9px -9px 0px 0px black, -12px -12px 0px 0px white, 5px 5px 0px 0px white, 9px 9px 0px 0px black, 12px 12px 0px 0px white",
              }}
            />
          </div>

          <button
            onClick={handleClose}
            className="text-3xl p-1 border-2 border-black"
          >
            <IoMdClose />
          </button>
        </nav>

        {/* Navlinks */}
        <ul className="flex flex-col justify-center items-center gap-8">
          <li className="">
            <NavLink className={navlinkClass2} to="/" onClick={handleClose}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              className={navlinkClass2}
              to="/about"
              onClick={handleClose}
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              className={navlinkClass2}
              to="/service"
              onClick={handleClose}
            >
              SERVICE
            </NavLink>
          </li>
          <li>
            <NavLink
              className={navlinkClass2}
              to="/review"
              onClick={handleClose}
            >
              REVIEW
            </NavLink>
          </li>
          <li>
            <NavLink
              className={navlinkClass2}
              to="/contact"
              onClick={handleClose}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </Drawer>
    </nav>
  );
};

export default Navbar;
