import type { Metadata } from "next";
import HeavyEquipmentPage from "@/views/services/HeavyEquipment";
import { withCanonical } from "@/lib/metadata";

export const metadata: Metadata = withCanonical("/services/heavy-equipment", {
  title: "Heavy Equipment Repair",
  description:
    "Mobile on-site welding repair for heavy equipment, construction vehicles, and trucks. 24/7 emergency service in southwest Missouri.",
});

export default function Page() {
  return <HeavyEquipmentPage />;
}
