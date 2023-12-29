import React, { useEffect } from "react";
import "./style.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Section3 = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="Section3">
      <h2
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        Your medical statistics now in your hand
      </h2>
      <div className="Section3-flex">
        <div className="Section3-flex">
          <div
            className="Section3-flex-content"
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration=""
          >
            <div className="icon">
              <svg
                aria-hidden="true"
                class="e-font-icon-svg e-fas-pump-medical"
                viewBox="0 0 384 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M235.51,159.82H84.24A64,64,0,0,0,20.51,218L.14,442a64,64,0,0,0,63.74,69.8h192A64,64,0,0,0,319.61,442L299.24,218A64,64,0,0,0,235.51,159.82Zm4.37,173.33a13.35,13.35,0,0,1-13.34,13.34h-40v40a13.33,13.33,0,0,1-13.33,13.33H146.54a13.33,13.33,0,0,1-13.33-13.33v-40h-40a13.34,13.34,0,0,1-13.33-13.34V306.49a13.33,13.33,0,0,1,13.33-13.34h40v-40a13.33,13.33,0,0,1,13.33-13.33h26.67a13.33,13.33,0,0,1,13.33,13.33v40h40a13.34,13.34,0,0,1,13.34,13.34ZM379.19,93.88,335.87,50.56a64,64,0,0,0-45.24-18.74H223.88a32,32,0,0,0-32-32h-64a32,32,0,0,0-32,32v96h128v-32h66.75l43.31,43.31a16,16,0,0,0,22.63,0l22.62-22.62A16,16,0,0,0,379.19,93.88Z"></path>
              </svg>
            </div>
            <h3>
              Comprehensive medical <br /> knowledge
            </h3>
          </div>
          <div
            className="Section3-flex-content"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration=""
          >
            <div className="icon">
              <svg
                aria-hidden="true"
                class="e-font-icon-svg e-fas-user-md"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zM104 424c0 13.3 10.7 24 24 24s24-10.7 24-24-10.7-24-24-24-24 10.7-24 24zm216-135.4v49c36.5 7.4 64 39.8 64 78.4v41.7c0 7.6-5.4 14.2-12.9 15.7l-32.2 6.4c-4.3.9-8.5-1.9-9.4-6.3l-3.1-15.7c-.9-4.3 1.9-8.6 6.3-9.4l19.3-3.9V416c0-62.8-96-65.1-96 1.9v26.7l19.3 3.9c4.3.9 7.1 5.1 6.3 9.4l-3.1 15.7c-.9 4.3-5.1 7.1-9.4 6.3l-31.2-4.2c-7.9-1.1-13.8-7.8-13.8-15.9V416c0-38.6 27.5-70.9 64-78.4v-45.2c-2.2.7-4.4 1.1-6.6 1.9-18 6.3-37.3 9.8-57.4 9.8s-39.4-3.5-57.4-9.8c-7.4-2.6-14.9-4.2-22.6-5.2v81.6c23.1 6.9 40 28.1 40 53.4 0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.3 16.9-46.5 40-53.4v-80.4C48.5 301 0 355.8 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-72-56.8-130.3-128-133.8z"></path>
              </svg>
            </div>
            <h3>Tested By Doctorse</h3>
          </div>
          <div
            className="Section3-flex-content"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration=""
          >
            <div className="icon">
              <svg
                aria-hidden="true"
                class="e-font-icon-svg e-fab-medrt"
                viewBox="0 0 544 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M113.7 256c0 121.8 83.9 222.8 193.5 241.1-18.7 4.5-38.2 6.9-58.2 6.9C111.4 504 0 393 0 256S111.4 8 248.9 8c20.1 0 39.6 2.4 58.2 6.9C197.5 33.2 113.7 134.2 113.7 256m297.4 100.3c-77.7 55.4-179.6 47.5-240.4-14.6 5.5 14.1 12.7 27.7 21.7 40.5 61.6 88.2 182.4 109.3 269.7 47 87.3-62.3 108.1-184.3 46.5-272.6-9-12.9-19.3-24.3-30.5-34.2 37.4 78.8 10.7 178.5-67 233.9m-218.8-244c-1.4 1-2.7 2.1-4 3.1 64.3-17.8 135.9 4 178.9 60.5 35.7 47 42.9 106.6 24.4 158 56.7-56.2 67.6-142.1 22.3-201.8-50-65.5-149.1-74.4-221.6-19.8M296 224c-4.4 0-8-3.6-8-8v-40c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v40c0 4.4-3.6 8-8 8h-40c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h40c4.4 0 8 3.6 8 8v40c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-40c0-4.4 3.6-8 8-8h40c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-40z"></path>
              </svg>
            </div>
            <h3>24/7 availabilty</h3>
          </div>
          <div
            className="Section3-flex-content"
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration=""
          >
            <div className="icon">
              <svg
                aria-hidden="true"
                class="e-font-icon-svg e-fas-user-tag"
                viewBox="0 0 640 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M630.6 364.9l-90.3-90.2c-12-12-28.3-18.7-45.3-18.7h-79.3c-17.7 0-32 14.3-32 32v79.2c0 17 6.7 33.2 18.7 45.2l90.3 90.2c12.5 12.5 32.8 12.5 45.3 0l92.5-92.5c12.6-12.5 12.6-32.7.1-45.2zm-182.8-21c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24c0 13.2-10.7 24-24 24zm-223.8-88c70.7 0 128-57.3 128-128C352 57.3 294.7 0 224 0S96 57.3 96 128c0 70.6 57.3 127.9 128 127.9zm127.8 111.2V294c-12.2-3.6-24.9-6.2-38.2-6.2h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 287.9 0 348.1 0 422.3v41.6c0 26.5 21.5 48 48 48h352c15.5 0 29.1-7.5 37.9-18.9l-58-58c-18.1-18.1-28.1-42.2-28.1-67.9z"></path>
              </svg>
            </div>
            <h3>Multi-lingual Support</h3>
          </div>
        </div>
      </div>
      <button
        className="btn"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration=""
      >
        Join Now
      </button>
    </div>
  );
};

export default Section3;
