import { motion, type Variants } from "framer-motion";
import type { ReactNode, ElementType } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 35, rotateX: -15, scale: 0.96, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, rotateX: 0, scale: 1, filter: "blur(0px)", transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
};

type Tag = "div" | "span" | "li" | "h1" | "h2" | "h3" | "p";

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: Tag;
}) {
  const Comp = motion[as] as ElementType;
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants}
      transition={{ delay }}
      style={{ perspective: 1200 }}
    >
      {children}
    </Comp>
  );
}
