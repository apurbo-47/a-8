import { Suspense } from "react";
import Lawyer from "../Lawyer/Lawyer";

const Lawyers = ({ data }) => {
  console.log("data", data);
  return (
    <div className="max-w-7xl mx-auto px-5  space-y-8">
      <div className="text-center space-y-4">
        <h1 className=" text-2xl md:text-4xl font-extrabold text-[#0F0F0F]">
          Our Best Lawyers
        </h1>
        <p className="text-[#0F0F0F]/80 mb-8">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>
      <Suspense fallback={<span>Loading...</span>}>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-16 ">
          {data?.lawyers?.map((singleLawyer, index) => (
            <Lawyer key={index} singleLawyer={singleLawyer}></Lawyer>
          ))}
        </div>
      </Suspense>
      <div className="text-center mt-8">
        <button className=" px-7 py-4 font-bold border bg-[#0EA106] text-white rounded-full">
          Show All Lawyer
        </button>
      </div>
    </div>
  );
};

export default Lawyers;
