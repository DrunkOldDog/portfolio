import type { Block } from "payload";

export const VideoBlock: Block = {
  slug: "videoBlock",
  interfaceName: "VideoBlock",
  labels: {
    singular: "Video Block",
    plural: "Video Blocks",
  },
  fields: [
    {
      name: "videoProvider",
      type: "select",
      options: [
        { label: "YouTube", value: "youtube" },
        { label: "Vimeo", value: "vimeo" },
      ],
      defaultValue: "youtube",
      required: true,
    },
    {
      name: "videoId",
      label: "Video ID",
      type: "text",
      required: true,
    },
    {
      name: "caption",
      type: "text",
      label: "Caption (optional)",
      required: false,
    },
  ],
};
