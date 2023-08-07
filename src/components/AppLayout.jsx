import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AppLayout = ({ children }) => {
  return (
    <div className="">
      {/* <div className="w-[320px] fixed my-24">
        <Sidebar />
      </div> */}
      {/* <div className="w-full">
        <Navbar />
      </div> */}
      {children}
      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
};

export default AppLayout;
