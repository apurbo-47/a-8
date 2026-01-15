import React from "react";
import Navbar from "../../component/Header/Navbar";
import Footer from "../../component/Footer/Footer";
import { Outlet } from "react-router";
import Banner from "../../component/Banner/Banner";
import Services from "../Services/Services";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Outlet></Outlet>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
};

export default Root;
