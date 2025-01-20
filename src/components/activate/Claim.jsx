import React from "react";
import frame62 from "../../assets/images/Frame 626794 (1).png";
import caretDown from "../../assets/images/Chevron_Down.png";
// import { Link } from "react-router-dom";
import Header from "./Header";

const Claim = () => {
  return (
    <div className="w-full">
      <Header active={1} />
      <div className="px-5 md:px-8 pt-3">
        <div className="bg-[#0C2132] rounded-[8px] px-[14px] py-[24px] mb-4">  
          <div className="flex justify-between items-center mb-2 md:mb-0">  
        <div className="flex flex-col items-start">
          <div className="flex justify-center items-center gap-[8px]">
        <img src={frame62} alt="" className="w-[24px]" />
        <span className="text-[14px] font-[800] text-white">USDC</span>
          </div>
            <p className="text-center text-white my-2">Total Earned:<span className="text-[#50A2E5] pl-1">$0.27</span></p>
            </div>

            <div className="flex gap-4 items-center text-[14px]">
            <div className="py-3 px-4 rounded-[8px] border border-[#50A2E5] text-[#50A2E5]">Add</div>
            <div className="py-3 px-4 rounded-[8px] border border-[#50A2E5] text-[#50A2E5] flex gap-1 items-center">
              Claim
        <img src={caretDown} alt="" className="w-[16px]" />
              </div>
            </div>
            </div>
            
            <div className="md:flex md:gap-3">
            <p className="py-[4px]"><span className="text-[#90919E] pr-1">Position Size:</span>2,093.87 USDC</p>
            <p className="py-[4px]"><span className="text-[#90919E] pr-1">Est Apy:</span>6.52%</p>
            </div>
            </div>

            <p className="text-white text-[14px] py-4">Total earned (amount claim):</p>
            
            <div className="flex justify-between md:justify-start md:gap-4 items-center text-[14px]">
            <div className="py-3 px-4 rounded-[8px] border border-[#7B838B] text-[#7B838B]">25%</div>
            <div className="py-3 px-4 rounded-[8px] border border-[#7B838B] text-[#7B838B]">50%</div>
            <div className="py-3 px-4 rounded-[8px] border border-[#7B838B] text-[#7B838B]">100%</div>
            <div className="py-3 px-4 rounded-[8px] border border-[#7B838B] text-[#7B838B]">Others</div>
            </div>

    </div>
    </div>
  );
};

export default Claim;
