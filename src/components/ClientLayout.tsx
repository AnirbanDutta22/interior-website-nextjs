"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const navbarRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const [mainContentMarginTop, setMainContentMarginTop] = useState<string>("0px");

  useEffect(() => {
    if (pathname === "/") {
      setMainContentMarginTop("0px");
    } else {
      const height = `${navbarRef.current?.offsetHeight}px`;
      setMainContentMarginTop(height);
    }
  }, [pathname]);

  return (
    <>
      <div
        className={`relative overflow-hidden min-h-screen ${
          pathname !== "/" && "w-[80vw] mx-auto my-10 p-3"
        }`}
        style={{ marginTop: `${mainContentMarginTop}` }}
      >
        {children}
      </div>
    </>
  );
} 