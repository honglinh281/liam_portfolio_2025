"use client";
import React, { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { ChevronLeft, BookOpen, Award, Briefcase } from "lucide-react";
import gsap from "gsap";
import { DATA } from "@/data";
import ExperienceItem from "@/components/features/ExperienceItem";
import Footer from "@/components/shared/Footer";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.from(".reveal-el", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        delay: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-32 min-h-screen bg-white text-black">
      <div className="px-6 md:px-20 mb-20">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-mono mb-8 interactive hover:opacity-60"
        >
          <ChevronLeft size={16} /> Back Home
        </Link>
        <h1 className="reveal-el text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-12">
          About Me
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-8">
            <p className="reveal-el text-xl md:text-3xl font-medium leading-relaxed mb-8">
              {DATA.personal.fullBio}
            </p>
            <p className="reveal-el text-lg text-gray-600 leading-relaxed">
              My strength lies in understanding users through interface design
              processes, combined with systematic thinking in business analysis.
              I always seek solutions that balance user experience with business
              objectives.
            </p>
          </div>

          <div className="md:col-span-4 space-y-12">
            <div className="reveal-el">
              <h3 className="flex items-center gap-2 font-bold uppercase tracking-widest mb-4 border-b border-black pb-2">
                <BookOpen size={16} /> Education
              </h3>
              {DATA.education.map((edu, i) => (
                <div key={i} className="mb-4">
                  <div className="font-bold">{edu.school}</div>
                  <div className="text-gray-600">{edu.degree}</div>
                  <div className="text-sm font-mono text-gray-400">
                    {edu.year}
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal-el">
              <h3 className="flex items-center gap-2 font-bold uppercase tracking-widest mb-4 border-b border-black pb-2">
                <Award size={16} /> Certifications
              </h3>
              <ul className="space-y-2">
                {DATA.certifications.map((cert, i) => (
                  <li key={i} className="text-gray-600">
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* WORK EXPERIENCE SECTION */}
        <div className="reveal-el">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Briefcase className="w-8 h-8" /> Work Experience
          </h2>
          <div className="max-w-4xl">
            {DATA.experience.map((exp, index) => (
              <ExperienceItem key={index} exp={exp} />
            ))}
          </div>
        </div>

        <div className="reveal-el mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-gray-200">
          <div>
            <h3 className="font-bold uppercase tracking-widest mb-6">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {DATA.skills.tech.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm font-mono"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold uppercase tracking-widest mb-6">
              Services
            </h3>
            <div className="flex flex-wrap gap-2">
              {DATA.skills.services.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 border border-gray-200 rounded-full text-sm font-mono"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-20 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold mb-8">Ready to work together?</h2>
        <Link
          href="/contact"
          className="interactive inline-block bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:scale-105 transition-transform"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
