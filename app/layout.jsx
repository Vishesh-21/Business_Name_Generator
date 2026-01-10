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
      <body
        className={`${afacad.className} min-h-screen max-w-6xl mx-auto dark`}
      >
        <BusinessNameContext>
          <NavBar />
          <main className="min-h-screen relative">
            {/* glow effect  */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl" />

              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl" />
            </div>

            <div className="relative z-100 min-h-screen pb-12">
              <Toaster />
              {children}
              <Footer />
            </div>
          </main>
        </BusinessNameContext>
      </body>
    </html>
  );
}

const Footer = () => {
  return (
    <div className="absolute w-full text-center bottom-0 text-gray-400 py-4 border-t-[1px] text-sm border-gray-400/50 ">
      &copy; {new Date().getFullYear()} | All rights are reserved.
    </div>
  );
};
