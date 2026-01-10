import { BottomBar } from "@/components/BottomBar";
import HeroSection from "@/components/HeroSection";
import { Search } from "@/components/Search";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto relative md:py-16">
      <HeroSection />
      <Search />
      <BottomBar />
    </div>
  );
}
