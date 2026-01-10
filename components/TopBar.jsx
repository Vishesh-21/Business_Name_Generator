import { BaggageClaim, ExternalLink, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const NavBar = () => {
  return (
    <div className="sticky top-0 left-0 flex justify-between py-2 md:py-3 z-10 backdrop-blur-lg  px-4 md:px-0 items-center border-b">
      <Link href="/" className="flex gap-1 items-center justify-start">
        <Image src="/logo-2.png" alt="Logo" width={40} height={30} />
        <h1 className="text-4xl font-bold tracking-tight uppercase text-primary/90">
          bizgen
        </h1>
      </Link>

      <div className="flex flex-row items-center gap-4">
        {/* cart icon  */}
        <Link
          href={"/saved-names"}
          className="text-primary hover:translate-y-[-4px] hover:scale-105 duration-300"
        >
          <BaggageClaim size={24} />
        </Link>

        <Link
          href={"https://github.com/Vishesh-21"}
          target="_blank"
          className="text-primary hover:translate-y-[-4px] hover:scale-105 duration-300"
        >
          <ExternalLink size={24} />
        </Link>
      </div>

      <div className="w-full h-[1px] absolute bottom-0 mt-8 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent"></div>
    </div>
  );
};
