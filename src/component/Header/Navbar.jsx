import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-white text-black mt-6 mb-6">
      <div className="navbar-start md:ml-40">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow text-lg font-medium text-[#0F0F0F70]"
          >
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
        <div className="flex gap-4">
          <img
            className="w-8 h-8"
            src="src/assets/C002-assets/success-patients.png"
            alt=""
          />
          <a className=" text-xl font-bold text-[#0F0F0F80] md:text-3xl md:font-extrabold">
            Law.BD
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-lg font-medium text-[#0F0F0F70] px-1">
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
      <div className="navbar-end md:mr-40">
        <a className="btn bg-[#0EA106] border-hidden rounded-full">
          Contact Now
        </a>
      </div>
    </div>
  );
};

export default Navbar;
