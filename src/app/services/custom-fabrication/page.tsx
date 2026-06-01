import type { Metadata } from "next";
import CustomFabricationPage from "@/views/services/CustomFabrication";

export const metadata: Metadata = {
  title: "Custom Fabrication",
  description:
    "Custom metal fabrication for farm gates, aluminum frames, marine repairs, and aerospace components in Fair Play, Missouri.",
};

export default function Page() {
  return <CustomFabricationPage />;
}
