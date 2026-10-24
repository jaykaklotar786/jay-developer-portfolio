import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ExternalLink,
  Layers,
  Cpu,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
} from "lucide-react";
import { Github } from "@/components/icons";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { projectsData } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Portfolio",
    };
  }

  return {
    title: `${project.title} | Developer Portfolio`,
    description: project.shortDescription,
  };
}

function ProjectDetailsSkeleton() {
  return (
    <main className="flex-1 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 animate-pulse">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="h-9 w-36 rounded-xl bg-secondary/60" />
        <div className="space-y-4">
          <div className="h-6 w-28 rounded-full bg-secondary/60" />
          <div className="h-12 w-3/4 rounded-2xl bg-secondary/60" />
          <div className="h-6 w-full rounded-xl bg-secondary/40" />
        </div>
        <div className="aspect-video w-full rounded-3xl bg-secondary/50 border border-border/80" />
        <div className="h-20 w-full rounded-2xl bg-secondary/40 border border-border" />
      </div>
    </main>
  );
}

async function ProjectDetailsContent({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex-1 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back to Projects Navigation */}
          <div className="mb-8 sm:mb-10">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground bg-card border border-border hover:border-violet-500/50 transition-colors shadow-xs group"
            >
              <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" />
              <span>Back to Projects</span>
            </Link>
          </div>

          {/* Project Header */}
          <div className="mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-300 text-xs font-medium backdrop-blur-md mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
              <span>{project.status}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground leading-tight mb-4">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Project Preview Image */}
          <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-border/80 bg-secondary/40 shadow-sm mb-12 sm:mb-16">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
              priority
            />
          </div>

          {/* Action Links Bar */}
          <div className="p-6 rounded-2xl bg-card border border-border flex flex-wrap items-center justify-between gap-4 mb-12 sm:mb-16 shadow-xs">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Repository & Deployment
              </p>
              <p className="text-sm font-semibold text-foreground mt-0.5">
                Source Code & Live Demo
              </p>
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-foreground bg-secondary hover:bg-secondary/80 border border-border hover:border-violet-500/40 transition-colors"
                >
                  <Github className="size-4" />
                  <span>GitHub Repository</span>
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-violet-600 hover:bg-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all"
                >
                  <ExternalLink className="size-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="space-y-12 sm:space-y-14">
            {/* 1. Overview */}
            <section className="space-y-4">
              <div className="flex items-center gap-2.5 pb-2 border-b border-border">
                <Layers className="size-5 text-violet-500" />
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  Project Overview
                </h2>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </section>

            {/* 2. Problem Solved */}
            {project.problemSolved && (
              <section className="space-y-4">
                <div className="flex items-center gap-2.5 pb-2 border-b border-border">
                  <CheckCircle2 className="size-5 text-violet-500" />
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    Problem Solved
                  </h2>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {project.problemSolved}
                </div>
              </section>
            )}

            {/* 3. Technologies Used */}
            <section className="space-y-4">
              <div className="flex items-center gap-2.5 pb-2 border-b border-border">
                <Cpu className="size-5 text-violet-500" />
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  Technologies Used
                </h2>
              </div>
              <div className="flex flex-wrap gap-2.5 pt-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-mono font-medium text-foreground bg-secondary/80 border border-border hover:border-violet-500/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* 4. Key Features */}
            {project.features.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center gap-2.5 pb-2 border-b border-border">
                  <CheckCircle2 className="size-5 text-emerald-500" />
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    Key Features
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {project.features.map((feature, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-card border border-border flex items-start gap-3"
                    >
                      <span className="h-2 w-2 rounded-full bg-violet-500 mt-2 shrink-0" />
                      <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 5. Architecture Overview */}
            {project.architectureOverview && (
              <section className="space-y-4">
                <div className="flex items-center gap-2.5 pb-2 border-b border-border">
                  <Layers className="size-5 text-violet-500" />
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    Architecture Overview
                  </h2>
                </div>
                <div className="p-6 rounded-2xl bg-secondary/40 border border-border text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {project.architectureOverview}
                </div>
              </section>
            )}

            {/* 6. Technical Challenges & Solutions */}
            {project.challenges.length > 0 && (
              <section className="space-y-6">
                <div className="flex items-center gap-2.5 pb-2 border-b border-border">
                  <Lightbulb className="size-5 text-amber-500" />
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    Technical Challenges & Solutions
                  </h2>
                </div>

                <div className="space-y-4">
                  {project.challenges.map((challenge, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-card border border-border space-y-3"
                    >
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-rose-500 dark:text-rose-400">
                        <AlertCircle className="size-4 shrink-0 mt-0.5" />
                        <span>Challenge: {challenge}</span>
                      </div>
                      {project.solutions[idx] && (
                        <div className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground pl-6 border-l-2 border-violet-500/40">
                          <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>Solution: {project.solutions[idx]}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 7. Application Screenshots */}
            <section className="space-y-4">
              <div className="flex items-center gap-2.5 pb-2 border-b border-border">
                <Layers className="size-5 text-violet-500" />
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  Screenshots & Media
                </h2>
              </div>
              <div className="space-y-4">
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-border bg-secondary/30">
                  <Image
                    src={project.image}
                    alt={`${project.title} detailed screenshot preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 896px"
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  Project preview for {project.title}. High-resolution 16:9 capture.
                </p>
              </div>
            </section>
          </div>

          {/* Bottom Back Button */}
          <div className="mt-16 pt-8 border-t border-border flex items-center justify-center">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-violet-600 hover:bg-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="size-4" />
              <span>Back to All Projects</span>
            </Link>
          </div>
        </div>
      </main>
  );
}

export default function ProjectDetailsPage({ params }: ProjectPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-violet-500/30 selection:text-violet-300">
      {/* Sticky Navigation Bar */}
      <Navbar />

      <Suspense fallback={<ProjectDetailsSkeleton />}>
        <ProjectDetailsContent params={params} />
      </Suspense>

      {/* Footer */}
      <Footer />
    </div>
  );
}

