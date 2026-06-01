"use client";

import Link from "next/link";
import { Phone, ArrowRight, Wrench, Truck, Settings, Shield, Clock, CheckCircle, Cog, AlertTriangle } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import crk4 from "@/assets/crk_4.jpg";
import usePageSeo from "@/hooks/use-seo";
import { useServiceSchema, useBreadcrumbSchema } from "@/hooks/use-structured-data";
import crk29 from "@/assets/crk_29.jpg";
import crk28 from "@/assets/crk_28.jpg";

const HeavyEquipment = () => {
  usePageSeo({
    title: "Heavy Equipment Repair | CRK Welding",
    description: "Mobile on-site repair for heavy equipment, construction vehicles, and trucks in steel and aluminum. 24/7 emergency service to minimize your downtime.",
  });
  useServiceSchema({ name: "Heavy Equipment Repair", description: "Mobile on-site welding repair for heavy equipment, construction vehicles, and trucks. 24/7 emergency service in southwest Missouri.", url: "/services/heavy-equipment" });
  useBreadcrumbSchema([{ name: "Services", url: "/services" }, { name: "Heavy Equipment" }]);
  return (
  <>
    <section className="bg-crk-onyx relative min-h-[350px] flex items-end">
      <div className="absolute inset-0">
        <img src={crk4} alt="Heavy equipment welding repair — CRK Welding mobile on-site service for construction machinery" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-crk-onyx via-crk-onyx/90 to-crk-onyx/20" />
      </div>
      <div className="container mx-auto px-4 relative z-10 pt-40 pb-12">
        <AnimatedSection>
          <h1 className="font-headline text-5xl md:text-6xl text-crk-white">HEAVY EQUIPMENT WELDING</h1>
        </AnimatedSection>
      </div>
    </section>

    <div className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <Breadcrumbs items={[{ label: "Services", path: "/services" }, { label: "Heavy Equipment" }]} />
      </div>
    </div>

    {/* Main Content */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection direction="left">
            <h2 className="font-headline text-foreground mb-6">MINIMIZING YOUR DOWNTIME</h2>
            <p className="text-muted-foreground font-roboto leading-relaxed mb-6">
              When heavy equipment breaks down on a jobsite, every hour of downtime translates directly into lost 
              revenue. Whether it's a cracked excavator boom, a damaged truck frame, or a broken trailer hitch, 
              CRK Welding provides rapid on-site mobile welding response that gets your equipment back in operation 
              as quickly as possible.
            </p>
            <p className="text-muted-foreground font-roboto leading-relaxed mb-6">
              With 18 years of experience repairing heavy machinery across oil fields, mining operations, and 
              construction sites, we've seen virtually every type of equipment failure. Our mobile welding rig 
              is fully equipped to handle both steel and aluminum repairs, from simple crack repairs to complex 
              structural rebuilds. We understand the urgency — that's why we offer 24/7 emergency service within 
              a 100-mile radius of Fair Play, Missouri.
            </p>
            <p className="text-muted-foreground font-roboto leading-relaxed mb-6">
              Our approach goes beyond just fixing the immediate problem. We assess the root cause of the failure, 
              recommend preventive measures, and when possible, reinforce vulnerable areas to prevent future 
              breakdowns. This solution-oriented mindset has earned the trust of construction firms, trucking 
              companies, and agricultural operations throughout the region.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Truck, text: "Truck & Trailer Repair" },
                { icon: Wrench, text: "Machinery Breakdown" },
                { icon: Settings, text: "Construction Vehicles" },
                { icon: Shield, text: "Steel & Aluminum" },
              ].map(item => (
                <div key={item.text} className="flex items-center gap-2 font-roboto text-foreground">
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  {item.text}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:4173071017" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-ui text-sm hover:bg-crk-red-dark transition-colors min-h-[44px]">
                <Phone className="w-4 h-4" /> CALL FOR REPAIR
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-foreground text-foreground px-6 py-3 rounded-sm font-ui text-sm hover:bg-foreground hover:text-background transition-colors min-h-[44px]">
                REQUEST ESTIMATE <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <img src={crk29} alt="On-site heavy equipment structural welding repair at a construction jobsite in Missouri" width={800} height={600} className="w-full rounded-sm shadow-lg" loading="lazy" />
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Equipment Types */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-14">
          
          <h2 className="font-headline text-foreground mt-2">COMPREHENSIVE REPAIR CAPABILITIES</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: Truck, title: "TRUCK & TRAILER REPAIR", text: "Over-the-road truck frames, trailer hitches, fifth wheel plates, cross members, and structural components — we repair it all in both steel and aluminum. Our mobile rig comes to your location, whether you're at a truck stop, a loading dock, or broken down on the roadside. We understand OTR drivers can't afford extended downtime, so we prioritize fast, durable repairs that meet DOT standards and get you back on the road." },
            { icon: Cog, title: "CONSTRUCTION MACHINERY", text: "Excavator booms, loader buckets, dozer blades, crane components, and hydraulic cylinder mounts — construction equipment takes tremendous abuse, and failures are inevitable. Our experience in the oil fields and mining operations means we've repaired equipment under the most demanding conditions. We assess each repair for structural integrity, apply proper preheat procedures for high-strength steels, and ensure the repaired component can handle full working loads." },
            { icon: AlertTriangle, title: "EMERGENCY BREAKDOWN RESPONSE", text: "When a critical piece of equipment fails during a night shift or on a weekend, you need a welder who answers the phone. CRK Welding maintains 24/7 on-call availability for emergency repairs. We've responded to road closure emergencies where broken machinery couldn't be left in the road, nighttime construction site breakdowns, and urgent agricultural equipment failures during harvest season. Every minute counts — call us and we'll be there." },
            { icon: CheckCircle, title: "PREVENTIVE MAINTENANCE & REINFORCEMENT", text: "Don't wait for a breakdown to call us. We offer scheduled mobile welding services for equipment maintenance, including crack inspection and repair, wear plate replacement, bucket rebuild and hard-facing, and structural reinforcement of known weak points. Preventive maintenance welding extends equipment life, reduces unexpected downtime, and costs a fraction of emergency repairs. Ask about our maintenance scheduling for fleet operators." },
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

    {/* Mobile Service Section */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <img src={crk28} alt="CRK Welding mobile rig — crane-assisted heavy equipment repair and rigging on-site" width={800} height={600} className="w-full rounded-sm shadow-lg" loading="lazy" />
          </AnimatedSection>
          <AnimatedSection direction="right">
            
            <h2 className="font-headline text-foreground mt-2 mb-6">WE COME TO YOU</h2>
            <p className="text-muted-foreground font-roboto leading-relaxed mb-6">
              Our fully equipped mobile welding rig carries everything needed for on-site heavy equipment repairs: 
              Flux Core and TIG welding machines, Stick welding, capable of handling steel and aluminum, oxy-fuel cutting and gouging 
              equipment, a comprehensive inventory of consumables, and all necessary safety equipment for field work.
            </p>
            <p className="text-muted-foreground font-roboto leading-relaxed mb-6">
              We serve all locations within 100 air miles of Fair Play, MO, covering surrounding communities including Kansas City, Jefferson City, Rolla, Mountain View, and Fort Scott, KS. Emergency call-out locations may extend beyond this radius.
            </p>
            <p className="text-muted-foreground font-roboto leading-relaxed mb-8">
              Our mobile service eliminates the cost and logistics of transporting heavy equipment to a shop. 
              For many repairs, this savings alone makes on-site welding the most economical choice, not to 
              mention the drastically reduced downtime compared to shop-based repairs.
            </p>
            <a href="tel:4173071017" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-ui text-sm hover:bg-crk-red-dark transition-colors min-h-[44px]">
              <Phone className="w-4 h-4" /> SCHEDULE MOBILE SERVICE
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  </>
  );
};

export default HeavyEquipment;
