"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { QueryDialoge } from "./QueryDialoge";
import { MoveRightIcon } from "lucide-react";

const HeroSection = () => {
  const [open, setOpen] = useState(false);

  const showQueryModel = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full text-white justify-center flex flex-col items-center gap-10 h-[85vh] relative">
      <div className="relative space-y-3">
        <span className="absolute text-primary top-0 right-40 text-2xl ">
          *
        </span>
        <h1 className="text-3xl sm:text-6xl font-semibold text-center bg-gradient-to-r from-primary via-red-400 to-purple-500 text-transparent bg-clip-text">
          Business Name Generator
        </h1>
        <p className="text-center text-xl px-10 text-gray-300">
          Create the perfect name for your business with our{" "}
          <span className="text-primary">AI-powered</span> Business Name
          Generator app! <br />
          Get <span className="text-primary">unique</span>,{" "}
          <span className="text-primary">creative</span>, and{" "}
          <span className="text-primary">catchy names</span> tailored to your
          brand in just seconds. <br /> Start naming your{" "}
          <span className="text-primary">dream venture today</span>!
        </p>
      </div>

      <Button
        className="rounded-full text-xl px-14 font-bold"
        onClick={showQueryModel}
      >
        Get Started
      </Button>

      <div className="w-[200px] h-[2px] rounded-full bg-gradient-to-r from-transparent via-primary to-transparent absolute bottom-0"></div>

      <QueryDialoge open={open} setOpen={setOpen} />
    </div>
  );
};

export default HeroSection;
