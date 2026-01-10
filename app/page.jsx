import { BottomBar } from "@/components/BottomBar";
import HeroSection from "@/components/HeroSection";
import { Search } from "@/components/Search";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto relative  min-h-screen">
      <HeroSection />
      <Search />
      <BottomBar />
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <div className="absolute w-full text-center  -bottom-0 text-gray-400 py-4 border-t-[1px] text-sm border-gray-400/50 ">
      &copy; {new Date().getFullYear()} | All rights are reserved.
    </div>
  );
};
