const getStoredLawyer = () => {
  const storeLawyerSTR = localStorage.getItem("readList");

  if (storeLawyerSTR) {
    const storeLawyerData = JSON.parse(storeLawyerSTR);
    return storeLawyerData;
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedLawyerData = getStoredLawyer();

  if (storedLawyerData.includes(id)) {
    alert("This id already exists");
  } else {
    storedLawyerData.push(id);
    const data = JSON.stringify(storedLawyerData);
    localStorage.setItem("readList", data);
  }
};

export { addToStoredDB, getStoredLawyer };
