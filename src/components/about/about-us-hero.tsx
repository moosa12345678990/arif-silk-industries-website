import React from "react";
import { scroller } from "react-scroll";
import { ScrollDown } from "../svg";
import Link from "next/link";

export default function AboutUsHero() {
  const scrollTo = () => {
    scroller.scrollTo('about-info', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  return (
    <div
      className="ab-inner-hero-area ab-inner-hero-bg p-relative"
      style={{backgroundImage: "url(/assets/img/contact.jpg)"}}
    >
      <div className="breadcurmb-site d-none">
        <h6>About Us</h6>
      </div>
      <div className="container container-1480">
        <div className="row">
          <div className="col-xl-8">
            <div
              className="ab-inner-hero-title-box"
              data-lag="0.2"
              data-stagger="0.08"
            >
              <span className="ab-inner-hero-subtitle">
                Crafting Silk
 <br /> & Stories Since 1982
              </span>
              <h1 className="ab-inner-hero-title tp-char-animation">
                About us
              </h1>
              <p>Founded in 1982 by Mr. Arif, our company stands as a true reflection of determination, vision, and innovation in the textile world. </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-xl-5 col-lg-8">
            <div
              className="ab-inner-hero-content"
              data-lag="0.2"
              data-stagger="0.08"
            >
              <p>
               To become a global leader in home textiles by delivering innovative, sustainable, and premium-quality products that enrich living spaces worldwide while preserving our legacy of craftsmanship, integrity, and excellence.
              </p>
               <Link className="tp-btn-white-sm border-style" href="#">Our Products</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
