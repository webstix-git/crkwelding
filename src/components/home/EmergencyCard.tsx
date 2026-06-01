import { Phone, Clock, Siren } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import emergencyBg from "@/assets/emergency-bg.jpg";

const EmergencyCard = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background image */}
      <img
        src={emergencyBg}
        alt="Industrial welding sparks background — CRK Welding 24/7 emergency on-call service"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-crk-onyx/85" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto bg-crk-slate/80 backdrop-blur-sm border-t-[3px] border-primary p-8 md:p-12 rounded-sm text-center">
            <h2 className="font-headline text-3xl md:text-4xl text-crk-white mb-4">
              DAYS DON'T END AT 5 PM
            </h2>
            <p className="text-crk-steel-light font-roboto text-lg mb-6 max-w-xl mx-auto leading-relaxed">
              We're on-call when you need us — night shifts, road closures, equipment failures. 
              When a broken machine can't stay in the road, CRK Welding answers the call.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-crk-steel">
                <Clock className="text-primary w-[24px] h-[24px]" />
                <span className="font-ui text-xl">Flexible Scheduling</span>
              </div>
              <div className="flex items-center gap-2 text-crk-steel">
                <Siren className="text-primary w-[24px] h-[24px]" />
                <span className="font-ui text-lg">After-Hours Support</span>
              </div>
            </div>
            <a
              href="tel:4173071017"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-ui text-base hover:bg-crk-red-dark transition-colors btn-spark min-h-[44px]"
            >
              <Phone className="w-5 h-5" />
              REQUEST SERVICE
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default EmergencyCard;
