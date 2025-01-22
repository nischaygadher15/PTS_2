import React from "react";
import banner2 from "../assets/images/biologo (1)-min.jpg";
import { NavLink } from "react-router-dom";
import { Progress } from "flowbite-react";
import "../App.css";

const About = () => {
  return (
    <>
      {/* Company Details */}
      <section className="px-6 sm:px-10 py-24 min-h-screen max-w-full md:max-w-[900px] lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="flex flex-col md:flex-row gap-y-20 md:gap-y-0 gap-x-10 lg:gap-x-20 text-[#8e8f87] text-lg">
          <div className="w-full md:w-1/2 order-2 md:order-1 flex justify-center items-center">
            <img
              src={banner2}
              alt="PTS Banner"
              className="w-[90%]"
              style={{
                boxShadow: "-1.3rem -1.3rem #8490FF",
              }}
            />
          </div>

          <div className="w-full md:w-1/2 order-1 md:order-2 flex flex-col gap-y-5">
            <div className="text-black font-semibold">
              <span className="text-4xl sm:text-5xl text-center md:text-lef font-semibold">
                Company Details
              </span>
              <div className="flex items-center mt-3">
                <span className="bg-[#8490FF] w-4 h-4 rounded-full"></span>
                <span className="bg-[#8490FF] h-1 w-52"></span>
              </div>
            </div>
            <p className="mt-5">
              We are the most demanded SEO company in Ahmedabad . Are you
              looking for a cheap Social Media Marketing Ahmedabad service.
            </p>
            <p className="mb-7">
              The stunning design and eye-catching graphics design we can
              provide for your websites make us one of the top website
              development company in Ahmedabad. The company's services include
              SEO, Web Design & Development, Graphic Design, Social Media
              Marketing, Data Scraping services in Ahmedabad. Contact us today
              for more.
            </p>

            {/* Progress Bars */}
            <div>
              <Progress
                progress={95}
                color="blue"
                progressLabelPosition="outside"
                textLabel="Graphic Design"
                textLabelPosition="outside"
                size="md"
                labelProgress
                labelText
                className="mb-5"
              />
              <Progress
                progress={99}
                color="blue"
                progressLabelPosition="outside"
                textLabel="SEO"
                textLabelPosition="outside"
                size="md"
                labelProgress
                labelText
                className="mb-5"
              />
              <Progress
                progress={90}
                color="blue"
                progressLabelPosition="outside"
                textLabel="Social Media Marketing"
                textLabelPosition="outside"
                size="md"
                labelProgress
                labelText
                className="mb-5"
              />
              <Progress
                progress={85}
                color="blue"
                progressLabelPosition="outside"
                textLabel="HTML/CSS/JavaScript"
                textLabelPosition="outside"
                size="md"
                labelProgress
                labelText
                className="mb-5"
              />
              <Progress
                progress={95}
                color="blue"
                progressLabelPosition="outside"
                textLabel="Development"
                textLabelPosition="outside"
                size="md"
                labelProgress
                labelText
                className="mb-5"
              />
            </div>

            <NavLink
              to="/contact"
              className="w-36 md:w-44 mx-auto mt-3 py-2 md:py-4 text-center bg-[#62BDFC] text-white font-semibold hover:shadow-xl hover:shadow-[#b8ddf7] bgGradient"
            >
              CONTACT US
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
