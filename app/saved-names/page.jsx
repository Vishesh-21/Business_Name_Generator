"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function Page() {
  const [savedNames, setSavedNames] = useState([]);

  // Load saved names from localStorage
  useEffect(() => {
    const names = JSON.parse(localStorage.getItem("savedNames")) || [];
    setSavedNames(names);
  }, []);

  // Remove a name
  const removeName = (name) => {
    const updatedNames = savedNames.filter((n) => n !== name);
    setSavedNames(updatedNames);
    localStorage.setItem("savedNames", JSON.stringify(updatedNames));
    toast({
      title: `${name} removed!`,
      description: `${name} has been removed from your saved names.`,
      variant: "success",
    });
  };

  return (
    <div className="max-w-2xl mx-auto my-10  px-4">
      <Card className="shadow-sm bg-black/50">
        <CardHeader>
          <CardTitle className="text-xl flex justify-between items-center font-semibold">
            <h1>Saved Names</h1>
            <div>{savedNames.length || 0}</div>
          </CardTitle>
        </CardHeader>

        <CardContent>
          {savedNames.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-6">
              No names saved yet
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {savedNames.map((name) => (
                <li
                  key={name}
                  className="flex items-center justify-between rounded-lg border px-4 py-3 hover:bg-muted/50 transition"
                >
                  <span className="font-medium">{name}</span>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeName(name)}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </li>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
