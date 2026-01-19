import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Artur Catunda | Desenvolvedor React & Mobile",
  description:
    "Portf\u00f3lio de Artur Catunda com projetos em React, Next.js e React Native. Foco em produtos digitais com performance e manuten\u00e7\u00e3o.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} bg-zinc-950 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
