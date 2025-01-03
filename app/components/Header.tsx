import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { HiShoppingCart } from "react-icons/hi2";
import HoverMenu from "./HoverUser";
import HoverSell from "./HoverSell";
import HoverLanguage from "./HoverLanguage";


function Header() {
  return (
    <div className=" border-b-2 font-bebas border-[#F5F3FF]">

      <div className="max-w-7xl mx-auto flex justify-between  items-center">

        <div className="flex items-center group">
          <Link href={"/"}>
          <h1 className="ml-2 text-xl lg:text-3xl group-hover:scale-105 transition-all duration-300">
           <span >🥬</span> <span className="hidden sm:inline" >FARM TO </span><span className="text-[#86D72F] hidden sm:inline">MARKET</span>
          </h1>
          </Link>
        </div>

        <div className="flex items-center relative ">
          <Link href={'/category'} className="lg:text-xl text-[18px] mr-4 relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Shop </Link>
          {/* <Link href={'/admin'} className="lg:text-xl text-[18px]  mr-4 relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Sell Product </Link> */}
          {/* <Link href={'/request_admin'} className="lg:text-xl text-[18px]  mr-4 relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Sell </Link> */}
          <div className="flex items-center justify-center mt-6 ">
           <HoverSell/>
          </div>
          <Link href={'/about'} className="lg:text-xl text-[18px]  mr-4 relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">About  </Link>
          <Link href={'/contact'} className="lg:text-xl text-[18px]  mr-4 relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Contact </Link>
         <Link href={'/testcart'}> <HiShoppingCart className="text-3xl cursor-pointer hover:scale-110" /></Link>
          {/* <div className="ml-2 bg-green-500 rounded-full w-5 h-5 flex items-center justify-center text-white text-sm font-semibold">1</div> */}
          <div className="ml-2 mt-[6px]">
          <UserButton  afterSignOutUrl="/" />
          
          </div>

          <div className="flex items-center justify-center mt-5 scale-105 ">
          <HoverMenu />
          </div>
          
          <div className="flex items-center justify-center -ml-2 mt-5 scale-105 ">
          <HoverLanguage/>
          </div>
     
        </div>

   





      </div>
    </div>
  );
}

export default Header;
