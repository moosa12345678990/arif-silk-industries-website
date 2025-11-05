import React from "react";
import { Leaf } from "../svg";
import Image from "next/image";
// service icon
import ser_1 from "@/assets/img/home-02/service/sv-icon-1.png";
import ser_2 from "@/assets/img/home-02/service/sv-icon-2.png";
import ser_3 from "@/assets/img/home-02/service/sv-icon-3.png";
import ser_4 from "@/assets/img/home-02/service/sv-icon-4.png";
// shape
import shape from "@/assets/img/home-02/service/sv-shape-1.png";
import yarn from "@/assets/img/yarn.jpg"
const service_accordion = [
  {
    id: 1,
    icon: ser_1,
    title: "Twisting",
    desc: "Many modern textile manufacturers prioritize eco-friendly materials and processes, employing organic fibers, recycled content, and sustainable dyes to minimize environmental impact.",
  },
  {
    id: 2,
    icon: ser_2,
    title: "Manufacturing",
    desc: "By leveraging automation, AI, and IoT across production, we enhance efficiency and quality control while reducing waste driving smarter, more sustainable manufacturing practices.",
  },
  {
    id: 3,
    icon: ser_3,
    title: "Designing",
    desc: "We offer tailored solutions custom designs, sizes, and colors to meet specific customer needs and preferences with precision and creativity.",
  },
  {
    id: 4,
    icon: ser_4,
    title: "Dyeing",
    desc: "From raw material sourcing to final delivery, we control multiple stages of the supply chain to ensure quality and minimize lead times, delivering reliable, consistent results.",
  },
  {
    id: 5,
    icon: ser_4,
    title: "Innovative Fabric Development",
    desc: "We continuously explore cutting-edge materials and processes to push the boundaries of performance, sustainability, and versatility in fabric development.",
  },
  {
    id: 6,
    icon: ser_4,
    title: "Finishing",
    desc: "Our finishing processes emphasize high-quality materials and stringent quality control to ensure every product meets industry standards and customer expectations.",
  },
  {
    id: 7,
    icon: ser_4,
    title: "Development",
    desc: "Sustainability is central to our approach. We invest in eco-friendly materials and processes to help you align with environmentally conscious values without compromising quality.",
  },
];
export default function ServiceTwo() {
  return (
    <div className="tp-service-2-area tp-service-2-pt  pb-150 z-index-5">
      <div className="container container-1480">
        <div className="row">
          <div className="col-xl-8">
            <div className="tp-service-2-title-box mb-70">
              <span className="tp-section-subtitle-3">
                <span>
                  <Leaf />
                </span>
                SERVICES
              </span>
              <h4 className="tp-section-title-40">
                From weaving and dyeing to finishing and customization, Arif Silk Industries provides a full range of silk manufacturing services under one roof. We combine traditional craftsmanship with advanced technology to create fabrics that define elegance and sophistication.
              </h4>
            </div>
          </div>
        </div>
        {/* tp-service-2-shape-img */}
        <div className="row align-items-center">
          <div className="col-xxl-6 col-xl-4 col-lg-4">
            <div className=" text-center text-lg-start">
              <Image src={yarn} alt="" />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-8 col-lg-8">
            <div className="tp-service-2-accordion-box">
              <div className="accordion" id="accordionExample">
                {service_accordion.map((s) => (
                  <div key={s.id} className="accordion-items">
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-buttons ${s.id !== 1 ? "collapsed" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${s.id}`}
                        aria-expanded="false"
                        aria-controls={`collapse-${s.id}`}
                      >
                        <span>
                          <Image src={s.icon} alt="icon" />
                        </span>
                        {s.title}
                        <span className="accordion-icon"></span>
                      </button>
                    </h2>
                    <div
                      id={`collapse-${s.id}`}
                      className={`accordion-collapse collapse ${s.id === 1 ? "show" : ""}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>{s.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
