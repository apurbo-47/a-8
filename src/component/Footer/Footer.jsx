import React from "react";
import { MdFacebook } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mt-20 p-20 bg-black text-white">
      <div className="flex gap-4 justify-center ">
        <img
          className="w-8 h-8"
          src="src/assets/C002-assets/logo-footer.png"
          alt=""
        />
        <a className=" text-xl font-bold md:text-3xl md:font-extrabold">
          Law.BD
        </a>
      </div>
      <div className="navbar-center md:flex justify-center mt-8 mb-8">
        <ul className="menu menu-horizontal text-base font-medium text-[#FFFFFF70] gap-8">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>My Bookings</a>
          </li>
          <li>
            <a>Blogs</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>

      <div className=" border border-dashed text-[#FFFFFF80] mb-8 "></div>

      <div className="flex justify-center gap-6 ">
        <MdFacebook size={24} />
        <FaInstagramSquare size={24} />
        <FaYoutube size={24} />
        <FaXTwitter size={24} />
      </div>
    </div>
  );
};

export default Footer;
