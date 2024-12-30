'use client';
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Hero() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    // Title animation (fade-in and move up)
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.5 }
    );

    // Description animation (fade-in and move up)
    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.7 }
    );
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-gray-900">
      <div className="container max-w-7xl px-4 sm:px-6 mx-auto text-center z-10">
        <div className="max-w-6xl mx-auto bg-gray-800/80 p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border border-gray-700">
          <h1
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-7xl font-extrabold mb-4 md:mb-8 text-[#28d0ff] break-words sm:whitespace-nowrap"
          >
            {"Hi, I'm"}{" "}
            <span className="text-white hover:text-gray-300 transition-colors duration-300 ">
              Harshwardhan Patil
            </span>
          </h1>
          <p
            ref={descriptionRef}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 leading-relaxed break-words sm:whitespace-nowrap px-2"
          >
            Full Stack Developer | AWS Certified | Passionate about Web & Mobile App Development
          </p>
        </div>
      </div>
    </section>
  );
}
