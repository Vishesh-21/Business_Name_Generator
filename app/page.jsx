import { BottomBar } from "@/components/BottomBar";
import HeroSection from "@/components/HeroSection";
import React from "react";

export default function page() {
  return (
    <div className="max-h-screen">
      <HeroSection />
      <BottomBar />
    </div>
  );
}
