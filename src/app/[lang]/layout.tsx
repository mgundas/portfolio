import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { getContent, isLocale, locales } from "@/content";
import "../globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-inter" });
const instrument = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
});
const jetbrains = JetBrains_Mono({ subsets: ["latin", "latin-ext"], variable: "--font-jetbrains" });

type Props = { params: Promise<{ lang: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = getContent(lang);
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: { en: "/en", tr: "/tr", "x-default": "/en" },
    },
    openGraph: { title: meta.title, description: meta.description, locale: lang === "tr" ? "tr_TR" : "en_US" },
  };
}

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
};

export default async function RootLayout({ children, params }: Props & { children: React.ReactNode }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={lang} className={`${inter.variable} ${instrument.variable} ${jetbrains.variable}`}>
      <body className="font-sans overflow-x-clip">{children}</body>
    </html>
  );
}
