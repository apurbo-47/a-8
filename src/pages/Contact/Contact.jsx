import React from "react";
import { Link } from "react-router";

const Contact = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(src/assets/shutterstock_1075475231.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="">
          <Link to="/">
            <button className="btn btn-primary">Back To Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
