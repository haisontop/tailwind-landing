import React from "react";
import BlockContent from "@sanity/block-content-to-react";

type Team = {
  title: string;
  team_images: string;
  description: any;
};

interface TeamProps {
  team: Team;
}

const Team = ({ team }: TeamProps) => {
  const { title, description, team_images } = team;
  return (
    <div>
      <div className="grid grid-cols-2 text-white mt-36 md:ml-80">
        <div className="flex justify-start">
          <div className="ml-5 md:ml-0">
            <h1 className="text-3xl md:text-5xl">{title}</h1>
            <p className="py-10">
              <BlockContent blocks={description} />
            </p>
            <img src={team_images[0]} alt="" width="90%" />
          </div>
        </div>
        <div className="mx-auto">
          <img src={team_images[1]} alt="" width="90%" />
        </div>
      </div>
    </div>
  );
};

export default Team;
