import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const DashboardLayout = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const mainContent = document.getElementById("main-content");
    if (location.pathname) {
      mainContent.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <div className="flex w-screen h-screen overflow-hidden  bg-background ">
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <Sidebar
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        setCollapsed={setCollapsed}
        toggleMobileSidebar={toggleMobileSidebar}
        setMobileOpen={setMobileOpen}
      />

      <div
        className={`flex flex-col flex-1 min-h-screen overflow-y-auto  transition-all duration-300  ${
          collapsed
            ? "lg:ml-20 w-[calc(100%-80px)]"
            : "lg:ml-64 w-[calc(100%-256px)]"
        }`}
      >
        <nav>
          <div className="flex bg-gray-100 px-10  py-5 justify-end">
            <li></li>
            <li></li>
          </div>
        </nav>
        <main
          id="main-content"
          className="flex-1 w-full overflow-y-auto hide-scrollbar scroll-container"
        >
          <div
            className="box-border min-h-[100vh] 
                 md:px-10 px-1"
          >
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
