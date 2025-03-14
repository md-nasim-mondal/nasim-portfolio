import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Sections/HomePage/Navbar";
const poppins = Poppins({
  weight: ["400", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nasim-mondal.vercel.app"),
  title: "Md. Nasim Mondal | MERN Stack Developer",
  description:
    "Md. Nasim Mondal is a skilled MERN Stack & Next.js Developer specializing in React, TypeScript, MongoDB, and building SEO-optimized, high-performance web applications. Expert in frontend and full-stack development.",
  keywords: [
    "Md. Nasim Mondal",
    "MERN Stack Developer",
    "MERN Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Next.js Developer",
    "React Developer",
    "JavaScript Developer",
    "TypeScript Expert",
    "Frontend Web Developer",
    "Full Stack Web Developer",
  ],
  authors: [
    { name: "Md. Nasim Mondal", url: "https://nasim-mondal.vercel.app" },
  ],
  openGraph: {
    title: "Md. Nasim Mondal | MERN Stack Developer",
    description:
      "Experienced MERN Stack Developer specializing in Next.js, React, and TypeScript.",
    url: "https://nasim-mondal.vercel.app",
    images: [
      {
        url: "https://nasim-mondal.vercel.app/assets/images/Md_Nasim_Mondal-MERN_Stack_Developer.png",
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
    images: [
      "https://nasim-mondal.vercel.app/assets/images/Md_Nasim_Mondal-MERN_Stack_Developer.png",
    ],
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
        <link
          rel='icon'
          type='image/png'
          href='/assets/images/md-nasim-mondal.jpg'
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
