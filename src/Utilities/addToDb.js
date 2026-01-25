const getStoredLawyer = () => {
  const storeLawyerSTR = localStorage.getItem("readList");

  if (storeLawyerSTR) {
    const storeLawyerData = JSON.parse(storeLawyerSTR);
    return storeLawyerData;
  } else {
    return [];
  }
};

const addToStoredDB = (lawId) => {
  const storedLawyerData = getStoredLawyer();

  if (storedLawyerData.includes(lawId)) {
    alert("This lawyer already booked you");
  } else {
    storedLawyerData.push(lawId);
    const data = JSON.stringify(storedLawyerData);
    localStorage.setItem("readList", data);
  }
};
const removeFromStoredDB = (lawId) => {
  console.log("lawid:", lawId);
  const storedLawyerData = getStoredLawyer();
  console.log("stored data: ", storedLawyerData);

  const removedData = storedLawyerData?.filter((id) => id !== lawId);
  console.log("object: ", removedData);

  const data = JSON.stringify(removedData);
  localStorage.setItem("readList", data);
};

export { addToStoredDB, getStoredLawyer, removeFromStoredDB };
