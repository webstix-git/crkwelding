import type { Metadata } from "next";
import FAQPage from "@/views/FAQ";
import { withCanonical } from "@/lib/metadata";

export const metadata: Metadata = withCanonical("/faq", {
  title: "FAQs",
  description: "Answers to common CRK Welding questions about service area, certifications, scheduling, and emergency support.",
});

export default function Page() {
  return <FAQPage />;
}
