import { Suspense } from "react";
import Lawyer from "../Lawyer/Lawyer";

const Lawyers = ({ data }) => {
  console.log("data", data);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl text-center text-[#50B1C9] font-bold p-6 mt-24 mb-12">
          Our Best Lawyers
        </h1>
        <p className="">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>
      <Suspense fallback={<span>Loading...</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {data?.lawyers?.map((singleLawyer, index) => (
            <Lawyer key={index} singleLawyer={singleLawyer}></Lawyer>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Lawyers;
