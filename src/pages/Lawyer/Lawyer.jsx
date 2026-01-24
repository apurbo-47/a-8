import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Lawyer = ({ singleLawyer }) => {
  const { name, speciality, experience, licenseNumber, image, lawId } =
    singleLawyer;
  return (
    <div className="">
      <div className="flex items-center shadow-lg p-6 gap-6 md:gap-x-16  rounded-2xl ">
        <div className=" bg-[#F3F3F3] rounded-2xl h-[160px] w-[160px] ">
          <img className="w-full h-full object-cover" src={image} alt="Shoes" />
        </div>
        <div className="space-y-2 w-[65%]">
          <h3 className="font-medium md:text-base text-[#23BE0A]">
            {experience}
          </h3>

          <h2 className="  md:text-2xl font-extrabold text-[#0F0F0F] ">
            {name}
          </h2>

          <p className="md:text-lg font-medium  text-[#0F0F0F]/60">
            {speciality}
          </p>

          <p className="text-[#0F0F0F]/70 font-medium text-xs md:text-base">
            License No:{licenseNumber}
          </p>
          <Link to={`/lawyerDetails/${lawId}`}>
            <button className="py-2  border w-full bg-white text-[#176AE5] rounded-full hover:bg-[#176AE5] hover:text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lawyer;
