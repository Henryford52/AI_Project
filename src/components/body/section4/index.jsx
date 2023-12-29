import React, { useEffect } from "react";
import "./style.css";
import img3 from "../../../assets/Group-9.png";
import Aos from "aos";
import "aos/dist/aos.css";
const Section4 = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="Section4">
      <div className="Section4-flex">
        <div className="Section4-flex-content">
          <h2
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            Take Control of your health and the ones you care for
          </h2>
          <button
            className="btn"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            Join the waiting List Now
          </button>
        </div>
        <img
          src={img3}
          alt=""
          data-aos="fade-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        />
      </div>
    </div>
  );
};

export default Section4;
