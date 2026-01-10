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
      <div className="flex gap-8 px-16 py-8 md:mt-10 text-white">
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
    </>
  );
};



function Card({ title, description, icon }) {
  return (
    <div className="flex flex-col gap-2 md:items-center px-4 py-4 rounded-md border-[1px]  bg-primary/5 border-primary transition-all duration-300 hover:shadow-lg showdow-primary">
      {icon}
      <h1 className="font-semibold text-medium">{title}</h1>
      <p className="md:text-center text-left text-base/5 text-gray-300">{description}</p>
    </div>
  );
}
