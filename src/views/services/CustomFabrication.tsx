"use client";

import Link from "next/link";
import { Phone, ArrowRight, Cog, Atom, Fence, Shapes, Wrench, Shield, CheckCircle, Ruler } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import crk26 from "@/assets/crk_26.jpg";
import usePageSeo from "@/hooks/use-seo";
import { useServiceSchema, useBreadcrumbSchema } from "@/hooks/use-structured-data";
import customImg from "@/assets/custom.jpg";
import crk26new from "@/assets/crk_26_new.jpg";

const CustomFabrication = () => {
  usePageSeo({
    title: "Custom Fabrication | CRK Welding",
    description: "Custom metal fabrication for farm gates, aluminum frames, marine repairs, and more. If it can be welded, CRK Welding can build it. Fair Play, Missouri.",
  });
  useServiceSchema({ name: "Custom Fabrication", description: "Custom metal fabrication for farm gates, aluminum frames, marine repairs, and aerospace components in Fair Play, Missouri.", url: "/services/custom-fabrication" });
  useBreadcrumbSchema([{ name: "Services", url: "/services" }, { name: "Custom Fabrication" }]);
  return (
  <>
    <section className="bg-crk-onyx relative min-h-[350px] flex items-end">
      <div className="absolute inset-0">
        <img src={crk26} alt="Custom metal fabrication — specialized metalwork and welding by CRK Welding" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-crk-onyx via-crk-onyx/90 to-crk-onyx/20" />
      </div>
      <div className="container mx-auto px-4 relative z-10 pt-40 pb-12">
        <AnimatedSection>
          <h1 className="font-headline text-5xl md:text-6xl text-crk-white">CUSTOM FABRICATION</h1>
        </AnimatedSection>
      </div>
    </section>

    <div className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <Breadcrumbs items={[{ label: "Services", path: "/services" }, { label: "Custom Fabrication" }]} />
      </div>
    </div>

    {/* Main Content */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection direction="left">
            <img src={customImg} alt="Custom steel and aluminum fabrication — farm gates, frames, and specialty metalwork by CRK Welding" width={800} height={600} className="w-full rounded-sm shadow-lg" loading="lazy" />
          </AnimatedSection>
          <AnimatedSection direction="right">
            <h2 className="font-headline text-foreground mb-6">IF IT CAN BE WELDED, WE CAN BUILD IT</h2>
            <p className="text-muted-foreground font-roboto leading-relaxed mb-6">
              Custom fabrication is where CRK Welding's versatility truly shines. With certifications spanning 
              structural steel (AWS D1.1/D1.2), aerospace welding (D17.1), and pipeline work (API 1104), we bring 
              a rare breadth of capability to custom projects. Whether you need a one-off prototype, a production 
              run of specialized components, or a creative metalwork piece, we have the skills, equipment, and 
              problem-solving mindset to make it happen.
            </p>
            <p className="text-muted-foreground font-roboto leading-relaxed mb-6">
              Our custom fabrication process begins with understanding your exact requirements. We review your 
              drawings, sketches, or verbal descriptions and provide recommendations on materials, joint designs, 
              and finishing options. For projects without existing plans, we can work collaboratively to develop 
              specifications that meet your functional and aesthetic goals. Our 18 years of experience mean we've 
              encountered virtually every type of fabrication challenge, and we bring that knowledge to every project.
            </p>
            <p className="text-muted-foreground font-roboto leading-relaxed mb-6">
              We work with a wide range of materials including mild carbon steel, stainless steel, aluminum alloys, 
              and specialty metals. Our welding capabilities include MIG (GMAW), TIG (GTAW), and stick (SMAW) processes, 
              allowing us to select the optimal technique for each material and application.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Fence, text: "Farm Gates & Fencing" },
                { icon: Shapes, text: "Aluminum Frames" },
                { icon: Cog, text: "Marine & Mining" },
                { icon: Atom, text: "Aerospace (D17.1)" },
              ].map(item => (
                <div key={item.text} className="flex items-center gap-2 font-roboto text-foreground">
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  {item.text}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:4173071017" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-ui text-sm hover:bg-crk-red-dark transition-colors min-h-[44px]">
                <Phone className="w-4 h-4" /> DISCUSS YOUR BUILD
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-foreground text-foreground px-6 py-3 rounded-sm font-ui text-sm hover:bg-foreground hover:text-background transition-colors min-h-[44px]">
                REQUEST ESTIMATE <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Fabrication Types */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-14">
          
          <h2 className="font-headline text-foreground mt-2">WHAT WE CREATE</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: Fence, title: "AGRICULTURAL & RANCH FABRICATION", text: "Missouri's farming and ranching community needs metalwork that's built to last. We fabricate custom farm gates, cattle guards, hay feeders, equipment mounts, and fencing components designed specifically for your property and operational needs. Unlike mass-produced alternatives, our custom-built agricultural metalwork is fabricated from heavier-gauge materials with full-penetration welds at every critical joint. We understand the punishment that livestock, weather, and daily use inflict on farm infrastructure, and we build accordingly." },
            { icon: Shapes, title: "ALUMINUM FABRICATION", text: "Aluminum welding requires specialized skills, equipment, and techniques that differ significantly from steel work. CRK Welding is fully equipped for aluminum fabrication using GTAW (TIG) and GMAW (MIG) processes with proper shielding gas, filler metals, and joint preparation. We fabricate aluminum frames, enclosures, mounting brackets, and structural components for applications where weight reduction, corrosion resistance, or aesthetic appearance are priorities. Our aluminum work includes both 6061 and 5052 series alloys." },
            { icon: Atom, title: "AEROSPACE & SPECIALTY COMPONENTS", text: "Our AWS D17.1 aerospace welding certification represents the pinnacle of welding qualification. While aerospace projects are evaluated on a case-by-case basis, this certification demonstrates our capability to produce welds that meet the most exacting standards in the industry. We apply this same level of precision to all specialty fabrication projects, including motorsports components (NHRA chassis certified), precision machinery parts, and any application where weld quality is absolutely critical. Contact us to discuss your specific requirements." },
            { icon: Wrench, title: "MARINE & INDUSTRIAL REPAIR", text: "CRK Welding provides aluminum boat repair, mining equipment repair, hard facing, and heavy-duty industrial fabrication. Whether you need structural repairs on an aluminum hull, wear-resistant hard facing on mining components, or custom fabrication for industrial machinery, we bring the same certified precision and code-quality welding to every project. Our experience with both steel and aluminum ensures we select the right process, filler metal, and technique for each application — delivering repairs and fabrication that hold up under the toughest conditions." },
          ].map((item) => (
            <AnimatedSection key={item.title}>
              <div className="bg-card p-8 rounded-sm border border-border hover:border-primary/30 transition-colors h-full">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-headline text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-roboto leading-relaxed">{item.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            
            <h2 className="font-headline text-foreground mt-2 mb-6">FROM CONCEPT TO COMPLETION</h2>
            <p className="text-muted-foreground font-roboto leading-relaxed mb-6">
              Every custom fabrication project at CRK Welding follows a consultative process. We start by 
              understanding what you need the finished product to do — its function, load requirements, 
              environmental exposure, and aesthetic expectations. From there, we recommend materials, joint 
              designs, and finishing options that optimize performance and value.
            </p>
            <p className="text-muted-foreground font-roboto leading-relaxed mb-6">
              For projects with existing drawings or CAD files, we review specifications in detail and provide 
              feedback on fabricability and any potential improvements. For projects starting from scratch, we 
              work with you to develop clear specifications before cutting the first piece of material.
            </p>
            <p className="text-muted-foreground font-roboto leading-relaxed mb-8">
              Our commitment to quality means every custom piece receives the same attention to detail as our 
              code-compliant structural and pipeline work. Proper joint preparation, correct welding parameters, 
              and thorough post-weld inspection are standard — not optional. When your custom fabrication project 
              leaves our hands, it's built to perform and built to last.
            </p>
            <a href="tel:4173071017" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-ui text-sm hover:bg-crk-red-dark transition-colors min-h-[44px]">
              <Phone className="w-4 h-4" /> START YOUR CUSTOM PROJECT
            </a>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <img src={crk26new} alt="Custom steel fabrication from concept to completion — precision welding and metalwork" width={800} height={600} className="w-full rounded-sm shadow-lg" loading="lazy" />
          </AnimatedSection>
        </div>
      </div>
    </section>
  </>
  );
};

export default CustomFabrication;
