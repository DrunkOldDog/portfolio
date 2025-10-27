import { VideoBlock } from "@/blocks/VideoBlock";
import { RichText as PayloadRichText } from "@payloadcms/richtext-lexical/react";

import type { SerializedBlockNode } from "@payloadcms/richtext-lexical";
import type { VideoBlockProps } from "@/blocks/VideoBlock";
import type { JSXConvertersFunction } from "@payloadcms/richtext-lexical/react";
import React from "react";

type NodeTypes = SerializedBlockNode<VideoBlockProps>;

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({
  defaultConverters,
}) => ({
  ...defaultConverters,
  blocks: {
    videoBlock: ({ node }: { node: SerializedBlockNode<VideoBlockProps> }) => {
      return (
        <VideoBlock
          videoProvider={node.fields.videoProvider}
          videoId={node.fields.videoId}
        />
      );
    },
  },
});

export default function RichText(
  props: React.ComponentProps<typeof PayloadRichText>
) {
  return <PayloadRichText {...props} converters={jsxConverters} />;
}
