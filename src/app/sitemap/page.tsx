import type { Metadata } from "next";
import SitemapPage from "@/views/Sitemap";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Browse all CRK Welding pages and service links.",
};

export default function Page() {
  return <SitemapPage />;
}
