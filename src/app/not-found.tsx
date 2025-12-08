"use client";

import React, { useRef, useLayoutEffect, useState } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [glitchIntensity, setGlitchIntensity] = useState(0);

  useLayoutEffect(() => {
    // Basic check for client-side
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // CRT Flicker
      gsap.to(containerRef.current, {
        opacity: 0.95,
        duration: 0.1,
        repeat: -1,
        yoyo: true,
        ease: "rough({ template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false })",
      });

      // Text Glitch loop
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
      tl.to(textRef.current, { skewX: 10, duration: 0.1 })
        .to(textRef.current, { skewX: -10, duration: 0.1 })
        .to(textRef.current, { skewX: 0, duration: 0.1 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Calculate intensity based on cursor X position (0 to 1)
    const intensity = e.clientX / window.innerWidth;
    setGlitchIntensity(intensity);

    if (textRef.current) {
      gsap.to(textRef.current, {
        textShadow: `${intensity * 10}px 0 red, -${intensity * 10}px 0 blue`,
        duration: 0.2,
      });
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="bg-black text-white min-h-[100vh] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden"
    >
      {/* CRT Scanlines Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none" />

      {/* Vignette */}
      <div className="pointer-events-none fixed inset-0 z-50 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)]" />

      <h1
        ref={textRef}
        className="text-[25vw] font-bold leading-none select-none mix-blend-screen opacity-80"
      >
        404
      </h1>

      <div className="relative z-10 flex flex-col items-center gap-6 mt-10">
        <p className="text-xl md:text-2xl font-mono text-green-500 mb-4 animate-pulse">
          {"> SYSTEM ERROR: PAGE_NOT_FOUND"}
        </p>

        <Link
          href="/"
          className="group relative px-8 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-green-500 hover:text-black transition-all duration-200"
        >
          <span className="absolute inset-0 border-2 border-white group-hover:border-green-500 translate-x-1 translate-y-1 transition-transform group-hover:translate-x-0 group-hover:translate-y-0" />
          Reboot System (Home)
        </Link>
      </div>
    </div>
  );
}
