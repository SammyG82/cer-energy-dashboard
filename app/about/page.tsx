import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About — CER Energy Dashboard",
  description: "Project background, data sources, and research methodology for the CER Energy Dashboard.",
};

export default function AboutPage() {
  return <AboutClient />;
}
