import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useScrolled } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import logo from "@/assets/crk-logo-new.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Services",
    path: "/services",
    children: [
      { label: "Heavy Equipment", path: "/services/heavy-equipment" },
      { label: "Pipe Welding", path: "/services/pipe-welding" },
      { label: "Structural Welding", path: "/services/structural-welding" },
      { label: "Custom Fabrication", path: "/services/custom-fabrication" },
    ],
  },
  { label: "Gallery", path: "/gallery" },
  { label: "FAQS", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const scrolled = useScrolled(80);
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "fixed left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "top-0 bg-crk-charcoal shadow-lg py-1"
          : "top-0 bg-transparent pt-[20px] py-3"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img
            src={logo}
            alt="CRK Welding logo — mobile welding and fabrication in Fair Play, Missouri"
            width={120}
            height={120}
            className={cn(
              "object-contain transition-all duration-300",
              scrolled ? "w-[100px] h-[100px]" : "w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]"
            )}
          />
        </Link>

        {/* Right side: Nav + CTA */}
        <div className="hidden lg:flex items-center gap-1">
          <nav className="flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.path}
                  className={cn(
                    "font-ui px-4 py-2 inline-flex items-center gap-1 transition-colors min-h-[44px] text-lg",
                    pathname === item.path
                      ? "text-primary"
                      : "text-crk-white hover:text-primary"
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </Link>
                {pathname === item.path && (
                  <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary" />
                )}
                {item.children && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-crk-charcoal border-l-2 border-primary rounded-sm shadow-xl min-w-[220px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          href={child.path}
                          className="block px-4 py-3 font-ui text-sm text-crk-white hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="tel:4173071017"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-sm font-ui hover:bg-crk-red-dark transition-colors btn-spark min-h-[44px] ml-4 text-base"
          >
            <Phone className="w-4 h-4" />
            24/7 Emergency Service: (417) 307-1017
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-crk-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-0 bg-crk-charcoal z-50 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-crk-ink-2">
            <img src={logo} alt="CRK Welding logo" width={64} height={64} className="h-16" />
            <button
              onClick={() => setMobileOpen(false)}
              className="text-crk-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <a
            href="tel:4173071017"
            className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 font-ui text-lg min-h-[44px]"
          >
            <Phone className="w-5 h-5" />
            24/7 Emergency Service: (417) 307-1017
          </a>

          <nav className="flex-1 overflow-y-auto py-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.path}
                  onClick={() => {
                    if (!item.children) setMobileOpen(false);
                    else setServicesOpen(!servicesOpen);
                  }}
                  className={cn(
                    "block px-6 py-4 font-ui text-lg text-crk-white border-b border-crk-ink-2 min-h-[44px] flex items-center justify-between",
                    pathname === item.path && "text-primary border-l-4 border-l-primary"
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className={cn("w-4 h-4 transition-transform", servicesOpen && "rotate-180")} />
                  )}
                </Link>
                {item.children && servicesOpen && (
                  <div className="bg-crk-ink-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        href={child.path}
                        onClick={() => setMobileOpen(false)}
                        className="block px-10 py-3 font-ui text-sm text-crk-steel-light hover:text-primary transition-colors min-h-[44px] flex items-center"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mx-4 mb-6 text-center bg-primary text-primary-foreground py-4 rounded-sm font-ui text-lg min-h-[44px]"
          >
            GET AN ESTIMATE
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
