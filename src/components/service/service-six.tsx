import React from "react";
import Image from "next/image";
import ser_img_1 from "@/assets/img/gg.jpg";
import ser_img_2 from "@/assets/img/s.jpg";
import ser_img_3 from "@/assets/img/d.jpg";
import ser_img_4 from "@/assets/img/d.jpg";
import ser_img_5 from "@/assets/img/g.jpg";
import ser_img_6 from "@/assets/img/z.jpg";
import { RightArrow, ShapeTwo } from "../svg";
import Link from "next/link";

const service_data = [
  {
    id: 1,
    img: ser_img_1, // fixed
    subtitle: "Even twist",
    title: "Twisting",
    text: "At Arif Silk Industries, twisting is one of the key processes that ensures the strength, durability, and premium feel of our polyester and blended fabrics. Twisting helps convert loose filaments into strong, usable yarns that give the final fabric its performance characteristics.",
    lists: [
      "Higher tensile strength",
      "Smoother surface",
      "Reduced fuzziness",
      "Better fabric performance",
      "More controlled texture and appearance",
    ],
  },
  {
    id: 2,
    img: ser_img_2,
    subtitle: "Manufacturing",
    title: "Manufacturing",
    text: "Utilizing automation, AI, and IoT in production processes enhances efficiency, quality control, and reduces waste, leading to smarter manufacturing practices.",
    lists: [
      "Strict Quality Control System",
      "Skilled Workforce & Technical Expertise",
      "High Production Capacity",
      "Customized Fabric Development",
    ],
  },
  {
    id: 3,
    img: ser_img_3,
    subtitle: "Offering Custom Designs",
    title: "Designing",
    text: "Offering tailored solutions, such as custom designs, sizes, and colors, allows manufacturers to cater to specific customer needs and preferences.",
    lists: [
      "Creative & Trend-Focused Development",
      "Precision Pattern & Texture Creation",
      "Custom Design Solutions for Clients",
    ],
  },
  {
    id: 4,
    img: ser_img_5,
    subtitle: "Design Matching colors is an art and we are the masters of it",
    title: "Dyeing", // corrected spelling
    text: "Some companies control multiple stages of the supply chain, from raw material sourcing to final product delivery, ensuring quality and reducing lead times. Innovative Fabric Development.",
    lists: [
      "Uniform & Deep Color Penetration",
      "Excellent Color Fastness",
      "Wide Range of Shades & Custom Dyeing",
    ],
  },
  {
    id: 5,
    img: ser_img_6,
    subtitle: "Polishing the product to be perfect",
    title: "Finishing",
    text: "We prioritize high-quality materials and rigorous quality control processes to ensure that every product meets industry standards and customer expectations.",
    lists: [
      "Premium Softness & Enhanced Hand Feel",
      "Dimensional Stability & Quality Control",
      "Specialized Finishes for Performance & Appearance",
    ],
  },

];

export default function ServiceSix() {
  return (
    <div className="sv-service-area project-panel-area-2 max-h-screen">
      <div className="container-fluid p-0">
        {service_data.map((item) => (
          <div key={item.id} className="sv-service-item project-panel-2">
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-thumb">
                  <Image
                    src={item.img}
                    className="h-full"
                    alt={item.title}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-content-wrap d-flex align-items-center">
                  <div className="sv-service-content">
                    <div className="sv-service-title-box">
                      <span className="sv-service-subtitle">
                        <i>{item.id < 9 ? "0" + item.id : item.id}</i> {item.subtitle}
                      </span>
                      <h4 className="sv-service-title">{item.title}</h4>
                    </div>
                    <div className="sv-service-space-wrap">
                      <div className="sv-service-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="sv-service-list">
                        <ul>
                          {item.lists.map((list, i) => (
                            <li key={i}>{list}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
