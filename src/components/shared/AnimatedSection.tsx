import { motion } from "framer-motion";
import { useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

const AnimatedSection = ({ children, className, delay = 0, direction = "up" }: Props) => {
  const ref = useRef(null);
  const initial = direction === "up"
    ? { opacity: 0, y: 40 }
    : direction === "left"
    ? { opacity: 0, x: -40 }
    : { opacity: 0, x: 40 };

  const animate = { opacity: 1, y: 0, x: 0 };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
