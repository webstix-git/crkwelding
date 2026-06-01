import { motion } from "framer-motion";
import Link from "next/link";
import { Phone } from "lucide-react";
import heroImg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[800px] flex items-center overflow-hidden bg-crk-onyx">
      {/* Background image visible on the right */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="CRK Welding mobile welding and fabrication services — structural steel welding on a commercial jobsite in southwest Missouri"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          style={{ objectPosition: '65% center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-crk-onyx via-[hsl(0deg_0%_10%/70%)] to-crk-onyx/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="w-10 h-0.5 bg-primary" />
            <span className="font-ui text-[16px] tracking-widest text-muted">AWS CERTIFIED • 18 YEARS EXPERIENCE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-headline text-[2.8rem] sm:text-[4rem] md:text-[5rem] leading-[0.95] text-crk-white mb-6 text-shadow-heavy"
          >
            Mobile Welding and<br />
            <span className="text-primary">Fabrication</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-crk-steel-light text-lg md:text-xl mb-8 font-roboto leading-relaxed max-w-xl"
          >
            Professional welding and fabrication services for commercial, industrial, 
            and agricultural projects. On-site mobile welding within 100 miles of Fair Play, Missouri.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-crk-white text-crk-white px-8 py-4 rounded-sm font-ui text-base hover:bg-crk-white hover:text-crk-onyx transition-colors min-h-[44px]"
            >
              REQUEST A QUOTE
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
