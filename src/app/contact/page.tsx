import type { Metadata } from "next";
import ContactPage from "@/views/Contact";
import { withCanonical } from "@/lib/metadata";

export const metadata: Metadata = withCanonical("/contact", {
  title: "Contact Us",
  description:
    "Get in touch with CRK Welding for a free estimate. Call 417-307-1017 or submit our online form. Emergency and after-hours service available 24/7.",
});

export default function Page() {
  return <ContactPage />;
}
