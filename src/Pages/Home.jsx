import React, { useEffect, useId, useRef, useState } from "react";
import banner1 from "../assets/images/PTSWEBSITELAUNCH.jpeg";
import banner2 from "../assets/images/biologo (1)-min.jpg";
import { NavLink } from "react-router-dom";
import { Button, Card, Carousel, Progress } from "flowbite-react";
import project from "../assets/images/website2.jpg";
import "../App.css";
import { FaGoogle, FaInstagram, FaPlus } from "react-icons/fa";
import CountUp from "react-countup";
import {
  IoAnalyticsOutline,
  IoColorFilterSharp,
  IoDesktop,
  IoDesktopSharp,
} from "react-icons/io5";
import opinions from "../Data/CustomerOpinions";
import CustomerCard from "../Components/CustomerCard";

const Home = () => {
  let projects = [
    "PROJECT 1",
    "PROJECT 2",
    "PROJECT 3",
    "PROJECT 4",
    "PROJECT 5",
    "PROJECT 6",
  ];

  // Unique key for components
  let key = useId();

  //Counters
  let [count1, setCount1] = useState(false);

  let startCounters = () => setCount1(true);

  // Intersectino Observer
  const counterObserver = useRef(null);

  useEffect(() => {
    // Define Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounters(); // Call the callback when the element is in the viewport
          }
        });
      },
      {
        threshold: 0.1, // Adjust this value to control when the callback is fired
      }
    );

    // Check wheather component exists or not
    if (counterObserver.current) {
      observer.observe(counterObserver.current);
    }

    // Cleanup function to unobserve the element when the component unmounts
    return () => {
      if (counterObserver.current) {
        observer.unobserve(counterObserver.current);
      }
    };
  }, []);

  //Carousel Theme
  const customTheme = {
    root: {
      base: "relative h-full w-full",
    },
    indicators: {
      active: {
        off: "bg-[#CCCCCC] hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
        on: "bg-[#007AFF] dark:bg-gray-800",
      },
      base: "h-3 w-3 rounded-full",
      wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
    },
    item: {
      base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
      wrapper: {
        off: "w-full flex-shrink-0 transform cursor-default snap-center",
        on: "w-full flex-shrink-0 transform cursor-grab snap-center",
      },
    },
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
      snap: "snap-x",
    },
  };

  //Customer Opinions
  let [customers, setCustomers] = useState([]);

  let createCusArray = () => {
    let temp = [];
    let buff = [];
    for (let i = 0; i < opinions.length; i++) {
      if (temp.length == 2) {
        buff.push(temp);
      } else {
        if (i == opinions.length - 1) buff.push(opinions[i]);
        else temp.push(opinions[i]);
      }
    }

    setCustomers(buff);
  };

  useEffect(() => createCusArray(), []);
  useEffect(() => console.log(customers), [customers]);

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
          <div className="w-1/2 flex justify-center items-center">
            <img
              src={banner2}
              alt="PTS Banner"
              className="w-[90%]"
              style={{
                boxShadow: "-1.3rem -1.3rem #8490FF",
              }}
            />
          </div>

          <div className="w-1/2 flex flex-col gap-y-5">
            <div className="text-black font-semibold">
              <span className="text-5xl font-semibold">Company Details</span>
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

      {/* Latest Works */}
      <section className="px-10 py-24 max-w-screen-sm min-h-screen md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="text-[#8e8f87] text-lg">
          <div className="w-1/2">
            <div className="text-black font-semibold">
              <span className="text-5xl font-semibold">Latest Works</span>
              <div className="flex items-center mt-3">
                <span className="bg-[#8490FF] w-4 h-4 rounded-full"></span>
                <span className="bg-[#8490FF] h-1 w-52"></span>
              </div>
            </div>
            <p className="mt-5 mb-16">
              We offers best Web Design Services, Website Design, Web
              Development, SEO Marketing Services,Social Media Marketing, PSD to
              HTML.
            </p>
          </div>
          <div className="w-full">
            {/* Tab Button */}
            <div className="flex justify-center items-center gap-8">
              <button
                className="mt-3 py-3 rounded-md px-8 text-center bg-[#62BDFC] text-white font-semibold hover:shadow-xl 
              hover:shadow-[#b8ddf7] uppercase text-nowrap"
              >
                All
              </button>
              <button
                className="mt-3 py-3 rounded-md px-8 text-center bg-[#62BDFC] text-white font-semibold hover:shadow-xl 
              hover:shadow-[#b8ddf7] uppercase text-nowrap"
              >
                WEBSITE
              </button>
              <button
                className="mt-3 py-3 rounded-md px-8 text-center bg-[#62BDFC] text-white font-semibold hover:shadow-xl 
              hover:shadow-[#b8ddf7] uppercase text-nowrap"
              >
                Graphic Design
              </button>
              <button
                className="mt-3 py-3 rounded-md px-8 text-center bg-[#62BDFC] text-white font-semibold hover:shadow-xl 
              hover:shadow-[#b8ddf7] uppercase text-nowrap"
              >
                Social Media
              </button>
            </div>

            {/* Tab Content */}
            <div className="pt-16 grid grid-cols-3 gap-6">
              {projects.map((i, inx) => (
                <div
                  key={`${key}-project-${inx}`}
                  className="relative overflow-hidden projectBox"
                >
                  <img
                    src={project}
                    alt={`${i} Photo`}
                    className="rounded-md"
                  />
                  <div className="w-full h-full z-10 rounded-md projectTray bgGradient">
                    <a
                      href="#"
                      className="w-full h-full flex justify-center items-center"
                    >
                      <p className="text-white font-bold text-5xl">{i}</p>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section
        className="py-24 w-screen text-white text-center flex justify-evenly bgGradient"
        ref={counterObserver}
      >
        <div>
          <div className="text-5xl font-bold mb-4 flex items-center">
            {count1 && (
              <CountUp
                start={0}
                end={2000}
                duration={3}
                delay={0}
                onEnd={() => setCount1(false)}
              />
            )}
            {!count1 && "2,000"}
            <FaPlus className="pt-2 ps-2 text-4xl" />
          </div>
          <p className="text-lg font-semibold">Website Completed</p>
          {/* <Button color="success" onClick={() => setCount1(true)}>
            Start
          </Button> */}
        </div>

        <div>
          <div className="text-5xl font-bold mb-4 flex items-center">
            {count1 && (
              <CountUp
                start={0}
                end={6000}
                duration={3}
                delay={0}
                onEnd={() => setCount1(false)}
              />
            )}
            {!count1 && "6,000"}
            <FaPlus className="pt-2 ps-2 text-4xl" />
          </div>
          <p className="text-lg font-semibold">Happy Clients</p>
        </div>

        <div>
          <div className="text-5xl font-bold mb-4 flex items-center">
            {count1 && (
              <CountUp
                start={0}
                end={5000}
                duration={3}
                delay={0}
                onEnd={() => setCount1(false)}
              />
            )}
            {!count1 && "5,000"}
            <FaPlus className="pt-2 ps-2 text-4xl" />
          </div>
          <p className="text-lg font-semibold">Grahpic Design Completed</p>
        </div>

        <div>
          <div className="text-5xl font-bold mb-4 flex items-center">
            {count1 && (
              <CountUp
                start={0}
                end={3000}
                duration={3}
                delay={0}
                onEnd={() => setCount1(false)}
              />
            )}
            {!count1 && "3,000"}
            <FaPlus className="pt-2 ps-2 text-4xl" />
          </div>
          <p className="text-lg font-semibold">SMM Project Completed</p>
        </div>
      </section>

      {/* Services Offers */}
      <section className="px-10 py-24 max-w-screen-sm min-h-screen md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="w-1/2 text-[#8e8f87] text-lg">
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

        <div className="grid grid-cols-3 gap-20">
          <Card className="cardShadow">
            <IoDesktopSharp className="text-7xl mx-auto" />

            <h5 className="text-xl text-center mt-3 font-semibold tracking-tight text-gray-900">
              Web Design
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              We are the most experienced and exceptionally believed Web Design
              Company in Ahmedabad. Get your Responsive Business Website Desgin
            </p>
          </Card>

          <Card className="cardShadow">
            <IoDesktop className="text-7xl mx-auto" />

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
            <IoColorFilterSharp className="text-7xl mx-auto" />

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
            <FaGoogle className="text-7xl mx-auto" />

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
            <FaInstagram className="text-7xl mx-auto" />

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
            <IoAnalyticsOutline className="text-7xl mx-auto" />

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

      {/* Happy Clients Works */}
      <section className="px-10 py-24 max-w-screen-sm min-h-screen md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="w-1/2 text-black font-semibold text-lg mb-10">
          <span className="text-5xl font-semibold">Happy Clients Works</span>
          <div className="flex items-center mt-3">
            <span className="bg-[#8490FF] w-4 h-4 rounded-full"></span>
            <span className="bg-[#8490FF] h-1 w-52"></span>
          </div>
        </div>
        <Carousel className="h-[60vh]" theme={customTheme}>
          {customers &&
            customers.map((arr, inx) => (
              <div
                className="h-full bg-white grid grid-cols-2"
                key={`${key}-customer-${inx}`}
              >
                {arr.map((ele, inx) => (
                  <CustomerCard
                    cusData={{ ...ele }}
                    key={`${key}-customerArr-${inx}`}
                  />
                ))}
              </div>
            ))}
        </Carousel>
      </section>

      {/* Available for 24/7 */}
      <section className="py-24 w-screen bg-[#7892FF]">
        <div className="h-full flex flex-col items-center justify-center gap-6 text-white">
          <p className="text-7xl">
            We Are <span className="text-[#A0F669]">Available</span> For 24/7*
          </p>
          <p>
            We offers best Web Design Services, Website Design, Web Development,
            SEO Marketing Services,Social Media Marketing, PSD to HTML.
          </p>

          <NavLink
            to="/contact"
            className="w-44 mt-3 py-4 text-center bg-[rgb(103,230,65)] text-white font-semibold hover:shadow-lg hover:shadow-[rgb(158,241,132)]"
          >
            CONTACT US
          </NavLink>
        </div>
      </section>

      {/* Contact Us Form */}
      <section className="px-10 min-h-screen py-24 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <form action="#"></form>
      </section>
    </>
  );
};

export default Home;
