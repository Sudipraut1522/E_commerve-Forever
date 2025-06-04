import {
  ChevronRight,
  FileText,
  LayoutDashboard,
  MessageCircle,
  Settings,
  Users,
  X,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaQuestion } from "react-icons/fa6";
import { MdOutlinePolicy } from "react-icons/md";
import { assets } from "../assets/assets";

const navItems = {
  admin: [
    { path: "/dashboard", name: "Dashboard", icon: LayoutDashboard },
    { path: "/patients", name: "Patients", icon: Users },
    { path: "/reports", name: "Reports", icon: FileText },
    { path: "/sms", name: "SMS", icon: MessageCircle },
    { path: "/staff", name: "Staff", icon: Users },
    {
      path: "/privacy-policy",
      name: "Privacy policy",
      icon: MdOutlinePolicy,
    },
    {
      path: "/faq",
      name: "FAQs",
      icon: FaQuestion,
    },
    { path: "/settings", name: "Settings", icon: Settings },
  ],
};

const Sidebar = ({
  collapsed,
  setCollapsed,
  mobileOpen,
  toggleMobileSidebar,
  setMobileOpen,
}) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(location?.pathname);

  useEffect(() => {
    setIsActive(location?.pathname);
  }, [location?.pathname]);

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 bg-card border-r border-border transition-all duration-300 ease-in-out transform ${
        collapsed ? "w-20" : "w-64"
      } ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
    >
      <div className="flex w-full h-full flex-col">
        {/* Logo and collapse */}
        <div className="flex h-16 items-center justify-between pl-4  border-b border-border">
          <Link to={""} className="flex items-center ">
            <img src={assets?.logo} alt="LogoImage" className="w-40" />

            {!collapsed && <span className="text-xl font-bold"></span>}
          </Link>

          <button className="" onClick={() => setCollapsed(!collapsed)}>
            <ChevronRight
              className={`h-5 w-5 text-muted-foreground transition-transform cursor-pointer ${
                collapsed ? "" : "rotate-180"
              }`}
            />
          </button>
        </div>
        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 ">
          <ul className="space-y-2">
            {navItems?.admin?.map((item, index) => (
              <li key={index} onClick={() => setMobileOpen(false)}>
                <Link
                  to={item?.path}
                  className={`flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors
                    ${
                      isActive === item?.path ||
                      (item?.path === "/patients" &&
                        isActive.startsWith("/patient-detail"))
                        ? "bg-gray-600 text-white"
                        : "text-muted-foreground hover:bg-muted"
                    }
                    ${collapsed ? "justify-center" : "justify-start"}`}
                >
                  <item.icon className={`h-5 w-5 ${collapsed ? "" : "mr-3"}`} />
                  <p
                    className={`  ${
                      !collapsed ? "w-full" : "w-0 overflow-hidden"
                    }`}
                  >
                    {item.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout */}
        <div className="flex  border-t border-border">
          <footer className="bg-primary w-full">
            <p className="text-white text-center text-[10px] pt-2 px-1 py-2">
              © 2025 B&B Hospital Pvt. Ltd. |<span> Developed by</span>
              <a href=" https://ayata.com.np/">Ayata Inc.</a>{" "}
            </p>
          </footer>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
