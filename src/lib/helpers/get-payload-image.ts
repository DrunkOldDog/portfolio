import type { Media } from "@/payload-types";

export const getPayloadImage = (image: Media | string) => {
  // If image is a string (ObjectId as string), it means it wasn't populated
  if (typeof image === "string") {
    console.warn("Image is not populated, this shouldn't happen with proper population");
    return `${process.env.NEXT_PUBLIC_APP_URL}${image}`;
  }

  // If image is a Media object (populated), use the url
  if (image && image.url) {
    return `${process.env.NEXT_PUBLIC_APP_URL}${image.url}`;
  }

  // Fallback
  console.warn("Invalid image data:", image);
  return "";
};
