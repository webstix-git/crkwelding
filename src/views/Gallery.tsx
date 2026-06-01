"use client";

import { useState } from "react";
import { X } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import usePageSeo from "@/hooks/use-seo";
import { useBreadcrumbSchema } from "@/hooks/use-structured-data";
import crk1 from "@/assets/crk_1.jpg";
import crk4 from "@/assets/crk_4.jpg";
import crk6 from "@/assets/crk_6.jpg";
import crk14 from "@/assets/crk_14.jpg";
import crk26 from "@/assets/crk_26.jpg";
import crk29 from "@/assets/crk_29.jpg";
import crk34 from "@/assets/crk_34.jpg";
import crk35 from "@/assets/crk_35.jpg";
import crk39 from "@/assets/crk_39.jpg";
import crk33 from "@/assets/crk_33.jpg";
import crk from "@/assets/crk.jpg";
import img1E0F from "@/assets/1E0F322C.jpg";
import img2BD from "@/assets/2BD148EF.jpg";
import crk34new from "@/assets/crk_34_new.jpg";
import crk36 from "@/assets/crk_36.jpg";
import crk17 from "@/assets/crk_17.jpg";
import crk25 from "@/assets/crk_25.jpg";
import crk5 from "@/assets/crk_5.jpg";
import crk8 from "@/assets/crk_8.jpg";
import crk13_2 from "@/assets/crk_13_2.jpg";
import crk15 from "@/assets/crk_15.jpg";
import crk16 from "@/assets/crk_16.jpg";
import crk28_2 from "@/assets/crk_28_2.jpg";
import crk30 from "@/assets/crk_30.jpg";
import crk31 from "@/assets/crk_31.jpg";
import crk2 from "@/assets/crk_2.jpg";
import crk5_2 from "@/assets/crk_5_2.jpg";
import crk9 from "@/assets/crk_9.jpg";
import crk7 from "@/assets/crk_7.jpg";
import crk11 from "@/assets/crk_11.jpg";
import crk20 from "@/assets/crk_20.jpg";
import crk27 from "@/assets/crk_27.jpg";
import crk39_2 from "@/assets/crk_39_2.jpg";

const images = [
  { src: crk1, caption: "Structural steel welding — precision bead work on heavy-gauge material" },
  { src: crk4, caption: "Heavy equipment repair — on-site mobile welding for construction machinery" },
  { src: crk6, caption: "Pipe welding — API 1104 compliant tie-in for industrial infrastructure" },
  { src: crk14, caption: "Commercial steel building frame — D1.1 code-compliant fabrication" },
  { src: crk26, caption: "Custom fabrication — specialized metalwork for agricultural applications" },
  { src: crk29, caption: "Structural frame installation — on-site assembly and welding" },
  { src: crk34, caption: "Pipeline repair — restoring integrity to aging infrastructure" },
  { src: crk35, caption: "Field welding — mobile service solving problems where they happen" },
  { src: crk39, caption: "Trench box modification — on-site problem solving for construction" },
  { src: crk33, caption: "Heavy equipment dump truck repair — on-site mobile welding" },
  { src: crk, caption: "Custom steel storage rack — heavy-duty fabrication" },
  { src: img1E0F, caption: "Commercial tilt-wall construction site — structural steel framework" },
  { src: img2BD, caption: "Tilt-wall building construction — structural welding in the field" },
  { src: crk34new, caption: "Commercial interior steel mezzanine — structural fabrication and installation" },
  { src: crk36, caption: "Mining haul truck bed repair — heavy equipment welding" },
  { src: crk17, caption: "Lincoln Electric welding shop — aluminum fabrication table setup" },
  { src: crk25, caption: "Custom shipping container modification — enclosed welding workspace" },
  { src: crk5, caption: "Mining haul truck bed repair — nighttime on-site welding" },
  { src: crk8, caption: "Precision cut steel plates — aerospace component fabrication" },
  { src: crk13_2, caption: "Pipe fitting with precision weld — industrial pipe assembly" },
  { src: crk15, caption: "Steel mezzanine platform — diamond plate deck installation" },
  { src: crk16, caption: "Shipping container conversion — industrial fabrication project" },
  { src: crk28_2, caption: "Heavy equipment rigging — crane-assisted machinery repair" },
  { src: crk30, caption: "Equipment loading into shipping container — heavy lift operation" },
  { src: crk31, caption: "Container interior shelving — custom steel storage fabrication" },
  { src: crk2, caption: "Heavy equipment panel repair — precision plate welding" },
  { src: crk5_2, caption: "Mining haul truck bed repair — nighttime field welding" },
  { src: crk9, caption: "Shop welding — large-diameter pipe fabrication" },
  { src: crk7, caption: "Custom steel frame assembly — precision shop fabrication" },
  { src: crk11, caption: "Heavy equipment structural patch — reinforced plate welding" },
  { src: crk20, caption: "Custom ornamental metalwork — circular frame fabrication" },
  { src: crk27, caption: "Custom steel stand — heavy-duty shop fabrication" },
  { src: crk39_2, caption: "Trailer jack and toolbox installation — field welding" },
];

const Gallery = () => {
  usePageSeo({
    title: "Project Gallery | CRK Welding",
    description: "See real examples of CRK Welding's work — structural builds, pipe welds, equipment repairs, and custom fabrication projects across southwest Missouri.",
  });
  useBreadcrumbSchema([{ name: "Gallery" }]);
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section className="bg-crk-onyx relative min-h-[350px] flex items-end">
        <div className="absolute inset-0">
          <img src={crk1} alt="CRK Welding project gallery — precision structural steel welding" width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-crk-onyx via-crk-onyx/90 to-crk-onyx/20" />
        </div>
        <div className="container mx-auto px-4 relative z-10 pt-40 pb-12">
          <AnimatedSection>
            <h1 className="font-headline text-5xl md:text-6xl text-crk-white">PROJECT GALLERY</h1>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <Breadcrumbs items={[{ label: "Gallery" }]} />
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <button
                  onClick={() => setLightbox(i)}
                  className="block w-full group relative overflow-hidden rounded-sm border-2 border-crk-rule hover:border-primary/30 transition-colors break-inside-avoid"
                >
                  <img src={img.src} alt={img.caption} width={600} height={400} className="w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-crk-onyx/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-crk-white text-sm font-roboto text-left">{img.caption}</p>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-crk-onyx/95 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-crk-white hover:text-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center" onClick={() => setLightbox(null)}>
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <img src={images[lightbox].src} alt={images[lightbox].caption} className="w-full max-h-[80vh] object-contain rounded-sm" />
            <p className="text-crk-white text-center mt-4 font-roboto">{images[lightbox].caption}</p>
          </div>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 text-crk-white hover:text-primary text-4xl min-w-[44px] min-h-[44px] flex items-center justify-center" onClick={e => { e.stopPropagation(); setLightbox(lightbox > 0 ? lightbox - 1 : images.length - 1); }}>‹</button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-crk-white hover:text-primary text-4xl min-w-[44px] min-h-[44px] flex items-center justify-center" onClick={e => { e.stopPropagation(); setLightbox(lightbox < images.length - 1 ? lightbox + 1 : 0); }}>›</button>
        </div>
      )}
    </>
  );
};

export default Gallery;
