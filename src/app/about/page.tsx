import type { Metadata } from "next";
import AboutPage from "@/views/About";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Cody, the owner of CRK Welding. With AWS certifications and years of hands-on experience, he brings reliable, quality welding to southwest Missouri.",
};

export default function Page() {
  return <AboutPage />;
}
