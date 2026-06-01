"use client";

import Link from "next/link";
import { Phone, ArrowRight, FileCheck, Gauge, Droplets, Wrench, Shield, CheckCircle, Settings, AlertTriangle } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import crk6 from "@/assets/crk_6.jpg";
import usePageSeo from "@/hooks/use-seo";
import { useServiceSchema, useBreadcrumbSchema } from "@/hooks/use-structured-data";
import pipeImg from "@/assets/pipe.jpg";
import crk13 from "@/assets/crk_13.jpg";

const PipeWelding = () => {
  usePageSeo({
    title: "Pipe Welding | CRK Welding",
    description: "API 1104 certified pipe welding for tie-ins, new construction, and repairs. Mobile pipeline welding services across a 100-mile radius of Fair Play, MO.",
  });
  useServiceSchema({ name: "Pipe Welding", description: "API 1104 certified pipe welding for tie-ins, new construction, and pipeline repairs in southwest Missouri.", url: "/services/pipe-welding" });
  useBreadcrumbSchema([{ name: "Services", url: "/services" }, { name: "Pipe Welding" }]);
  return (
  <>
    <section className="bg-crk-onyx relative min-h-[350px] flex items-end">
      <div className="absolute inset-0">
        <img src={crk6} alt="Pipe welding — API 1104 certified pipeline welding by CRK Welding in Missouri" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-crk-onyx via-crk-onyx/90 to-crk-onyx/20" />
      </div>
      <div className="container mx-auto px-4 relative z-10 pt-40 pb-12">
        <AnimatedSection>
          <h1 className="font-headline text-5xl md:text-6xl text-crk-white">PIPE WELDING</h1>
        </AnimatedSection>
      </div>
    </section>

    <div className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <Breadcrumbs items={[{ label: "Services", path: "/services" }, { label: "Pipe Welding" }]} />
      </div>
    </div>

    {/* Main Content */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection direction="left">
            <img src={pipeImg} alt="API 1104 compliant pipe welding — industrial pipeline tie-in and new construction" width={800} height={600} className="w-full rounded-sm shadow-lg" loading="lazy" />
          </AnimatedSection>
          <AnimatedSection direction="right">
            <h2 className="font-headline text-foreground mb-6">PIPELINE INTEGRITY YOU CAN TRUST</h2>
            <p className="text-muted-foreground font-roboto leading-relaxed mb-6">
              Pipe welding demands the highest level of precision, and there's no room for error when it comes to 
              pressurized systems, fuel lines, and critical infrastructure. CRK Welding holds API 1104 certification 
              — the industry standard for pipeline welding — ensuring every joint we produce meets the rigorous 
              requirements of the American Petroleum Institute.
            </p>
            <p className="text-muted-foreground font-roboto leading-relaxed mb-6">
              Our pipe welding experience spans oil and gas transmission lines, natural gas distribution systems, 
              water and wastewater piping, industrial process piping, and agricultural irrigation systems. Whether 
              you need a new construction tie-in, a repair on an aging line, or a complete pipeline installation, 
              we bring the certification, equipment, and field experience to deliver welds that pass the most 
              stringent inspections.
            </p>
            <p className="text-muted-foreground font-roboto leading-relaxed mb-6">
              Every pipe weld we produce is executed according to qualified welding procedure specifications (WPS) 
              and backed by our welder performance qualifications (WPQ). We maintain documentation of all certifications 
              and can provide verification to inspectors, engineers, and project managers upon request.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: FileCheck, text: "API 1104 Compliant" },
                { icon: Wrench, text: "Tie-Ins & Repairs" },
                { icon: Droplets, text: "New Construction" },
                { icon: Gauge, text: "Pressure Testing" },
              ].map(item => (
                <div key={item.text} className="flex items-center gap-2 font-roboto text-foreground">
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  {item.text}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:4173071017" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-ui text-sm hover:bg-crk-red-dark transition-colors min-h-[44px]">
                <Phone className="w-4 h-4" /> CALL FOR SPECS
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-foreground text-foreground px-6 py-3 rounded-sm font-ui text-sm hover:bg-foreground hover:text-background transition-colors min-h-[44px]">
                REQUEST ESTIMATE <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Detailed Capabilities */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-14">
          
          <h2 className="font-headline text-foreground mt-2">COMPREHENSIVE PIPELINE SOLUTIONS</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: Settings, title: "NEW CONSTRUCTION TIE-INS", text: "New pipeline construction requires precision tie-in welding that seamlessly connects new sections to existing infrastructure. Our API 1104 qualified procedures cover all common pipe diameters and wall thicknesses, with both uphill and downhill progression techniques. We coordinate with pipeline contractors to minimize system downtime during tie-in operations, performing hot taps and stopple procedures when required to maintain flow during construction." },
            { icon: AlertTriangle, title: "LINE REPAIRS & DAMAGE ASSESSMENT", text: "Damaged or corroded pipeline sections require expert assessment and precision repair to restore full operational integrity. We evaluate damage extent, determine whether a full cut-out and replacement or a sleeve repair is appropriate, and execute the repair according to API 1104 standards. Our field experience includes repairing lines damaged by excavation strikes, corrosion-related failures, and stress-related cracking. Every repair is documented and available for regulatory inspection." },
            { icon: Shield, title: "MATERIAL EXPERTISE", text: "Pipe welding involves a wide range of materials, and each requires specific procedures, preheat temperatures, and filler metals. CRK Welding is qualified on carbon steel (the most common pipeline material), low-alloy steels used in high-pressure applications, and stainless steel for corrosive service environments. We select the appropriate welding process — SMAW (stick), GTAW (TIG), or a combination — based on the material, joint configuration, and project specifications." },
            { icon: CheckCircle, title: "QUALITY ASSURANCE & DOCUMENTATION", text: "Pipeline welding is one of the most heavily inspected trades in the welding industry, and we welcome the scrutiny. Our quality assurance program includes pre-weld joint preparation inspection, in-process parameter monitoring, post-weld visual inspection per API 1104 acceptance criteria, and coordination with third-party NDE (non-destructive examination) providers for radiographic testing when required. Complete weld logs and documentation are maintained for every joint." },
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

    {/* Bottom CTA */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            
            <h2 className="font-headline text-foreground mt-2 mb-6">BUILT IN THE OIL FIELDS</h2>
            <p className="text-muted-foreground font-roboto leading-relaxed mb-6">
              CRK Welding's pipe welding capabilities were forged in some of the most demanding environments 
              in the industry. From the Permian Basin in Texas to the Bakken Formation in North Dakota, our 
              founder Cody spent over a decade welding pipeline in conditions that tested both skill and 
              resolve — extreme temperatures, tight schedules, and zero tolerance for defects.
            </p>
            <p className="text-muted-foreground font-roboto leading-relaxed mb-6">
              That oil field experience translates directly into the quality and efficiency we bring to every 
              pipe welding project in Missouri. Whether it's a small-diameter agricultural water line or a 
              high-pressure industrial system, we approach every joint with the same discipline and precision 
              that the pipeline industry demands.
            </p>
            <p className="text-muted-foreground font-roboto leading-relaxed mb-8">
              Our commitment to continued education and certification means we stay current with evolving 
              industry standards and best practices. When you hire CRK Welding for pipe work, you're getting 
              a welder whose skills have been tested, certified, and proven in the field — not just in a classroom.
            </p>
            <a href="tel:4173071017" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-ui text-sm hover:bg-crk-red-dark transition-colors min-h-[44px]">
              <Phone className="w-4 h-4" /> DISCUSS YOUR PIPELINE PROJECT
            </a>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <img src={crk13} alt="Precision pipe fitting and welding — industrial pipe assembly with certified weld procedures" width={800} height={600} className="w-full rounded-sm shadow-lg" loading="lazy" />
          </AnimatedSection>
        </div>
      </div>
    </section>
  </>
  );
};

export default PipeWelding;
