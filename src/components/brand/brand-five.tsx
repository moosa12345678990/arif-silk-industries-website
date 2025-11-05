import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// images
import b_1 from "@/assets/img/inner-about/brand/brand-1.png";
import b_2 from "@/assets/img/inner-about/brand/brand-2.png";
import b_3 from "@/assets/img/inner-about/brand/brand-3.png";
import b_4 from "@/assets/img/inner-about/brand/brand-4.png";
import b_5 from "@/assets/img/inner-about/brand/brand-5.png";
import b_6 from "@/assets/img/inner-about/brand/brand-2.png";
import client1 from "@/assets/img/clientslogos/American-Textile-Company-ATC-logo.png"
import client2 from "@/assets/img/clientslogos/calvin-klein-1-logo-black-and-white.png"
import client3 from "@/assets/img/clientslogos/current-target-logo.png"
import client4 from "@/assets/img/clientslogos/images.png"
import client5 from "@/assets/img/clientslogos/logo-alkaram-black.png"
import client6 from "@/assets/img/clientslogos/yunus.png"
 // brand images
const brand_images = [client1, client2, client3, client4, client5, client6];

export default function BrandFive() {
  return (
    <div
      className="ab-brand-area pt-120 pb-120 black-bg-2"
      style={{
        backgroundImage:
          "url(/assets/img/inner-about/brand/brand-bg-shape.png)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="ab-brand-title-box mb-100">
              <h4 className="ab-brand-title">Our clients</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="ab-brand-wrapper mb-80">
              <div className="swiper-container ab-brand-slide-active">
                <Marquee speed={100} loop={0} className="ab-brand-slide-wrap">
                  {brand_images.map((b, i) => (
                    <div
                      key={i}
                      className="ab-brand-item"
                    >
                      <Image src={b}   width={200}  height={200}  alt="brand" />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-7 col-lg-9">
            <div className="ab-brand-content tp_title_anim">
              <p>
                We belive in creating partnerships based on honesty and true
                connection. That is why some of the biggest companies stayed with
                us for years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
