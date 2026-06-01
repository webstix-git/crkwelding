"use client";

import AnimatedSection from "@/components/shared/AnimatedSection";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import Link from "next/link";
import { Award, MapPin, Heart, Wrench } from "lucide-react";
import aboutImg from "@/assets/about.jpg";
import usePageSeo from "@/hooks/use-seo";
import { useBreadcrumbSchema } from "@/hooks/use-structured-data";
import heroImg from "@/assets/hero-bg.jpg";

const milestones = [
  { year: "2006", text: "Started learning to weld on uncle's ranch in Wyoming" },
  { year: "2008", text: "Pursued professional welding work across Texas oil fields" },
  { year: "2010", text: "Expanded into pipeline and structural welding across multiple states" },
  { year: "2014", text: "Completed Lincoln Electric Welding School — AWS certified" },
  { year: "2016", text: "Heavy equipment and aerospace welding specialization" },
  { year: "2020", text: "Work across O&G, mining, aviation, and motorsports industries" },
  { year: "2022", text: "Settled in Fair Play, Missouri — CRK Welding is born" },
  { year: "2024", text: "Serving a growing client base within 100-mile radius" },
];

const About = () => {
  usePageSeo({
    title: "About Us | CRK Welding",
    description: "Meet Cody, the owner of CRK Welding. With AWS certifications and years of hands-on experience, he brings reliable, quality welding to southwest Missouri.",
  });
  useBreadcrumbSchema([{ name: "About" }]);
  return (
    <>
      {/* Banner */}
      <section className="bg-crk-onyx relative min-h-[350px] flex items-end">
        <div className="absolute inset-0">
          <img src={heroImg} alt="CRK Welding team performing structural steel welding on a commercial project" width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-crk-onyx via-crk-onyx/90 to-crk-onyx/20" />
        </div>
        <div className="container mx-auto px-4 relative z-10 pt-40 pb-12">
          <AnimatedSection>
            <h1 className="font-headline text-5xl md:text-6xl text-crk-white">ABOUT CRK WELDING</h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <Breadcrumbs items={[{ label: "About" }]} />
        </div>
      </div>

      {/* Owner Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative group">
                <img
                  src={aboutImg}
                  alt="CRK Welding owner Cody welding on-site — 18 years of professional welding experience"
                  width={800}
                  height={600}
                  className="w-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 border-2 border-primary/20 rounded-sm translate-x-3 translate-y-3 -z-10" />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <span className="font-ui text-base text-primary tracking-widest">THE BEGINNING</span>
              <h2 className="font-headline text-4xl text-foreground mt-2 mb-6">FROM RANCH TO ROAD TO HOME</h2>
              <div className="space-y-4 text-muted-foreground font-roboto leading-relaxed">
                <p>
                  "I started out learning to weld on my uncle's ranch in Wyoming. From there, I pursued work in Texas, 
                  traveling the country for 14 years — from oil fields in North Dakota to mining operations and aviation hangars."
                </p>
                <p>
                  "In 2022, we settled in Missouri to start our family. CRK Welding was born to provide high-quality 
                  service to customers and be home with family every day. Today we offer everything from{" "}
                  <Link href="/services/structural-welding" className="text-primary hover:underline">structural welding</Link> to{" "}
                  <Link href="/services/custom-fabrication" className="text-primary hover:underline">custom fabrication</Link>."
                </p>
                <p>
                  "Dedication to quality is the highest priority. We listen to client needs and offer recommendations. 
                  Our ability to find solutions to problems in the field is what sets us apart. Check out our{" "}
                  <Link href="/gallery" className="text-primary hover:underline">project gallery</Link> to see our work firsthand."
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-crk-bone">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-headline text-4xl text-foreground">OUR VALUES</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Wrench, title: "HARD WORK", desc: "Old-fashioned dedication to every weld, every project." },
              { icon: Award, title: "QUALITY FIRST", desc: "Dedication to quality is always the highest priority." },
              { icon: Heart, title: "FAMILY & LOCAL", desc: "Built a business to serve our community and be home with family." },
              { icon: MapPin, title: "SOLUTION-ORIENTED", desc: "Finding solutions to problems in the field is what sets us apart." },
            ].map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="bg-card p-6 rounded-sm border border-border text-center h-full flex flex-col items-center justify-start">
                  <v.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-headline text-xl text-card-foreground mb-2">{v.title}</h3>
                  <p className="text-base text-muted-foreground font-roboto">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-16 bg-crk-onyx border-b border-border/30">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-headline text-3xl text-crk-white mb-4">READY TO WORK TOGETHER?</h2>
            <p className="text-crk-steel mb-6 font-roboto">Let's discuss your next project.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-ui text-base hover:bg-crk-red-dark transition-colors btn-spark min-h-[44px]"
            >
              CONTACT US
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default About;
