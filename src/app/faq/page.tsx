import type { Metadata } from "next";
import FAQPage from "@/views/FAQ";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Answers to common CRK Welding questions about service area, certifications, scheduling, and emergency support.",
};

export default function Page() {
  return <FAQPage />;
}
