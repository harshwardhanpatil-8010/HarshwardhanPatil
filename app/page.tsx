
"use client";

import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Hero } from "./pages/Hero";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">

      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}