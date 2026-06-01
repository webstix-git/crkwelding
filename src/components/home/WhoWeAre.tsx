import Link from "next/link";
import { ArrowRight, Award, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import crk35 from "@/assets/crk_35.jpg";

const WhoWeAre = () => {
  return (
    <section className="py-24 bg-crk-onyx relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 35px, hsl(var(--crk-white) / 0.03) 35px, hsl(var(--crk-white) / 0.03) 36px)"
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <AnimatedSection direction="left">
            <div className="relative">
              <img
                src={crk35}
                alt="CRK Welding owner Cody performing mobile field welding on heavy equipment in Missouri"
                className="w-full rounded-sm shadow-2xl"
                width={800}
                height={600}
                loading="lazy"
              />
              {/* Experience badge overlay */}
              <div className="absolute -bottom-6 -right-4 md:-right-6 bg-primary text-primary-foreground p-6 rounded-sm shadow-xl">
                <span className="font-headline text-4xl block leading-none">18+</span>
                <span className="font-ui text-xs tracking-widest">YEARS EXP.</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Content side */}
          <AnimatedSection direction="right">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-0.5 bg-primary" />
              <span className="font-ui tracking-widest text-base text-crk-rule">WHO WE ARE</span>
            </div>

            <h2 className="font-headline text-4xl md:text-5xl text-crk-white mb-6">
              BUILT ON HARD WORK<br />
              <span className="text-primary">& DEDICATION</span>
            </h2>

            <p className="text-crk-steel-light font-roboto leading-relaxed mb-6">
              CRK Welding was founded by Cody, an AWS-certified welder with 18 years of 
              hands-on experience spanning oil fields, mining operations, aviation, and motorsports. 
              After 14 years on the road — from Wyoming ranches to Texas refineries and North Dakota 
              pipelines — Cody settled in Fair Play, Missouri in 2022 to build a business rooted in 
              family values and old-fashioned hard work.
            </p>

            <p className="text-crk-steel-light font-roboto leading-relaxed mb-8">
              Today, CRK Welding serves commercial, industrial, and agricultural clients within a 
              100-mile radius, bringing the same precision and dedication earned at 
              Lincoln Electric Welding School — directly to your jobsite.
            </p>

            {/* Value props */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {[
                { icon: Award, label: "AWS CERTIFIED", sub: "Lincoln Electric trained" },
                { icon: Clock, label: "24/7 ON-CALL", sub: "After-Hours Support" },
                { icon: MapPin, label: "100-MILE RADIUS", sub: "Mobile service" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="font-ui text-crk-white block text-base">{item.label}</span>
                    <span className="text-crk-steel font-roboto text-sm">{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-ui text-base hover:bg-crk-red-dark transition-colors btn-spark min-h-[44px]"
            >
              LEARN OUR STORY <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
