import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "lawschoolhero — The Definitive Law School Admissions Advantage",
  description:
    "Free LSAT prep, personal statement coaching, and resume formatting for law school applicants. Master logical reasoning, reading comprehension, and craft your story.",
  keywords: [
    "LSAT prep",
    "law school admissions",
    "personal statement",
    "LSAT logical reasoning",
    "LSAT reading comprehension",
    "law school resume",
  ],
  openGraph: {
    title: "lawschoolhero — The Definitive Law School Admissions Advantage",
    description:
      "Free tools and guidance for LSAT mastery, personal statements, and everything in between.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-black text-white antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
