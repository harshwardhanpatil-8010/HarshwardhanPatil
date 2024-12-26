
'use client';
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-32 md:w-64 h-32 md:h-64 bg-indigo-700/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-purple-700/30 rounded-full blur-3xl"></div>
      </div>
      <div className="container max-w-7xl px-4 sm:px-6 mx-auto text-center z-10">
        <div className="max-w-6xl mx-auto bg-gray-800/80 p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border border-gray-700">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold mb-4 md:mb-8 text-[#28d0ff] break-words sm:whitespace-nowrap">
           {"Hi, I'm"}{" "}
            <span className="text-white hover:text-gray-300 transition-colors duration-300">
              Harshwardhan Patil
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 leading-relaxed break-words sm:whitespace-nowrap px-2">
            Full Stack Developer | AWS Certified | Passionate about Web & Mobile App Development
          </p>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/10 pointer-events-none z-0"></div>
    </section>
  );
}
