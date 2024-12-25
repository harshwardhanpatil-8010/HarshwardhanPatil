"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import linkedin from "@/public/linkedin.png";
import gmail from "@/public/gmail.png";

export function Contact() {
  return (
    <section className="min-h-[500px] py-12 sm:py-20 relative overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5"></div>

      <div className="container px-4 sm:px-6 mx-auto max-w-5xl relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 sm:mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#22d3ee] to-[#3b82f6] hover:from-[#3b82f6] hover:to-[#22d3ee] transition-all duration-500">
          Let's Connect
        </h2>

        <p className="text-[#cbd5e1] text-center mb-6 sm:mb-8 text-lg sm:text-xl max-w-2xl mx-auto font-light px-4">
          I'm always open to new opportunities and collaborations
        </p>

        <Card className="p-6 sm:p-12 backdrop-blur-md border border-opacity-20 shadow-2xl rounded-2xl transform hover:-translate-y-1 transition-all duration-500 bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/80">
          <div className="flex flex-row gap-8 sm:gap-12 items-center justify-center">
            <a 
              href="https://www.linkedin.com/in/harshwardhan-patil-a1bb11289/" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 transform transition-all duration-500 hover:-translate-y-1"
            >
              <Image 
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-500"
                src={linkedin} 
                alt="LinkedIn Profile" 
                width={64}
                height={64}
              />
            </a>

            <a 
              href="mailto:harshwardhan.patil2005@gmail.com"
              className="group flex items-center gap-4 transform transition-all duration-500 hover:-translate-y-1"
            >
              <Image 
                src={gmail} 
                alt="Email Contact" 
                width={64} 
                height={64} 
                className="w-12 h-12 sm:w-16 sm:h-16 shadow-lg group-hover:shadow-2xl transition-all duration-500"
              />
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
}