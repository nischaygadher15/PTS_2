import React from "react";
import banner1 from "../assets/images/PTSWEBSITELAUNCH.jpeg";
import banner2 from "../assets/images/biologo (1)-min.jpg";
import { NavLink } from "react-router-dom";
import { Progress } from "flowbite-react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="px-10 py-24 max-w-screen-sm min-h-screen md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="flex gap-x-20 text-[#8e8f87] text-lg">
          <div className="w-1/2 flex flex-col gap-y-3">
            <p className="text-[#8493FF] font-semibold">WE ARE</p>
            <p className="text-6xl text-[#000A2D] font-bold uppercase leading-tight">
              Prahya Tech Services
            </p>
            <p>
              PRAHYA TECH SERVICES is Ahmedabad based one of the leading Website
              designing and development company. We provide high quality cost
              effective solution for website designing & development (Python)
              Company In Ahmedabad.
            </p>

            <NavLink
              to="/contact"
              className="max-w-44 mt-3 py-4 text-center bg-[#62BDFC] text-white font-semibold hover:shadow-xl hover:shadow-[#b8ddf7]"
            >
              CONTACT US
            </NavLink>
          </div>
          <div className="w-1/2">
            <img src={banner1} alt="PTS Banner" className="h-full" />
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="px-10 py-24 max-w-screen-sm min-h-screen md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="flex gap-x-20 text-[#8e8f87] text-lg">
          <div className="w-1/2">
            <img src={banner2} alt="PTS Banner" className="h-full" />
          </div>

          <div className="w-1/2 flex flex-col gap-y-3">
            <p className="text-[#8493FF] font-semibold">Company Details</p>
            <p className="">
              We are the most demanded SEO company in Ahmedabad . Are you
              looking for a cheap Social Media Marketing Ahmedabad service.
            </p>
            <p>
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
            </div>

            <NavLink
              to="/contact"
              className="max-w-44 mt-3 py-4 text-center bg-[#62BDFC] text-white font-semibold hover:shadow-xl hover:shadow-[#b8ddf7]"
            >
              CONTACT US
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
