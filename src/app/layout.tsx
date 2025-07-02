import type { Metadata } from "next";
import {Nunito} from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header";


const nunito = Nunito({
    variable: "--font-nunito",
    weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
    subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "ЕГЭ ИНФОРМАТИКА 2026",
  description: "ЕГЭ ИНФОРМАТИКА 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={nunito.className}>
        <div className="flex flex-col min-w-screen min-h-screen items-center">
            <Header />
            {children}
        </div>
      </body>
    </html>
  );
}
