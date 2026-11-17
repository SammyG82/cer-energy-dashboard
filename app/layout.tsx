import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageInit from "@/components/ui/PageInit";
import ErrorBoundary from "@/components/ui/ErrorBoundary";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

import { SITE_ORIGIN, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: "CER Energy Dashboard",
  description:
    "A data-driven dashboard exploring EV adoption, oil dependency, and clean energy infrastructure across 50+ countries.",
  openGraph: {
    title: "CER Energy Dashboard",
    description:
      "A data-driven dashboard exploring EV adoption, oil dependency, and clean energy infrastructure across 50+ countries.",
    type: "website",
    url: `${SITE_URL}/`,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: 'history.scrollRestoration="manual";document.documentElement.classList.add("page-loading");var s=document.createElement("style");s.textContent="html.page-loading header{opacity:0}";s.setAttribute("data-page-init","");document.head.appendChild(s);' }} />
      </head>
      <body className={`${inter.className} min-h-full flex flex-col bg-white text-slate-900 overscroll-none overflow-x-hidden`}>
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:top-4 focus-visible:left-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-500 focus-visible:ring-offset-white bg-white text-slate-900 border-slate-300 px-4 py-2 text-sm font-semibold rounded-lg border z-[100]"
        >
          Skip to content
        </a>
        <PageInit />
        <Header />
        <ErrorBoundary>
          <main id="main-content" tabIndex={-1} className="flex-1 pt-18 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500">{children}</main>
        </ErrorBoundary>
        <Footer />
      </body>
    </html>
  );
}
