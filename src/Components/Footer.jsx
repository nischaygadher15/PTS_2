import React, { useId } from "react";
import { FaArrowRight, FaInstagram, FaLinkedin } from "react-icons/fa6";
import {
  IoCallOutline,
  IoLocationOutline,
  IoLogoFacebook,
} from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Footer = () => {
  let footLinkClass =
    "text-[rgba(255,255,255,0.6)] hover:text-white text-lg flex items-center gap-3";

  let links = ["Home", "About", "Service", "Company Detail", "Contact"];

  let eleKey = useId();

  let services = [
    "Web Design",
    "Web Development",
    "Grahpic Design",
    "SEO",
    "Social Media Marketing",
  ];
  return (
    <div className="py-24 px-10 w-screen h-screen bg-[#000a2d]">
      <div className="grid grid-cols-4 gap-20">
        {/* About */}
        <div>
          <p className="text-lg mb-10 font-medium text-white">About</p>
          <p className="text-[rgba(255,255,255,0.6)]">
            We offers best Web Design Services, Website Design, Web Development,
            SEO Marketing Services,Social Media Marketing, PSD to HTML.
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="text-xl mb-10 font-medium text-white">Links</p>
          <ul className="list-none">
            {links.map((l, inx) => (
              <li className="mb-3" key={`${eleKey}-links-${inx}`}>
                <NavLink to="/" className={footLinkClass}>
                  <FaArrowRight className="text-md" />
                  {l}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <p className="text-xl mb-10 font-medium text-white">Services</p>
          <ul className="list-none">
            {services.map((l, inx) => (
              <li className="mb-3" key={`${eleKey}-services-${inx}`}>
                <NavLink to="/" className={footLinkClass}>
                  <FaArrowRight className="text-md" />
                  {l}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Questions */}
        <div>
          <p className="text-xl mb-10 font-medium text-white">
            Have a Questions?
          </p>
          <ul className="list-none">
            <li className="mb-3">
              <a
                href="https://maps.app.goo.gl/FdvEEHqA7KAZMUqa8"
                className={footLinkClass}
              >
                <IoLocationOutline />
                <address>Ahmedabad, India</address>
              </a>
            </li>

            <li className="mb-3">
              <a href="tel:+919106740792" className={footLinkClass}>
                <IoCallOutline />
                +91 9106740792
              </a>
            </li>

            <li className="mb-3">
              <a
                href="mailto:prahyatechservices@gmail.com"
                className={footLinkClass}
              >
                <MdOutlineEmail />
                <span>prahyatechservices@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="text-white flex justify-center items-center gap-9 text-5xl py-12 ">
        <FaInstagram />
        <IoLogoFacebook />
        <FaLinkedin />
      </div>

      {/* Copyright */}
      <p className="text-[rgba(255,255,255,0.6)] text-center text-lg">
        Copyright @2022 All Rights Reserved | This Website is made by AYUSH
        Awasthi. | Redevloped by Gadher Nischay.
      </p>
    </div>
  );
};

export default Footer;
