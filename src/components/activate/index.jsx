import React from "react";
import sol from "../../assets/images/solana-sol-logo 1.png";
import caretDownIcon from "../../assets/images/Vector (3).png";
import frame62 from "../../assets/images/Frame 626794 (1).png";
import { Link } from "react-router-dom";
import settingIcon from "../../assets/images/Settings_Future.png";
import refreshIcon from "../../assets/images/Frame 17.png";
import Header from "./Header";

const Dashboard = () => {
  return (
    <div className="w-full">
      <Header active={0} />
      <div className="px-5 md:px-8 pt-2 text-white">
      <div className="flex justify-between items-center mb-7">
        <div className="flex gap-[12px] items-center">
          <div className="rounded-[20px] py-[4px] px-[8px] bg-[#464646]">
          Dynamic: 3% Max
          </div>
          
      <Link to={"/"}>
          <img src={settingIcon} alt="" className="w-[24px]" />
        </Link>

        </div>
          
          <Link to={"/"}>
              <img src={refreshIcon} alt="" className="w-[24px]" />
            </Link>
        </div>

        <p className="font-[800] my-3">You're paying:</p>

        <div className="bg-[#0C2132] rounded-[8px] border border-[#6D7A84] flex justify-between items-center px-[16px] h-[60px] mb-6">    
        <div className="rounded-[20px] py-[4px] px-[8px] bg-[#464646] flex items-center gap-[4px]">
        <img src={frame62} alt="" className="w-[16px]" />
        <span>USDC</span>
        <img src={caretDownIcon} alt="" className="w-[9.33px]"  />
          </div>
            <span>0.00</span>
        </div>

        <p className="font-[800] my-3">To receive:</p>

        <div className="bg-[#0C2132] rounded-[8px]  border border-[#6D7A84] flex justify-between items-center px-[16px] h-[60px] mb-10">    
        <div className="flex items-center gap-[4px]">
        <img src={sol} alt="" className="w-[16px]" />
        <span>SOL</span>
          </div>
            <span>0.00</span>
        </div>
        
        <Link to="#" className="bg-[#1E77B8] mt-5 py-[20px] px-[20px] font-[800] rounded-[8px] text-white text-[14px] block md:inline-block text-center">Deposit</Link>

    </div>
    </div>
  );
};

export default Dashboard;
