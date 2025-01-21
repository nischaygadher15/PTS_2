import React, { useEffect, useId, useRef, useState } from "react";
import banner1 from "../assets/images/PTSWEBSITELAUNCH.jpeg";
import { NavLink } from "react-router-dom";
import "../App.css";
import { FaPlus } from "react-icons/fa";
import CountUp from "react-countup";
import projects from "../Data/Projects";
import About from "./About";
import Service from "./Service";
import Review from "./Review";
import Contact from "./Contact";

const Home = () => {
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

  //Work Tab Functionality
  let [filtered, setFiltered] = useState([]);

  let handleTabClick = (t) => {
    let tabButtons = document.getElementById("tabButtons");
    Array.from(tabButtons.children).forEach((b, inx) => {
      b.style.marginTop = "0px";
    });

    document.getElementById(t).style.marginTop = "-20px";

    switch (t) {
      case "tab-1":
        filterProjects("website");
        break;
      case "tab-2":
        filterProjects("graphicdesign");
        break;
      case "tab-3":
        filterProjects("socialmedia");
        break;
      default:
        filterProjects("all");
        break;
    }
  };

  // Filtering Projects
  let filterProjects = (pty) => {
    let temp = [];
    if (pty == "all") temp = [...projects];
    else temp = projects.filter((p) => p.type === pty);

    setFiltered(temp);
  };

  //Set to all in beginning
  useEffect(() => {
    handleTabClick("tab-0");
    filterProjects("all");
  }, []);

  // useEffect(() => console.log(filtered), [filtered]);

  return (
    <>
      {/* Hero Section */}
      {/* <section className="px-10 py-24 max-w-screen-sm min-h-screen md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl"> */}
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
              className="max-w-44 mt-3 py-4 text-center bg-[#62BDFC] text-white font-semibold hover:shadow-xl hover:shadow-[#b8ddf7] bgGradient"
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
      <About />

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
            <div
              className="flex justify-center items-center gap-8"
              id="tabButtons"
              onClick={(e) => handleTabClick(e.target.id)}
            >
              <button
                className="py-3 rounded-md px-8 text-center bg-[#62BDFC] text-white font-semibold hover:shadow-xl 
              hover:shadow-[#b8ddf7] uppercase text-nowrap bgGradient tabBtn"
                id="tab-0"
              >
                All
              </button>

              <button
                className="py-3 rounded-md px-8 text-center bg-[#62BDFC] text-white font-semibold hover:shadow-xl 
              hover:shadow-[#b8ddf7] uppercase text-nowrap bgGradient tabBtn"
                id="tab-1"
              >
                WEBSITE
              </button>

              <button
                className="py-3 rounded-md px-8 text-center bg-[#62BDFC] text-white font-semibold hover:shadow-xl 
              hover:shadow-[#b8ddf7] uppercase text-nowrap bgGradient tabBtn"
                id="tab-2"
              >
                Graphic Design
              </button>

              <button
                className="py-3 rounded-md px-8 text-center bg-[#62BDFC] text-white font-semibold hover:shadow-xl 
              hover:shadow-[#b8ddf7] uppercase text-nowrap bgGradient tabBtn"
                id="tab-3"
              >
                Social Media
              </button>
            </div>

            {/* Tab Content */}
            <div className="pt-16 grid grid-cols-3 gap-6">
              {filtered &&
                filtered.map((i, inx) => (
                  <div
                    key={`${key}-project-${inx}`}
                    className="relative overflow-hidden projectBox"
                  >
                    <img
                      src={i.img}
                      alt={`${i.name} Photo`}
                      className="rounded-md"
                    />
                    <div className="w-full h-full z-10 rounded-md projectTray bgGradient">
                      <a
                        href="#"
                        className="w-full h-full flex justify-center items-center"
                      >
                        <p className="text-white font-bold text-5xl">
                          {i.name}
                        </p>
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
      <Service />

      {/* Happy Clients Works */}
      <Review />

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
            className="w-44 mt-3 py-4 text-center bg-[rgb(103,230,65)] text-white font-semibold hover:shadow-lg
             hover:shadow-[rgb(158,241,132)] bgGradient"
          >
            CONTACT US
          </NavLink>
        </div>
      </section>

      {/* Contact Us Form */}
      <Contact />
    </>
  );
};

export default Home;
