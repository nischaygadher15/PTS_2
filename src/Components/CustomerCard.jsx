import React from "react";
import "../App.css";
import user from "../assets/images/review1.jpg";
import { Card } from "flowbite-react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const CustomerCard = ({ cusData }) => {
  let { msg, name, job } = cusData;
  return (
    <Card className="text-[#8e8f87] text-lg border-none shadow-none overflow-auto">
      <div className="relative p-16 mb-7 min-h-48 boxShadow flex items-center text-center">
        <ImQuotesLeft className="absolute top-6 left-6 text-4xl text-[#ced3ff]" />
        <p className="">{msg}</p>
        <ImQuotesRight className="absolute bottom-6 right-6 text-4xl text-[#ced3ff]" />
      </div>
      <div className="w-full flex justify-center items-center gap-12">
        <img
          src={user}
          alt="User Photo"
          className="w-24 h-24  rounded-full border-4 border-[$cccccc]"
        />
        <div>
          <p>{name}</p>
          <p>{job}</p>
        </div>
      </div>
    </Card>
  );
};

export default CustomerCard;
