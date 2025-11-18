import React, { useEffect } from "react";
import { useIsotop } from "@/hooks/use-isotop";
import { UpArrow } from "../svg";
import Image from "next/image";
import Link from "next/link";


// data
const portfolio_data = [
  {
    id: 1,
    img: "/assets/img/shafoon.jpg",
    category: "Satin",
    title: "Poly Satin (100% Polyester)",
    year: "Smooth, glossy, soft",
    show: "cat2 cat4",
    link:"/portfolio-details-1"
  },
  {
    id: 2,
    img: "/assets/img/b.jpg",
    category: "Shafoon",
    title: "Jourjat shafoon",
    year: "Smooth and even surface",
    show: "cat2 cat4 cat3",
     link:"/portfolio-details-2"
  },
  {
    id: 3,
    img: "/assets/img/m.jpg",
    title: "Warp nit ",
    category: "Silk Fabrics",
    year: "Natural silk sheen and elegance",
    show: "cat4 cat2 cat3",
    link:"/portfolio-details-3"
  },

];

// prop type
type IProps = {
  style_2?: boolean;
};
export default function   PortfolioGridColThreeArea({ style_2 = false }: IProps) {
  const { initIsotop, isotopContainer } = useIsotop();

  useEffect(() => {
    initIsotop();
  }, [initIsotop]);

  return (
    <div className="tp-project-5-2-area tp-project-5-2-pt pb-130">
      <div className={`container container-${style_2 ? "1800" : "1530"}`}>
        {/* {!style_2 && (
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="portfolio-filter masonary-menu d-flex justify-content-center mb-60">
                <button data-filter="*" className="active">
                  <span>SHOW ALL</span>
                </button>
                <button data-filter=".cat1">
                  <span>AGENCY</span>
                </button>
                <button data-filter=".cat2">
                  <span>Visual</span>
                </button>
                <button data-filter=".cat3">
                  <span>SHOOTING</span>
                </button>
                <button data-filter=".cat4">
                  <span>STUDIO</span>
                </button>
              </div>
            </div>
          </div>
        )} */}
        <div className="row grid" ref={isotopContainer}>
          {portfolio_data.map((item) => (
            <div
              key={item.id}
              className={`col-xl-4 col-lg-6 col-md-6 grid-item ${item.show}`}
            >
              <div className="tp-project-5-2-thumb mb-30 p-relative not-hide-cursor" data-cursor="View<br>Detail">
                <Link href={item.link} className="cursor-hide">
                  <Image
                    className=""
                    src={item.img}
                    alt="port-img"
                    width={style_2 ? 573 : 486}
                    height={style_2 ? 683 : 576}
                    
                  />
                  <div className="tp-project-5-2-category tp_fade_anim">
                    <span>{item.category}</span>
                  </div>
                  <div className="tp-project-5-2-content tp_fade_anim">
                    <span className="tp-project-5-2-meta">{item.year}</span>
                    <h4 className="tp-project-5-2-title-sm">{item.title}</h4>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
     
      </div>
    </div>
  );
}
