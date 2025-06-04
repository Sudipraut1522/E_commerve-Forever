import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Search from "../components/Search";

const UserLayout = () => {
  useEffect(() => {
    const mainContent = document.getElementById("main-content");
    if (location.pathname) {
      mainContent.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden  bg-background px-4 md:px-40 ">
      <Navbar />
      <main
        id="main-content"
        className=" w-full overflow-y-auto hide-scrollbar scroll-container"
      >
        <div className="">
          <Search />
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default UserLayout;
