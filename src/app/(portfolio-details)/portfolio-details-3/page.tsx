import React from "react";
import { Metadata } from "next";
import {PortfolioGridColThreeMain} from "@/pages/portfolio/details/portfolio-details-3-main"


export const metadata: Metadata = {
  title: "Liko - Portfolio Details 3 page",
};

const PortfolioDetailsThreePage = () => {
  return (
    <PortfolioGridColThreeMain />
  );
};

export default PortfolioDetailsThreePage;
