import React from "react";
import CountUp from "react-countup";

const Services = () => {
  return (
    <div className="mt-24 p-6 md:mx-40">
      <h1 className="md:text-4xl font-extrabold text-center">
        We Provide Best Law Services
      </h1>
      <p className="text-[#0F0F0F] text-xs md:text-base text-center mt-4 opacity-80">
        Our platform connects you with verified, experienced Lawyers across
        various specialities — all at your convenience.
      </p>
      <div>
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-12 ">
          <div className="card  card-sm shadow-sm bg-[#0F0F0F15] rounded-2xl ">
            <div className="card-body ml-12 mr-12 ">
              <img
                className="w-12 h-12"
                src="src/assets/C002-assets/success-doctor.png"
                alt=""
              />

              <div className="flex text-2xl md:text-4xl font-bold mt-4">
                <CountUp end={199} duration={7}></CountUp>
                <p>+</p>
              </div>

              <p className="text-sm mt-3 font-medium text-[#0F0F0F60] ">
                Total Lawyer
              </p>
            </div>
          </div>
          <div className="card  card-sm shadow-sm bg-[#0F0F0F15] rounded-2xl ">
            <div className="card-body ml-12 mr-12 ">
              <img
                className="w-12 h-12"
                src="src/assets/C002-assets/success-review.png"
                alt=""
              />

              <div className="flex text-2xl md:text-4xl font-bold mt-4">
                <CountUp end={467} duration={7}></CountUp>
                <p>+</p>
              </div>

              <p className="text-sm mt-3 font-medium text-[#0F0F0F60] ">
                Total Reviews
              </p>
            </div>
          </div>
          <div className="card  card-sm shadow-sm bg-[#0F0F0F15] rounded-2xl ">
            <div className="card-body ml-12 mr-12 ">
              <img
                className="w-12 h-12"
                src="src/assets/C002-assets/success-patients.png"
                alt=""
              />

              <div className="flex text-2xl md:text-4xl font-bold mt-4">
                <CountUp end={1900} duration={7}></CountUp>
                <p>+</p>
              </div>

              <p className="text-sm mt-3 font-medium text-[#0F0F0F60] ">
                Cases Initiated
              </p>
            </div>
          </div>
          <div className="card  card-sm shadow-sm bg-[#0F0F0F15] rounded-2xl ">
            <div className="card-body ml-12 mr-12 ">
              <img
                className="w-12 h-12"
                src="src/assets/C002-assets/success-staffs.png"
                alt=""
              />

              <div className="flex text-2xl md:text-4xl font-bold mt-4">
                <CountUp end={300} duration={7}></CountUp>
                <p>+</p>
              </div>

              <p className="text-sm font-medium mt-3 text-[#0F0F0F60] ">
                Total Stuffs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
