import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { DropdownProvider } from '@/context/DropdownContext'
import { SidebarProvider } from '@/context/SidebarContext'
import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  // title: "Create Next App",
  title: {
    template: '%s | Acrosoft',
    default: 'Acrosoft',
  },
  description: "Generated by create next app",
};

const roboto = Roboto({
  weight: ["400"], // Select the weights you need
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <DropdownProvider>
          <SidebarProvider>
            <Navbar />
          </SidebarProvider>
        </DropdownProvider>
        {children}
        <Footer />
      </body>
    </html>
  );
}
