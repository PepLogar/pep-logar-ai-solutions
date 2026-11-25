import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DocumentLanguage } from "./DocumentLanguage";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const title = "Software a medida y agentes de IA | Pep Logar AI Solutions";
const description = "Desarrollamos software a medida para empresas, desde aplicaciones de gestión e integraciones tradicionales hasta agentes de IA que usan tus herramientas con la supervisión de tu equipo.";

export const metadata: Metadata = {
  metadataBase: new URL("https://aisolutions.peplogar.com"),
  title,
  description,
  icons: {
    icon: "/pep-logar-logo.png",
    apple: "/pep-logar-logo.png",
  },
  openGraph: {
    title,
    description,
    type: "website",
    images: [{ url: "/og.png", width: 1732, height: 908, alt: "Pep Logar AI Solutions — Menos tareas. Más empresa." }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <DocumentLanguage><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></DocumentLanguage>;
}
