"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { FileDown, Menu, X, Code2 } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { personalConfig } from "@/data/personal";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-border/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Developer Logo & Personal Brand */}
          <Link
            href="/#home"
            className="group flex items-center gap-2.5 font-mono text-sm sm:text-base font-semibold tracking-tight text-foreground transition-colors"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-card border border-border text-violet-500 group-hover:border-violet-500/50 group-hover:bg-violet-500/10 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.35)] transition-all duration-300">
              <Code2 className="size-4.5 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <span className="flex items-center">
              {personalConfig.firstName || "Developer"}
              <span className="text-violet-500">
                .{personalConfig.lastName ? personalConfig.lastName.toLowerCase() : "dev"}
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-violet-500 ml-1 animate-pulse" />
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 rounded-full bg-card/60 border border-border/80 p-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-1.5 text-xs lg:text-sm font-medium text-muted-foreground hover:text-foreground rounded-full transition-all duration-200 hover:bg-secondary"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions: Theme Toggle & Download Resume */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />

            <a
              href={personalConfig.resumePath}
              download="Jay_Kaklotar_Resume.pdf"
              aria-label="Download Jay Kaklotar's Resume (PDF)"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-white bg-violet-600 hover:bg-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.25)] hover:shadow-[0_0_25px_rgba(139,92,246,0.45)] transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <FileDown className="size-4" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Mobile Actions: Theme Toggle & Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-card border border-border text-foreground hover:border-violet-500/50 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-b border-border bg-background/95 backdrop-blur-2xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 border-t border-border">
                <a
                  href={personalConfig.resumePath}
                  download="Jay_Kaklotar_Resume.pdf"
                  aria-label="Download Jay Kaklotar's Resume (PDF)"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white bg-violet-600 hover:bg-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all cursor-pointer"
                >
                  <FileDown className="size-4" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
