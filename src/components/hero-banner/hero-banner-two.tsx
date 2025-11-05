'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Leaf } from "../svg";
import banner from "@/assets/img/banner-1.jpeg"
const HeroBannerTwo = () => {
  return (
    <div className="tp-hero-2-area tp-hero-2-pt">
      <div className="container container-1870">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-2-wrapper-main">
              <div className="tp-hero-2-wrapper d-flex align-items-center p-relative">
                <div className="tp-hero-2-bg tp-gsap-bg tp-hero-bg-single">
                  <Image style={{ width: "100%", height: "90vh" }} src={banner} alt="hero-bg" />
                </div>
                <div className="tp-hero-2-content-wrap p-relative">
                  <div className="tp-hero-2-title-box">
                    <h2 className="tp-hero-2-title text-1 z-index-5">
                     Crafting Silk
                    </h2>
                    <h2 className="tp-hero-2-title text-2">
                      <span>&   Stories Since 1982</span>
                    </h2>
                  </div>
                  <div className="tp-hero-2-content">
                    <p>
                      From tradition to innovation, we craft fabrics that define true elegance
                    </p>
                    <Link 
                     style={{ backgroundColor: "#718239", color:"white"}}
                      className="tp-btn-white"
                      href="/contact"
                    >
                      Book a consultation
                      <span>
                      
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerTwo;
