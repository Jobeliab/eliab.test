import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./components/AppProvider";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "E-Tender",
  description: "Transparent, Efficient & Digital Procurement",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider>
        <Providers>
          <Navbar />
          {children}
        </Providers>
        </ClerkProvider>
      </body>
    </html>
  );
}
