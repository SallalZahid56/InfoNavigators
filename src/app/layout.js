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
        {/* Floating WhatsApp button (sitewide) */}
        <a
          href="https://api.whatsapp.com/send?phone=923041894256&text=Hey%20I%20am%20contacting%20you%20from%20the%20infoNav%20website."
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed right-4 bottom-4 z-50 bg-[#25D366] hover:bg-[#1EBE56] text-white rounded-full p-3 shadow-lg transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-6 h-6"
            fill="currentColor"
          >
            <path d="M19.11 17.59c-.31-.16-1.82-.9-2.1-1-.28-.09-.48-.16-.68.16s-.78 1-.96 1.2c-.18.22-.36.25-.67.08-.31-.16-1.31-.48-2.5-1.53-.93-.82-1.56-1.84-1.74-2.15-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.19.21-.32.31-.53.09-.22 0-.41-.05-.57-.06-.16-.68-1.64-.93-2.25-.24-.59-.49-.51-.68-.52-.18-.01-.39-.01-.59-.01s-.54.08-.82.38c-.28.3-1.07 1.04-1.07 2.54s1.1 2.95 1.25 3.15c.16.2 2.16 3.3 5.23 4.63 3.07 1.33 3.07.89 3.62.83.55-.06 1.82-.74 2.07-1.45.25-.71.25-1.32.18-1.45-.06-.13-.26-.19-.56-.35z" />
            <path d="M16 3C9.37 3 4 8.37 4 15c0 2.64.86 5.08 2.32 7.07L4 29l7.24-2.28A12.94 12.94 0 0 0 16 28c6.63 0 12-5.37 12-12S22.63 3 16 3zM16 26c-1.02 0-2.03-.14-3-.41l-.21-.06L7 28l1.5-5.05-.13-.2A10.01 10.01 0 1 1 26 16c0 5.52-4.48 10-10 10z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
