"use client";
import React, { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import gsap from "gsap";
import { DATA } from "@/data";
import ProjectItem from "@/components/features/ProjectItem";
import Footer from "@/components/shared/Footer";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.from(".page-title", { y: 50, opacity: 0, duration: 1, delay: 0.2 });
      gsap.from(".project-list-item", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        delay: 0.4,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-32 px-6 md:px-20 min-h-screen">
      <div className="mb-20">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-mono mb-8 interactive hover:opacity-60"
        >
          <ChevronLeft size={16} /> Back Home
        </Link>
        <h1 className="page-title text-6xl md:text-8xl font-bold tracking-tighter uppercase">
          All Projects
        </h1>
      </div>
      <div className="flex flex-col">
        {DATA.projects.map((project) => (
          <div key={project.id} className="project-list-item">
            <ProjectItem project={project} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
