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
      <body className="min-h-screen bg-[#FFFDF9] text-stone-800 antialiased selection:bg-pink-200 selection:text-pink-900 overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
