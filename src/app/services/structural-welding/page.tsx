import type { Metadata } from "next";
import StructuralWeldingPage from "@/views/services/StructuralWelding";
import { withCanonical } from "@/lib/metadata";

export const metadata: Metadata = withCanonical("/services/structural-welding", {
  title: "Structural Welding",
  description:
    "AWS D1.1 and D1.2 certified structural welding for steel buildings, barns, and commercial frames in southwest Missouri.",
});

export default function Page() {
  return <StructuralWeldingPage />;
}
