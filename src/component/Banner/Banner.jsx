import React from "react";

const Banner = () => {
  return (
    <div className=" mx-auto max-w-7xl p-5">
      <div
        className="hero md:h-137.5 rounded-3xl "
        style={{
          backgroundImage: "url(src/assets/C002-assets/banner-img-1.png)",
        }}
      >
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-8 text-xl md:text-4xl font-extrabold">
              It avoids subjective claims or <br /> exaggeration that might
              raise red <br /> flags legally
            </h1>
            <p className="mb-5 text-[#FFFFFF80] text-xs md:text-base font-medium">
              Our platform connects you with verified, experienced doctors
              across various specialties — all at your convenience. Whether it's
              <br />a routine checkup or urgent consultation, book appointments
              in minutes and receive quality care you can trust.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
