import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router";

const Contact = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(assets/shutterstock_1075475231.jpg)",
      }}
    >
      <Helmet>
        <title>Law.BD | Contact </title>
      </Helmet>
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="">
          <Link to="/">
            <button
              className="btn bg-[#0EA106] text-white border-[#0EA106] hover:bg-white 
            hover:text-[#0EA106] rounded-full"
            >
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
