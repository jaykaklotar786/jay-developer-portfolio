"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import {
  Code2,
  Cpu,
  Database,
  Globe,
  Layout,
  MapPin,
  Server,
  Terminal,
  Sparkles,
  GraduationCap,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { personalConfig } from "@/data/personal";
import jayProfileImg from "@/public/images/jay-profile.jpg";

const whatIDoItems = [
  {
    title: "Frontend Development",
    icon: Layout,
    description: "Responsive, accessible, and reactive user interfaces (React, Next.js, Angular)",
  },
  {
    title: "Backend Development",
    icon: Server,
    description: "Scalable server architectures and business logic (Node.js, Express)",
  },
  {
    title: "REST API Development",
    icon: Cpu,
    description: "Well-structured, secure, and documented endpoints with JWT authentication",
  },
  {
    title: "Database Integration",
    icon: Database,
    description: "Efficient data schemas, document storage, and queries (MongoDB)",
  },
];

const currentFocusItems = [
  "Next.js App Router",
  "TypeScript",
  "Full-Stack Architecture",
  "Modern UI Engineering",
];

export function About() {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: shouldReduceMotion ? 0 : custom * 0.08,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="about"
      className="relative scroll-mt-24 sm:scroll-mt-28 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <SectionHeading
          badge="About Me"
          title="Beyond the"
          gradientTitle="Code"
          subtitle="A little about who I am, what I build, and what drives me."
          align="center"
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {/* CARD 1: INTRODUCTION (Spans 2 columns on lg) */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={shouldReduceMotion ? {} : { y: -3, transition: { duration: 0.2 } }}
            className="group relative lg:col-span-2 p-7 sm:p-9 rounded-3xl bg-card border border-border/80 hover:border-violet-500/50 shadow-xs hover:shadow-[0_4px_30px_rgba(139,92,246,0.15)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Watermark Code Icon in background */}
            <div className="absolute -bottom-8 -right-8 opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
              <Code2 className="size-64 text-violet-500" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10 text-violet-500 border border-violet-500/20">
                  <Code2 className="size-4" />
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-violet-600 dark:text-violet-400 font-semibold">
                  Introduction
                </span>
              </div>

              {/* Profile Image & Intro Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 mb-6">
                {/* Profile Picture Frame with Soft Violet Glow */}
                <div className="relative shrink-0">
                  <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-2xl overflow-hidden border-2 border-violet-500/40 shadow-[0_0_30px_rgba(139,92,246,0.3)] bg-secondary">
                    <Image
                      src={jayProfileImg}
                      alt={personalConfig.fullName}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 112px, 128px"
                      priority
                      placeholder="blur"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                    {personalConfig.aboutMe.introHeading}
                  </h3>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-violet-600 dark:text-violet-400 mt-1">
                    <GraduationCap className="size-4" />
                    <span>{personalConfig.education}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5 font-medium">
                    {personalConfig.currentStatus}
                  </p>
                </div>
              </div>

              {/* Dynamic Paragraphs from personalConfig */}
              <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
                {personalConfig.aboutMe.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/60 flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Full-Stack Development • Responsive UI & Backend Architecture</span>
            </div>
          </motion.div>

          {/* CARD 2: WHAT I DO (Spans 1 column) */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={shouldReduceMotion ? {} : { y: -3, transition: { duration: 0.2 } }}
            className="group p-6 sm:p-7 rounded-3xl bg-card border border-border/80 hover:border-violet-500/50 shadow-xs hover:shadow-[0_4px_30px_rgba(139,92,246,0.15)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-violet-600 dark:text-violet-400 font-semibold">
                  Capabilities
                </span>
                <Sparkles className="size-4 text-violet-400" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-5">
                What I Do
              </h3>

              <div className="space-y-3">
                {whatIDoItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-3 p-3 rounded-xl bg-secondary/50 border border-border/50 hover:border-violet-500/30 hover:bg-secondary transition-colors"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-card border border-border text-violet-500">
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {item.title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* CARD 3: LOCATION (Spans 1 column) */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={shouldReduceMotion ? {} : { y: -3, transition: { duration: 0.2 } }}
            className="group relative p-6 sm:p-7 rounded-3xl bg-card border border-border/80 hover:border-violet-500/50 shadow-xs hover:shadow-[0_4px_30px_rgba(139,92,246,0.15)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-violet-600 dark:text-violet-400 font-semibold">
                  Location
                </span>
                <Globe className="size-4 text-muted-foreground" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
                {personalConfig.location}
              </h3>

              {/* Animated Location Graphic Indicator */}
              <div className="my-4 p-4 rounded-2xl bg-secondary/40 border border-border/60 flex items-center gap-3.5">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-500 shrink-0">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-40 animate-ping" />
                  <MapPin className="size-5 relative" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    India (IST)
                  </p>
                  <p className="text-xs font-mono text-muted-foreground">
                    UTC +5:30
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Available for remote collaboration worldwide with smooth
                communication and agile time-zone overlap.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-mono text-muted-foreground">
              <span>{personalConfig.coordinates.latitude}</span>
              <span>{personalConfig.coordinates.longitude}</span>
            </div>
          </motion.div>

          {/* CARD 4: CURRENT FOCUS (Spans 1 column) */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={shouldReduceMotion ? {} : { y: -3, transition: { duration: 0.2 } }}
            className="group p-6 sm:p-7 rounded-3xl bg-card border border-border/80 hover:border-violet-500/50 shadow-xs hover:shadow-[0_4px_30px_rgba(139,92,246,0.15)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-violet-600 dark:text-violet-400 font-semibold">
                  Growth
                </span>
                <Cpu className="size-4 text-violet-400" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-2">
                Currently Exploring
              </h3>

              <p className="text-xs text-muted-foreground mb-5">
                Active areas of research and technical refinement:
              </p>

              <div className="flex flex-wrap gap-2.5">
                {currentFocusItems.map((focus) => (
                  <span
                    key={focus}
                    className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium text-foreground bg-secondary/80 border border-border/80 hover:border-violet-500/50 hover:bg-violet-500/10 transition-colors cursor-default"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/60 text-xs text-muted-foreground flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
              <span>Continuously shipping & testing new patterns</span>
            </div>
          </motion.div>

          {/* CARD 5: DEVELOPMENT PHILOSOPHY (Spans 1 column) */}
          <motion.div
            custom={4}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={shouldReduceMotion ? {} : { y: -3, transition: { duration: 0.2 } }}
            className="group relative p-6 sm:p-7 rounded-3xl bg-card border border-border/80 hover:border-violet-500/50 shadow-xs hover:shadow-[0_4px_30px_rgba(139,92,246,0.15)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-violet-600 dark:text-violet-400 font-semibold">
                  Values
                </span>
                <Sparkles className="size-4 text-violet-400" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-6">
                {personalConfig.aboutMe.philosophyTitle}
              </h3>

              <div className="space-y-3 font-black tracking-tight text-2xl sm:text-3xl leading-snug">
                <div className="text-foreground">
                  {personalConfig.aboutMe.philosophyPoints[0]}
                </div>
                <div className="text-muted-foreground">
                  {personalConfig.aboutMe.philosophyPoints[1]}
                </div>
                <div className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
                  {personalConfig.aboutMe.philosophyPoints[2]}
                </div>
              </div>
            </div>

            <p className="mt-6 pt-4 border-t border-border/60 text-xs text-muted-foreground leading-relaxed">
              {personalConfig.aboutMe.philosophyDescription}
            </p>
          </motion.div>

          {/* CARD 6: TERMINAL-INSPIRED INTERACTIVE CARD (Spans 3 columns on lg) */}
          <motion.div
            custom={5}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={shouldReduceMotion ? {} : { y: -3, transition: { duration: 0.2 } }}
            className="group lg:col-span-3 p-6 sm:p-7 rounded-3xl bg-card border border-border/80 hover:border-violet-500/50 shadow-xs hover:shadow-[0_4px_30px_rgba(139,92,246,0.15)] transition-all duration-300 font-mono text-xs sm:text-sm"
          >
            {/* Terminal Window Header Bar */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-border/60">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                <Terminal className="size-3.5" />
                <span>jay@portfolio ~ zsh</span>
              </div>
              <div className="w-12 text-right text-[10px] text-muted-foreground uppercase">
                bash
              </div>
            </div>

            {/* Terminal Content Commands */}
            <div className="space-y-4">
              <div>
                <p className="text-violet-600 dark:text-violet-400 font-semibold flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">$</span>
                  <span>whoami</span>
                </p>
                <p className="text-foreground mt-1 pl-4">
                  {personalConfig.fullName} — {personalConfig.professionalTitle} ({personalConfig.education})
                </p>
              </div>

              <div>
                <p className="text-violet-600 dark:text-violet-400 font-semibold flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">$</span>
                  <span>focus</span>
                </p>
                <p className="text-foreground mt-1 pl-4">
                  Building modern, scalable web applications
                </p>
              </div>

              <div>
                <p className="text-violet-600 dark:text-violet-400 font-semibold flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">$</span>
                  <span>stack</span>
                </p>
                <div className="text-foreground mt-1 pl-4 flex items-center flex-wrap gap-1">
                  <span>React, Angular, Next.js, Node.js, MongoDB</span>
                  <span className="inline-block w-2 h-4 bg-violet-500 dark:bg-violet-400 animate-pulse ml-1" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
