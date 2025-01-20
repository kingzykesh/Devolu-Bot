import React from "react";
import logo from "../assets/images/home-preloader.gif";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="w-full flex h-screen bg-[#19242F]">
      <div className="my-auto mx-auto text-center">
      <img src={logo} className="w-full -mt-[100px]" alt="icon" />
      <Link to="/all-bots" className="bg-[#1E77B8] py-[20px] px-[24px] font-[800] rounded-[8px] text-white text-[14px] text-center">Connect Wallet</Link>
      </div>
    </div>
  );
};

export default Dashboard;
