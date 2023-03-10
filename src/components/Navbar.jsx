import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  function toggleNavbar() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className={`w-full fixed z-30 px-3 py-2 bg-white`}>
      <div className="md:flex md:justify-between max-w-5xl mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/">
            <span className="text-2xl font-medium cursor-pointer qs-font">
              <img
                className="w-12 inline"
                src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg"
                alt=""
              />
              Luna
            </span>
          </Link>

          <button
            className="md:hidden inline cursor-pointer bars-container"
            onClick={toggleNavbar}
          >
            <span className="bars"></span>
            <span className="bars"></span>
            <span className="bars"></span>
          </button>
        </div>
        <ul
          className={`md:flex md:w-auto md:shadow-none md:static fixed z-30 left-0 w-full shadow-xl bg-white ${
            isOpen ? "hidden" : "block"
          }`}
        >
          <Link to="/" onClick={toggleNavbar}>
            <li className="md:mx-2 md:my-2 md:pl-0 mx-0 my-5 pl-5">
              <a className="inline-block py-2 px-2 text-gray-800 hover:text-blue-600 transition-all duration-300 ease-in-out">
                Home
              </a>
            </li>
          </Link>
          <Link to="/about" onClick={toggleNavbar}>
            <li className="md:mx-2 md:my-2 md:pl-0 mx-0 my-5 pl-5">
              <a className="inline-block py-2 px-2 text-gray-800 hover:text-blue-600 transition-all duration-300 ease-in-out">
                About
              </a>
            </li>
          </Link>
          <Link to="/blog" onClick={toggleNavbar}>
            <li className="md:mx-2 md:my-2 md:pl-0 mx-0 my-5 pl-5">
              <a className="inline-block py-2 px-2 text-gray-800 hover:text-blue-600 transition-all duration-300 ease-in-out">
                Blog
              </a>
            </li>
          </Link>
          <Link to="/contact" onClick={toggleNavbar}>
            <li className="md:mx-2 md:my-2 md:pl-0 mx-0 my-5 pl-5">
              <a className="inline-block py-2 px-2 text-gray-800 hover:text-blue-600 transition-all duration-300 ease-in-out">
                Contact
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};
