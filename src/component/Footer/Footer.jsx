import React from "react";
import { MdFacebook } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="mt-20 p-20 bg-black text-white">
      <div className="flex gap-4 justify-center ">
        <img
          className="w-8 h-8"
          src="assets/C002-assets/logo-footer.png"
          alt=""
        />
        <a className=" text-xl font-bold md:text-3xl md:font-extrabold">
          Law.BD
        </a>
      </div>
      <div className="navbar-center flex justify-center mt-8 mb-8">
        <ul className="menu menu-horizontal text-base font-medium justify-center text-[#FFFFFF70] gap-8">
          <Link to="/">Home</Link>
          <Link to="/readList">My Bookings</Link>
          <Link to="/blog">Blogs</Link>
          <Link to="/contact">Contact Us</Link>
        </ul>
      </div>

      <div className=" border border-dashed text-[#FFFFFF80] mb-8 "></div>

      <div className="flex justify-center gap-6 ">
        <a href="/facebook">
          <MdFacebook size={24} />
        </a>
        <a href="/instagram">
          <FaInstagramSquare size={24} />
        </a>
        <a href="/youtube">
          <FaYoutube size={24} />
        </a>
        <a href="/twitter">
          <FaXTwitter size={24} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
