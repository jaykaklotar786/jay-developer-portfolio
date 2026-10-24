"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { SectionHeading } from "@/components/shared/section-heading";
import { SkillCard } from "@/components/shared/skill-card";
import { skillCategories, type SkillCategory } from "@/data/skills";
import { Layers } from "lucide-react";

export function Skills() {
  const shouldReduceMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Arsenal" },
    ...skillCategories.map((c) => ({ id: c.id, label: c.title })),
  ];

  const displayedCategories =
    activeFilter === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeFilter);

  return (
    <section
      id="skills"
      className="relative scroll-mt-24 sm:scroll-mt-28 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background violet radial glow */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <SectionHeading
          badge="Technical Skills"
          title="My Technical"
          gradientTitle="Arsenal"
          subtitle="Technologies and tools I use to turn ideas into functional applications."
          align="center"
        />

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12 sm:mb-16">
          <div className="p-1 rounded-full bg-secondary/80 border border-border flex items-center flex-wrap gap-1 backdrop-blur-md">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-violet-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.35)]"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Categories and Skill Cards Grid */}
        <div className="space-y-14 sm:space-y-16">
          {displayedCategories.map((category: SkillCategory, catIndex: number) => (
            <motion.div
              key={category.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : catIndex * 0.08,
              }}
              className="relative"
            >
              {/* Category Header with subtle separator */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-border/70">
                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-500">
                    <Layers className="size-3.5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <span className="hidden sm:inline-block text-xs font-mono text-muted-foreground px-2 py-0.5 rounded-full bg-secondary/60 border border-border/50">
                    {category.skills.length} tools
                  </span>
                </div>
                <p className="text-xs text-muted-foreground max-w-md">
                  {category.description}
                </p>
              </div>

              {/* Responsive Grid: 4 columns desktop, 2 columns tablet, 1-2 columns mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {category.skills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
