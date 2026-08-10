import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://aisolutions.peplogar.com"),
  title: "Pep Logar AI Solutions | Software e IA que hacen avanzar el trabajo",
  description: "Diseñamos agentes, conexiones MCP y software potenciado con IA para automatizar procesos de empresa de forma útil, progresiva y controlable.",
  icons: {
    icon: "/pep-logar-logo.png",
    apple: "/pep-logar-logo.png",
  },
  openGraph: {
    title: "Menos tareas. Más empresa.",
    description: "Software y agentes de IA que conectan tus herramientas y hacen avanzar el trabajo.",
    type: "website",
    images: [{ url: "/og.png", width: 1732, height: 908, alt: "Pep Logar AI Solutions — Menos tareas. Más empresa." }],
  },
  twitter: { card: "summary_large_image", title: "Menos tareas. Más empresa.", description: "Software e IA aplicada para procesos que avanzan.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
