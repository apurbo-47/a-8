import { useEffect, useState } from "react";
import { getStoredLawyer } from "../../Utilities/addToDb";
import { useLoaderData } from "react-router";
import Lawyer from "../Lawyer/Lawyer";

const ReadList = () => {
  const [readList, setReadList] = useState([]);

  const [sort, setSort] = useState("");

  const data = useLoaderData();

  useEffect(() => {
    const storedLawyerData = getStoredLawyer();
    const convertedStoredLawyer = storedLawyerData.map((id) => parseInt(id));
    const myReadList = data.filter((lawyer) =>
      convertedStoredLawyer.includes(lawyer.id),
    );

    setReadList(myReadList);
  }, []);

  const handleSort = (type) => {
    setSort(type);

    if (type === "licenseNumber") {
      const sortedByPages = [...readList].sort(
        (a, b) => a.licenseNumber - b.licenseNumber,
      );
      setReadList(sortedByPages);
    }

    if (type === "experience") {
      const sortedByRatings = [...readList].sort(
        (a, b) => b.experience - a.experience,
      );
      setReadList(sortedByRatings);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Read List Book</title>
      </Helmet>
      <div className="text-center p-5 ">
        <details className="dropdown ">
          <summary className="btn m-1 bg-green-400 border-hidden">
            sort by : {sort ? sort : ""}
          </summary>
          <ul className="menu dropdown-content text-white bg-[#50B1C9] rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={() => handleSort("licenseNumber")}>Pages</a>
            </li>
            <li>
              <a onClick={() => handleSort("experience")}>ratings</a>
            </li>
          </ul>
        </details>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-center p-5 font-bold text-xl">
            Book i read : {readList.length}{" "}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {readList.map((b) => (
              <Lawyer key={b.id} singleLawyer={b}></Lawyer>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-center p-5 font-bold text-xl">My Wish List</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {readList.map((d) => (
              <Lawyer key={d.id} singleLawyer={d}></Lawyer>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
