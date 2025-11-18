import React from "react";
import Image from "next/image";
// images
import location_1 from "@/assets/img/imagefactor.jpg";
import location_2 from "@/assets/img/plaza.jpg";
import location_3 from "@/assets/img/inner-contact/contact/info-3.jpg";
import Link from "next/link";

// data
const location_data = [
  {
    id: 1,
    img: location_1,
    country: "Karachi",
    time: "GMT+5 time zone",
    location_title: "Our Factory",
    address: "Plot No. 07, Shafiq Mill Colony Block 22 Gulberg Town, Karachi",
    phone: "+92-21-32480006",
    email: "nouman@arifsilkindustries.com",
  },
  {
    id: 2,
    img: location_2,
    country: "karachi",
    time: "GMT+5 time zone",
    location_title: "Our Office ",
    address: "textile plaza",
    phone: "+92-21-32480006",
    email: "nouman@arifsilkindustries.com",
  },
];

const ContactLocation = () => {
  return (
    <div className="cn-contact-info-area">
      <div className="container container-1840">
        <div className="cn-contact-info-bg black-bg">
          {location_data.map((item) => (
            <div key={item.id} className="cn-contact-info-item">
              <div className="row">
                <div className="col-xl-7">
                  <div className="cn-contact-left d-flex flex-wrap align-items-center">
                    <div className="cn-contact-info-thumb">
                      <Image src={item.img} alt="image" style={{ height: "auto" }} />
                    </div>
                    <div className="cn-contact-left-info">
                      <h4 className="cn-contact-left-title">{item.country}</h4>
                      <span>
                        <i className="fa-regular fa-clock"></i>
                        {item.time}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="cn-contact-right-wrap d-flex align-items-start justify-content-between">
                    <div className="cn-contact-right">
                      <div className="cn-contact-location">
                        <span className="cn-contact-location-title">
                          {item.location_title}
                        </span>
                        <Link
                          href="https://maps.app.goo.gl/atUz3KHhJeH6Qcfy8"
                          target="_blank"
                          dangerouslySetInnerHTML={{ __html: item.address }}
                        ></Link>
                      </div>
                      <div className="cn-contact-map">
                        <Link href="#">Google Maps</Link>
                      </div>
                    </div>
                    <div className="cn-contact-right-info text-start text-md-end">
                      <Link href="tel:(+91)76001726">{item.phone}</Link> <br />
                      <Link href="mailto:Hello@contact.com">{item.email}</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactLocation;
