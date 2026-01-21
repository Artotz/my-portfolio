import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getLocale } from "@/app/utils/i18n";
import type { Locale } from "@/app/utils/locales";

const inter = Inter({ subsets: ["latin"] });

const metadataByLocale: Record<Locale, Metadata> = {
  "pt-BR": {
    title: "Artur Catunda | Desenvolvedor React & Mobile",
    description: "Portf\u00f3lio de Artur Catunda.",
  },
  "en-US": {
    title: "Artur Catunda | React & Mobile Developer",
    description: "Artur Catunda's portfolio.",
  },
};

export function generateMetadata(): Metadata {
  const locale = getLocale();
  return metadataByLocale[locale] ?? metadataByLocale["en-US"];
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = getLocale();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${inter.className} bg-zinc-950 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
