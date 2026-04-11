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

export const metadata = {
   title: "Salle Elghazel — Salle de Mariage Élégante à Alger",
   description:
     "Depuis 2017, Salle Elghazel vous accueille pour vos mariages et événements avec une expérience haut de gamme : salle, restauration, DJ et organisation complète.",
 
   keywords: [
     "salle mariage Alger",
     "salle des fêtes Alger",
     "location salle mariage Alger",
     "salle mariage luxe Alger",
     "Salle Elghazel"
   ],
 
   openGraph: {
     title: "Salle Elghazel — Mariages & Événements",
     description:
       "Un lieu élégant pour des mariages inoubliables à Alger. Réservez dès maintenant.",
     url: "https://your-domain.com",
     siteName: "Salle Elghazel",
     images: [
       {
         url: "/hero2.jpg", // MUST be in /public
         width: 1200,
         height: 630,
         alt: "Salle Elghazel mariage",
       },
     ],
     locale: "fr_FR",
     type: "website",
   },
 
   twitter: {
     card: "summary_large_image",
     title: "Salle Elghazel — Mariage à Alger",
     description:
       "Salle élégante pour vos événements avec service complet.",
     images: ["/hero2.jpg"],
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
