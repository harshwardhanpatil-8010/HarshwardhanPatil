"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import linkedin from "@/public/linkedin.png";
import gmail from "@/public/gmail.png";

export function Contact() {
  return (
    <section className="h-[700px] py-20 sm:py-32 relative overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 animate-pulse"></div>

      <div className="container px-6 sm:px-8 mx-auto max-w-7xl relative z-10">
        <div className="space-y-10 text-center mb-20">
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-[#22d3ee] via-[#3b82f6] to-[#22d3ee] hover:from-[#3b82f6] hover:via-[#22d3ee] hover:to-[#3b82f6] transition-all duration-700 animate-gradient">
            {"Let's Connect"}
          </h2>

          <p className="text-[#cbd5e1] text-2xl sm:text-3xl max-w-4xl mx-auto font-light leading-relaxed">
            {"I'm always open to new opportunities and exciting collaborations."} 
            <span className="block mt-4 text-[#64748b] text-xl sm:text-2xl italic">{"Let's create something amazing together!"}</span>
          </p>
        </div>

        <Card className="p-10 sm:p-16 backdrop-blur-2xl border-2 border-white/20 shadow-[0_0_50px_rgba(59,130,246,0.15)] rounded-[2rem] transform hover:-translate-y-3 transition-all duration-500 bg-gradient-to-br from-[#1e293b]/95 to-[#0f172a]/95">
          <div className="flex flex-row gap-16 sm:gap-24 items-center justify-center">
            <a 
              href="https://www.linkedin.com/in/harshwardhan-patil-a1bb11289/" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-[#22d3ee] to-[#3b82f6] rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500"></div>
              <Image 
                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl shadow-2xl group-hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transform group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-500"
                src={linkedin} 
                alt="LinkedIn Profile" 
                width={96}
                height={96}
              />
            </a>

            <a 
              href="mailto:harshwardhan.patil2005@gmail.com"
              className="group relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-[#3b82f6] to-[#22d3ee] rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500 "></div>
              <Image 
                src={gmail} 
                alt="Email Contact" 
                width={96} 
                height={96} 
                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl shadow-2xl group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transform group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-500"
              />
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
}
