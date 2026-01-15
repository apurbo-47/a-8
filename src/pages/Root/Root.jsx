import React from "react";
import Navbar from "../../component/Header/Navbar";
import Footer from "../../component/Footer/Footer";
import { Outlet } from "react-router";
import Banner from "../../component/Banner/Banner";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
