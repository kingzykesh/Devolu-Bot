import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import menu from "../assets/images/Hamburger_MD.png";

const Header = ({ active }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate(); // React Router hook for navigation

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const goBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-between items-center py-[23px] px-5">
        <Link to={"/"}>
          <img src={logo} className="cursor-pointer w-[35px]" alt="icon" />
        </Link>

        <div className="flex gap-[38px] items-center">
          <Link
            to={"/all-bots"}
            className={`text-[14px] ${
              active === 0
                ? "font-[800] border-b border-[#1E77B8] text-white"
                : "text-[#A3A7AF]"
            }`}
          >
            ALL BOTS
          </Link>
          <Link
            to={"/my-bots"}
            className={`text-[14px] ${
              active === 1
                ? "font-[800] border-b border-[#1E77B8] text-white"
                : "text-[#A3A7AF]"
            }`}
          >
            MY BOTS
          </Link>
        </div>

        <div
          className="p-2 bg-[#1E77B8] rounded-full border border-white cursor-pointer"
          onClick={toggleSidebar}
        >
          <img src={menu} className="w-[20px]" alt="menu icon" />
        </div>
      </div>

      {/* Sidebar Section */}
      <div
        className={`fixed top-0 right-0 h-full bg-[#1E1E1E] transition-transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } w-[250px] shadow-lg z-50`}
      >
        <div className="p-5 flex flex-col gap-3">
        

        

          {/* Sidebar Links */}
          <div className="mt-5 flex flex-col gap-2">
            <Link
              to="/all-bots"
              className="block text-white py-2 hover:underline"
              onClick={toggleSidebar}
            >
              ALL BOTS
            </Link>
            <Link
              to="/my-bots"
              className="block text-white py-2 hover:underline"
              onClick={toggleSidebar}
            >
              MY BOTS
            </Link>
              {/* Back Button */}
          <button
            className="text-white bg-[#1E77B8] px-4 py-2 rounded w-full text-center"
            onClick={goBack}
          >
            Back
          </button>

            {/* Close Sidebar Button */}
            <button
            className="text-white bg-[#1E77B8] px-4 py-2 rounded w-full text-center"
            onClick={toggleSidebar}
          >
            Close
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
