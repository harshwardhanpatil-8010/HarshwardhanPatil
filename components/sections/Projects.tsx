
"use client"
import { Github, Code2, Boxes, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Projects() {
  return (
    <section className="relative min-h-[800px] overflow-hidden bg-gradient-to-b from-white via-blue-50 to-slate-50 dark:from-slate-900 dark:via-blue-900/10 dark:to-slate-800">
      <div className="relative container px-4 mx-auto py-8 sm:py-10">
        <div className="max-w-5xl mx-auto text-center mb-12 sm:mb-20">
          <div className="inline-block animate-bounce-slow mb-6 sm:mb-8">
            <div className="p-3 sm:p-4 rounded-3xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md shadow-2xl hover:shadow-blue-200/50 dark:hover:shadow-blue-500/20 transition-all duration-500">
              <Code2 className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-violet-500 to-purple-600 dark:from-blue-400 dark:via-violet-400 dark:to-purple-400 hover:scale-105 transition-transform duration-500">
            Crafting Digital Experiences
          </h2>
          
          <p className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto hover:text-slate-800 dark:hover:text-slate-300 transition-colors duration-300 px-4">
            Explore my collection of projects where code meets creativity. 
            Each project represents a unique challenge solved with modern 
            technology and clean code practices.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12 sm:mb-20">
            <a 
              href="https://github.com/harshwardhanpatil-8010" 
              target="_blank" 
              rel="noopener noreferrer"
              className="animate-pulse-slow w-full sm:w-auto px-4"
            >
              <Button
                variant="default"
                size="lg"
                className="w-full sm:w-auto group relative overflow-hidden rounded-full px-6 sm:px-10 py-5 sm:py-7 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 dark:from-blue-500 dark:to-violet-500 dark:hover:from-blue-600 dark:hover:to-violet-600 transform hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <span className="absolute inset-0 bg-white/20 group-hover:scale-105 transition-transform duration-500" />
                <Github className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                <span className="relative text-base sm:text-lg font-semibold text-white">View GitHub Profile</span>
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4">
            {[
              {
                icon: <Code2 className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: "Clean Code",
                description: "Writing maintainable and scalable solutions"
              },
              {
                icon: <Boxes className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: "Modern Stack",
                description: "Leveraging cutting-edge technologies"
              },
              {
                icon: <Sparkles className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: "Best Practices",
                description: "Following industry standards and patterns"
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="p-4 sm:p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border-none shadow-lg hover:shadow-2xl hover:shadow-blue-200/50 dark:hover:shadow-blue-500/20 hover:scale-105 transition-all duration-500"
              >
                <div className="rounded-2xl w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-100 to-violet-100 dark:from-blue-900/40 dark:to-violet-900/40 flex items-center justify-center mb-4 sm:mb-6 text-blue-600 dark:text-blue-400 hover:rotate-12 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg hover:text-slate-800 dark:hover:text-slate-300 transition-colors duration-300">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
