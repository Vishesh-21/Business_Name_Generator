"use client";

import React from "react";
import { Filter, Heart, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const data = [
  {
    title: "Generate Ideas",
    description:
      "Instantly generate unique and creative business name ideas tailored to your needs.",
    icon: Lightbulb,
  },
  {
    title: "Filter Results",
    description:
      "Refine results using industry, style, or keywords to find the perfect match.",
    icon: Filter,
  },
  {
    title: "Save Names",
    description:
      "Save the names you love and access all your favorites in one place.",
    icon: Heart,
  },
];

export const BottomBar = () => {
  return (
    <section className="w-full py-14 space-y-10">
      <div className="text-center">
        <h1 className="text-3xl text-primary font-semibold">How It Works</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Generate unique and creative business name ideas with our AI-powered
          business name generator. Get instant results based on your industry,
          style, and keywords.
        </p>
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <FeatureCard {...data[0]} />
          <FeatureCard {...data[1]} />
        </div>

        <div className="mt-8 flex justify-center">
          <FeatureCard {...data[2]} className="max-w-2xl" />
        </div>
      </div>
    </section>
  );
};

function FeatureCard({ title, description, icon: Icon, className }) {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-sm hover:shadow-primary/40",
        className
      )}
    >
      {/* Dotted background layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-[0.8]" />
      <div className="absolute inset-0 bg-dot-primary opacity-[0.15]" />

      {/* Content */}
      <div className="relative z-10 p-10">
        <CardHeader className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon size={24} />
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </CardHeader>

        <CardContent>
          <p className="text-center leading-relaxed text-muted-foreground">
            {description}
          </p>
        </CardContent>
      </div>
    </Card>
  );
}
