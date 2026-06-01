import { Award, Shield, MapPin } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

const stats = [
  { icon: Award, value: "18+", label: "YEARS EXPERIENCE", desc: "From Wyoming ranches to Missouri steel" },
  { icon: Shield, value: "AWS", label: "CERTIFIED", desc: "Lincoln Electric Welding School trained" },
  { icon: MapPin, value: "100", label: "MILE SERVICE RADIUS", desc: "Centered in Fair Play, Missouri" },
];

const WhyCRK = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-14">
          <span className="font-ui text-primary tracking-widest text-base">WHY CHOOSE US</span>
          <h2 className="font-headline text-4xl md:text-5xl text-foreground mt-2">BUILT ON HARD WORK</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.15}>
              <div className="text-center group">
                <div className="relative mx-auto mb-5 w-fit">
                  <stat.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="font-headline text-5xl text-primary mb-1">{stat.value}</div>
                <div className="font-ui text-foreground mb-2 text-xl">{stat.label}</div>
                <p className="text-muted-foreground font-roboto text-lg">{stat.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCRK;
