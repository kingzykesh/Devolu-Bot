import React from "react";
import solana from "../../assets/images/tether-usdt-logo 1.png";
import arrow from "../../assets/images/Vector.png";
import frame62 from "../../assets/images/Frame 626794 (1).png";
import undo from "../../assets/images/Arrow_Undo_Down_Right.png";
import exclammation from "../../assets/images/Circle_Warning.png";
import { Link } from "react-router-dom";
import go from "../../assets/images/Vector (2).png";

const Overview = () => {
  return (
    <div className="pt-[25px] px-5 md:px-8">
      
      <Link to={"/bot-details"}>
          <img src={go} alt="" className="w-[14px]" />
        </Link>
        
    <div className="pt-5"> 

      <div className="flex items-center mt-2">
      <img src={exclammation} alt="" className="w-[24px]" />
      <img src={solana} alt="" className="w-[24px] ml-[-10px]" />
      <img src={frame62} alt="" className="w-[24px] ml-[-10px]" />
      </div>

      <div className="flex items-center gap-[30px] mb-3">
      <div className="flex items-center my-3 gap-[8px]">
      <h4 className="font-[800] text-[14px] text-white">SOL</h4>
      <img src={arrow} alt="" className="w-[11.5px]" />
      <h4 className="font-[800] text-[14px] text-white">USDC</h4>
      <img src={undo} alt="" className="w-[18px]" />
      </div>
      <h4 className="text-[14px] text-[#A3A7AF]">1 SOL</h4>
      </div>

      <div className="flex justify-center gap-[38px] mb-5">
      <Link to={"#"} className="font-[800] text-[14px] text-[#E2E2E5]">Overview</Link>
      <Link to={"#"} className="font-[400] text-[14px] text-[#707482] ">Orders</Link>
      </div>

      <div className="rounded-[8px] bg-[#14152C] p-4 text-justify leading-[18px] mb-4 text-[#00FFD1]">
      <div className="text-[#1E77B8] text-[14px] leading-[20px] pb-3">
      <img src={exclammation} alt="" className="w-[16px] pb-2" />
            <p className="">The bot tried several times to execute your order but was unable to complete it. This may occur for the following reasons:</p>
            <ul className="list-disc ml-4">
              <li>
              The market no longer exists.</li>
              <li>The market price falls outside the range specified in your advanced pricing strategy.</li>
              <li>The market is experiencing extreme volatility.</li>
            </ul>

            <p className="">Please note that the bot will continue attempting to execute the order, and your end date may be extended until all your deposited tokens are fully utilized.
            </p>
      </div>

          <div className="flex justify-between items-center border-b border-[#2B2C41] my-4">
            <h4>DEA SOL balance</h4>
            <h4>1 SOL</h4>
          </div>

          <div className="flex justify-between items-center border-b border-[#2B2C41] my-4">
            <h4>DCA USDC balance</h4>
            <h4>0 USDC</h4>
          </div>

          <div className="flex justify-between items-center border-b border-[#2B2C41] my-4">
            <h4>Amount Withdrawn</h4>
            <h4>0 USDC</h4>
          </div>

          <div className="flex justify-between items-center border-b border-[#2B2C41] my-4">
            <h4 className="invisible">dd</h4>
          </div>

          <div className="flex justify-between items-center border-b border-[#2B2C41] my-4">
            <h4>Total Deposited</h4>
            <h4>1 SOL</h4>
          </div>

          <div className="flex justify-between items-center border-b border-[#2B2C41] my-4">
            <h4>Total Spent</h4>
            <h4>0 SOL (0%)</h4>
          </div>

          <div className="flex justify-between items-center border-b border-[#2B2C41] my-4">
            <h4>Each order size</h4>
            <h4>0.333333333 SOL</h4>
          </div>

          <div className="flex justify-between items-center border-b border-[#2B2C41] my-4">
          <h4 className="invisible">dd</h4>
          </div>

          <div className="flex justify-between items-center my-4">
            <h4>Buying</h4>
            <div className="flex justify-center items-center gap-[8px]">
        <img src={frame62} alt="" className="w-[24px]" />
        <span className="">USDC</span>
          </div>
          </div>

          <div className="flex justify-between items-center my-4">
            <h4>interval</h4>
            <h4>1 SOL</h4>
          </div>

          <div className="flex justify-between items-center my-4">
            <h4># of Orders Left</h4>
            <h4>3</h4>
          </div>

          <div className="flex justify-between items-center my-4">
            <h4>Next Order</h4>
            <h4>3 August 2024 17:57</h4>
          </div>

          <div className="flex justify-between items-center my-4">
            <h4>Next Order</h4>
            <h4>3 August 2024 17:57</h4>
          </div>

<div className="flex justify-between items-center my-4">
  <h4>Created</h4>
  <h4>3 August 2024 17:57</h4>
</div>

<div className="flex justify-between items-center my-4">
  <h4>Next Order</h4>
  <h4>3 August 2024 17:57</h4>
</div>

<div className="flex justify-between items-center my-4">
  <h4>Created</h4>
  <h4>3 August 2024 17:57</h4>
</div>

<div className="flex justify-between items-center my-4">
  <h4>Minimum Price</h4>
  <h4>175.999998 USDC</h4>
</div>

<div className="flex justify-between items-center my-4">
  <h4>Minimum Price</h4>
  <h4>175.999997 USDC</h4>
</div>
      
        <Link to="#" className="bg-[#1E77B8] mt-6 py-[20px] font-[800] rounded-[8px] text-white text-[14px] block md:inline-block text-center">Close and Withdraw</Link>

          </div>

    </div>
    </div>
  );
};

export default Overview;
