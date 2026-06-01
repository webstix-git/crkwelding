"use client";

import Link from "next/link";
import { HardHat, Wrench, Pipette, Cog, ArrowRight, Phone } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import usePageSeo from "@/hooks/use-seo";
import { useBreadcrumbSchema } from "@/hooks/use-structured-data";
import crk4 from "@/assets/crk_4.jpg";
import crk6 from "@/assets/crk_6.jpg";
import crk14 from "@/assets/crk_14.jpg";
import structuralWelding from "@/assets/home-structural.jpg";
import heroImg from "@/assets/hero-bg.jpg";

const services = [
  {
    icon: HardHat,
    title: "STRUCTURAL WELDING",
    desc: "Expert fabrication and installation of steel buildings, barns, and frames. AWS D1.1 & D1.2 code compliant welding for commercial and agricultural structures.",
    specs: ["D1.1 Structural Steel", "D1.2 Aluminum", "Commercial Buildings", "Agricultural Structures"],
    path: "/services/structural-welding",
    image: structuralWelding,
  },
  {
    icon: Wrench,
    title: "HEAVY EQUIPMENT REPAIR",
    desc: "On-site mobile repair for machinery, construction vehicles, and truck/trailer systems in both steel and aluminum. Minimizing your downtime is our priority.",
    specs: ["Mobile On-Site Service", "Steel & Aluminum", "Construction Vehicles", "Truck/Trailer Repair"],
    path: "/services/heavy-equipment",
    image: crk6,
  },
  {
    icon: Pipette,
    title: "PIPE WELDING",
    desc: "Specialized pipe welding for tie-ins, new construction, and line repairs. API 1104 certified for pipeline integrity.",
    specs: ["API 1104 Certified", "Tie-Ins", "New Construction", "Line Repairs"],
    path: "/services/pipe-welding",
    image: crk14,
  },
  {
    icon: Cog,
    title: "CUSTOM FABRICATION",
    desc: "Custom metalwork from farm gates to aluminum frames and aerospace components. If it can be welded, we can build it.",
    specs: ["Farm Gates", "Aluminum Frames", "Marine & Boat Repair", "Aerospace (Case-by-Case)"],
    path: "/services/custom-fabrication",
    image: crk4,
  },
];

const Services = () => {
  usePageSeo({
    title: "Our Services | CRK Welding",
    description: "From structural steel and pipe welding to heavy equipment repair and custom fabrication — see the full range of services CRK Welding offers in Missouri.",
  });
  useBreadcrumbSchema([{ name: "Services", url: "/services" }]);
  return (
    <>
      <section className="bg-crk-onyx relative min-h-[350px] flex items-end">
        <div className="absolute inset-0">
          <img src={heroImg} alt="CRK Welding services — structural, pipe, heavy equipment, and custom fabrication" width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-crk-onyx via-crk-onyx/90 to-crk-onyx/20" />
        </div>
        <div className="container mx-auto px-4 relative z-10 pt-40 pb-12">
          <AnimatedSection>
            <h1 className="font-headline text-5xl md:text-6xl text-crk-white">OUR SERVICES</h1>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <Breadcrumbs items={[{ label: "Services" }]} />
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 space-y-16">
          {services.map((svc, i) => (
            <AnimatedSection key={svc.title}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <img src={svc.image} alt={svc.title} width={800} height={500} className="w-full h-80 object-cover rounded-sm" loading="lazy" />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-2 mb-3">
                    <svc.icon className="w-6 h-6 text-primary" />
                    <h2 className="font-headline text-3xl text-foreground">{svc.title}</h2>
                  </div>
                  <p className="text-muted-foreground font-roboto leading-relaxed mb-4">{svc.desc}{" "}
                    <Link href="/contact" className="text-primary hover:underline">Request a quote</Link>.
                  </p>
                  <ul className="grid grid-cols-2 gap-2 mb-6">
                    {svc.specs.map(s => (
                      <li key={s} className="flex items-center gap-2 text-sm font-roboto text-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={svc.path}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-ui text-sm hover:bg-crk-red-dark transition-colors min-h-[44px]"
                  >
                    VIEW DETAILS <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="py-16 bg-crk-onyx">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-headline text-3xl text-crk-white mb-4">NEED A CUSTOM SOLUTION?</h2>
            <p className="text-crk-steel mb-6 font-roboto">Call us to discuss your specific project requirements.</p>
            <a
              href="tel:4173071017"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-ui text-base hover:bg-crk-red-dark transition-colors btn-spark min-h-[44px]"
            >
              <Phone className="w-5 h-5" />
              CALL 417-307-1017
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Services;
