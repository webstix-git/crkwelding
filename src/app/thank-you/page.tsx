import type { Metadata } from "next";
import ThankYouPage from "@/views/ThankYou";
import { withCanonical } from "@/lib/metadata";

export const metadata: Metadata = withCanonical("/thank-you", {
  title: "Thank You",
  description: "Thank you for contacting CRK Welding. Our team will get back to you shortly.",
});

export default function Page() {
  return <ThankYouPage />;
}
