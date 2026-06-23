import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pavlova Colima | Escuela de Ballet en Colima",
  description: "Academia de ballet clásico en Colima certificada por la Royal Academy of Dance. Clases para todas las edades, grados oficiales y formación artística de excelencia.",
  keywords: [
    "ballet colima", 
    "clases de ballet en colima", 
    "pavlova colima", 
    "pavlova royal academy", 
    "escuela de danza colima", 
    "royal academy of dance colima",
    "ballet para niñas colima"
  ],
  openGraph: {
    title: "Pavlova Colima| Escuela de Ballet en Colima",
    description: "Formación artística de excelencia con certificación internacional RAD.",
    images: [{ url: "/LogoPavlova.jpeg" }], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
