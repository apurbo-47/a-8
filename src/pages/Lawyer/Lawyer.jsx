import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Lawyer = ({ singleLawyer }) => {
  const { name, speciality, experience, licenseNumber, image, lawId } =
    singleLawyer;
  return (
    <div>
      <Link to={`/lawyerDetails/${lawId}`}>
        <div className="card shadow-lg p-6  rounded-2xl ">
          <figure className="p-5 bg-[#F3F3F3] rounded-2xl w-2/3 mx-auto ">
            <img className="h-[166px] rotate-6" src={image} alt="Shoes" />
          </figure>
          <div className="card-body ">
            <div className="flex justify-center font-medium text-base bg-[#23BE0A05] text-[#23BE0A] gap-10">
              <h3>{experience}</h3>
            </div>

            <h2 className="card-title justify-center text-[#131313] text-xl font-bold ">
              {name}
              <div className="badge badge-secondary justify-end">{}</div>
            </h2>

            <p className="font-medium text-base text-[#13131380] text-center">
              By : {speciality}
            </p>

            <div className="border-t-2 border-dashed text-[#13131315] "></div>

            <div className="card-actions text-[#13131380] text-base font-medium justify-center">
              <div className="">{licenseNumber}</div>
              <div className="badge badge-sm">
                {} <FaStarHalfAlt />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Lawyer;
