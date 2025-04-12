import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mehmet Gündaş",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="max-w-[1920px] mx-auto overflow-clip py-0 px-12 lg:px-32">
          {children}
        </main>
      </body>
    </html>
  );
}
