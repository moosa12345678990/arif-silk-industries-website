"use client";
import { gsap } from "gsap";
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
import TechnicalShafoon from "@/pages/portfolio//details/technicalshafoon"

import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import HeaderTwo from "@/layouts/headers/header-two"
// images
import port_d_1 from '@/assets/img/shafoon.jpg';
import Wrapper from "@/layouts/wrapper";
import PortfolioSectionSatin from "@/pages/portfolio/details/portfoliosectionsatin"
const port_images = [port_d_1];
import PortfolioSectionshafoon from "@/pages/portfolio/details/Jourjatshafoon"
import b from "@/assets/img/b.jpg"
const PortfolioDetailsTwoMain = () => {

   useScrollSmooth();

   useGSAP(() => {
      // remove all animations causing extra space
   });

   return (
      <>
         {/* header area start */}
         <div className="pt-24 md:pt-20 sm:pt-16">
            <HeaderTwo />
         </div>
         <div className="tm-hero-area tm-hero-ptb p-relative">
            <div className="container">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="tm-hero-content">
                        <span className="tm-hero-subtitle">Arif Silk Industries</span>
                        <h4 className=" tp-char-animation">
                           Jourjat shafoon
                        </h4>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <section className="py-20 bg-gray-50">
            <div className="container">
               <div className="row">
    <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                  <Image
                     src={b}
                     alt="fabric-image"
                     className="w-100 h-auto object-cover rounded-3"
                     priority
                  />
               </div>
               <div className="col-lg-6 col-md-6 col-sm-12">
                  <span className="project-details-1-subtitle d-block mb-2">Satin</span>

                  <h2 className="fw-bold mb-3">
                     Jourjat Chiffon (Shafon)
                  </h2>

                  <p className="mb-4">
                     Lightweight, semi-transparent, soft-flow woven fabric
                  </p>

                  <TechnicalShafoon />
               </div>
               </div>
           
            </div>

         </section>



         {/* header area end */}



         {/* Remove Wrapper completely */}


         {/* footer area */}
         <FooterTwo />
         {/* footer area */}
      </>
   );
};




function TechnicalSpecificationsshaffon() {
   return (

      <div className="w-full max-w-3xl overflow-x-auto rounded-xl border border-gray-200">
         <table className="w-full border-collapse text-sm">
            <caption className="text-left font-semibold p-4 text-base">
               Technical Specifications
            </caption>

            <thead className="hidden">
               <tr>
                  <th>Specification</th>
                  <th>Details</th>
               </tr>
            </thead>

            <tbody>
               <tr className="border-t">
                  <th className="bg-gray-50 text-left font-medium p-3 w-1/3">
                     Fabric Type
                  </th>
                  <td className="p-3">Poly Satin (100% Polyester)</td>
               </tr>

               <tr className="border-t">
                  <th className="bg-gray-50 text-left font-medium p-3">
                     GSM
                  </th>
                  <td className="p-3">80–120 GSM</td>
               </tr>

               <tr className="border-t">
                  <th className="bg-gray-50 text-left font-medium p-3">
                     Texture
                  </th>
                  <td className="p-3">Smooth, glossy, soft</td>
               </tr>

               <tr className="border-t">
                  <th className="bg-gray-50 text-left font-medium p-3">
                     Width
                  </th>
                  <td className="p-3">(Usually 54” / 58” / 60” or add your own)</td>
               </tr>

               <tr className="border-t">
                  <th className="bg-gray-50 text-left font-medium p-3">
                     Weight
                  </th>
                  <td className="p-3">Lightweight</td>
               </tr>

               <tr className="border-t">
                  <th className="bg-gray-50 text-left font-medium p-3">
                     Dyeing
                  </th>
                  <td className="p-3">High-quality colorfast dye</td>
               </tr>

               <tr className="border-t">
                  <th className="bg-gray-50 text-left font-medium p-3">
                     Feel
                  </th>
                  <td className="p-3">Silky with a flowing drape</td>
               </tr>
            </tbody>
         </table>
      </div>
   );
}

export default PortfolioDetailsTwoMain;
export { TechnicalSpecificationsshaffon };