import type { Metadata } from "next";
import StructuralWeldingPage from "@/views/services/StructuralWelding";

export const metadata: Metadata = {
  title: "Structural Welding",
  description:
    "AWS D1.1 and D1.2 certified structural welding for steel buildings, barns, and commercial frames in southwest Missouri.",
};

export default function Page() {
  return <StructuralWeldingPage />;
}
