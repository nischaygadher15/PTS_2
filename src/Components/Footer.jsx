import React, { useId } from "react";
import { CiMail } from "react-icons/ci";
import { FaArrowRight, FaInstagram, FaLinkedin } from "react-icons/fa6";
import {
  IoCallOutline,
  IoLocationOutline,
  IoLogoFacebook,
} from "react-icons/io5";
import { NavLink } from "react-router-dom";
import "../App.css";

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
    <footer className="w-screen flex justify-center bg-[#000a2d]">
      <div className="px-6 sm:px-10 py-24 min-h-screen max-w-full md:max-w-[900px] lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20">
          {/* About */}
          <div>
            <p className="text-lg mb-10 font-medium text-white">About</p>
            <p className="text-[rgba(255,255,255,0.6)]">
              We offers best Web Design Services, Website Design, Web
              Development, SEO Marketing Services,Social Media Marketing, PSD to
              HTML.
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
                  className={`${footLinkClass} flex flex-wrap items-center`}
                >
                  <CiMail />
                  <span className="">prahyatechservices @gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="text-white flex justify-center items-center gap-9 text-4xl md:text-5xl py-12 ">
          <div className="media-icon w-16 h-16  md:w-20 md:h-20 flex justify-center items-center">
            <FaInstagram />
          </div>
          <div className="media-icon w-16 h-16  md:w-20 md:h-20 flex justify-center items-center">
            <IoLogoFacebook />
          </div>
          <div className="media-icon w-16 h-16  md:w-20 md:h-20 flex justify-center items-center">
            <FaLinkedin />
          </div>
        </div>

        {/* Copyright */}
        <p className="text-[rgba(255,255,255,0.6)] text-center text-lg">
          Copyright @2022 All Rights Reserved | This Website is made by AYUSH
          Awasthi. | Redevloped by Gadher Nischay.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
