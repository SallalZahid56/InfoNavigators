// src/app/layout.js
import "./globals.css";
import { Inter, Montserrat } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "InfoNavigators",
  description: "Your digital growth partner",

  // ✅ Add favicon here
  icons: {
    icon: "/favicon.png",        // default favicon
    shortcut: "/favicon.png",    // browser shortcut icon
    apple: "/favicon.png",       // for iOS devices
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} font-sans`}>
        {/* Always visible */}
        <Navbar />

        {/* 👇 Dynamic page content gets injected here */}
        {children}

        {/* Always visible */}
        <Footer />
      </body>
    </html>
  );
}
