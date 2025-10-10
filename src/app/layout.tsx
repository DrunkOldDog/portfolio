import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Juani Reyes - Portfolio",
  description:
    "Hello there! Welcome to my portfolio. I'm Juani, a Frontend Engineer and UX Designer from Bolivia.",
  openGraph: {
    title: "Juani Reyes - Portfolio",
    description:
      "Hello there! Welcome to my portfolio. I'm Juani, a Frontend Engineer and UX Designer from Bolivia.",
    url: "https://juanireyes.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="mx-auto max-w-6xl px-8">{children}</body>
    </html>
  );
}
