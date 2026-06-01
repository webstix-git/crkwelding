import type { Metadata } from "next";
import IndexPage from "@/views/Index";

export const metadata: Metadata = {
  title: "CRK Welding | Mobile Welding, Fair Play MO",
  description:
    "AWS certified mobile welding in Fair Play, MO. Structural steel, pipe welding, equipment repair, and custom fabrication. On-site service available 24/7.",
};

export default function Page() {
  return <IndexPage />;
}
