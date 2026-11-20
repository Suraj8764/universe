import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Friendship Universe 💗 | Ritu & Smurti",
  description:
    "A dreamy, magical digital gift celebrating the beautiful friendship of Ritu & Smurti. Two souls, countless memories, one beautiful friendship.",
  keywords: [
    "friendship",
    "Ritu and Smurti",
    "best friends",
    "memory wall",
    "friendship gift",
    "open when letters",
    "friendship quiz",
  ],
  authors: [{ name: "For Ritu & Smurti with Love" }],
  openGraph: {
    title: "The Friendship Universe 💗 | Ritu & Smurti",
    description: "Two souls, countless memories, one beautiful friendship.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Dancing+Script:wght@400..700&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#FFFDF9] text-stone-800 antialiased selection:bg-pink-200 selection:text-pink-900 overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
