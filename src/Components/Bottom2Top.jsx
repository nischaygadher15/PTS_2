import { Button } from "flowbite-react";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Bottom2Top = ({ handler }) => {
  return (
    <Button
      className="absolute bottom-7 right-10 w-14 h-14 rounded-full bg-[#8490FF] flex justify-center items-center border-none border-0 outline-none"
      onClick={handler}
    >
      <FaArrowUp className="text-2xl" />
    </Button>
  );
};

export default Bottom2Top;
