"use client";

import React, { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // Basic check for client-side
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Glitch/Shake effect
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
      tl.to(".error-text", { x: -5, duration: 0.1 })
        .to(".error-text", { x: 5, duration: 0.1 })
        .to(".error-text", { x: -5, duration: 0.1 })
        .to(".error-text", { x: 0, duration: 0.1 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-black text-white min-h-[100vh] flex flex-col items-center justify-center p-6 text-center"
    >
      <h1 className="error-text text-[15vw] font-bold leading-none select-none mix-blend-difference">
        404
      </h1>
      <p className="text-xl md:text-2xl font-mono text-gray-400 mb-8 max-w-lg">
        Lạc lối giữa các dòng code?
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="interactive px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-all uppercase text-sm font-medium tracking-wide"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
