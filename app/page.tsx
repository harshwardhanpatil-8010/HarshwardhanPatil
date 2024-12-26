
"use client";

export const runtime = 'edge';

import dynamic from 'next/dynamic';
import { Hero } from "@/components/sections/Hero";

const About = dynamic(() => import('@/components/sections/About').then(mod => mod.About));
const Projects = dynamic(() => import('@/components/sections/Projects').then(mod => mod.Projects));
const Skills = dynamic(() => import('@/components/sections/Skills').then(mod => mod.Skills));
const Contact = dynamic(() => import('@/components/sections/Contact').then(mod => mod.Contact));

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