import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_Arabic } from "next/font/google";

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-arabic",
});

export const metadata: Metadata = {
  title: "قاعة الغزال",
  description: "قاعة الغزال - أفضل قاعة حفلات في الجزائر",
};

export default function ARLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div dir="rtl" className="bg-white">
      {children}
    </div>
  );
}
