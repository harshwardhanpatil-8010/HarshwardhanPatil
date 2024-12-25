
"use client";

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
       <SpeedInsights />
       <Analytics />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}