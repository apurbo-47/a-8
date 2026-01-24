import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../Utilities/addToDb";
import { ToastContainer, toast } from "react-toastify";

const LawyerDetails = () => {
  const { id } = useParams();
  const lawId = parseInt(id);
  const data = useLoaderData();

  const singleLawyer = data?.lawyers?.find((lawyer) => lawyer.lawId === lawId);

  const {
    image,
    name,
    experience,
    speciality,
    licenseNumber,
    availability,
    consultationFee,
  } = singleLawyer;

  const handleMarkAsRead = (lawId) => {
    toast("Added to Booking List");
    addToStoredDB(lawId);
  };

  return (
    <div>
      <div>
        <div className=" border border-[#141414]/15 "></div>

        <div className=" bg-[#0F0F0F15] mx-2 md:mx-16 mt-8 border rounded-2xl border-[#0F0F0F]/15 p-4 md:p-16 text-center">
          <h1 className="font-extrabold text-xl md:text-3xl">
            Lawyer’s Profile Details
          </h1>
          <p className="mt-4 text-[#141414]/70 font-medium text-xs md:text-base ">
            Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor
            amet ut. Suscipit sed est fermentum magna. Quis vitae tempus
            facilisis turpis imperdiet mattis donec dignissim volutpat.
          </p>
        </div>

        <div className=" mx-2 md:mx-16 mt-8 border rounded-2xl border-[#141414]/15 flex items-center gap-4 md:gap-10  p-3 md :p-8 ">
          <img
            src={image}
            className="w-24 h-40 md:w-[300px] md:h-[300px] md:rounded-2xl shadow-2xl bg-[#C4C4C4]"
          />
          <div>
            <h3 className="font-medium text-xs md:text-base mb-4 text-[#176AE5]">
              {experience} experience
            </h3>
            <h1 className="text-xl md:text-3xl font-extrabold mb-4">{name}</h1>
            <div className="md:flex gap-5 mb-4 text-xs md:text-base text-[#141414]/60">
              <p>{speciality}</p>
              <p>License No: {licenseNumber}</p>
            </div>
            <p className="mb-4 text-[#141414]/70 font-bold text-xs md:text-base">
              availability:{" "}
              <span className="text-[#FFA000]"> {availability}</span>
            </p>
            <p className="text-[#141414]/70 text-xs md:text-base font-bold">
              consultation Fee:{" "}
              <span className="text-[#0EA106] font-extrabold text-xs md:text-base">
                Taka: {consultationFee}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="mx-2 md:mx-16  mt-8 border rounded-2xl border-[#141414]/15 p-8">
        <h3 className="text-center mb-4 text-lg md:text-2xl font-bold">
          Book an Appointment
        </h3>

        <div className=" border border-[#141414]/15 "></div>
        <div className="py-4 flex justify-between">
          <p className="text-sm md:text-lg font-bold">Availability</p>
          <button className="bg-[#09982F]/20  text-[#09982F] px-3 rounded-full">
            Lawyer Available Today
          </button>
        </div>
        <div className=" border border-[#141414]/15 "></div>

        <div className="bg-[#FFA000]/10 text-[#FFA000] mt-4 p-4 font-medium text-xs md:text-base rounded-full text-center">
          Due to high patient volume, we are currently accepting appointments
          for today only. We appreciate your understanding and cooperation.
        </div>

        <Link to="/readList">
          <button
            className=" py-3 mt-10 rounded-full w-full text-white font-bold border bg-[#0EA106] hover:text-[#0EA106] hover:border-[#0EA106] hover:bg-white"
            onClick={() => handleMarkAsRead(lawId)}
          >
            Book Appointment Now
          </button>
          <ToastContainer />
        </Link>
      </div>
    </div>
  );
};

export default LawyerDetails;
