import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="w-screen h-screen overflow-x-hidden flex flex-col items-center">
      <Navbar />
      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
