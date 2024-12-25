"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function About() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1lcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Profile"
                className="rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-4 -right-4 w-16 sm:w-24 h-16 sm:h-24 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-20 sm:w-32 h-20 sm:h-32 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              About Me
            </h2>
            
            <p className="text-lg sm:text-xl leading-relaxed text-gray-300 px-4 sm:px-0">
              Hi, I am a passionate developer with a focus on cloud computing, building scalable solutions. I work with both backend and frontend technologies to create maintainable applications optimized for the cloud, ensuring reliable deployment and management.
            </p>

            <div className="flex justify-center lg:justify-start gap-4 sm:gap-6">
              <Link
                href="https://github.com/harshwardhanpatil-8010"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-blue-500/20 hover:scale-110 transition-all duration-300"
                  aria-label="Github Profile"
                >
                  <Github className="h-5 w-5 sm:h-6 sm:w-6 text-gray-300" />
                </Button>
              </Link>
              
              <Link
                href="https://www.linkedin.com/in/harshwardhan-patil-a1bb11289/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-blue-500/20 hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-gray-300" />
                </Button>
              </Link>

              <Link
                href="mailto:harshwardhan.patil2005@gmail.com"
              >
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-blue-500/20 hover:scale-110 transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-gray-300" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
