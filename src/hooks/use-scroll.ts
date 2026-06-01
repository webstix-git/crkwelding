import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function useScrolled(threshold = 50) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);
  return scrolled;
}

export function useAnimateInView(options?: { once?: boolean; amount?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: options?.once ?? true, amount: options?.amount ?? 0.2 });
  return { ref, isInView };
}
