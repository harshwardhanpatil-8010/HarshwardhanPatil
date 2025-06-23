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
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -60, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top bottom-=100",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-36 bg-gradient-to-br from-slate-950 via-indigo-950 to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.05),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-purple-400/5 pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <h2
          ref={headingRef}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-center mb-20 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient-text"
        >
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el as HTMLDivElement)}
            >
              <Card className="p-8 text-center bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-500 border border-white/[0.08] rounded-3xl shadow-xl hover:shadow-cyan-400/30 group transform hover:scale-105">
                <div className="relative flex justify-center items-center">
                  <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-lg scale-95 group-hover:scale-110 transition-all duration-500" />
                  <img
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    className="h-20 w-20 sm:h-24 sm:w-24 object-contain relative z-10 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="mt-6 text-xl sm:text-2xl font-semibold text-white tracking-wide group-hover:text-cyan-400 transition-colors duration-300">
                  {skill.name}
                </h3>
                <div className="mt-4 h-1 w-16 mx-auto bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 rounded-full" />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
