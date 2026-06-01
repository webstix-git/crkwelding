"use client";

import Hero from "@/components/home/Hero";
import CertBadges from "@/components/home/CertBadges";
import ServicePillars from "@/components/home/ServicePillars";
import WhoWeAre from "@/components/home/WhoWeAre";
import GalleryPreview from "@/components/home/GalleryPreview";
import EmergencyCard from "@/components/home/EmergencyCard";
import WhyCRK from "@/components/home/WhyCRK";
import usePageSeo from "@/hooks/use-seo";
import { useLocalBusinessSchema } from "@/hooks/use-structured-data";

const Index = () => {
  usePageSeo({
    title: "CRK Welding | Mobile Welding, Fair Play MO",
    description: "AWS certified mobile welding in Fair Play, MO. Structural steel, pipe welding, equipment repair, and custom fabrication. On-site service available 24/7.",
  });
  useLocalBusinessSchema();
  return (
    <>
      <Hero />
      <ServicePillars />
      <CertBadges />
      <WhoWeAre />
      <GalleryPreview />
      <EmergencyCard />
      <WhyCRK />
    </>
  );
};

export default Index;
