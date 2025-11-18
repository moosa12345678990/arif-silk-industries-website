import React from "react";
import Image from "next/image";
import { ITeamDT } from "@/types/team-d-t";
import Link from "next/link";

// prop type 
type IProps = {
  item: ITeamDT;
  handleTeamModal(team: ITeamDT): void;
}

export default function TeamItem({ item, handleTeamModal }: IProps) {
  return (
    <div className="tp-team-item tp-hover-btn-wrapper marque fix mb-6 text-center">
      <div className="tp-hover-btn-item mb-3">
        <Image
          src={item.image}
          alt="team-img"
          width={400}  // set max width
          height={400} // set max height
          className="rounded-lg object-cover w-full h-auto"
          priority
        />
      </div>
      <div className="tp-team-content">
        <span className="text-sm text-gray-500">{item.designation}</span>
        <h4
          className="tp-team-title-sm mt-1 cursor-pointer text-lg font-semibold hover:text-blue-600"
          onClick={() => handleTeamModal(item)}
        >
          <Link href={`/team-details/${item.id}`}>{item.name}</Link>
        </h4>
      </div>
    </div>
  );
}
