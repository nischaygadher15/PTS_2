import React from "react";
import pts60 from "../assets/images/icon/android-icon-72x72.png";

const Loader = () => {
  return (
    <div className="w-screen h-full z-50 fixed top-0 left-0 bg-black flex justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <img src={pts60} alt="PTS LOGO" />

        <div
          className="w-36 h-2 bg-white rounded-s-md rounded-e-md"
          id="loaderTrack"
        >
          <div
            className={`h-2 bg-[#0891B2] rounded-s-md rounded-e-md`}
            id="loaderBar"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
