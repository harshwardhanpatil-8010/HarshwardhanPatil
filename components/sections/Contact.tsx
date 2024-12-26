"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import linkedin from "@/public/linkedin.png";
import gmail from "@/public/gmail.png";

export function Contact() {
  return (
    <section className="h-[600px] py-16 sm:py-24 relative overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 animate-pulse"></div>

      <div className="container px-4 sm:px-6 mx-auto max-w-6xl relative z-10">
        <div className="space-y-8 text-center mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#22d3ee] via-[#3b82f6] to-[#22d3ee] hover:from-[#3b82f6] hover:via-[#22d3ee] hover:to-[#3b82f6] transition-all duration-700">
            {"Let's Connect"}
          </h2>

          <p className="text-[#cbd5e1] text-xl sm:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
            {"I'm always open to new opportunities and exciting collaborations."} 
            <span className="block mt-2 text-[#64748b]">{"Let's create something amazing together!"}</span>
          </p>
        </div>

        <Card className="p-8 sm:p-14 backdrop-blur-xl border border-white/10 shadow-3xl rounded-3xl transform hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-[#1e293b]/90 to-[#0f172a]/90">
          <div className="flex flex-row gap-12 sm:gap-16 items-center justify-center">
            <a 
              href="https://www.linkedin.com/in/harshwardhan-patil-a1bb11289/" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#22d3ee] to-[#3b82f6] rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
              <Image 
                className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl shadow-lg group-hover:shadow-2xl transform group-hover:-translate-y-1 transition-all duration-500"
                src={linkedin} 
                alt="LinkedIn Profile" 
                width={80}
                height={80}
              />
            </a>

            <a 
              href="mailto:harshwardhan.patil2005@gmail.com"
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#3b82f6] to-[#22d3ee] rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
              <Image 
                src={gmail} 
                alt="Email Contact" 
                width={80} 
                height={80} 
                className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl shadow-lg group-hover:shadow-2xl transform group-hover:-translate-y-1 transition-all duration-500"
              />
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
}
