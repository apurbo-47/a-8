import { useLoaderData } from "react-router";
import { getStoredLawyer, removeFromStoredDB } from "../../Utilities/addToDb";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { Helmet } from "react-helmet";

const ReadList = () => {
  const data = useLoaderData();

  const storedLawyerID = getStoredLawyer();

  const getBookedLawyers = data?.lawyers?.filter((lawyer) =>
    storedLawyerID.includes(lawyer.lawId),
  );

  console.log("Booked Lawyers: ", getBookedLawyers);

  const law = getBookedLawyers;

  const removeFromLocalStorage = (lawId) => {
    removeFromStoredDB(lawId);
  };

  return (
    <div>
      <Helmet>
        <title>Law.BD | My Bookings </title>
      </Helmet>
      <div className="p-4 mt-12 max-w-7xl mx-auto">
        <BarChart width="full" height={400} responsive data={law}>
          <XAxis dataKey="name" />
          <YAxis dataKey="consultationFee" />
          <Bar dataKey="consultationFee" fill="#8884d8"></Bar>
        </BarChart>
      </div>

      <div>
        <h3 className="text-2xl md:text-4xl font-extrabold text-[#0F0F0F] text-center mt-24">
          My Today Appointments
        </h3>
        <p className="mx-2 text-xs md:text-base text-[#0F0F0F]/80 text-center mt-4">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience.
        </p>
        <div>
          {getBookedLawyers?.map((lawyer) => (
            <div>
              <div className="mx-2 md:mx-16 mt-16 border rounded-2xl border-[#141414]/15 p-4 md:p-8">
                <h3 className="font-bold text-base   md:text-xl">
                  {lawyer.lawId}. {lawyer.name}
                </h3>

                <div className=" md:flex justify-between mt-4 text-[#141414]/60 font-medium text-sm md:text-lg">
                  <p>{lawyer.speciality}</p>
                  <p>Appointment Fee : {lawyer.consultationFee} Taka</p>
                </div>
                <div className=" mt-4 border border-[#141414]/15 "></div>
                <button
                  className=" py-3 mt-10 rounded-full w-full text-[#FF0000] font-bold border bg-white hover:text-white  hover:bg-[#FF0000]"
                  onClick={() => removeFromLocalStorage(lawyer.lawId)}
                >
                  Cancel Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadList;
