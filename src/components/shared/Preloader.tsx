"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Preloader = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    // Basic context for GSAP
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Dispatch a custom event so other components (like page transitions or layout) can know loading is done
          window.dispatchEvent(new Event("preloader-complete"));
          setComplete(true);
        },
      });

      // Animate percentage from 0 to 100
      tl.to(counterRef.current, {
        innerHTML: 100,
        duration: 2.5,
        snap: { innerHTML: 1 },
        ease: "power2.inOut",
        onUpdate: function () {
          if (counterRef.current) {
            counterRef.current.innerHTML =
              Math.round(this.targets()[0].innerHTML) + "%";
          }
        },
      });

      // Reveal the screen
      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power2.inOut",
        delay: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (complete) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black text-white"
    >
      <div className="absolute bottom-10 right-10">
        <span
          ref={counterRef}
          className="text-[10vw] font-bold font-mono leading-none"
        >
          0%
        </span>
      </div>
      <div className="uppercase tracking-widest text-sm font-mono absolute top-10 left-10">
        Loading Portfolio...
      </div>
    </div>
  );
};

export default Preloader;
