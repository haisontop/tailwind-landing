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
      <div className="grid grid-cols-2 text-white mt-36 xl:ml-80 gap-8 xl:gap-0 relative">
        <div className="flex justify-start">
          <div className="">
            <h1 className="text-3xl xl:text-5xl ml-5 xl:ml-0">{title}</h1>
            <p className="xl:py-10 ml-5 xl:ml-0 py-4 xl:static absolute">
              <BlockContent blocks={description} />
            </p>
            <img src={team_images[0]} alt="" className="mt-48 xl:mt-0 w-full xl:w-96" />
          </div>
        </div>
        <div className="mx-auto">
          <img src={team_images[1]} alt="" className="w-full xl:w-80" />
        </div>
      </div>
    </div>
  );
};

export default Team;
