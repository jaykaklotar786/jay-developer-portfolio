import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Code2 } from "@/components/icons";
import { personalConfig } from "@/data/personal";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer
      id="contact"
      className="w-full border-t border-border bg-background py-12 px-4 sm:px-6 lg:px-8 mt-auto scroll-mt-24 sm:scroll-mt-28 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Developer Name / Brand from personalConfig */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-card border border-border text-violet-500">
            <Code2 className="size-4" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground tracking-tight">
              {personalConfig.fullName}
            </p>
            <p className="text-xs text-muted-foreground">
              {personalConfig.professionalTitle} • Building scalable digital products
            </p>
          </div>
        </div>

        {/* Quick Nav Anchors */}
        <div className="flex items-center gap-6 text-xs text-muted-foreground">
          <Link href="/#home" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="/#about" className="hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/#skills" className="hover:text-foreground transition-colors">
            Skills
          </Link>
          <Link href="/#projects" className="hover:text-foreground transition-colors">
            Projects
          </Link>
          <Link href="/#contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>

        {/* Social Links & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-3">
            <a
              href={personalConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg bg-card border border-border text-muted-foreground hover:text-violet-500 hover:border-violet-500/50 transition-colors"
            >
              <Github size={16} />
            </a>
            {personalConfig.linkedinUrl && (
              <a
                href={personalConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-card border border-border text-muted-foreground hover:text-violet-500 hover:border-violet-500/50 transition-colors"
              >
                <Linkedin size={16} />
              </a>
            )}
            <a
              href={`mailto:${personalConfig.email}`}
              aria-label="Email"
              className="p-2 rounded-lg bg-card border border-border text-muted-foreground hover:text-violet-500 hover:border-violet-500/50 transition-colors"
            >
              <Mail className="size-4" />
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} {personalConfig.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
