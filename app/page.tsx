import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-violet-500/30 selection:text-violet-300">
      {/* Sticky Navigation Bar with Dark/Light Toggle */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* About Me Bento-Grid Section */}
        <About />

        {/* Technical Skills Section */}
        <Skills />

        {/* Featured Projects Section */}
        <Projects />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
