import type { Metadata } from "next";
import CustomFabricationPage from "@/views/services/CustomFabrication";
import { withCanonical } from "@/lib/metadata";

export const metadata: Metadata = withCanonical("/services/custom-fabrication", {
  title: "Custom Fabrication",
  description:
    "Custom metal fabrication for farm gates, aluminum frames, marine repairs, and aerospace components in Fair Play, Missouri.",
});

export default function Page() {
  return <CustomFabricationPage />;
}
