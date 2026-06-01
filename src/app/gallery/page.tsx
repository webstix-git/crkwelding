import type { Metadata } from "next";
import GalleryPage from "@/views/Gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse recent CRK Welding projects including structural welding, fabrication, and equipment repair.",
};

export default function Page() {
  return <GalleryPage />;
}
