"use client";

import { Card } from "@/components/ui/card";
import { skills } from "@/lib/data";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Skills() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Section background animation
    gsap.to(sectionRef.current, {
      backgroundPosition: "200% 200%",
      duration: 15,
      repeat: -1,
      ease: "linear",
    });

    // Heading animation
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.2,
      }
    );

    // Cards stagger animation
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/10 pointer-events-none" />
      <div className="container px-4 mx-auto relative z-10">
        <h2
          ref={headingRef}
          className="text-4xl sm:text-6xl md:text-7xl font-bold mb-12 sm:mb-20 text-center bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent animate-gradient-text"
        >
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el as HTMLDivElement)}
            >
              <Card className="p-4 sm:p-8 text-center backdrop-blur-sm bg-white/5 hover:bg-white/10 transform transition-all duration-500 hover:scale-110 hover:rotate-2 border border-white/10 rounded-2xl shadow-xl hover:shadow-cyan-500/20 flex flex-col items-center space-y-3 sm:space-y-6">
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="h-12 w-12 sm:h-20 sm:w-20 mb-3 sm:mb-6 object-contain transition-all duration-500 transform hover:scale-110 hover:rotate-6"
                />
                <h3 className="text-lg sm:text-2xl font-medium tracking-wide text-gray-100">
                  {skill.name}
                </h3>
                <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 mx-auto mt-3 sm:mt-6 rounded-full" />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}