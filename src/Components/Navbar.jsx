import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/Logo.jpg";

const Navbar = () => {
  let navlinkClass = ({ isActive }) =>
    `font-medium text-lg hover:text-[#8493FF] transition-colors duration-250 ease-linear tracking-wide ${
      isActive ? "text-[#8493FF]" : "text-[#212529]"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-screen h-24 bg-[#F9F9FF] px-10 flex items-center justify-between">
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
      <ul className="flex items-center gap-8">
        <li>
          <NavLink className={navlinkClass} to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink className={navlinkClass} to="/about">
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink className={navlinkClass} to="/service">
            SERVICE
          </NavLink>
        </li>
        <li>
          <NavLink className={navlinkClass} to="/review">
            REVIEW
          </NavLink>
        </li>
        <li>
          <NavLink className={navlinkClass} to="/contact">
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
