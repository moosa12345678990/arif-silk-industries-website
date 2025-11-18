"use client";
import React from "react";
import Image from "next/image";

// award images
import a_1 from "@/assets/img/1correct.jpeg";
import a_2 from "@/assets/img/2correct.jpeg";
import a_3 from "@/assets/img/3correct.jpeg";
import a_4 from "@/assets/img/4correct.jpeg";
import a_5 from "@/assets/img/home-01/award/award-5.png";
import a_6 from "@/assets/img/home-01/award/award-6.png";

const award_data = [
  { id: 1, img: a_1, title: "OEKO-TEX Standard 100"},
  { id: 2, img: a_2, title: "Scope Certification" },
  { id: 3, img: a_3, title: "Karachi Chamber of Commerce &  Industry" },
  { id: 4, img: a_4, title: "Karachi Member of Chamber & Industry" },
];

type IProps = {
  cls?: string;
};

const AwardOne = ({ cls = "pt-5 pb-5" }: IProps) => {
  return (
    <div className={`container ${cls}`}>
      {/* Main Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold display-5 m-4">
          Our <span className="text-primary">Certificates & Awards</span>
        </h2>
        <p className="text-muted fs-5 mt-3">
          Recognitions and achievements that highlight our commitment to excellence
        </p>
      </div>

      {/* Images Grid */}
      <div className="row g-4">
        {award_data.map((item) => (
          <div key={item.id} className="col-12 col-md-6">
            <div className="position-relative w-100" style={{ minHeight: "700px" }}>
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover rounded shadow-sm"
              />
            </div>
            <div className="mt-3 text-center">
              <h5 className="fw-semibold">{item.title}</h5>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardOne;
