"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0.1 });
      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
      });
    };

    const handleHover = () => {
      gsap.to(cursorRef.current, { scale: 0.5, duration: 0.3 });
      gsap.to(followerRef.current, {
        scale: 3,
        opacity: 0.5,
        backgroundColor: "#fff",
        mixBlendMode: "difference",
        duration: 0.3,
      });
    };

    const handleUnhover = () => {
      gsap.to(cursorRef.current, { scale: 1, duration: 0.3 });
      gsap.to(followerRef.current, {
        scale: 1,
        opacity: 1,
        backgroundColor: "transparent",
        mixBlendMode: "difference", // Keep difference mode
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    // Use MutationObserver to handle dynamic elements (like Link loading)
    const observer = new MutationObserver(() => {
      const interactiveElements = document.querySelectorAll(
        "a, button, .interactive"
      );
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleUnhover);
        el.addEventListener("mouseenter", handleHover);
        el.addEventListener("mouseleave", handleUnhover);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Initial bind
    const interactiveElements = document.querySelectorAll(
      "a, button, .interactive"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleUnhover);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-white mix-blend-difference rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-white mix-blend-difference rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-colors hidden md:block"
      />
    </>
  );
};

export default CustomCursor;
