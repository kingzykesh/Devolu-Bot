import React from "react";
import solana from "../assets/images/tether-usdt-logo 1.png";
import token1 from "../assets/images/token1.png";
import token2 from "../assets/images/token2.png";
import token3 from "../assets/images/token3.png";
import token4 from "../assets/images/token4.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="w-full px-5 md:px-8">
      <div className="rounded-[8px] bg-[#102A40] p-4 mb-5">
        <h4 className="text-white font-[800] text-[16px] text-center">YOUR BOTS</h4>
        <p className="pt-2 text-[#7B8A96]">Multi chain automated bots</p>
        <p className="pt-1 mb-4 text-[#7B8A96]">Route</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">

          <div className="border-[2px] rounded-[8px] border-[#3D4D5B] px-[16px] py-[10px] flex gap-[4px] items-center justify-between bg-[#0C2132]">
            <div className="flex gap-[8px] items-center">
            <img src={token1} className="rounded-[8px] w-[28px] h-[28px]" alt="icon" />
              <div className="flex flex-col items-start gap-[6px]">
                <h4 className="text-[14px] font-[400] text-white">
                  JPL Mining Vault
                </h4>
                <p><span className="text-[#7B8A96] pr-1">Est Apy:</span>6.52%</p>
              <div className="flex justify-between items-center gap-[4px]">
                <img src={solana} className="w-[24px] h-[24px]" alt="icon" />                
                <div className="border border-[#555555] rounded-[8px] py-[4px] px-[8px] text-[8px] text-center font-white">
                  Jupiter
                </div>
                </div>
              </div>
            </div>
            <div className="text-left">
              <Link to="overview" className="text-[#7B8A96] block">Total Invested</Link>
              <Link to="overview" className="text-[#7B8A96] block">ROI</Link>
              </div>
          </div>

          <div className="border-[2px] rounded-[8px] border-[#3D4D5B] px-[16px] py-[10px] flex gap-[4px] items-center justify-between bg-[#0C2132]">
            <div className="flex gap-[8px] items-center">
            <img src={token2} className="rounded-[8px] w-[28px] h-[28px]" alt="icon" />
              <div className="flex flex-col items-start gap-[6px]">
                <h4 className="text-[14px] font-[400] text-white">
                Buy & Auto Sell
                </h4>
                <p><span className="text-[#7B8A96] pr-1">Est Apy:</span>7.10%</p>
              <div className="flex justify-between items-center gap-[4px]">
                <img src={solana} className="w-[24px] h-[24px]" alt="icon" />                
                <div className="border border-[#555555] rounded-[8px] py-[4px] px-[8px] text-[8px] text-center font-white">
                Pancakeswap
                </div>
                </div>
              </div>
            </div>
            <div className="text-left">
              <Link to="overview" className="text-[#7B8A96] block">Total Invested</Link>
              <Link to="overview" className="text-[#7B8A96] block">ROI</Link>
              </div>
          </div>

          <div className="border-[2px] rounded-[8px] border-[#3D4D5B] px-[16px] py-[10px] flex gap-[4px] items-center justify-between bg-[#0C2132]">
            <div className="flex gap-[8px] items-center">
            <img src={token3} className="rounded-[8px] w-[28px] h-[28px]" alt="icon" />
              <div className="flex flex-col items-start gap-[6px]">
                <h4 className="text-[14px] font-[400] text-white">
                  JPL Mining Vault
                </h4>
                <p><span className="text-[#7B8A96] pr-1">Est Apy:</span>5.30%</p>
              <div className="flex justify-between items-center gap-[4px]">
                <img src={solana} className="w-[24px] h-[24px]" alt="icon" />                
                <div className="border border-[#555555] rounded-[8px] py-[4px] px-[8px] text-[8px] text-center font-white">
                Uniswap
                </div>
                </div>
              </div>
            </div>
            <div className="text-left">
              <Link to="overview" className="text-[#7B8A96] block">Total Invested</Link>
              <Link to="overview" className="text-[#7B8A96] block">ROI</Link>
              </div>
          </div>

          <div className="border-[2px] rounded-[8px] border-[#3D4D5B] px-[16px] py-[10px] flex gap-[4px] items-center justify-between bg-[#0C2132]">
            <div className="flex gap-[8px] items-center">
            <img src={token4} className="rounded-[8px] w-[28px] h-[28px]" alt="icon" />
              <div className="flex flex-col items-start gap-[6px]">
                <h4 className="text-[14px] font-[400] text-white">
                Buy & Auto Sell
                </h4>
                <p><span className="text-[#7B8A96] pr-1">Est Apy:</span>4.19%</p>
              <div className="flex justify-between items-center gap-[4px]">
                <img src={solana} className="w-[24px] h-[24px]" alt="icon" />                
                <div className="border border-[#555555] rounded-[8px] py-[4px] px-[8px] text-[8px] text-center font-white">
                Pancakeswap
                </div>
                </div>
              </div>
            </div>
            <div className="text-left">
              <Link to="overview" className="text-[#7B8A96] block">Total Invested</Link>
              <Link to="overview" className="text-[#7B8A96] block">ROI</Link>
              </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
