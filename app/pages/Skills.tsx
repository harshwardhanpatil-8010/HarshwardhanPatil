"use client";

import { Card } from "@/components/ui/card";
import { skills } from "@/lib/data";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export function Skills() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Section background animation with enhanced gradient movement
    gsap.to(sectionRef.current, {
      backgroundPosition: "200% 200%",
      duration: 20,
      repeat: -1,
      ease: "power1.inOut",
    });

    // Enhanced heading animation
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.8,
        ease: "elastic.out(1, 0.3)",
        delay: 0.3,
      }
    );

    // Cards stagger animation
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-40 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />
      <div className="container px-4 mx-auto relative z-10">
        <h2
          ref={headingRef}
          className="text-5xl sm:text-7xl md:text-8xl font-black mb-16 sm:mb-24 text-center bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent animate-gradient-text tracking-tight"
        >
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-12 md:gap-16 px-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el as HTMLDivElement)}
            >
              <Card className="p-8 sm:p-10 text-center backdrop-blur-md bg-white/[0.03] hover:bg-white/[0.08] transform transition-all duration-700 hover:scale-105 hover:-rotate-2 border border-white/[0.08] rounded-3xl shadow-2xl hover:shadow-cyan-500/30 flex flex-col items-center space-y-6 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  <img
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    className="h-20 w-20 sm:h-24 sm:w-24 object-contain transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 relative z-10"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-wide text-gray-100 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </h3>
                <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 rounded-full transform transition-all duration-500 group-hover:scale-125" />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
