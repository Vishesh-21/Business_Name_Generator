import { NavBar } from "@/components/TopBar";
import "./globals.css";
import { Afacad_Flux } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { BusinessNameContext } from "@/context/BusinessNameContext";

const afacad = Afacad_Flux({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "BizGen - AI Business Name Generator",
  description:
    "Generate unique, brandable business names instantly. Discover creative company name ideas tailored to your industry and vision.",
  icons: "/logo-2.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${afacad.className} min-h-screen relative max-w-5xl mx-auto dark`}>
        <BusinessNameContext>
          <NavBar />
          <Toaster />
          {children}
          <Footer />
        </BusinessNameContext>
      </body>
    </html>
  );
}

const Footer = () => {
  return (
    <div className="absolute w-full text-center  -bottom-0 text-gray-400 py-4 border-t-[1px] text-sm border-gray-400/50 ">
      &copy; {new Date().getFullYear()} | All rights are reserved.
    </div>
  );
};
