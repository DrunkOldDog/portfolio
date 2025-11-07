import type { Block } from "payload";
import type { CodeBlockLanguage } from "./codeBlock.types";

export const Code: Block = {
  slug: "code",
  fields: [
    {
      name: "language",
      type: "select",
      defaultValue: "markdown",
      options: [
        {
          label: "Default",
          value: "markdown",
        },
        {
          label: "JavaScript",
          value: "javascript",
        },
        {
          label: "TypeScript",
          value: "typescript",
        },
      ] satisfies { label: string; value: CodeBlockLanguage }[],
    },
    {
      name: "code",
      type: "code",
      required: true,
    },
    {
      name: "header",
      type: "text",
      required: false,
      admin: {
        description: "The header of the code block or file name",
      },
    },
  ],
};
