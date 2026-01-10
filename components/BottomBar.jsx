import React from "react";
import { Filter, Heart, Lightbulb } from "lucide-react";

const data = [
  {
    title: "Generate Idea",
    description:
      "Tap to instantly generate unique and creative business name ideas tailored to your needs!",
    icon: <Lightbulb className="text-primary" size={35} />,
  },
  {
    title: "Filter Result",
    description:
      "Refine your results by applying filters like industry, style, or keywords to find the perfect match.",
    icon: <Filter className="text-primary" size={35} />,
  },
  {
    title: "Save Name",
    description:
      "Found a name you love? Save it for later and keep all your favorites in one place!",
    icon: <Heart className="text-primary" size={35} />,
  },
];

export const BottomBar = () => {
  return (
    <>
      <div className="flex flex-col px-10 md:px-0 md:flex-row justify-between md:gap-10 gap-4 mt-12 text-white">
        {/* cards  */}
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
      <div className="w-full md:fixed bottom-0">
        <hr className="md:w-[100%] mt-5 mx-auto" />
        <footer className="text-white text-center text-gray-500">
          <h1 className="mt-3">
            &copy; {new Date().getFullYear()} | All rights are reserved.
          </h1>
        </footer>
      </div>
    </>
  );
};

function Card({ title, description, icon }) {
  return (
    <div className="flex flex-col gap-2 md:items-center px-4 py-4 rounded-md border-[1px]  bg-primary/20 border-primary transition-all duration-300">
      {icon}
      <h1 className="font-semibold text-medium">{title}</h1>
      <p className="md:text-center text-left text-base">{description}</p>
    </div>
  );
}
