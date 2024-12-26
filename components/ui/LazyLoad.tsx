"use client"
import { useEffect, useRef, useState } from "react";

interface LazyLoadProps {
  children: React.ReactNode;
  threshold?: number;
}

export const LazyLoad = ({ children, threshold = 0.5 }: LazyLoadProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div ref={ref} className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      {isVisible && children}
    </div>
  );
};