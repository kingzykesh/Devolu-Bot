import React, { useState } from "react";
import Header from "./Header";
import solana from "../../assets/images/tether-usdt-logo 1.png";
import frame62 from "../../assets/images/Frame 626794 (1).png";
import jupiter from "../../assets/images/jupiter-ag-jup-logo 1.png";
import { Link } from "react-router-dom";
import { BiExport, BiFilter, BiSearch } from "react-icons/bi";
import { MdQrCode } from "react-icons/md";
import { Input, InputAdornment } from "@mui/material";

const Dashboard = () => {
  const [searchItem, setSearchItem] = useState("");

  const handleSearch = (e) =>{
    setSearchItem(e.target.value);
    // console.log(e.target.value);
  }

  return (
    <div className="w-full">
      <Header active={2} />
      <div className="px-5 md:px-8 pt-2 text-white">
      
      <div className="rounded-[8px] bg-[#102A40] px-3 md:px-5 py-5 md:flex justify-between items-start">
      <div className="flex gap-2 items-center mb-3 md:mb-0 md:inline-block">
      <h4 className="text-white font-[500] text-[14px]">Portfolio Selection</h4>
          <div className="rounded-[8px] py-1 px-2 bg-[#464646] md:my-2 text-[10px] inline-block">
            <span>Portfolio 1</span> 
            <span className="text-[#50A2E5] ml-2">$56.09</span>             
          </div>
      </div>

      <div className="flex justify-between items-center gap-5 md:gap-[10px]">
            <Link to="#" className="flex gap-1 items-center rounded-[20px] px-3 py-2 border border-[#3D4D5B] text-white font-[500]">
            <div className="flex items-center">
              <img src={jupiter} className="w-[16px] h-[16px]" alt="icon" />
              <img
                src={frame62}
                className="w-[16px] h-[16px] ml-[-6px]"
                alt="icon"
              />
              <img
                src={solana}
                className="w-[16px] h-[16px] ml-[-6px]"
                alt="icon"
              />
            </div>

          <div>3 Networks</div>
          </Link>
          <Link to="#" className="rounded-[20px] px-3 py-2 border border-[#3D4D5B] text-white font-[500] text-nowrap">Select wallet</Link>
          <Link to="#" className="rounded-[20px] px-3 py-2 bg-white text-[#102A40] font-[500] text-nowrap">Add wallet</Link>
      </div>
      </div>

      <div className="rounded-[8px] bg-[#102A40] p-5 my-5">
        <div className="flex items-center gap-3 md:gap-5 mb-5 w-full">
          <div className="w-[80%] flex items-center text-[#102A40]">
              <Input 
              type="search"
              name="search"
              id="search"
              value={searchItem}
              onChange={handleSearch}
              disableUnderline
              placeholder="Search for transactions" 
              className="bg-[#3D4D5B] rounded-[20px] w-full px-3 h-[42px] text-[#102A40]"
               startAdornment={
                <InputAdornment position="start">
                    <BiSearch size={20} className="text-[#102A40]"/>
                </InputAdornment>
              } />
          </div>
          <div className="flex items-center gap-2 md:gap-3">
          <Link to="#" className="rounded-[20px] px-3 py-2 border border-[#3D4D5B] text-white font-[500] flex items-center md:gap-2"><BiFilter size={20} /><span className="hidden md:inline-block">Filter</span></Link>
          <Link to="#" className="rounded-[20px] px-3 py-2 bg-white text-[#102A40] font-[500] flex items-center md:gap-2"><BiExport size={20} /><span className="hidden md:inline-block">Export</span></Link>
         </div>
          </div>

          <div className="w-full overflow-auto">
          <div className="flex items-center text-[#90919E] px-3 py-4 min-w-[800px] font-[600]">
           <div className="px-2 text-nowrap w-[25%]">Date/Time</div>
            <div className="px-2 text-center text-nowrap w-[25%]">Trade</div>
            <div className="px-2 text-center text-nowrap w-[15%]">Price</div>
            <div className="px-2 text-center text-nowrap w-[15%]">Exchange</div>
            <div className="px-2 text-center text-nowrap w-[20%]">Min</div>
           </div>

            <div className="bg-[#464646] px-3 rounded-[8px] flex items-center py-5 mb-2 min-w-[800px]">
            <div className="px-2 text-nowrap w-[25%]">June 18, 2023 1:56:50 AM</div>
            <div className="px-2 text-center text-nowrap w-[25%]"><div>Matic ~ 1000.00 ~ 0.35 WETH </div></div>
            <div className="px-2 text-center text-nowrap w-[15%] flex justify-center"><div className="p-1 bg-[#50A2E5] rounded-md text-white">1.00 ~ 0.00345</div></div>
            <div className="px-2 text-center text-nowrap w-[15%] flex justify-center"><div className="p-1 bg-[#50A2E5] rounded-md text-white">UniSwap</div></div>
            <div className="px-2 text-center text-nowrap w-[20%] flex justify-center"><div className="flex items-center gap-3"><div className="p-1 bg-[#50A2E5] rounded-md text-white">~ 0.35</div><div className="p-1 bg-[#50A2E5] rounded-md text-white flex items-center gap-1">View TX <MdQrCode size={15} /></div></div></div>
          </div>
          
          <div className="bg-[#464646] px-3 rounded-[8px] flex items-center py-5 mb-2 min-w-[800px]">
            <div className="px-2 text-nowrap w-[25%]">June 18, 2023 1:56:50 AM</div>
            <div className="px-2 text-center text-nowrap w-[25%]"><div>Matic ~ 1000.00 ~ 0.35 WETH </div></div>
            <div className="px-2 text-center text-nowrap w-[15%] flex justify-center"><div className="p-1 bg-[#50A2E5] rounded-md text-white">1.00 ~ 0.00345</div></div>
            <div className="px-2 text-center text-nowrap w-[15%] flex justify-center"><div className="p-1 bg-[#50A2E5] rounded-md text-white">UniSwap</div></div>
            <div className="px-2 text-center text-nowrap w-[20%] flex justify-center"><div className="flex items-center gap-3"><div className="p-1 bg-[#50A2E5] rounded-md text-white">~ 0.35</div><div className="p-1 bg-[#50A2E5] rounded-md text-white flex items-center gap-1">View TX <MdQrCode size={15} /></div></div></div>
          </div>
          
          <div className="bg-[#464646] px-3 rounded-[8px] flex items-center py-5 mb-2 min-w-[800px]">
            <div className="px-2 text-nowrap w-[25%]">June 18, 2023 1:56:50 AM</div>
            <div className="px-2 text-center text-nowrap w-[25%]"><div>Matic ~ 1000.00 ~ 0.35 WETH </div></div>
            <div className="px-2 text-center text-nowrap w-[15%] flex justify-center"><div className="p-1 bg-[#50A2E5] rounded-md text-white">1.00 ~ 0.00345</div></div>
            <div className="px-2 text-center text-nowrap w-[15%] flex justify-center"><div className="p-1 bg-[#50A2E5] rounded-md text-white">UniSwap</div></div>
            <div className="px-2 text-center text-nowrap w-[20%] flex justify-center"><div className="flex items-center gap-3"><div className="p-1 bg-[#50A2E5] rounded-md text-white">~ 0.35</div><div className="p-1 bg-[#50A2E5] rounded-md text-white flex items-center gap-1">View TX <MdQrCode size={15} /></div></div></div>
          </div>
          
          <div className="bg-[#464646] px-3 rounded-[8px] flex items-center py-5 mb-2 min-w-[800px]">
            <div className="px-2 text-nowrap w-[25%]">June 18, 2023 1:56:50 AM</div>
            <div className="px-2 text-center text-nowrap w-[25%]"><div>Matic ~ 1000.00 ~ 0.35 WETH </div></div>
            <div className="px-2 text-center text-nowrap w-[15%] flex justify-center"><div className="p-1 bg-[#50A2E5] rounded-md text-white">1.00 ~ 0.00345</div></div>
            <div className="px-2 text-center text-nowrap w-[15%] flex justify-center"><div className="p-1 bg-[#50A2E5] rounded-md text-white">UniSwap</div></div>
            <div className="px-2 text-center text-nowrap w-[20%] flex justify-center"><div className="flex items-center gap-3"><div className="p-1 bg-[#50A2E5] rounded-md text-white">~ 0.35</div><div className="p-1 bg-[#50A2E5] rounded-md text-white flex items-center gap-1">View TX <MdQrCode size={15} /></div></div></div>
          </div>
          
          <div className="bg-[#464646] px-3 rounded-[8px] flex items-center py-5 mb-2 min-w-[800px]">
            <div className="px-2 text-nowrap w-[25%]">June 18, 2023 1:56:50 AM</div>
            <div className="px-2 text-center text-nowrap w-[25%]"><div>Matic ~ 1000.00 ~ 0.35 WETH </div></div>
            <div className="px-2 text-center text-nowrap w-[15%] flex justify-center"><div className="p-1 bg-[#50A2E5] rounded-md text-white">1.00 ~ 0.00345</div></div>
            <div className="px-2 text-center text-nowrap w-[15%] flex justify-center"><div className="p-1 bg-[#50A2E5] rounded-md text-white">UniSwap</div></div>
            <div className="px-2 text-center text-nowrap w-[20%] flex justify-center"><div className="flex items-center gap-3"><div className="p-1 bg-[#50A2E5] rounded-md text-white">~ 0.35</div><div className="p-1 bg-[#50A2E5] rounded-md text-white flex items-center gap-1">View TX <MdQrCode size={15} /></div></div></div>
          </div>

          </div>

      </div>

    </div>
    </div>
  );
};

export default Dashboard;
