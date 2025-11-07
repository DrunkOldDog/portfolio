export type CodeBlockLanguage = "javascript" | "typescript" | "markdown";

export interface CodeBlockProps {
  code: string;
  language: CodeBlockLanguage;
  header?: string;
}
