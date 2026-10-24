"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Sparkles } from "lucide-react";

interface SectionHeadingProps {
  badge: string;
  title: string;
  gradientTitle?: string;
  subtitle: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  gradientTitle,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion();

  const isCenter = align === "center";

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-12 sm:mb-16 ${isCenter ? "text-center flex flex-col items-center" : "text-left"} ${className}`}
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-300 text-xs sm:text-sm font-medium backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(139,92,246,0.12)]">
        <Sparkles className="size-3.5 text-violet-500" />
        <span>{badge}</span>
      </div>

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground leading-tight mb-4">
        {title}{" "}
        {gradientTitle && (
          <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
            {gradientTitle}
          </span>
        )}
      </h2>

      {/* Subtitle */}
      <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed font-normal">
        {subtitle}
      </p>
    </motion.div>
  );
}
