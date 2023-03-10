import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <section className="md:pt-52 pt-32">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center justify-center">
          <img
            className="rounded-full mb-8 shadow-xl object-cover object-center"
            style={{ width: "300px", height: "300px" }}
            src="https://images.unsplash.com/photo-1550590538-f06f98886d1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="Luna Belle"
          />
          <h1 className="text-3xl md:text-5xl leading-tight font-bold bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 text-transparent">
            Luna Belle
          </h1>
          <p className="text-gray-800 text-lg mt-4 max-w-xl">
            Luna Belle is a writer who believes in the power of stories to
            transport us to different worlds and connect us to one another. With
            a talent for crafting intricate and imaginative tales, Luna's work
            has captured the hearts and minds of readers around the world. Her
            stories range from fantastical adventures to poignant reflections on
            the human experience, each one carrying a unique voice and
            perspective that is distinctly Luna's own. Whether you're a
            long-time fan or discovering Luna's writing for the first time,
            you're sure to be swept away by the magic and wonder of her stories.
          </p>
        </div>
      </div>
    </section>
  );
};
