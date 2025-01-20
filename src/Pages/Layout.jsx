import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";
import Bottom2Top from "../Components/Bottom2Top";

const Layout = ({ children }) => {
  //Bottom to top Button Functionality
  let [scrollY, setScrollY] = useState(false);
  let webpage = useRef(null);

  let handleScroll = (e) => {
    if (e.target.scrollTop > 600) setScrollY(true);
    else setScrollY(false);
  };

  let handleB2T = () => (webpage.current.scrollTop = 0);

  useEffect(() => {
    webpage.current.addEventListener("scroll", handleScroll);

    return () => webpage.current.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="w-screen h-screen overflow-x-hidden flex flex-col items-center"
      ref={webpage}
    >
      <Navbar />
      <main className="pt-24 flex flex-col items-center">{children}</main>
      {scrollY && <Bottom2Top handler={handleB2T} />}
      <Footer />
    </div>
  );
};

export default Layout;
