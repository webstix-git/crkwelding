import type { Metadata } from "next";
import ServicesPage from "@/views/Services";
import { withCanonical } from "@/lib/metadata";

export const metadata: Metadata = withCanonical("/services", {
  title: "Services",
  description:
    "Mobile structural welding, heavy equipment repair, pipe welding, and custom fabrication services across southwest Missouri.",
});

export default function Page() {
  return <ServicesPage />;
}
