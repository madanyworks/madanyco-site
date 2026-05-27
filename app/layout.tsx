import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://madanyco.com"),
  title: {
    default: "MadanyCo.™ — Market for people, not at people.",
    template: "%s — MadanyCo.™",
  },
  description:
    "Profit-first growth partner for DTC and e-commerce brands. We install The Pulse System™ — a clear financial plan + marketing plan × daily workflow.",
  openGraph: {
    title: "MadanyCo.™ — Market for people, not at people.",
    description:
      "Profit-first growth partner for DTC and e-commerce brands. We install The Pulse System™.",
    url: "https://madanyco.com",
    siteName: "MadanyCo.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MadanyCo.™",
    description:
      "Profit-first growth partner for DTC and e-commerce brands.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-ink text-bone antialiased grain">
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
