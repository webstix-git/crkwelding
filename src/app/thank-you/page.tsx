import type { Metadata } from "next";
import ThankYouPage from "@/views/ThankYou";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for contacting CRK Welding. Our team will get back to you shortly.",
};

export default function Page() {
  return <ThankYouPage />;
}
