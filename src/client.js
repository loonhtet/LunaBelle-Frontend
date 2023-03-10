import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "1n9vi4ix",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-03-08",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
