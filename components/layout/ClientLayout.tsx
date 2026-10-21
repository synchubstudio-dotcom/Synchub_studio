"use client";

// import MobileMenu from "@/components/headers/MobileMenu";
import Header1 from "@/components/headers/Header1";
import InitScroll from "@/components/scroll/InitScroll";
import LenisSmoothScroll from "@/components/scroll/LenisSmoothScroll";
import ScrollTop from "@/components/scroll/ScrollTop";
import ScrollToTopOnRouteChange from "@/components/scroll/ScrollToTopOnRouteChange";

import React, { useEffect } from "react";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  useEffect(() => {
    let originalTitle = document.title;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (!document.title.includes("We miss you")) {
          originalTitle = document.title;
        }
        document.title = "🥺 We miss you! | SyncHUB";
      } else {
        if (originalTitle && !originalTitle.includes("We miss you")) {
          document.title = originalTitle;
        }
      }
    };

    const handleFocus = () => {
      if (originalTitle && !originalTitle.includes("We miss you")) {
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("focus", handleFocus);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);
  return (
    <>
      {/* <MobileMenu /> */}
      <Header1 />
      {children}
      <InitScroll />
      <ScrollTop />
      <LenisSmoothScroll />
      <ScrollToTopOnRouteChange />
    </>
  );
}
