import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./_component/navbar";
import { ContactProvider } from "./_context/contact-context";
import ContactDialog from "./_component/contact-dialog";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ahmed Amine Doudech - Software Engineer & Consultant",
  description:
    "Portfolio of Ahmed Amine Doudech, a passionate Software Engineer and Consultant specializing in building scalable web applications and delivering innovative solutions.",
  keywords: [
    "Software Engineer",
    "Consultant",
    "Portfolio",
    "Web Development",
    "AI Integration",
    "Mobile Apps",
    "Backend Automation",
    "Frontend Development",
    "Ahmed Amine Doudech",
    "Software Consultant",
  ],
  authors: [{ name: "Ahmed Amine Doudech" }],
  creator: "Ahmed Amine Doudech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <ContactProvider>
          <Navbar />
          {children}
          <ContactDialog />
        </ContactProvider>
      </body>
    </html>
  );
}
