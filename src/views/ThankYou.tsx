"use client";

import Link from "next/link";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import usePageSeo from "@/hooks/use-seo";
import heroImg from "@/assets/hero-bg.jpg";

const ThankYou = () => {
  usePageSeo({
    title: "Message Received | CRK Welding",
    description: "Thanks for reaching out to CRK Welding. We received your message and will respond soon. Need immediate help? Call us at 417-307-1017.",
  });
  return (
    <>
      <section className="bg-crk-onyx relative min-h-[350px] flex items-end">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-crk-onyx via-crk-onyx/90 to-crk-onyx/20" />
        </div>
        <div className="container mx-auto px-4 relative z-10 pt-40 pb-12">
          <AnimatedSection>
            <h1 className="font-headline text-5xl md:text-6xl text-crk-white">MESSAGE RECEIVED</h1>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <Breadcrumbs items={[{ label: "Contact", path: "/contact" }, { label: "Thank You" }]} />
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <AnimatedSection>
            <div className="bg-card border border-border rounded-sm p-12">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h2 className="font-headline text-3xl text-card-foreground mb-4">THANK YOU FOR REACHING OUT</h2>
              <p className="text-muted-foreground font-roboto text-lg leading-relaxed mb-8">
                We've received your request and will get back to you as soon as possible. For immediate assistance, give us a call.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:4173071017" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-ui text-sm hover:bg-crk-red-dark transition-colors btn-spark min-h-[44px]">
                  <Phone className="w-4 h-4" />
                  CALL 417-307-1017
                </a>
                <Link href="/" className="inline-flex items-center gap-2 border-2 border-foreground text-foreground px-6 py-3 rounded-sm font-ui text-sm hover:bg-foreground hover:text-background transition-colors min-h-[44px]">
                  BACK TO HOME
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default ThankYou;
