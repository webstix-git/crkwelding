"use client";

import Link from "next/link";
import { Phone, ArrowRight, Building, Shield, HardHat, Ruler, CheckCircle, Wrench, Factory, Hammer } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import crk14 from "@/assets/crk_14.jpg";
import usePageSeo from "@/hooks/use-seo";
import { useServiceSchema, useBreadcrumbSchema } from "@/hooks/use-structured-data";
import structureImg from "@/assets/structural-welding-new.jpg";
import img2BD from "@/assets/2BD148EF.jpg";

const StructuralWelding = () => {
  usePageSeo({
    title: "Structural Welding | CRK Welding",
    description: "AWS D1.1 and D1.2 certified structural welding for steel buildings, barns, and commercial frames. Expert on-site fabrication in southwest Missouri.",
  });
  useServiceSchema({ name: "Structural Welding", description: "AWS D1.1 and D1.2 certified structural welding for steel buildings, barns, and commercial frames in southwest Missouri.", url: "/services/structural-welding" });
  useBreadcrumbSchema([{ name: "Services", url: "/services" }, { name: "Structural Welding" }]);
  return (
  <>
    <section className="bg-crk-onyx relative min-h-[350px] flex items-end">
      <div className="absolute inset-0">
        <img src={crk14} alt="Structural steel welding — AWS D1.1 certified commercial building frame by CRK Welding" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-crk-onyx via-crk-onyx/90 to-crk-onyx/20" />
      </div>
      <div className="container mx-auto px-4 relative z-10 pt-40 pb-12">
        <AnimatedSection>
          <h1 className="font-headline text-5xl md:text-6xl text-crk-white">STRUCTURAL WELDING</h1>
        </AnimatedSection>
      </div>
    </section>

    <div className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <Breadcrumbs items={[{ label: "Services", path: "/services" }, { label: "Structural Welding" }]} />
      </div>
    </div>

    {/* Main Content */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection direction="left">
            <h2 className="font-headline text-foreground mb-6">CODE-COMPLIANT STEEL CONSTRUCTION</h2>
            <p className="text-muted-foreground font-roboto leading-relaxed mb-6">
              Structural welding is the backbone of modern construction, and at CRK Welding, we bring 18 years of 
              hands-on expertise to every steel joint, beam connection, and frame assembly. Our AWS D1.1 and D1.2 
              certifications mean that every weld we produce meets or exceeds the strict standards set by the 
              American Welding Society — the same standards required for bridges, commercial buildings, and 
              mission-critical infrastructure.
            </p>
            <p className="text-muted-foreground font-roboto leading-relaxed mb-6">
              Whether you’re building a new steel-frame commercial structure, prefabricated or tilt-wall structure, 
              erecting an agricultural barn, or reinforcing an existing framework, our team arrives equipped with 
              the knowledge, certifications, and mobile capabilities to complete your project on-site, on time, 
              and to the highest quality standards. We work directly from engineering drawings and architectural 
              specifications, ensuring every connection point is fabricated and installed with precision.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Building, text: "Steel Buildings" },
                { icon: Shield, text: "Code Compliant" },
                { icon: HardHat, text: "Barns & Frames" },
                { icon: Ruler, text: "Engineering Specs" },
              ].map(item => (
                <div key={item.text} className="flex items-center gap-2 font-roboto text-foreground">
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  {item.text}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:4173071017" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-ui text-sm hover:bg-crk-red-dark transition-colors min-h-[44px]">
                <Phone className="w-4 h-4" /> DISCUSS YOUR PROJECT
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-foreground text-foreground px-6 py-3 rounded-sm font-ui text-sm hover:bg-foreground hover:text-background transition-colors min-h-[44px]">
                REQUEST ESTIMATE <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <img src={structureImg} alt="AWS D1.1 code-compliant structural steel welding for a commercial building frame in Missouri" width={800} height={600} className="w-full rounded-sm shadow-lg" loading="lazy" />
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Detailed Services */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-14">
          
          <h2 className="font-headline text-foreground mt-2">WHAT WE BUILD & REPAIR</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: Factory, title: "COMMERCIAL STEEL BUILDINGS", text: "From warehouses and workshops to retail structures and agricultural storage facilities, we fabricate and erect complete steel building frames. Every connection is welded to D1.1 standards, ensuring structural integrity that meets local building codes and engineering specifications. We handle everything from column-to-beam connections to bracing and gusset plate installations." },
            { icon: Hammer, title: "AGRICULTURAL STRUCTURES", text: "Missouri's agricultural community relies on durable steel structures for barns, equipment sheds, hay storage, and livestock facilities. We specialize in building and repairing these structures with materials and techniques designed to withstand decades of heavy use and harsh weather conditions. Our mobile welding capability means we come to your farm — no need to transport materials." },
            { icon: Wrench, title: "STRUCTURAL REPAIRS & REINFORCEMENT", text: "Aging steel structures, storm-damaged frameworks, and overloaded beams all require expert repair and reinforcement. We assess damage, develop repair strategies that comply with AWS codes, and execute precision welds that restore full structural capacity. Our experience with diverse steel types — from mild carbon steel to high-strength alloys — ensures the right approach for every repair." },
            { icon: CheckCircle, title: "CUSTOM STEEL FRAMEWORKS", text: "Need a custom steel frame for a specialized application? We work from your blueprints or collaborate with your engineer to design and fabricate frameworks for unique structures including mezzanines, canopies, equipment platforms, and support structures. Every custom project receives the same code-compliant attention to detail as our standard structural work." },
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

    {/* Process section */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <img src={img2BD} alt="Tilt-wall commercial building construction — structural steel truss welding and brace installation" width={800} height={600} className="w-full rounded-sm shadow-lg" loading="lazy" />
          </AnimatedSection>
          <AnimatedSection direction="right">
            
            <h2 className="font-headline text-foreground mt-2 mb-6">FROM BLUEPRINT TO COMPLETION</h2>
            <p className="text-muted-foreground font-roboto leading-relaxed mb-6">
              Every structural welding project at CRK Welding follows a systematic process designed to ensure 
              quality, safety, and compliance at every stage. We begin with a thorough review of your engineering 
              drawings and specifications, followed by material selection, joint preparation, and welding procedure 
              qualification.
            </p>
            <p className="text-muted-foreground font-roboto leading-relaxed mb-6">
              Our welding procedures are pre-qualified under AWS D1.1 and D1.2, meaning every weld type — from 
              complete joint penetration (CJP) groove welds to fillet welds — is performed according to proven 
              procedures that have been tested and verified. We maintain detailed records of all welding activities, 
              providing full traceability and documentation for inspectors and engineers.
            </p>
            <p className="text-muted-foreground font-roboto leading-relaxed mb-8">
              Quality control is integrated into every step: pre-weld joint inspection, in-process monitoring 
              of welding parameters, and post-weld visual inspection are standard on all projects. When required, 
              we coordinate with third-party inspection agencies for non-destructive testing (NDT) including 
              ultrasonic testing (UT) and magnetic particle inspection (MPI).
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:4173071017" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-ui text-sm hover:bg-crk-red-dark transition-colors min-h-[44px]">
                <Phone className="w-4 h-4" /> GET A CONSULTATION
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-foreground text-foreground px-6 py-3 rounded-sm font-ui text-sm hover:bg-foreground hover:text-background transition-colors min-h-[44px]">
                REQUEST ESTIMATE <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  </>
  );
};

export default StructuralWelding;
