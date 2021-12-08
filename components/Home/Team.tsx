import React from "react";

const Team = () => {
  return (
    <div>
      <div className="grid grid-cols-2 text-white mt-36 md:ml-80">
        <div className="flex justify-start">
          <div>
            <h1 className="text-3xl md:text-5xl">The Team</h1>
            <p className="py-10">
              Co-Founders Rob Nathan are firm <br /> belevers in business as a
              force for human <br /> progress, their passion for innovation,{" "}
              <br /> client success, and world class digital <br /> customer
              experience is the rocket fule <br /> behind our mission{" "}
            </p>
            <img
              src="images/home/Nathan-Spataro_Astronaut-CX.png"
              alt=""
              width="90%"
            />
          </div>
        </div>
        <div className="mx-auto">
          <img
            src="images/home/Robert Scott_Astronaut CX.png"
            alt=""
            width="90%"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
