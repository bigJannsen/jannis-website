import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Jannis Niemann · Elektrotechnik & technische Projekte", template: "%s · Jannis Niemann" },
  description: "Persönliche Technik-Website von Jannis Niemann: Elektrokonstruktion, Automatisierung, Embedded-Projekte und Technikerprojekt.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className="scroll-smooth antialiased">
      <body className="min-h-screen bg-zinc-950 text-zinc-100">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
