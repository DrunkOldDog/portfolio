"use client";

import {
  CodeBlock as CodeBlockComponent,
  CodeBlockCode,
  CodeBlockGroup,
} from "@/components/ui/code-block";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Check, Copy } from "lucide-react";

import type { CodeBlockProps } from "./codeBlock.types";

export default function CodeBlock({ code, language, header }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <CodeBlockComponent>
      {header && (
        <CodeBlockGroup className="border-border border-b py-2 pr-2 pl-4">
          <div>
            <span className="text-muted-foreground text-sm">{header}</span>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 cursor-pointer"
            onClick={handleCopy}
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </CodeBlockGroup>
      )}

      <CodeBlockCode code={code} language={language} theme="github-dark" />
    </CodeBlockComponent>
  );
}
