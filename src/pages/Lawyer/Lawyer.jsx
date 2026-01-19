import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Lawyer = ({ singleLawyer }) => {
  const { name, speciality, experience, licenseNumber, image, lawId } =
    singleLawyer;
  return (
    <div className="">
      <Link to={`/lawyerDetails/${lawId}`}>
        <div className="flex shadow-lg p-6 gap-x-16  rounded-2xl ">
          <figure className=" bg-[#F3F3F3] rounded-2xl h-[160px] w-[160px] ">
            <img src={image} alt="Shoes" />
          </figure>
          <div className="space-y-2">
            <h3 className="font-medium text-base text-[#23BE0A]">
              {experience}
            </h3>

            <h2 className=" text-2xl font-extrabold text-[#0F0F0F] ">{name}</h2>

            <p className="text-lg font-medium  text-[#0F0F0F]/60">
              {speciality}
            </p>

            <p className="text-[#0F0F0F]/70 font-medium text-base">
              {licenseNumber}
            </p>
            <button className="py-2 border w-full bg-white text-[#176AE5] rounded-full">
              View Details
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Lawyer;
