import type { Metadata } from "next";
import { Anton, Archivo } from "next/font/google";
import "./globals.css";

const anton = Anton({ variable: "--font-anton", weight: "400", subsets: ["latin"] });
const archivo = Archivo({
  variable: "--font-archivo",
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joao Leonel Brizola 4012 · Deputado Federal · PSB/RJ",
  description:
    "Brizola: uma heranca, um legado. Educacao integral, defesa do SUS, partidos democraticos e soberania. Vote 4012.",
  openGraph: {
    title: "Joao Leonel Brizola 4012",
    description: "Brizola: uma heranca, um legado.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${anton.variable} ${archivo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
