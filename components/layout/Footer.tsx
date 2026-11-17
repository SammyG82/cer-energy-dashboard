"use client";

import Link from "next/link";
import { REPO_URL } from "@/lib/site";

const footerLinkClasses = "text-xs font-medium uppercase tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded text-slate-400 hover:text-slate-700 focus:ring-slate-500 focus:ring-offset-white";

export default function Footer() {
  return (
    <footer className="border-t transition-colors duration-300 bg-white border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 flex flex-wrap justify-between items-center gap-4">
        <p className="text-xs font-medium text-slate-400">
          © {new Date().getFullYear()} CER Energy Dashboard · Data: IEA
        </p>
        <nav className="flex gap-5" aria-label="Footer links">
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository (opens in new tab)"
            className={footerLinkClasses}
          >
            GitHub
          </a>
          <Link
            href="/about/"
            className={footerLinkClasses}
          >
            About
          </Link>
        </nav>
      </div>
    </footer>
  );
}
