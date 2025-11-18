"use client";

import React from "react";
import Image from "next/image";
import TechnicalSpecifications from "@/pages/portfolio/details/technicalSpecifications";
import port_d_1 from "@/assets/img/shafoon.jpg";

const PortfolioSectionshafoon = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
            <Image
              src={port_d_1}
              alt="fabric-image"
              className="w-100 h-auto object-cover rounded-3"
              priority
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6 col-md-6 col-sm-12">
            <span className="project-details-1-subtitle d-block mb-2">Satin</span>

            <h2 className="fw-bold mb-3">
              Jourjat shafoon
            </h2>

            <p className="mb-4">
              Poly Satin is a luxurious, smooth, and glossy polyester-based fabric 
              widely used in home textiles...
            </p>

            <TechnicalSpecifications />
          </div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioSectionshafoon;
