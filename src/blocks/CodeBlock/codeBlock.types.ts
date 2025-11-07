export type CodeBlockLanguage = "javascript" | "typescript" | "tsx";

export interface CodeBlockProps {
  code: string;
  language: CodeBlockLanguage;
  header?: string;
}
