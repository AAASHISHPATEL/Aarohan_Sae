import React, { useEffect } from "react";
import "./ArhnOrg2.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { organizers } from "./Script";

const Organisers2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
    });
  });

  return (
    <div className=" justify-center  w-full grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 px-10 lg:px-32 gap-5   ">
      {organizers.map((organiser, index) => (
        <div key={index} className="arhn-org-card justify-self-center" data-aos="fade-up">
          <img
            className="arhn-org-img w-full h-full"
            src={organiser.url}
            alt=""
          />
          <span className="text-2xl">{organiser.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Organisers2;
