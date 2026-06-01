import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Link from "next/link";
import crk29 from "@/assets/crk_29.jpg";
import crk34 from "@/assets/crk_34.jpg";
import img51ECB from "@/assets/51ECB608.jpg";
import crk39 from "@/assets/crk_39.jpg";

const projects = [
  { img: crk29, caption: "Structural steel frame installation for commercial building project" },
  { img: crk34, caption: "On-site heavy equipment repair — minimizing project downtime" },
  { img: img51ECB, caption: "Tilt-wall commercial building — steel truss and brace installation" },
  { img: crk39, caption: "Precision fabrication — trench box modification on-site" },
];

const GalleryPreview = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section className="py-20 bg-crk-bone">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <span className="font-ui text-primary tracking-widest text-base">Our Work</span>
            <h2 className="font-headline text-4xl md:text-5xl text-foreground mt-2">RECENT PROJECTS</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <button
                  onClick={() => setLightbox(i)}
                  className="block w-full group relative overflow-hidden rounded-sm border-2 border-crk-rule text-left"
                >
                  <img
                    src={p.img}
                    alt={p.caption}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    width={600}
                    height={400}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-crk-onyx/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-crk-white text-sm font-roboto">{p.caption}</p>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 font-ui text-primary hover:gap-3 transition-all text-lg"
            >
              VIEW FULL GALLERY <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-crk-onyx/95 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-crk-white hover:text-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center" onClick={() => setLightbox(null)}>
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <img src={projects[lightbox].img} alt={projects[lightbox].caption} className="w-full max-h-[80vh] object-contain rounded-sm" />
            <p className="text-crk-white text-center mt-4 font-roboto">{projects[lightbox].caption}</p>
          </div>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 text-crk-white hover:text-primary text-4xl min-w-[44px] min-h-[44px] flex items-center justify-center" onClick={e => { e.stopPropagation(); setLightbox(lightbox > 0 ? lightbox - 1 : projects.length - 1); }}>‹</button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-crk-white hover:text-primary text-4xl min-w-[44px] min-h-[44px] flex items-center justify-center" onClick={e => { e.stopPropagation(); setLightbox(lightbox < projects.length - 1 ? lightbox + 1 : 0); }}>›</button>
        </div>
      )}
    </>
  );
};

export default GalleryPreview;
