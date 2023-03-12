import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./main.css";
import "../index.css";

import { client, urlFor } from "../client";
import BlockContent from "@sanity/block-content-to-react";

export const Post = () => {
  const [post, setpost] = useState([]);

  useEffect(() => {
    const query = `*[_type == "post"]{
      image,
      slug,
      title,
      body
    }`;

    client
      .fetch(query)
      .then((data) => setpost(data))
      .catch((error) => console.error);
  }, [post]);

  return (
    <section className="">
      <div className="max-w-5xl mx-auto md:pt-52 pt-32 pb-10 px-3">
        <h1 className="md:text-6xl md:my-5 text-4xl my-3 leading-tight tracking-wider af-font">
          Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {post.map((posts) => (
            <div
              class="bg-white rounded-lg overflow-hidden drop-shadow-2xl transition-all duration-300 ease-in-out"
              key={posts.title}
            >
              <img
                class="h-52 w-full object-cover object-center"
                src={urlFor(posts.image)}
                alt="Blog post image"
              />
              <div class="p-6">
                <h2 class="font-bold text-xl text-gray-800 mb-5">
                  {posts.title}
                </h2>
                <p className="text-sm line-clamp-2 text-gray-600 mb-5">
                  <BlockContent blocks={posts.body} />
                </p>

                <Link
                  to={"/blog/" + posts.slug.current}
                  key={posts.slug.current}
                  class="inline-block px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 ease-in-out"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
