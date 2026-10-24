"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Github } from "@/components/icons";
import { SectionHeading } from "@/components/shared/section-heading";
import { projectsData, type Project } from "@/data/projects";

export function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 sm:scroll-mt-28 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background violet accent glow - balanced, non-excessive */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[450px] h-[450px] bg-violet-600/8 dark:bg-violet-600/12 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <SectionHeading
          badge="Featured Projects"
          title="Featured"
          gradientTitle="Projects"
          subtitle="A selection of applications I've built, exploring modern full-stack development, reactive frontends, and clean system design."
          align="center"
        />

        {/* Responsive Grid: 1 col on mobile, 2 cols on tablet & desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {projectsData.map((project: Project, index: number) => (
            <motion.article
              key={project.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: shouldReduceMotion ? 0 : index * 0.1,
                ease: "easeOut",
              }}
              whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
              className="group relative flex flex-col justify-between h-full rounded-2xl sm:rounded-3xl bg-card text-card-foreground border border-border/80 hover:border-violet-500/50 dark:hover:border-violet-500/40 shadow-xs hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_12px_36px_rgba(139,92,246,0.12)] transition-all duration-300 overflow-hidden"
            >
              <div>
                {/* 1. Real Project Screenshot Container - Consistent 16:9 Aspect Ratio */}
                <div className="relative aspect-video w-full overflow-hidden bg-secondary/50 border-b border-border/70">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Gradient overlay for seamless contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent pointer-events-none" />

                  {/* Status Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-card/90 dark:bg-card/85 text-foreground border border-border/80 backdrop-blur-md shadow-xs">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {project.status}
                    </span>
                  </div>

                  {/* Live Status indicator if live demo available */}
                  {project.liveUrl && (
                    <div className="absolute top-3.5 right-3.5">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-violet-500/15 dark:bg-violet-500/20 text-violet-700 dark:text-violet-300 border border-violet-500/30 backdrop-blur-md shadow-xs">
                        <span className="h-1.5 w-1.5 rounded-full bg-violet-500 animate-pulse" />
                        Live Demo
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Main Content */}
                <div className="p-5 sm:p-6 lg:p-7 flex flex-col">
                  {/* 2. Project Title */}
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 rounded-md"
                    >
                      {project.title}
                    </Link>
                  </h3>

                  {/* 3. Concise Description */}
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3 mt-2.5 mb-5 font-normal">
                    {project.shortDescription}
                  </p>

                  {/* 4. Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-mono font-medium text-foreground bg-secondary/80 border border-border/80 group-hover:border-violet-500/25 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Row - Consistent button alignment and heights */}
              <div className="px-5 sm:px-6 lg:px-7 py-4 border-t border-border/60 bg-secondary/20 flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
                <div className="flex items-center gap-2">
                  {/* 5. GitHub Repository Button */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} GitHub repository`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-medium text-foreground bg-card hover:bg-secondary border border-border hover:border-violet-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 transition-colors"
                    >
                      <Github className="size-3.5" />
                      <span>Code</span>
                    </a>
                  )}

                  {/* 6. Live Demo Button (if available) */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} live demo`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-medium text-violet-700 dark:text-violet-300 bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/30 hover:border-violet-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 transition-colors"
                    >
                      <ExternalLink className="size-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>

                {/* 7. View Case Study Button */}
                <Link
                  href={`/projects/${project.slug}`}
                  aria-label={`View case study for ${project.title}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-violet-600 hover:bg-violet-500 shadow-[0_2px_12px_rgba(139,92,246,0.25)] hover:shadow-[0_4px_18px_rgba(139,92,246,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 active:scale-95 transition-all ml-auto"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
