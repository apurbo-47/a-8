import { useLoaderData } from "react-router";
import Banner from "../../component/Banner/Banner";

import Services from "../Services/Services";
import Lawyers from "../Lawyers/Lawyers";
import { Helmet } from "react-helmet";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      <Helmet>
        <title>Law.BD | Home </title>
      </Helmet>
      <Banner></Banner>
      <Lawyers data={data}></Lawyers>
      <Services></Services>
    </div>
  );
};

export default Home;
