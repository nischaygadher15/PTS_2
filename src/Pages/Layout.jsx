import React, { useContext, useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Bottom2Top from "../Components/Bottom2Top";
import "../App.css";
import Loader from "../Components/Loader";
import { AppContext } from "../Context/AppContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    webpage.current?.addEventListener("scroll", handleScroll);

    return () => webpage.current?.removeEventListener("scroll", handleScroll);
  }, []);

  //Loader Context

  let { isLoading, setLoading } = useContext(AppContext);

  useEffect(() => {
    let start = Date.now();
    let handleLoad = () => {
      let end = Date.now();
      if (end - start < 2000) {
        setTimeout(() => setLoading(false), 2000);
      } else {
        setLoading(false);
      }
    };
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div
      className="max-w-screen min-h-screen overflow-x-hidden flex flex-col items-center"
      ref={webpage}
    >
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme="light"
      />
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
