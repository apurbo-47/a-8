import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <Link to="/" className="active:underline m-3 text-lg text-[#0F0F0F70]">
        Home
      </Link>
      <Link
        to="/readList"
        className="active:underline m-3 text-lg text-[#0F0F0F70]"
      >
        My Bookings
      </Link>
      <Link
        to="/blog"
        className="active:underline m-3 text-lg text-[#0F0F0F70]"
      >
        Blogs
      </Link>
      <Link
        to="/contact"
        className="active:underline m-3 text-lg text-[#0F0F0F70]"
      >
        Contact Us
      </Link>
    </>
  );
  return (
    <div className=" p-6 max-w-7xl mx-auto navbar bg-white text-black  ">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow text-lg font-medium text-[#0F0F0F70]"
          >
            {links}
          </ul>
        </div>
        <div className="flex gap-4">
          <img
            className="w-8 h-8"
            src="src/assets/C002-assets/logo.png"
            alt=""
          />
          <a className=" text-xl font-bold text-[#0F0F0F80] md:text-3xl md:font-extrabold">
            Law.BD
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-lg font-medium text-[#0F0F0F70] px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end ">
        <a className="btn bg-[#0EA106] border-hidden rounded-full">
          Contact Now
        </a>
      </div>
    </div>
  );
};

export default Navbar;
