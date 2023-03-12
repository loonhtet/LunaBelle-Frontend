import { urlFor } from "../client";

const serializers = {
  types: {
    block: (props) => {
      switch (props.node.style) {
        case "h1":
          return <h1 className="text-4xl font-bold my-4">{props.children}</h1>;
        case "h2":
          return <h2 className="text-3xl font-bold my-4">{props.children}</h2>;
        case "h3":
          return <h3 className="text-2xl font-bold my-4">{props.children}</h3>;
        case "h4":
          return <h4 className="text-xl font-bold my-4">{props.children}</h4>;
        case "blockquote":
          return (
            <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4">
              {props.children}
            </blockquote>
          );
        case "normal":
        default:
          return <p className="my-4">{props.children}</p>;
      }
    },
    image: (props) => {
      return (
        <div className="my-4">
          <img
            src={urlFor(props.node.asset).url()}
            alt={props.node.alt}
            className="mx-auto"
          />
          {props.node.caption && (
            <p className="text-center italic text-gray-500">
              {props.node.caption}
            </p>
          )}
        </div>
      );
    },
    list: (props) => {
      const Tag = props.node.ordered ? "ol" : "ul";
      return <Tag className="list-disc list-inside my-4">{props.children}</Tag>;
    },
    listItem: (props) => {
      return <li className="my-2">{props.children}</li>;
    },
  },
};

export default serializers;
