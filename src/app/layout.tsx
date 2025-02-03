"use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./redux/provider";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { FaPhone, FaRocketchat, FaWhatsapp } from "react-icons/fa6";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navbarRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const [mainContentMarginTop, setMainContentMarginTop] =
    useState<string>("0px");

  useEffect(() => {
    if (pathname === "/") {
      setMainContentMarginTop("0px");
    } else {
      const height = `${navbarRef.current?.offsetHeight}px`;
      setMainContentMarginTop(height);
    }
  }, [pathname]);

  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar ref={navbarRef} />
          <main
            className={`relative overflow-hidden min-h-screen ${
              pathname !== "/" && "w-[80vw] mx-auto my-10 p-3"
            }`}
            style={{ marginTop: `${mainContentMarginTop}` }}
          >
            {children}
          </main>
          {/* fixed contact button */}
          <div className="fixed top-[65%] md:top-[80%] translate-y-[-65%] md:translate-y-[-80%] right-0 z-20 flex flex-col gap-y-3 md:gap-y-6 p-3 md:p-5 text-2xl md:text-3xl bg-slate-100 shadow-md text-black">
            <FaWhatsapp className="text-green-500 cursor-pointer" />
            <FaPhone className="text-gray-500 cursor-pointer" />
          </div>
          {/*sticky help button */}
          <div className="fixed z-20 top-[98%] translate-y-[-98%] transition-all ease-in-out duration-700 right-5 bg-primary-btn text-primary-bg shadow-lg rounded-md cursor-pointer p-2.5 md:p-4 text-2xl md:text-3xl">
            <FaRocketchat />
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
