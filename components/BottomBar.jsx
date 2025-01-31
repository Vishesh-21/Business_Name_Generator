import React from "react";
import { Filter, Heart, Lightbulb } from "lucide-react";

export const BottomBar = () => {
  return (
    <>
      <div className="flex flex-col px-10 md:px-0 md:flex-row justify-between md:gap-10 gap-4 mt-12 text-white">
        <div className="flex flex-col gap-2 md:items-center px-4 py-4 rounded-md hover:bg-gray-800 transition-all duration-200">
          <Lightbulb className="text-primary text-3xl" size={35} />
          <h1 className="text-xl font-semibold">Generate Idea</h1>
          <p className="md:text-center text-left">
            Tap to instantly generate unique and creative business name ideas
            tailored to your needs!
          </p>
        </div>
        <div className="flex flex-col gap-2 md:items-center px-4 py-4 rounded-md hover:bg-gray-800 transition-all duration-200">
          <Filter className="text-primary text-3xl" size={35} />
          <h1 className="text-xl font-semibold">Filter Result</h1>
          <p className="md:text-center text-left">
            Refine your results by applying filters like industry, style, or
            keywords to find the perfect match.
          </p>
        </div>
        <div className="flex flex-col gap-2 md:items-center px-4 py-4 rounded-md hover:bg-gray-800 transition-all duration-200">
          <Heart className="text-primary text-3xl" size={35} />
          <h1 className="text-xl font-semibold">Save Name</h1>
          <p className="md:text-center text-left">
            Found a name you love? Save it for later and keep all your favorites
            in one place!
          </p>
        </div>
      </div>
      <div className="w-full md:fixed bottom-0">
        <hr className="md:w-[100%] mt-5 mx-auto" />
        <footer className="text-white text-center text-gray-500">
          <h1 className="mt-3">&copy; {new Date().getFullYear()}{" "} | All rights are reserved.</h1>
        </footer>
      </div>
    </>
  );
};
