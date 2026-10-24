"use client";

import React, { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const emptySubscribe = () => () => {};

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  if (!mounted) {
    return (
      <button
        type="button"
        className={`h-9 w-9 rounded-full border border-border bg-card/60 backdrop-blur-md flex items-center justify-center text-muted-foreground opacity-50 cursor-pointer ${className}`}
        aria-label="Toggle dark/light mode"
        disabled
      >
        <Moon className="size-4" />
      </button>
    );
  }

  const currentTheme = resolvedTheme || theme || "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className={`h-9 w-9 rounded-full border border-border bg-card/80 hover:bg-accent/10 hover:border-violet-500/50 text-foreground transition-all duration-200 flex items-center justify-center shadow-xs hover:shadow-[0_0_15px_rgba(139,92,246,0.25)] active:scale-95 cursor-pointer ${className}`}
      aria-label={`Switch to ${currentTheme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${currentTheme === "dark" ? "light" : "dark"} mode`}
    >
      {currentTheme === "dark" ? (
        <Sun className="size-4.5 text-amber-300 hover:rotate-45 transition-transform duration-300" />
      ) : (
        <Moon className="size-4.5 text-violet-600 hover:-rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
}
