import { useLoaderData } from "react-router";
import { getStoredLawyer } from "../../Utilities/addToDb";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { useState } from "react";

const ReadList = () => {
  const [appointments, setAppointment] = useState([]);
  const data = useLoaderData();

  // console.log("All lawyer: ", data);

  // Get the lawyer ID from localstorage
  const storedLawyerID = getStoredLawyer();

  // get lawyer by ID

  const getBookedLawyers = data?.lawyers?.filter((lawyer) =>
    storedLawyerID.includes(lawyer.lawId),
  );

  console.log("Booked Lawyers: ", getBookedLawyers);

  const law = getBookedLawyers;

  // const convertedStoredLawyer = storedLawyerID.map((lawId) => parseInt(lawId));

  // // const myReadList = data?.lawyers?.find((lawyer) =>
  // //   convertedStoredLawyer.includes(lawyer.lawId),
  // );

  // const handleCancel = (lawId) => {
  //   const remaining = appointments.filter(
  //     (appointment) => appointment.lawId !== lawId,
  //   );

  //   setAppointments(remaining);
  // };

  const handleCancel = (lawId) => {
    const remaining = appointments.filter(
      (apointment) => apointment.lawId !== lawId,
    );

    setAppointment(remaining);
  };

  return (
    <div>
      <div className="mt-12  max-w-7xl mx-auto ">
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
                  onClick={() => handleCancel()}
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
