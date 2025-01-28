import React from "react";
import { Filter, Heart, Lightbulb } from "lucide-react";

export const BottomBar = () => {
  return (
    <>
      <div className="px-40 flex justify-between gap-10 mt-12 text-white">
        <div className="flex flex-col gap-2 md:items-center px-4 py-4 rounded-md hover:bg-gray-800 transition-all duration-200">
          <Lightbulb className="text-primary text-3xl" size={35} />
          <h1 className="text-xl font-semibold">Generate Idea</h1>
          <p className="text-center">
            Tap to instantly generate unique and creative business name ideas
            tailored to your needs!
          </p>
        </div>
        <div className="flex flex-col gap-2 md:items-center px-4 py-4 rounded-md hover:bg-gray-800 transition-all duration-200">
          <Filter className="text-primary text-3xl" size={35} />
          <h1 className="text-xl font-semibold">Filter Result</h1>
          <p className="text-center">
            Refine your results by applying filters like industry, style, or
            keywords to find the perfect match.
          </p>
        </div>
        <div className="flex flex-col gap-2 md:items-center px-4 py-4 rounded-md hover:bg-gray-800 transition-all duration-200">
          <Heart className="text-primary text-3xl" size={35} />
          <h1 className="text-xl font-semibold">Save Name</h1>
          <p className="text-center">
            Found a name you love? Save it for later and keep all your favorites
            in one place!
          </p>
        </div>
      </div>
      <div className="fixed w-full bottom-0 left-0">
        <hr className="w-[77%] mt-5 mx-auto" />
        <footer className="text-white text-center text-gray-500">
          All rights are reserved : {new Date().getFullYear()}{" "}
        </footer>
      </div>
    </>
  );
};
