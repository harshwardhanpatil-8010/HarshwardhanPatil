"use client";

import { Card } from "@/components/ui/card";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";
import { memo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// Memoize the Card component to prevent unnecessary re-renders
const MemoizedCard = memo(Card);

// Lazy load motion components
const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), {
  ssr: false
});

const MotionH2 = dynamic(() => import("framer-motion").then((mod) => mod.motion.h2), {
  ssr: false
});

export function Skills() {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/10 pointer-events-none" />
      <div className="container px-4 mx-auto relative z-10">
        <MotionH2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold mb-12 sm:mb-20 text-center bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent animate-gradient-text"
        >
          Skills & Expertise
        </MotionH2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-10">
          {skills.map((skill, index) => (
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              key={skill.name}
            >
              <MemoizedCard className="p-4 sm:p-8 text-center backdrop-blur-sm bg-white/5 hover:bg-white/10 transform transition-all duration-500 hover:scale-105 border border-white/10 rounded-2xl shadow-xl hover:shadow-cyan-500/20 flex flex-col items-center space-y-3 sm:space-y-6">
                <Image
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  width={80}
                  height={80}
                  loading="lazy"
                  className="h-12 w-12 sm:h-20 sm:w-20 mb-3 sm:mb-6 object-contain transition-all duration-500 transform hover:scale-110 hover:rotate-6"
                />
                <h3 className="text-lg sm:text-2xl font-medium tracking-wide text-gray-100">
                  {skill.name}
                </h3>
                <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 mx-auto mt-3 sm:mt-6 rounded-full" />
              </MemoizedCard>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

// Memoize the entire Skills component
export default memo(Skills);
