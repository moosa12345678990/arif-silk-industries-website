"use client";
import React from "react";
import team_data from "@/data/team-data";
import TeamItem from "./team-item";
import { ITeamDT } from "@/types/team-d-t";
import TeamModal from "../modal/team-modal";

// prop type
type IProps = {
  spacing?: string;
};

const TeamOne = ({ spacing = "pt-20" }: IProps) => {
  const [showModal, setShowModal] = React.useState(false);
  const [teamItem, setTeamItem] = React.useState<ITeamDT | null>(null);

  function handleTeamModal(team: ITeamDT) {
    setShowModal(!showModal);
    setTeamItem(team);
  }

  return (
    <>
      <div className={`tp-team-area ${spacing} pb-120 fix`}>
        <div className="container">
          <div className="row justify-content-center text-center">
            {team_data.map((t) => (
              <div
                key={t.id}
                className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center"
              >
                <TeamItem item={t} handleTeamModal={handleTeamModal} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team modal */}
      {teamItem && (
        <TeamModal
          setShowModal={setShowModal}
          showModal={showModal}
          teamItem={teamItem}
        />
      )}
    </>
  );
};

export default TeamOne;
