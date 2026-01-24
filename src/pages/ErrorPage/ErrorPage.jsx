import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <div className="">
        <img
          className="h-[550px] w-full"
          src="assets/shutterstock_1075475231.jpg"
          alt=""
        />
      </div>
      <div className="text-center">
        <Link to="/">
          <button class="btn btn-primary m-6 text-center">Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
