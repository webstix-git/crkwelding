import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/crk-logo-new.png";
import chamberLogo from "@/assets/springfield-chamber-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-crk-onyx text-crk-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 lg:gap-x-6">
          {/* Col 1: Logo & Mission */}
          <div>
            <div className="flex items-end gap-4 mb-4">
              <img src={logo} alt="CRK Welding logo — professional welding services in southwest Missouri" width={320} height={160} className="h-[160px] w-auto" />
              <div className="flex flex-col">
                <p className="mb-2 font-ui normal-case tracking-normal text-gray-50 font-semibold text-left text-base">
                  Proud Member of the Springfield<br /> Area Chamber of Commerce
                </p>
                <div className="bg-crk-white p-2 rounded-sm inline-block self-start">
                  <img
                    src={chamberLogo}
                    alt="Proud member of the Springfield Area Chamber of Commerce"
                    width={160}
                    height={100}
                    className="h-[90px] w-auto"
                  />
                </div>
              </div>
            </div>
            <p className="leading-relaxed font-roboto text-base text-[#bfbfbf]">
              Professional welding and steel fabrication services built on 18 years
              of experience and old-fashioned hard work. AWS certified. Lincoln Electric trained.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <span className="font-ui text-base text-[#bfbfbf]">Follow Us On:</span>
              <a
                href="https://www.facebook.com/people/CRK-Welding/61557723335753/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-crk-steel hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-muted" />
              </a>
              <a
                href="https://www.instagram.com/crk.welding/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-crk-steel hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-muted" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:pl-[30px] px-0 lg:px-[50px]">
            <h4 className="font-headline text-xl mb-4 text-crk-white">QUICK LINKS</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Gallery", path: "/gallery" },
                { label: "FAQS", path: "/faq" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="transition-colors font-ui text-base text-[#bfbfbf]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3: Contact Info */}
          <div>
            <h4 className="font-headline text-xl mb-4 text-crk-white">CONTACT</h4>
            <div className="flex flex-col gap-3 text-sm font-roboto">
              <a href="tel:4173071017" className="flex items-center gap-2 transition-colors text-base text-[#bfbfbf]">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                417-307-1017
              </a>
              <a href="mailto:crkwelding@gmail.com" className="flex items-center gap-2 transition-colors text-base text-[#bfbfbf]">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                crkwelding@gmail.com
              </a>
              <div className="flex items-start gap-2 text-crk-steel text-base">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span className="text-[#bfbfbf]">PO Box 7<br />Fair Play, MO 65649</span>
              </div>
            </div>
          </div>

          {/* Col 4: Emergency CTA */}
          <div>
            <div className="bg-crk-slate border-t-[3px] border-primary p-6 rounded-sm">
              <h4 className="font-headline text-xl mb-2 text-crk-white">24/7 EMERGENCY SERVICE</h4>
              <p className="text-sm mb-4 font-roboto text-[#bfbfbf]">
                Days don't end at 5 PM. We're on-call for critical breakdowns, night shifts, and emergency road closures.
              </p>
              <a
                href="tel:4173071017"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-sm font-ui text-sm hover:bg-crk-red-dark transition-colors btn-spark min-h-[44px]"
              >
                <Phone className="w-4 h-4" />
                CALL NOW
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-crk-ink-2 mt-12 pt-6 text-center text-xs text-crk-ink-4 font-roboto">
          <p>&copy; {new Date().getFullYear()} CRK Welding. All rights reserved <span className="mx-2 text-crk-ink-4">|</span> <Link href="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
