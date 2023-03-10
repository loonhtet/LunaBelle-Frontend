import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SanityClient } from "@sanity/client";
import { client, urlFor } from "../client";
import BlockContent from "@sanity/block-content-to-react";

export const SinglePost = () => {
  const [post, setpost] = useState([]);

  const { slug } = useParams();

  useEffect(() => {
    const query = `*[slug.current == "${slug}"]{
      image,
      title,
      slug,
      body
    }`;

    client
      .fetch(query)
      .then((data) => setpost(data))
      .catch((error) => console.error);
  }, []);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="px-3 md:py-36 py-20">
      {post.map((posts) => (
        <div className="max-w-xl mx-auto space-y-10" key={posts.slug.current}>
          <img className="w-full mx-auto" src={urlFor(posts.image)} alt="" />
          <h1 className="text-4xl font-bold mb-4 text-center">{posts.title}</h1>
          <p className="text-gray-500 text-sm mb-4"></p>
          <div className="prose max-w-full ">
            <BlockContent blocks={posts.body} />
          </div>
        </div>
      ))}
    </div>
  );
};
