import React, { useState, useEffect } from "react";
import "./main.css";
import "../index.css";
import girl from "../assets/girl.png";

import { client, urlFor } from "../client";
import { Link } from "react-router-dom";

export const Hero = () => {
  const [home, sethome] = useState([]);

  useEffect(() => {
    const query = `*[_type == "home"]{
      photo,
      name,
      about
    }`;

    client
      .fetch(query)
      .then((data) => sethome(data))
      .catch((error) => console.error);
  }, [home]);

  return (
    <section
      className="relative overflow-hidden flex justify-center items-center"
      style={{ height: "100vh" }}
    >
      {home.map((homes) => (
        <div key={homes.name}>
          <div className="absolute top-0 left-0 w-full h-full bg-gray-400 z-0"></div>
          <div className="relative z-10">
            <div className="max-w-5xl mx-auto px-3">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-white mb-6 qs-font">
                {homes.name}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                {homes.about}
              </p>
              <Link to="/about">
                <a className="bg-white text-blue-500 font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-100 hover:text-gray-600 transition-all duration-200">
                  More About
                </a>
              </Link>
            </div>
          </div>
          <img
            src={urlFor(homes.photo)}
            alt="Hero"
            className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
            style={{ height: "100vh" }}
          />
        </div>
      ))}
    </section>
  );
};
