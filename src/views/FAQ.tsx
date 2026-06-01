"use client";

import AnimatedSection from "@/components/shared/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { Phone } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import usePageSeo from "@/hooks/use-seo";
import heroImg from "@/assets/hero-bg.jpg";
import { useFAQSchema, useBreadcrumbSchema } from "@/hooks/use-structured-data";

const faqs = [
  { q: "What types of welding services does CRK Welding offer?", a: "We provide structural welding (AWS D1.1 & D1.2), pipe welding (API 1104), heavy equipment repair, custom fabrication, MIG, TIG, Stick, Fluxcore, cutting, and gouging. We work with carbon steel, aluminum, and specialty metals." },
  { q: "Do you offer emergency or after-hours service?", a: "Yes. We are on-call 24/7 for emergency situations including construction site breakdowns, night-time road closures, and critical equipment failures. Call 417-307-1017 anytime." },
  { q: "What is your service area?", a: "We serve a 100-mile radius from Fair Play, Missouri (65649). This covers much of southwest and central Missouri. For projects outside this area, contact us to discuss." },
  { q: "How do you determine pricing?", a: "Due to the constant changes in the steel industry and welding supply market, prices reflect the current market conditions. We provide detailed estimates via phone or email based on your specific project requirements." },
  { q: "What certifications does CRK Welding hold?", a: "Cody holds certifications from Lincoln Electric Welding and AWS, including AWS D1.1 (Structural Steel), AWS D1.2 (Aluminum), API 1104 (Pipeline), NHRA Chassis, and Aerospace D17.1." },
  { q: "Do you provide mobile welding services?", a: "Yes. Mobile on-site welding is one of our core services. We bring our equipment to your jobsite for cutting, welding, and gouging — minimizing your downtime and keeping projects on schedule." },
  { q: "How do I get an estimate?", a: "Call us at 417-307-1017 or fill out our contact form. We'll discuss your project requirements and provide a detailed estimate based on current material and labor costs." },
  { q: "Can you handle aerospace welding?", a: "Yes. Cody holds the Aerospace D17.1 certification. Aerospace welding projects are evaluated on a case-by-case basis due to their specialized nature. Contact us to discuss your specific requirements." },
];

const FAQ = () => {
  usePageSeo({
    title: "FAQ | CRK Welding",
    description: "Got questions about pricing, certifications, service area, or emergency availability? Find quick answers about working with CRK Welding in Missouri.",
  });
  useFAQSchema(faqs);
  useBreadcrumbSchema([{ name: "FAQS" }]);
  return (
    <>
      <section className="bg-crk-onyx relative min-h-[350px] flex items-end">
        <div className="absolute inset-0">
          <img src={heroImg} alt="CRK Welding frequently asked questions — welding certifications, pricing, and service area" width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-crk-onyx via-crk-onyx/90 to-crk-onyx/20" />
        </div>
        <div className="container mx-auto px-4 relative z-10 pt-40 pb-12">
          <AnimatedSection>
            <h1 className="font-headline text-5xl md:text-6xl text-crk-white">FREQUENTLY ASKED QUESTIONS</h1>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <Breadcrumbs items={[{ label: "FAQS" }]} />
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="multiple" defaultValue={faqs.map((_, i) => `faq-${i}`)} className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <AccordionItem value={`faq-${i}`} className="border border-border rounded-sm px-6 bg-card">
                  <AccordionTrigger className="font-ui text-card-foreground hover:no-underline hover:text-primary py-5 text-[24px] text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-roboto pb-5 text-[18px] leading-[1.4]">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </AnimatedSection>
            ))}
          </Accordion>

          <AnimatedSection className="text-center mt-14">
            <p className="text-muted-foreground font-roboto mb-4">Still have questions?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:4173071017" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-ui text-sm hover:bg-crk-red-dark transition-colors min-h-[44px]">
                <Phone className="w-4 h-4" /> CALL 417-307-1017
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-foreground text-foreground px-6 py-3 rounded-sm font-ui text-sm hover:bg-foreground hover:text-background transition-colors min-h-[44px]">
                CONTACT US
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default FAQ;
