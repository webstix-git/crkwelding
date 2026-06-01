"use client";

import Link from "next/link";
import usePageSeo from "@/hooks/use-seo";

const sitemapLinks = [
  {
    heading: "Main Pages",
    links: [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Services", path: "/services" },
      { label: "Gallery", path: "/gallery" },
      { label: "FAQs", path: "/faq" },
      { label: "Contact", path: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Heavy Equipment Repair", path: "/services/heavy-equipment" },
      { label: "Pipe Welding", path: "/services/pipe-welding" },
      { label: "Structural Welding", path: "/services/structural-welding" },
      { label: "Custom Fabrication", path: "/services/custom-fabrication" },
    ],
  },
];

const Sitemap = () => {
  usePageSeo({
    title: "Sitemap | CRK Welding — All Pages",
    description:
      "Browse all pages on CRK Welding's website including services, gallery, FAQs, and contact information.",
  });

  return (
    <section className="pt-32 pb-20 bg-crk-charcoal">
      <div className="container mx-auto max-w-3xl py-0 px-[30px] mt-[50px]">
        <h1 className="font-headline text-4xl md:text-5xl mb-10 text-destructive-foreground my-[10px] mt-[50px]">
          SITEMAP
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {sitemapLinks.map((group) => (
            <div key={group.heading}>
              <h2 className="font-headline text-xl text-primary mb-4">
                {group.heading}
              </h2>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="font-roboto text-base text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sitemap;
