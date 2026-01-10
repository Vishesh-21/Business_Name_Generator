"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import DotLoader from "./DotLoader";
import { Button } from "./ui/button";
import { getStatus } from "@/helper/Function";
import { Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const DomainStatus = ({ open, setOpen, domain, name }) => {
  const [loading, setLoading] = useState(false);
  const [domainStatus, setDomainStatus] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  //function to save name into local storage
  function saveName() {
    const savedNames = JSON.parse(localStorage.getItem("savedNames")) || [];

    if (savedNames.includes(name)) {
      // Unsave
      const updatedNames = savedNames.filter((n) => n !== name);
      localStorage.setItem("savedNames", JSON.stringify(updatedNames));
      setIsSaved(false);
      toast({
        title: `${name} removed!`,
        description: `${name} has been removed from your saved names.`,
        variant: "success",
      });
    } else {
      // Save
      savedNames.push(name);
      localStorage.setItem("savedNames", JSON.stringify(savedNames));
      setIsSaved(true);
      toast({
        title: `${name} saved!`,
        description: `${name} has been added to your saved names.`,
        variant: "default",
      });
    }
  }

  useEffect(() => {
    const savedNames = JSON.parse(localStorage.getItem("savedNames")) || [];
    setIsSaved(savedNames.includes(name));
  }, [name]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogTitle></DialogTitle>
        <DialogHeader>
          <DialogTitle className="text-4xl font-semibold text-center mb-3">
            {domain}
          </DialogTitle>
          <DialogDescription className="text-center flex gap-2">
            <Button
              onClick={saveName}
              className="w-1/2"
              variant={isSaved ? "destructive" : "default"}
            >
              {isSaved ? "Unsave" : "Save"}
            </Button>
            <Button
              className="w-1/2"
              onClick={() => {
                getStatus(domain, setLoading, setDomainStatus);
              }}
            >
              {loading ? (
                <p className="flex items-center gap-1">
                  <Loader2 className="animate-spin h-4 w-4" /> Checking...
                </p>
              ) : domainStatus ? (
                `Status: ${domainStatus}`
              ) : (
                "Check Status"
              )}
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
