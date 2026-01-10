import React from "react";
import { Filter, Heart, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <div className="mb-10 p-10 space-y-16">
      <div className="flex items-center gap-16">
        {/* cards  */}
        <Card
          title={data[0].title}
          description={data[0].description}
          icon={data[0].icon}
        />

        <Card
          title={data[1].title}
          description={data[1].description}
          icon={data[1].icon}
        />
      </div>
      <Card
        title={data[2].title}
        description={data[2].description}
        icon={data[2].icon}
        className="max-w-xl mx-auto"
      />
    </div>
  );
};

function Card({ title, description, icon, className }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 md:items-center px-10 py-14 rounded-md border-[1px]  bg-primary/5 border-primary transition-all duration-300 hover:shadow-lg showdow-primary",
        className
      )}
    >
      {icon}
      <h1 className="font-semibold text-medium">{title}</h1>
      <p className="md:text-center text-left text-base/5 text-gray-300">
        {description}
      </p>
    </div>
  );
}
