import React from "react";
import { Link } from "react-router-dom";
import go from "../../assets/images/Vector (2).png";

const Header = ({active}) => {

  return (
    <div className="pt-[25px] px-5 md:px-8">
      
      <Link to={"/bot-details"}>
          <img src={go} alt="" className="w-[14px]" />
        </Link>

    <div className="flex justify-between md:justify-center md:gap-5 my-5">
      <Link to={"/activate"} className={`text-[14px] ${active === 0 ? "font-[800] text-white border-b border-[#1E77B8]" : "text-[#707482] "}`}>Deposit</Link>
      <Link to={"/claim"} className={`text-[14px] ${active === 1 ? "font-[800] text-white border-b border-[#1E77B8]" : "text-[#707482] "}`}>Claim Value</Link>
      <Link to={"/transaction-history"} className={`text-[14px] ${active === 2 ? "font-[800] text-white border-b border-[#1E77B8]" : "text-[#707482] "}`}>Transaction History</Link>
      </div>
      </div>
  );
};

export default Header;
