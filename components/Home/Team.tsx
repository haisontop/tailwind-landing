import React from "react";

const Team = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 text-white mt-36 md:ml-80">
        <div className="flex justify-start">
          <div>
            <h1 className="md:text-5xl">The Team</h1>
            <p className="py-10">
              Co-Founders Rob Nathan are firm <br /> belevers in business as a
              force for human <br /> progress, their passion for innovation,{" "}
              <br /> client success, and world class digital <br /> customer
              experience is the rocket fule <br /> behind our mission{" "}
            </p>
            <img
              src="https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              width="80%"
            />
          </div>
        </div>
        <div className="text-center">
          <img
            src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/15536466/2021/9/29/f15c3550-ee3d-4b05-98c3-8e39feed2adb1632898070052-Louis-Philippe-Men-Suits-1551632898069281-1.jpg"
            alt=""
            width="80%"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
