import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";
import Bottom2Top from "../Components/Bottom2Top";
import "../App.css";

const Layout = ({ children }) => {
  //Bottom to top Button Functionality
  let [scrollY, setScrollY] = useState(false);
  let webpage = useRef(null);

  let handleScroll = (e) => {
    if (e.target.scrollTop > 600) setScrollY(true);
    else setScrollY(false);
  };

  let handleB2T = () => {
    webpage.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    webpage.current.addEventListener("scroll", handleScroll);

    return () => webpage.current.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="max-w-screen min-h-screen overflow-x-hidden overflow-y-auto flex flex-col items-center"
      ref={webpage}
    >
      <Navbar />
      <main className="max-w-full pt-24 flex flex-col items-center">
        {children}
      </main>
      {scrollY && (
        <div className="absolute bottom-7 right-10">
          <Bottom2Top handler={handleB2T} />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Layout;
