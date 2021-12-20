import React from "react";

export interface ServiceSpacialityModel {
    title: string;
    img: string;
}

interface ServiceSpacialitiesProps {
    specialities: ServiceSpacialityModel[];
}

const ServiceSpacialities = ({ specialities }: ServiceSpacialitiesProps) => {
<<<<<<< HEAD
    return (
        <div className="text-center mt-20 xl:mt-40 px-5 pb-14 lg:px-15 xl:pb-0 md:px-15">
            <div>
                <h1 className="text-white text-3xl lg:text-7xl xl:text-5xl md:text-5xl">
                    Our spacialties
                </h1>
            </div>
            <div className="grid grid-cols-2 gap-5 lg:gap-10 lg:grid-cols-2 xl:grid-cols-4 xl:gap-5 mt-14 xl:mt-20 md:grid-cols-2">
                {specialities.map((speciality, index) => (
                    <div
                        className="bg-white rounded-full flex justify-center px-4"
                        key={index}
                    >
                        <img
                            src={speciality.img}
                            width="90%"
                            alt=""
                            className="object-contain "
                        />
                    </div>
                ))}
            </div>
        </div>
    );
=======
  return (
    <div className="text-center mt-20 xl:mt-40 px-5 pb-14 lg:px-15 xl:pb-0 md:px-15">
      <div>
        <h1 className="text-white text-3xl lg:text-7xl xl:text-5xl md:text-5xl">
          Our spacialties
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-5 lg:gap-10 lg:grid-cols-2 xl:grid-cols-4 xl:gap-5 mt-14 xl:mt-20 md:grid-cols-2">
        {specialities.map((speciality, index) => (
          <div
            className="bg-white rounded-full flex justify-center px-4 py-2 service-speciality-container"
            key={index}
          >
            <img
              src={speciality.img}
              width="90%"
              alt=""
              className="object-contain "
            />
          </div>
        ))}
      </div>
    </div>
  );
>>>>>>> 4eda309ffc18eaf43bfc33a4eb3d48e2a423bcd6
};

export default ServiceSpacialities;
