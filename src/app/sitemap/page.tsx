import type { Metadata } from "next";
import SitemapPage from "@/views/Sitemap";
import { withCanonical } from "@/lib/metadata";

export const metadata: Metadata = withCanonical("/sitemap", {
  title: "Sitemap",
  description: "Browse all CRK Welding pages and service links.",
});

export default function Page() {
  return <SitemapPage />;
}
