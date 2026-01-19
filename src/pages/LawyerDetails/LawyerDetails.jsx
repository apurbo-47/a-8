import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../Utilities/addToDb";

const LawyerDetails = () => {
  const { id } = useParams();
  const lawId = parseInt(id);
  const data = useLoaderData();
  const singleLawyer = data.find((lawyer) => lawyer.id === lawId);
  const { name, image, speciality, experience, licenseNumber, detailsPath } =
    singleLawyer;

  const handleMarkAsRead = (id) => {
    addToStoredDB(id);
  };

  return (
    <div className=" ">
      <div className="flex justify-around gap-20">
        <div className="w-full flex justify-center items-center bg-[#131313]/5 rounded-2xl">
          <img className="w-80 rotate-6" src={image} alt="" />
        </div>
        <div className="w-full">
          <h5 className="text-4xl font-bold">{name}</h5>
          <ToastContainer />
          <p className="font-medium text-lg text-[#13131380] mt-4 mb-6">
            By : {speciality}
          </p>
          <div className="border-t-2 border-lime text-[#13131315] "></div>
          <div className="mt-4 mb-4 font-medium text-xl">{experience}</div>
          <div className="border-t-2 border-line text-[#13131315] "></div>
          <p className="font-medium text-sm text-[#13131380] mt-6 mb-6">
            <span className="font-bold text-lg text-black">Review :</span>{" "}
            {licenseNumber}
          </p>

          <div className="flex  gap-x-4 mb-6"></div>
          <div className="border-t-2 border-line text-[#13131315] "></div>
          <div className="mt-6 mb-8 font-semibold text-base text-[#131313]">
            <p>
              <span className="text-md text-[#13131380]">
                Number of Pages :{" "}
              </span>
              {}
            </p>
            <p>
              <span className="text-md text-[#13131380]">Publisher : </span>{" "}
              {detailsPath}
            </p>
          </div>
          <div className="flex  gap-x-4 mt-6">
            <button
              onClick={() => handleMarkAsRead(id)}
              className="btn bg-white text-black"
            >
              Read
            </button>
            <button
              onClick={() => handleMarkAsRead(id)}
              className="btn bg-[#50B1C9] border-hidden"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerDetails;
