"use client";
import React from "react";

const DotLoader = () => {
  return (
    <div className="flex justify-center items-center space-x-2 mt-5">
      <div className="w-2 h-2 bg-primary rounded-full animate-dotScale1"></div>
      <div className="w-2 h-2 bg-primary rounded-full animate-dotScale2"></div>
      <div className="w-2 h-2 bg-primary rounded-full animate-dotScale3"></div>
      <div className="w-2 h-2 bg-primary rounded-full animate-dotScale4"></div>
    </div>
  );
};

export default DotLoader;
