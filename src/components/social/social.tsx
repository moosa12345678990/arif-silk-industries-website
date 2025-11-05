import React from "react";
import { Facebook, Instagram, Linkdin, Twitter } from "../svg";
import Link from "next/link";

const social_data = [
  {
    id: 2,
    icon: <Twitter />,
    link: "https://www.linkedin.com/in/nauman-arif-ba884a192",
  },
  {
    id: 3,
    icon: <Instagram />,
    link: "https://www.instagram.com/arifsilkindusries/",
  }
];

export default function Social() {
  return (
    <>
      {social_data.map((item) => (
        <Link href={item.link} key={item.id} target="_blank">
          <span>{item.icon}</span>
        </Link>
      ))}
    </>
  );
}
