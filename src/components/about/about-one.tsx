'use client';
import React, { CSSProperties } from 'react';
import Image from 'next/image';
// images
import ab_1 from '@/assets/img/home-02/about/ab-1.jpg';

import bg_1 from "@/assets/img/tefta.jpg"
import bg_2 from "@/assets/img/crincle.jpg"
import ceo from "@/assets/img/jersey.jpeg"
const AboutOne = () => {

  return (
    <div className="tp-about-2-area pt-125 pb-200">
      <div className="container container-1480">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-10">
            <div className="tp-about-2-title-box tp-btn-trigger tp-btn-bounce mb-70 text-start text-xl-center">
              <h2 className="tp-about-2-section-title">
                Everything is possible when you work with us
              </h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6 col-md-6 order-1 order-xl-0 d-none d-md-block">
            <div className="tp-about-2-thumb-box p-relative">
              <div className="tp-about-2-thumb-main">
                <Image width={301} height={376} src={bg_1} alt="ab-img"/>
              </div>
              <div className="tp-about-2-thumb-inner">
                <Image style={{width:"100%", height:"auto"}} width={221} height={278}  src={bg_2} alt="ab-img" />
                <span className="tp-about-2-thumb-text"></span>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-12 order-0 order-xl-1">
            <div className="tp-about-2-content">
              <span>WELCOME TO ARIF SILK INDUSTRIES</span>
              <p className="mb-30">
               Founded in 1982 by Mr. Arif, our company stands as a true reflection of determination, vision, and innovation in the textile world. What began as a humble journey with Mr. Arif starting as a labourer in the textile trade has grown into a thriving enterprise renowned for its advanced manufacturing capabilities and diverse range of premium fabrics.

Today, Arif Silk Industries operates with a state-of-the-art production setup, combining traditional expertise with cutting-edge technology to deliver fabrics that meet the highest global standards. Our integrated facilities support both weaving and knitting processes, allowing us to cater to a wide variety of customer needs across local and international markets.</p>
               <span>VISION</span>
              <p className="mb-0">
              To become a global leader in home textiles by delivering innovative, sustainable, and premium-quality products that enrich living spaces worldwide  while preserving our legacy of craftsmanship, integrity, and excellence.   </p>
            </div>
          </div>
          <div className="col-xl-2 col-lg-6 col-md-6 order-1 d-none d-md-block">
            <div className="tp-about-2-right-thumb text-end">
              <Image style={{ width: "100%", height: "auto" }} data-speed="auto" src={ceo} alt="ab-img" data-lag="0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;