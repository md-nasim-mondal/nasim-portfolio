import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // শুধু Poppins ফন্ট ইমপোর্ট
import "./globals.css";
import Navbar from "@/components/Sections/HomPage/Navbar";
const poppins = Poppins({
  weight: ["400", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Md. Nasim Mondal | MERN Stack & Next.js Developer",
  description:
    "Md. Nasim Mondal is a skilled MERN Stack & Next.js Developer specializing in React, TypeScript, MongoDB, and building SEO-optimized, high-performance web applications. Expert in frontend and full-stack development.",
  keywords: [
    "MERN Stack Developer",
    "MERN Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "MongoDB",
    "Next.js Developer",
    "React Developer",
    "TypeScript Expert",
    "JavaScript Developer",
    "Frontend Web Developer",
  ],
  authors: [
    { name: "Md. Nasim Mondal", url: "https://your-portfolio-link.com" },
  ],
  openGraph: {
    title: "Md. Nasim Mondal | MERN Stack Developer",
    description:
      "Experienced MERN Stack Developer specializing in Next.js, React, and TypeScript.",
    url: "https://your-portfolio-link.com",
    images: [
      {
        url: "https://your-portfolio-link.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Md. Nasim Mondal Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Nasim Mondal | MERN Stack Developer",
    description:
      "Building high-performance web applications with Next.js, React, and TypeScript.",
    images: ["https://your-portfolio-link.com/og-image.jpg"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
