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
    <div className="overflow-hidden xl:ml-72 xl:mr-20">
      <div className="grid grid-cols-2 text-white mt-36  gap-8 xl:gap-10 relative">
        <div className="flex justify-start">
          <div className="">
            <h1 className="text-3xl lg:text-6xl xl:text-5xl ml-5 xl:ml-0 md:text-5xl">{title}</h1>
            <p className="xl:py-10 xl:mb-10 ml-5 xl:ml-0 py-4 xl:static absolute xl:text-xl">
              <BlockContent blocks={description} />
            </p>
            <img src={team_images[0]} alt="" className="mt-48 xl:mt-0 w-full xl:w-96" />
          </div>
        </div>
        <div className="xl:w-4/5">
          <div className="mx-auto">
            <img src={team_images[1]} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
