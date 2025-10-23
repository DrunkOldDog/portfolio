import type { Media } from "@/payload-types";

export const getPayloadImage = (image: Media | string) => {
  if (typeof image === "string") {
    return `${process.env.NEXT_PUBLIC_APP_URL}${image}`;
  }

  return `${process.env.NEXT_PUBLIC_APP_URL}${image.url}`;
};
