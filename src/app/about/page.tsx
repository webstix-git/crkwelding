import type { Metadata } from "next";
import AboutPage from "@/views/About";
import { withCanonical } from "@/lib/metadata";

export const metadata: Metadata = withCanonical("/about", {
  title: "About Us",
  description:
    "Meet Cody, the owner of CRK Welding. With AWS certifications and years of hands-on experience, he brings reliable, quality welding to southwest Missouri.",
});

export default function Page() {
  return <AboutPage />;
}
