import React, { useEffect, useId, useState } from "react";
import { Carousel } from "flowbite-react";
import "../App.css";
import opinions from "../Data/CustomerOpinions";
import CustomerCard from "../Components/CustomerCard";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";

const Review = () => {
  // Unique key for components
  let key = useId();

  //Carousel Theme
  const customTheme = {
    root: {
      base: "relative h-full w-full",
      leftControl:
        "absolute -left-3 top-0 text-black text-4xl flex md:hidden h-full items-center justify-center focus:outline-none",
      rightControl:
        "absolute -right-3 top-0 text-black text-4xl flex md:hidden h-full items-center justify-center focus:outline-none",
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

  //Scree nSize observer
  let [winSize, setWinSize] = useState(window.screen.width);

  let resizeWindow = () => {
    setWinSize(window.screen.width);
  };

  //Customer Opinions
  let [customers, setCustomers] = useState([]);

  let createCusArray = (w) => {
    let temp = [];
    let buff = [];
    if (w >= 768) {
      for (let i = 0; i < opinions.length; i++) {
        if (temp.length == 2) {
          buff.push(temp);
        } else {
          if (i == opinions.length - 1) buff.push(opinions[i]);
          else temp.push(opinions[i]);
        }
      }
      setCustomers(buff);
    } else {
      setCustomers([...opinions]);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resizeWindow);

    return () => {
      window?.removeEventListener("resize", resizeWindow);
    };
  }, []);
  // useEffect(() => console.log(customers), [customers]);

  useEffect(() => {
    createCusArray(winSize);
  }, [winSize]);

  return (
    <>
      {/* Happy Clients Works */}
      <section className="px-6 sm:px-10 py-24 min-h-screen w-screen md:max-w-[900px] lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="w-full lg:w-1/2 text-black font-semibold text-lg mb-10">
          <span className="text-4xl sm:text-5xl font-semibold">
            Happy Clients Works
          </span>
          <div className="flex items-center mt-3">
            <span className="bg-[#8490FF] w-4 h-4 rounded-full"></span>
            <span className="bg-[#8490FF] h-1 w-52"></span>
          </div>
        </div>
        <Carousel
          indicators={winSize >= 768 ? true : false}
          className="h-screen sm:h-[60vh]"
          leftControl={<RiArrowLeftWideFill />}
          rightControl={<RiArrowRightWideFill />}
          theme={customTheme}
        >
          {customers &&
            customers.map((arr, inx) => (
              <div
                className="h-full bg-white grid grid-cols-1 md:grid-cols-2"
                key={`${key}-customer-${inx}`}
              >
                {winSize >= 768 ? (
                  arr.length > 1 &&
                  arr.map((ele, inx) => (
                    <CustomerCard
                      cusData={{ ...ele }}
                      key={`${key}-customerArr-${inx}`}
                    />
                  ))
                ) : (
                  <CustomerCard
                    cusData={{ ...arr }}
                    key={`${key}-customerArr-${inx}`}
                  />
                )}
              </div>
            ))}
        </Carousel>
      </section>
    </>
  );
};

export default Review;
