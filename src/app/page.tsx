import type { Metadata } from "next";
import IndexPage from "@/views/Index";
import { withCanonical } from "@/lib/metadata";

export const metadata: Metadata = withCanonical("/", {
  title: "CRK Welding | Mobile Welding, Fair Play MO",
  description:
    "AWS certified mobile welding in Fair Play, MO. Structural steel, pipe welding, equipment repair, and custom fabrication. On-site service available 24/7.",
  verification: {
    google: "HH7KLe508wBmhvSBLftzBPJPivkVf1x0CwShmPOzxmA",
  },
});

export default function Page() {
  return <IndexPage />;
}
