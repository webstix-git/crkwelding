import type { Metadata } from "next";
import PipeWeldingPage from "@/views/services/PipeWelding";

export const metadata: Metadata = {
  title: "Pipe Welding",
  description:
    "API 1104 certified pipe welding for tie-ins, new construction, and pipeline repairs in southwest Missouri.",
};

export default function Page() {
  return <PipeWeldingPage />;
}
