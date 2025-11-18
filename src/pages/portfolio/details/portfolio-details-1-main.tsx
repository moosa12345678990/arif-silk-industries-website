"use client";
import { gsap } from "gsap";
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

import TechnicalSpecifications from "@/pages/portfolio/details/technicalSpecifications";

import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import  HeaderTwo from "@/layouts/headers/header-two" 
// images
import port_d_1 from '@/assets/img/shafoon.jpg';
import Wrapper from "@/layouts/wrapper";
import PortfolioSectionSatin from "@/pages/portfolio/details/portfoliosectionsatin"
const port_images = [port_d_1];

const PortfolioDetailsOneMain = () => {

  useScrollSmooth();

  useGSAP(() => {
    // remove all animations causing extra space
  });

  return (
    <>
        {/* header area start */}
      <div className="pt-24 md:pt-20 sm:pt-16">
            <HeaderTwo  />
      </div>
          <div className="tm-hero-area tm-hero-ptb p-relative">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tm-hero-content">
                        <span className="tm-hero-subtitle">Arif Silk Industries</span>
                        <h4 className=" tp-char-animation">
                          Our Poly Satin (100% Polyester)
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
       
            {/* header area end */}



      <PortfolioSectionSatin />
      {/* Remove Wrapper completely */}


         {/* footer area */}
                <FooterTwo />
                {/* footer area */}
    </>
  );
};

export default PortfolioDetailsOneMain;
