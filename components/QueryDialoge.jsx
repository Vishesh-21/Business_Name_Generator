import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { nameStyle, Randomness } from "@/helper/constant";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useQueryContext } from "@/context/BusinessNameContext";
import { useRouter } from "next/navigation";

export const QueryDialoge = ({ open, setOpen }) => {
  const { query, updateQuery } = useQueryContext();
  const router = useRouter();

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
    router.push("/business-name");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen} className="bg-black">
      <DialogContent>
        <DialogHeader></DialogHeader>
        {/* tabs sections  */}
        <Tabs defaultValue="nameStyle">
          <TabsList className="p-0 gap-1">
            <TabsTrigger
              className="text-md data-[state=active]:bg-primary data-[state=active]:text-black data-[state=active]:font-bold"
              value="nameStyle"
            >
              Name Styles
            </TabsTrigger>
            <TabsTrigger
              className="text-md data-[state=active]:bg-primary data-[state=active]:text-black data-[state=active]:font-bold"
              value="randomness"
            >
              Randomness
            </TabsTrigger>
            <TabsTrigger
              className="text-md data-[state=active]:bg-primary data-[state=active]:text-black data-[state=active]:font-bold"
              value="brandInfo"
            >
              Brand Info
            </TabsTrigger>
          </TabsList>
          <TabsContent value="nameStyle">
            <h2 className="text-lg capitalize font-semibold mt-6 mb-3">
              Select name style
            </h2>
            <RadioGroup
              defaultValue="Auto"
              onValueChange={handleNameStyle}
              className="grid grid-cols-2 gap-4 px-1"
            >
              {nameStyle.map((item) => (
                <Label
                  htmlFor={`nameStyle${item.id}`}
                  key={`nameStyle${item.id}`}
                  className="p-4 rounded border flex gap-3 items-center duration-300 cursor-pointer"
                >
                  <RadioGroupItem
                    value={item.name}
                    id={`nameStyle${item.id}`}
                  />
                  <div>
                    <h1 className="text-md tracking-wide">{item.name}</h1>
                    <p className="whitespace-nowrap text-sm opacity-70">
                      {item.description}
                    </p>
                  </div>
                </Label>
              ))}
            </RadioGroup>
          </TabsContent>
          <TabsContent value="randomness">
            <h2 className="text-lg capitalize font-semibold mb-3 mt-6">
              select randomness
            </h2>
            <RadioGroup
              defaultValue="Medium"
              onValueChange={handleRandomness}
              className="px-1"
            >
              {Randomness.map((item) => (
                <Label
                  htmlFor={`randomness${item.id}`}
                  key={`randomness${item.id}`}
                  className="p-4 rounded border flex gap-3 items-center cursor-pointer"
                >
                  <RadioGroupItem
                    value={item.name}
                    id={`randomness${item.id}`}
                  />
                  <div>
                    <h1 className="text-md tracking-wide">{item.name}</h1>
                    <p className="whitespace-nowrap text-sm opacity-70">
                      {item.description}
                    </p>
                  </div>
                </Label>
              ))}
            </RadioGroup>
          </TabsContent>
          <TabsContent value="brandInfo">
            <h2 className="text-lg capitalize font-semibold mt-6 mb-3">
              Brand Information
            </h2>
            <div className="px-1 flex flex-col gap-2">
              <Label className="text-md">Keyword</Label>
              <Input
                onChange={handleFormFields}
                placeholder="Enter keyword"
                name="keyword"
                value={query?.keyword || ""}
                className="text-md"
              />
              <Label className="text-md">Description</Label>
              <textarea
                onChange={handleFormFields}
                placeholder="Enter description"
                className="text-md border rounded px-2 py-1 h-24 resize-none outline-none focus:ring-[1px] focus:ring-black bg-transparent"
                name="description"
                value={query?.description}
              ></textarea>
              <Button
                onClick={handleGenerate}
                className="text-md font-semibold mt-3"
              >
                Generate
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
