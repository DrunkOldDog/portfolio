import type { Metadata } from "next";

import "./global.css";

export const metadata: Metadata = {
  title: "Juani Reyes",
  description:
    "Juani is a Frontend Engineer, UX Designer and world explorer. Big fan of music, beers, technology and pugs.",
  openGraph: {
    title: "Juani Reyes",
    description:
      "Juani is a Frontend Engineer, UX Designer and world explorer. Big fan of music, beers, technology and pugs.",
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
