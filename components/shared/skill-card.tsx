"use client";


import { motion, useReducedMotion } from "motion/react";
import { TechIcon } from "@/components/tech-icons";
import { type Skill } from "@/data/skills";

interface SkillCardProps {
  skill: Skill;
  index?: number;
}

export function SkillCard({ skill, index = 0 }: SkillCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: shouldReduceMotion ? 0 : Math.min(index * 0.05, 0.4),
        ease: "easeOut",
      }}
      whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
      className="group relative flex flex-col justify-between p-5 rounded-2xl bg-card border border-border/80 hover:border-violet-500/50 shadow-xs hover:shadow-[0_4px_25px_rgba(139,92,246,0.18)] transition-all duration-300"
    >
      {/* Subtle top corner ambient glow on hover */}
      <div className="absolute top-0 right-0 -mr-2 -mt-2 w-16 h-16 bg-violet-500/0 group-hover:bg-violet-500/10 rounded-full blur-xl transition-all duration-300 pointer-events-none" />

      <div className="flex items-start justify-between gap-3 mb-3">
        {/* Technology Icon in rounded container */}
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/80 border border-border group-hover:border-violet-500/40 group-hover:bg-violet-500/10 transition-colors duration-300">
          <TechIcon
            name={skill.iconKey}
            size={22}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Category Pill Tag */}
        <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground px-2 py-0.5 rounded-full bg-secondary/60 border border-border/60">
          {skill.category}
        </span>
      </div>

      <div>
        <h4 className="text-base font-semibold tracking-tight text-foreground group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors">
          {skill.name}
        </h4>
        {skill.description && (
          <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
            {skill.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
