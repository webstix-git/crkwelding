"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { Phone, Mail, MapPin, Map, Clock, Send } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import TurnstileWidget from "@/components/shared/TurnstileWidget";
import usePageSeo from "@/hooks/use-seo";
import heroImg from "@/assets/hero-bg.jpg";
import { useBreadcrumbSchema } from "@/hooks/use-structured-data";

const Contact = () => {
  usePageSeo({
    title: "Contact Us | CRK Welding",
    description: "Get in touch with CRK Welding for a free estimate. Call 417-307-1017 or submit our online form. Emergency and after-hours service available 24/7.",
  });
  useBreadcrumbSchema([{ name: "Contact Us" }]);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [phoneError, setPhoneError] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const normalizePhone = (phone: string): string | null => {
    const stripped = phone.replace(/[\s\-().]/g, "");
    // Already in E.164 format
    if (/^\+[1-9]\d{6,14}$/.test(stripped)) return stripped;
    // 10-digit US number without country code
    if (/^[2-9]\d{9}$/.test(stripped)) return `+1${stripped}`;
    // 11-digit starting with 1 (US with leading 1)
    if (/^1[2-9]\d{9}$/.test(stripped)) return `+${stripped}`;
    return null;
  };

  const handleTurnstileVerify = useCallback((token: string) => {
    setTurnstileToken((prev) => (prev === token ? prev : token));
    setCaptchaError("");
  }, []);

  const handleTurnstileExpire = useCallback(() => {
    setTurnstileToken("");
  }, []);

  const handleTurnstileError = useCallback(() => {
    setTurnstileToken("");
    setCaptchaError(
      "Security check could not load. Confirm crkwelding.vercel.app is allowed in Cloudflare Turnstile, then refresh."
    );
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const normalized = normalizePhone(form.phone);
    if (!normalized) {
      setPhoneError("Please enter a valid phone number (e.g. 555-123-4567)");
      return;
    }
    if (!turnstileToken) {
      setCaptchaError("Please complete the security check.");
      return;
    }
    setPhoneError("");
    setCaptchaError("");
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, turnstileToken }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string; detail?: string };
        let message = "Something went wrong. Please try again.";
        if (res.status === 403) {
          message =
            data.detail?.includes("not configured")
              ? "Missing TURNSTILE_SECRET_KEY in .env.local. Copy .env.example to .env.local and add your secret key."
              : "Security check expired or failed. Please complete it again and resubmit.";
        } else if (res.status === 502) {
          message = "Could not send your message. Please call 417-307-1017.";
        } else if (data.detail) {
          message = data.detail;
        }
        setCaptchaError(message);
        setTurnstileToken("");
        setTurnstileKey((k) => k + 1);
        return;
      }
      router.push("/thank-you");
    } catch {
      setCaptchaError("Something went wrong. Please try again.");
      setTurnstileToken("");
      setTurnstileKey((k) => k + 1);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="bg-crk-onyx relative min-h-[350px] flex items-end">
        <div className="absolute inset-0">
          <img src={heroImg} alt="CRK Welding contact — mobile welding services across southwest Missouri" width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-crk-onyx via-crk-onyx/90 to-crk-onyx/20" />
        </div>
        <div className="container mx-auto px-4 relative z-10 pt-40 pb-12">
          <AnimatedSection>
            <h1 className="font-headline text-5xl md:text-6xl text-crk-white">CONTACT US</h1>
          </AnimatedSection>
        </div>
      </section>

      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <Breadcrumbs items={[{ label: "Contact Us" }]} />
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <AnimatedSection direction="left" className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-sm p-8 space-y-5">
                  <h2 className="font-headline text-2xl text-card-foreground mb-2">REQUEST AN ESTIMATE</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block font-ui text-base text-card-foreground mb-1.5">NAME *</label>
                      <input id="name" type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full px-4 py-3 bg-crk-white border border-input rounded-sm text-sm font-roboto text-foreground focus:outline-none focus:ring-2 focus:ring-ring min-h-[44px]" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block font-ui text-base text-card-foreground mb-1.5">PHONE *</label>
                      <input id="phone" type="tel" required value={form.phone} onChange={e => { setForm({...form, phone: e.target.value}); setPhoneError(""); }} className={`w-full px-4 py-3 bg-crk-white border rounded-sm text-sm font-roboto text-foreground focus:outline-none focus:ring-2 focus:ring-ring min-h-[44px] ${phoneError ? "border-destructive" : "border-input"}`} placeholder="(555) 123-4567" />
                      {phoneError && <p className="text-destructive text-xs mt-1 font-roboto">{phoneError}</p>}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-ui text-base text-card-foreground mb-1.5">EMAIL</label>
                    <input id="email" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-4 py-3 bg-crk-white border border-input rounded-sm text-sm font-roboto text-foreground focus:outline-none focus:ring-2 focus:ring-ring min-h-[44px]" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block font-ui text-base text-card-foreground mb-1.5">SERVICE TYPE</label>
                    <select id="service" value={form.service} onChange={e => setForm({...form, service: e.target.value})} className="w-full px-4 py-3 bg-crk-white border border-input rounded-sm text-sm font-roboto text-foreground focus:outline-none focus:ring-2 focus:ring-ring min-h-[44px]">
                      <option value="">Select a service...</option>
                      <option value="Structural Welding">Structural Welding</option>
                      <option value="Heavy Equipment Repair">Heavy Equipment Repair</option>
                      <option value="Pipe Welding">Pipe Welding</option>
                      <option value="Custom Fabrication">Custom Fabrication</option>
                      <option value="Emergency/After-Hours">Emergency / After-Hours</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block font-ui text-base text-card-foreground mb-1.5">MESSAGE</label>
                    <textarea id="message" rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full px-4 py-3 bg-crk-white border border-input rounded-sm text-sm font-roboto text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Describe your project or repair needs..." />
                  </div>
                  <TurnstileWidget
                    key={turnstileKey}
                    onVerify={handleTurnstileVerify}
                    onExpire={handleTurnstileExpire}
                    onError={handleTurnstileError}
                  />
                  {captchaError && <p className="text-destructive text-xs font-roboto">{captchaError}</p>}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground py-4 rounded-sm font-ui text-base hover:bg-crk-red-dark transition-colors btn-spark min-h-[44px] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "SENDING..." : "SEND REQUEST"}
                  </button>
                </form>
            </AnimatedSection>

            <AnimatedSection direction="right" className="lg:col-span-2 space-y-6">
              <div className="bg-card border border-border rounded-sm p-6">
                <h3 className="font-headline text-xl text-card-foreground mb-4">CONTACT INFORMATION</h3>
                <div className="space-y-4">
                  <a href="tel:4173071017" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-roboto">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>417-307-1017</span>
                  </a>
                  <a href="mailto:crkwelding@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-roboto">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>crkwelding@gmail.com</span>
                  </a>
                  <div className="flex items-start gap-3 text-muted-foreground font-roboto">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>PO Box 7<br />Fair Play, MO 65649</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground font-roboto">
                    <Map className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>100-Mile Service Radius</span>
                  </div>
                  <div className="flex items-start gap-3 text-muted-foreground font-roboto">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-ui text-card-foreground block mb-1">Hours of Operation</span>
                      <span>Mon–Sat: 7:00 AM – 5:00 PM<br />Sun: Emergency Call-Out Only</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-crk-slate border-t-[3px] border-primary rounded-sm p-6">
                <h3 className="font-headline text-xl text-crk-white mb-2">EMERGENCY SERVICE</h3>
                <p className="text-crk-steel text-base font-roboto mb-4">
                  Need immediate on-site repair? We're available 24/7 for critical equipment failures and emergency situations.
                </p>
                <a href="tel:4173071017" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-sm font-ui text-sm hover:bg-crk-red-dark transition-colors btn-spark min-h-[44px]">
                  <Phone className="w-4 h-4" />
                  CALL NOW
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
