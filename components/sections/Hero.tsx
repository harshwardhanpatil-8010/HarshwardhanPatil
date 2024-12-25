"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-[850px] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-32 md:w-64 h-32 md:h-64 bg-gradient-to-br from-indigo-700 to-purple-700 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-gradient-to-br from-purple-700 to-indigo-700 rounded-full blur-3xl opacity-30 animate-pulse delay-200"></div>
      </div>
      <div className="container max-w-7xl px-4 sm:px-6 mx-auto text-center z-10">
        <div className="max-w-6xl mx-auto backdrop-blur-xl bg-gray-800/40 p-4 sm:p-6 md:p-10 rounded-3xl shadow-2xl border border-gray-700">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold mb-4 md:mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-text break-words sm:whitespace-nowrap">
            Hi, I'm{" "}
            <span className="text-white hover:text-gray-300 transition-colors duration-300">
              Harshwardhan Patil
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 leading-relaxed break-words sm:whitespace-nowrap px-2">
            Full Stack Developer | AWS Certified | Passionate about Web & Mobile App Development
          </p>
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-gray-800/20 bg-grid-16 mix-blend-multiply pointer-events-none z-0"></div>
    </section>
  );
}
