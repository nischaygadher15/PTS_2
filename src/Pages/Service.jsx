import React from "react";
import { Card } from "flowbite-react";
import "../App.css";
import { FaGoogle, FaInstagram } from "react-icons/fa";
import {
  IoAnalyticsOutline,
  IoColorFilterSharp,
  IoDesktop,
  IoDesktopSharp,
} from "react-icons/io5";

const Service = () => {
  return (
    <>
      {/* Services Offers */}
      <section className="px-6 sm:px-10 py-24 min-h-screen max-w-full md:max-w-[900px] lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="lg:w-1/2 text-[#8e8f87] text-lg">
          <div className="text-black font-semibold">
            <span className="text-5xl font-semibold">Services offers</span>
            <div className="flex items-center mt-3">
              <span className="bg-[#8490FF] w-4 h-4 rounded-full"></span>
              <span className="bg-[#8490FF] h-1 w-52"></span>
            </div>
          </div>
          <p className="mt-5 mb-16">
            We offers best Web Design & Development Services,SEO Marketing
            Services,Social Media Marketing,Graphic Design & Data Scraping
            Company in Ahmedabad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-10 xl:gap-20">
          <Card className="cardShadow">
            <div className="service-icon w-28 h-24 flex justify-center items-center mx-auto">
              <IoDesktopSharp className="text-7xl" />
            </div>

            <h5 className="text-xl text-center mt-3 font-semibold tracking-tight text-gray-900">
              Web Design
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              We are the most experienced and exceptionally believed Web Design
              Company in Ahmedabad. Get your Responsive Business Website Desgin
            </p>
          </Card>

          <Card className="cardShadow">
            <div className="service-icon w-28 h-24 flex justify-center items-center mx-auto">
              <IoDesktop className="text-7xl mx-auto" />
            </div>

            <h5 className="text-xl text-center mt-3 font-semibold tracking-tight text-gray-900">
              Web Development
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              We offer secure, versatile and present day web development
              services to help you consistently associate with your clients and
              accomplices.
            </p>
          </Card>

          <Card className="cardShadow">
            <div className="service-icon w-28 h-24 flex justify-center items-center mx-auto">
              <IoColorFilterSharp className="text-7xl mx-auto" />
            </div>
            <h5 className="text-xl text-center mt-3 font-semibold tracking-tight text-gray-900">
              Grahpic Design
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Offer Custom logo plan and corporate Brand personality
              administration by an expert realistic and logo creators to arrive
              at the ideal market with certain.
            </p>
          </Card>

          <Card className="cardShadow">
            <div className="service-icon w-28 h-24 flex justify-center items-center mx-auto">
              <FaGoogle className="text-7xl mx-auto" />
            </div>
            <h5 className="text-xl text-center mt-3 font-semibold tracking-tight text-gray-900">
              SEO
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Our Search Engine Optimization administrations are planned with
              the goal to give our client sites the most ideal web-based
              presence.
            </p>
          </Card>

          <Card className="cardShadow">
            <div className="service-icon w-28 h-24 flex justify-center items-center mx-auto">
              <FaInstagram className="text-7xl mx-auto" />
            </div>
            <h5 className="text-xl text-center mt-3 font-semibold tracking-tight text-gray-900">
              Social Media Marketing
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              We are specialist Social media marketing experts in both
              Web-development, Design and Digital Marketing. We want to bring
              your business online or grow your performance .
            </p>
          </Card>

          <Card className="cardShadow">
            <div className="service-icon w-28 h-24 flex justify-center items-center mx-auto">
              <IoAnalyticsOutline className="text-7xl mx-auto" />
            </div>
            <h5 className="text-xl text-center mt-3 font-semibold tracking-tight text-gray-900">
              Data Scraping
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              PTS Scraping gives Web Scraping Services in Ahmedabad to Scrape
              Data from different sites and online sources. Our expert Web Data
              Scraping service are Python Web Scraping, Web Scraper Tools.
            </p>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Service;
