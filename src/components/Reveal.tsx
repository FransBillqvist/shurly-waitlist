"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import React from "react";

type Animation = "fade-up" | "fade" | "scale" | "blur-up";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  animation?: Animation;
}

const animationClass: Record<Animation, string> = {
  "fade-up": "animate-fade-in-up",
  fade: "animate-fade-in",
  scale: "animate-scale-in",
  "blur-up": "animate-blur-in-up",
};

const Reveal = ({ children, delay = 0, className, animation = "fade-up" }: RevealProps) => {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={cn("animate-in", isInView && "is-visible", animationClass[animation], className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;
