import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Bottom2Top = ({ handler }) => {
  return (
    <div className="back2top-icon w-16 h-16 flex justify-center items-center">
      <button
        className="bg-transparent text-white rounded-full flex justify-center items-center border-none border-0 outline-none"
        onClick={handler}
      >
        <FaArrowUp className="text-2xl" />
      </button>
    </div>
  );
};

export default Bottom2Top;
