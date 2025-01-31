"use client";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { useQueryContext } from "@/context/BusinessNameContext";
import { nameStyle, Randomness } from "@/helper/constant";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Sidebar = ({ setRefresh, refresh }) => {
  const { query, updateQuery } = useQueryContext();

  const handleNameStyle = (nameStyle) => {
    updateQuery({ nameStyle });
  };

  const handleRandomness = (randomness) => {
    updateQuery({ randomness });
  };

  const handleFormFields = (e) => {
    updateQuery({ [e.target.name]: e.target.value });
  };

  const handleGenerate = () => {
    setRefresh(!refresh);
  };

  return (
    <Card className="bg-transparent text-white py-4 rounded-sm">
      <CardContent>
        <div className="flex md:flex-col justify-between items-start flex-row">
          <div>
            <h2 className="text-xl font-semibold mb-2">Name style</h2>
            <RadioGroup
              value={query?.nameStyle || "Auto"}
              onValueChange={handleNameStyle}
            >
              {nameStyle.map((item) => (
                <Label
                  htmlFor={`nameStyle${item.id}`}
                  key={`nameStyle${item.id}`}
                  className="flex gap-3 items-center duration-300 cursor-pointer"
                >
                  <RadioGroupItem
                    value={item.name}
                    id={`nameStyle${item.id}`}
                  />
                  <div>
                    <h1 className="text-md font-semibold">{item.name}</h1>
                  </div>
                </Label>
              ))}
            </RadioGroup>
          </div>
          <div className="mt-2">
            <h2 className="text-xl font-semibold mb-2">Randomness</h2>
            <RadioGroup
              value={query?.randomness || "Medium"}
              onValueChange={handleRandomness}
            >
              {Randomness.map((item) => (
                <Label
                  htmlFor={`randomness${item.id}`}
                  key={`randomness${item.id}`}
                  className="flex gap-3 items-center duration-300 cursor-pointer"
                >
                  <RadioGroupItem
                    value={item.name}
                    id={`randomness${item.id}`}
                  />
                  <div>
                    <h1 className="text-md font-semibold">{item.name}</h1>
                  </div>
                </Label>
              ))}
            </RadioGroup>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex flex-col gap-2">
            <Label className="text-md">Keyword</Label>
            <Input
              onChange={handleFormFields}
              placeholder="Enter keyword"
              name="keyword"
              value={query?.keyword ?? ""}
              className="text-md "
            />
            <Label className="text-md">Description</Label>
            <textarea
              onChange={handleFormFields}
              value={query?.description ?? ""}
              placeholder="Enter description"
              className="text-md border-[1px] bg-transparent border-gray-300 rounded px-2 py-1 h-24 resize-none outline-none focus:ring-[1px] focus:ring-black"
              name="description"
            ></textarea>
            <Button
              onClick={handleGenerate}
              className="text-md font-semibold mt-3"
            >
              Generate
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
