
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// app/layout.js
import Providers  from "./components/Providers"; // Adjust the path as necessary
import Navbar from "./components/Navbar"; // Adjust the path as necessary
import Footer from "./components/Footer";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Portfolio",
  description: "A showcase of my projects and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className="bg-gray-100 text-gray-900 dark:bg-black dark:text-white">
      <Providers> {/* Wrap in ThemeProvider */}
        <Navbar />
        <main className="max-w-4xl mx-auto px-4">{children}</main>
        <Footer />
      </Providers>
    </body>
  </html>
);   
}
