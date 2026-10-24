"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowRight, FileDown, Github, Mail, Sparkles } from "@/components/icons";
import { personalConfig } from "@/data/personal";
import jayProfileImg from "@/public/images/jay-profile.jpg";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const techPills = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS v4",
  "Node.js",
  "MongoDB",
  "Angular",
  "REST APIs",
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
    >
      {/* Background Grid Pattern with Radial Mask */}
      <div className="absolute inset-0 bg-grid-pattern opacity-35 bg-radial-gradient-mask pointer-events-none -z-10" />

      {/* Violet Radial Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] lg:w-[850px] h-[350px] sm:h-[450px] bg-violet-600/18 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/4 w-[250px] sm:w-[450px] h-[250px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <motion.div
        variants={containerVariants}
        initial={shouldReduceMotion ? "visible" : "hidden"}
        animate="visible"
        className="max-w-4xl mx-auto text-center flex flex-col items-center"
      >
        {/* Profile Avatar with soft violet gradient border and glow */}
        <motion.div variants={itemVariants} className="mb-6 relative group">
          <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-3xl p-1 bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-indigo-500 shadow-[0_0_35px_rgba(139,92,246,0.35)]">
            <div className="relative h-full w-full rounded-[22px] overflow-hidden bg-background">
              <Image
                src={jayProfileImg}
                alt={personalConfig.fullName}
                fill
                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                priority
                placeholder="blur"
                sizes="(max-width: 640px) 112px, 128px"
              />
            </div>
          </div>
          {/* Subtle active status indicator */}
          <span
            className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-emerald-500 border-2 border-background shadow-xs"
            title="Active"
          />
        </motion.div>

        {/* Prominent Personal Introduction (Removed Seeking badge as requested) */}
        <motion.div variants={itemVariants} className="mb-4 sm:mb-5">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-md text-violet-700 dark:text-violet-300 text-sm sm:text-base font-semibold shadow-[0_0_20px_rgba(139,92,246,0.18)] hover:border-violet-500/50 transition-colors">
            <Sparkles className="size-4 text-violet-500" />
            <span>Hi, I&apos;m <strong className="font-bold text-foreground">{personalConfig.fullName}</strong></span>
          </div>
        </motion.div>

        {/* Main Heading: Full-Stack Developer */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-foreground leading-[1.08] sm:leading-[1.05] mb-6"
        >
          {personalConfig.heroHeadline.prefix}{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-violet-500 via-fuchsia-400 to-indigo-500 bg-clip-text text-transparent">
              {personalConfig.heroHeadline.gradientWord}
            </span>
            {/* Subtle glow underline effect */}
            <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-60 blur-xs" />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-normal mb-10 sm:mb-12"
        >
          {personalConfig.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12"
        >
          {/* Explore My Work Button (scrolls to #projects) */}
          <Link
            href="/#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-violet-600 via-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:shadow-[0_0_40px_rgba(139,92,246,0.55)] transition-all duration-300 group active:scale-95 cursor-pointer"
          >
            <span>Explore My Work</span>
            <ArrowRight className="size-4.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* Download Resume Button */}
          <a
            href={personalConfig.resumePath}
            download="Jay_Kaklotar_Resume.pdf"
            aria-label="Download Jay Kaklotar's Resume (PDF)"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm sm:text-base font-medium text-foreground bg-card hover:bg-secondary border border-border hover:border-violet-500/50 backdrop-blur-md shadow-xs hover:shadow-[0_0_25px_rgba(139,92,246,0.2)] transition-all duration-300 group active:scale-95 cursor-pointer"
          >
            <FileDown className="size-4.5 text-violet-500 group-hover:-translate-y-0.5 transition-transform duration-300" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-4 mb-16"
        >
          <a
            href={personalConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-card border border-border text-muted-foreground hover:text-violet-500 hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <Github size={19} />
          </a>
          <a
            href={`mailto:${personalConfig.email}`}
            aria-label="Send Email"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-card border border-border text-muted-foreground hover:text-violet-500 hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <Mail className="size-4.5" />
          </a>
        </motion.div>

        {/* Technology Pills Bar */}
        <motion.div
          variants={itemVariants}
          className="w-full pt-8 border-t border-border/60 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground mr-2">
            Core Stack:
          </span>
          {techPills.map((pill) => (
            <span
              key={pill}
              className="px-3 py-1 rounded-full text-xs font-medium text-muted-foreground bg-secondary/80 border border-border/80 hover:border-violet-500/40 hover:text-foreground transition-colors"
            >
              {pill}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
