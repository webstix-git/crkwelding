import Link from "next/link";
import { Wrench, HardHat, Pipette, Cog, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import crk4 from "@/assets/crk_4.jpg";
import crk6 from "@/assets/crk_6.jpg";
import crk14 from "@/assets/crk_14.jpg";
import structuralWelding from "@/assets/home-structural.jpg";

const services = [
  {
    icon: HardHat,
    title: "STRUCTURAL WELDING",
    desc: "Steel buildings, barns, frames, and heavy structural fabrication. AWS D1.1 & D1.2 code compliant.",
    cert: "D1.1 / D1.2",
    path: "/services/structural-welding",
    image: structuralWelding,
  },
  {
    icon: Wrench,
    title: "HEAVY EQUIPMENT",
    desc: "On-site repair for machinery, construction vehicles, and truck/trailer (steel & aluminum).",
    cert: "Mobile Service",
    path: "/services/heavy-equipment",
    image: crk6,
  },
  {
    icon: Pipette,
    title: "PIPE WELDING",
    desc: "Tie-ins, new construction, and line repairs for damage or aging infrastructure.",
    cert: "API 1104",
    path: "/services/pipe-welding",
    image: crk14,
  },
  {
    icon: Cog,
    title: "CUSTOM FABRICATION",
    desc: "Farm gates, aluminum frames, marine & boat repair, mining equipment, and aerospace components (case-by-case).",
    cert: "D17.1 Aerospace",
    path: "/services/custom-fabrication",
    image: crk4,
  },
];

const ServicePillars = () => {
  return (
    <section className="bg-background py-0 pt-[80px] pb-[30px]">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-14">
          <span className="font-ui text-primary tracking-widest text-base">WHAT WE DO</span>
          <h2 className="font-headline text-4xl md:text-5xl text-foreground mt-2">OUR SERVICE PILLARS</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <AnimatedSection key={svc.title} delay={i * 0.1}>
              <Link
                href={svc.path}
                className="group flex flex-col bg-card rounded-sm shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden border border-border hover:border-primary/30 h-full"
              >
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={600}
                    height={400}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-crk-onyx/70 to-transparent" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="font-headline text-card-foreground text-2xl">{svc.title}</h3>
                  </div>
                  <p className="text-muted-foreground font-roboto leading-relaxed mb-4 flex-1">{svc.desc}</p>
                  <span className="inline-flex items-center gap-1 font-ui text-primary group-hover:gap-2 transition-all mt-auto text-base">
                    LEARN MORE <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePillars;
