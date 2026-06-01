import AnimatedSection from "@/components/shared/AnimatedSection";
import { Shield, Award, FileCheck, Flame, Atom, GraduationCap } from "lucide-react";

const certs = [
  { icon: Shield, label: "AWS D1.1", desc: "Structural Steel" },
  { icon: Shield, label: "AWS D1.2", desc: "Aluminum" },
  { icon: FileCheck, label: "API 1104", desc: "Pipeline" },
  { icon: Flame, label: "NHRA", desc: "Chassis Certified" },
  { icon: Atom, label: "D17.1", desc: "Aerospace" },
  { icon: GraduationCap, label: "Lincoln Electric", desc: "" },
];

const CertBadges = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-12 bg-primary/40" />
            <h2 className="font-headline text-2xl md:text-3xl text-foreground tracking-wider">
              CERTIFICATIONS & CREDENTIALS
            </h2>
            <div className="h-px w-12 bg-primary/40" />
          </div>
        </AnimatedSection>
        <div className="flex flex-wrap justify-center gap-8 md:gap-[80px]">
          {certs.map((cert, i) => (
            <AnimatedSection key={cert.label} delay={i * 0.1}>
              <div className="flex flex-col items-center gap-3 text-center group cursor-default">
                <div className="relative">
                  <cert.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <span className="font-ui text-foreground text-xl">{cert.label}</span>
                <span className="text-muted-foreground font-roboto text-base">{cert.desc}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertBadges;
