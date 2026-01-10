import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full text-white h-full justify-center flex flex-col items-center gap-2">
      <h1 className="text-3xl sm:text-5xl font-semibold text-center">
        Business Name{" "}
        <span className="bg-gradient-to-r from-primary via-red-400 to-purple-500 text-transparent bg-clip-text">
          Generator
        </span>
      </h1>
      <p className="text-center text-xl px-10 text-gray-300">
        Create the perfect name for your business with our{" "}
        <span className="text-primary">AI-powered</span> Business Name Generator
        app! <br />
        Get <span className="text-primary">unique</span>,{" "}
        <span className="text-primary">creative</span>, and{" "}
        <span className="text-primary">catchy names</span> tailored to your
        brand in just seconds. <br /> Start naming your{" "}
        <span className="text-primary">dream venture today</span>!
      </p>
    </div>
  );
};

export default HeroSection;
