import type { Metadata } from "next";
import GalleryPage from "@/views/Gallery";
import { withCanonical } from "@/lib/metadata";

export const metadata: Metadata = withCanonical("/gallery", {
  title: "Gallery",
  description: "Browse recent CRK Welding projects including structural welding, fabrication, and equipment repair.",
});

export default function Page() {
  return <GalleryPage />;
}
