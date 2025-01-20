import React from "react";
import banner from "../assets/images/462e3580f18333562d4265c7c195c369.jpg";
import solana from "../assets/images/tether-usdt-logo 1.png";
import arrow from "../assets/images/Vector.png";
import go from "../assets/images/Vector (2).png";
import frame62 from "../assets/images/Frame 626794 (1).png";
import jupiter from "../assets/images/jupiter-ag-jup-logo 1.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="w-full">
      <div className="relative h-[139px] w-full mb-2">
        <Link to={"/all-bots"} className="cursor-pointer absolute top-2 left-4 bg-black p-2 rounded-full">
          <img src={go} alt="" className="w-[11.67px] h-[10px]" />
        </Link>

        <img src={banner} alt="" className="object-cover w-full h-full" />
      </div>
      <div className="px-5 md:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="font-[800] text-[16px] text-white">
            JPL MINING VAULT
          </h1>

          <div className="flex justify-between items-center gap-[10px]">
            <div className="flex items-center">
              <img src={solana} className="w-[16px] h-[16px]" alt="icon" />
              <img
                src={jupiter}
                className="w-[16px] h-[16px] ml-[-8px]"
                alt="icon"
              />
            </div>
            <img src={arrow} className="w-[9.33px] h-[9px]" alt="icon" />
            <div className="flex items-center">
              <img src={jupiter} className="w-[14px] h-[14px]" alt="icon" />
              <img
                src={frame62}
                className="w-[16px] h-[16px] ml-[-8px]"
                alt="icon"
              />
            </div>
            <img src={arrow} className="w-[9.33px] h-[9px]" alt="icon" />
            <img src={solana} className="w-[20px] h-[20px]" alt="icon" />
          </div>
        </div>

        <div className="mb-5">
          <h4 className="font-[600] text-[12px] text-[#A3A7AF] mb-3">Review</h4>
          <div className="border-[2px] border-[#273542] rounded-[8px] p-3 text-[12px] text-justify text-white">
            <p className="pb-3">
              The Jupiter Liquidity Provider (JPL) Pool is a liquidity pool
              where it acts as a counterparty to traders- when traders seek to
              open leverage positions, they borrow token from the pool
            </p>

            <p className="pb-3">
              Fees come from Trader’s profit and loss & trader borrowing fees
              for leverage. Fees are compounded automatically every hour
            </p>

            <p className="pb-3">
              This startegy market buys at the time of activation and
              automatically sells (limit orders)
            </p>
          </div>
          
          <div className="border-[2px] border-[#273542] rounded-[8px] p-3 text-[14px] my-4">
          <h4 className="font-[800] text-[14px] text-white mb-3">Fees</h4>
          <h4 className="font-[400] text-[12px] text-white mb-3"><span className="text-[#969DA3] pr-1">DEPOSITE FEE:</span>0%</h4>
          <h4 className="font-[400] text-[12px] text-white"><span className="text-[#969DA3] pr-1">WITHDRAWAL FEE:</span>0%</h4>
        </div>
        
        <Link to="/activate" className="bg-[#1E77B8] mt-5 p-[20px] font-[800] rounded-[8px] text-white text-[14px] block md:inline-block text-center">Activate</Link>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
