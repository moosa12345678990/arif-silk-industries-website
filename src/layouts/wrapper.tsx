"use client";
import React from "react";
import BackToTop from "@/components/back-to-top";
import ThemeSetting from "@/components/theme-setting";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap.bundle.min");
}

interface WrapperProps {
  children: React.ReactNode;
  showBackToTop?: boolean;
}

const Wrapper = ({ children, showBackToTop = true }: WrapperProps) => {
  return (
    <div style={{ backgroundColor: "#f9f7f0", minHeight: "100" }}>
      {children}
      {showBackToTop && <BackToTop />}
      <ThemeSetting />
    </div>
  );
};

export default Wrapper;
