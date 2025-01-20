import React, { useEffect, useId, useRef, useState } from "react";
import { Carousel } from "flowbite-react";
import "../App.css";
import opinions from "../Data/CustomerOpinions";
import CustomerCard from "../Components/CustomerCard";

const Review = () => {
  // Unique key for components
  let key = useId();

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
  // useEffect(() => console.log(customers), [customers]);

  return (
    <>
      {/* Happy Clients Works */}
      <section className="px-10 py-24 w-screen min-h-screen md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
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
    </>
  );
};

export default Review;
