"use client";

import React, { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DATA } from "@/data";
import ProjectItem from "@/components/features/ProjectItem";
import Footer from "@/components/shared/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // Basic check to ensure window is available
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Hero Anims
      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-line",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
          delay: 0.2,
        }
      ).fromTo(
        subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.5"
      );

      // Sections Anims
      gsap.from(".home-project-header", {
        scrollTrigger: { trigger: ".home-projects", start: "top 85%" },
        y: 50,
        opacity: 0,
        duration: 1,
      });

      gsap.from(".home-project-item", {
        scrollTrigger: { trigger: ".home-projects", start: "top 75%" },
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
      });

      // Blog Anims
      gsap.from(".home-blog-header", {
        scrollTrigger: { trigger: ".home-blog", start: "top 90%" },
        y: 50,
        opacity: 0,
        duration: 1,
      });
      gsap.from(".home-blog-item", {
        scrollTrigger: { trigger: ".home-blog-list", start: "top 90%" },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        clearProps: "all",
      });

      // About Anims
      gsap.from(".home-about-text", {
        scrollTrigger: { trigger: ".home-about", start: "top 75%" },
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-20">
      {/* HERO SECTION */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-20">
        <div
          ref={textRef}
          className="font-bold text-[10vw] leading-[0.9] tracking-tighter uppercase mix-blend-darken"
        >
          <div className="overflow-hidden">
            <div className="hero-line">Business</div>
          </div>
          <div className="overflow-hidden">
            <div className="hero-line pl-[5vw] text-gray-400">Analyst</div>
          </div>
          <div className="overflow-hidden">
            <div className="hero-line">& Designer</div>
          </div>
        </div>
        <div
          ref={subRef}
          className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-end w-full max-w-5xl ml-auto border-t border-black pt-6"
        >
          <div className="flex flex-col gap-6 max-w-lg mb-4 md:mb-0">
            <p className="text-lg md:text-xl font-light">{DATA.personal.bio}</p>

            <div className="flex gap-4">
              <a
                href={`mailto:${DATA.personal.email}`}
                className="interactive flex items-center gap-2 text-sm font-mono border border-black rounded-full px-4 py-2 hover:bg-black hover:text-white transition-all"
              >
                <Mail size={14} /> Email Me
              </a>
              <a
                href={DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="interactive flex items-center gap-2 text-sm font-mono border border-black rounded-full px-4 py-2 hover:bg-black hover:text-white transition-all"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <span className="font-mono text-sm mb-2">
              {DATA.personal.location}
            </span>
            <div className="hidden md:block animate-bounce text-sm">
              Scroll ↓
            </div>
          </div>
        </div>
      </section>

      {/* HOME PROJECTS */}
      <section className="home-projects py-20 px-6 md:px-20">
        <div className="home-project-header mb-12 flex justify-between items-end">
          <h2 className="text-sm font-bold uppercase tracking-widest border-b border-black pb-2">
            Selected Works
          </h2>
          <Link
            href="/projects"
            className="text-sm font-mono underline interactive hover:text-gray-500"
          >
            View All
          </Link>
        </div>
        <div className="flex flex-col">
          {DATA.projects.slice(0, 3).map((project) => (
            <div key={project.id} className="home-project-item">
              <ProjectItem project={project} />
            </div>
          ))}
        </div>
      </section>

      {/* HOME BLOG */}
      <section className="home-blog py-20 px-6 md:px-20 bg-gray-50">
        <div className="home-blog-header mb-12 flex justify-between items-end">
          <h2 className="text-sm font-bold uppercase tracking-widest border-b border-black pb-2">
            Latest Thoughts
          </h2>
          <Link
            href="/blog"
            className="text-sm font-mono underline interactive hover:text-gray-500"
          >
            View All
          </Link>
        </div>
        <div className="home-blog-list grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {DATA.blog.slice(0, 4).map((post) => (
            <Link
              href="/blog"
              key={post.id}
              className="home-blog-item group interactive cursor-pointer flex flex-col gap-4"
            >
              {post.image && (
                <div className="aspect-[2/1] w-full relative overflow-hidden bg-gray-100 border border-black/10">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                  />
                </div>
              )}
              <div className="flex flex-col">
                <span className="text-xs font-mono text-gray-400 mb-2 block uppercase tracking-wider">
                  {post.date}
                </span>
                <h3 className="text-xl font-bold leading-tight mb-3 group-hover:underline decoration-1 underline-offset-4">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* HOME ABOUT */}
      <section className="home-about py-32 px-6 md:px-20 bg-black text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="home-about-text text-sm font-bold uppercase tracking-widest text-gray-500 mb-8">
              About Me
            </h2>
            <div className="home-about-text text-3xl md:text-5xl font-medium leading-tight tracking-tight mb-8">
              Cử nhân CNTT với 2 năm kinh nghiệm UI/UX Design, hiện đang tập
              trung vào Business Analysis.
            </div>
            <Link
              href="/about"
              className="home-about-text interactive px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-all uppercase text-sm font-medium tracking-wide inline-block"
            >
              View Experience & Details
            </Link>
          </div>
          <div className="flex flex-col justify-end space-y-8">
            <p className="home-about-text text-lg text-gray-400 leading-relaxed">
              Tôi có kinh nghiệm thực tế qua nhiều dự án đa dạng như e-CRM, ERP,
              Booking App và Hệ thống LIS y tế. Điểm mạnh của tôi là khả năng
              thấu hiểu người dùng thông qua quá trình thiết kế giao diện, kết
              hợp với tư duy hệ thống khi phân tích nghiệp vụ.
            </p>
            <div className="home-about-text grid grid-cols-2 gap-8 text-sm font-mono text-gray-500 pt-8 border-t border-gray-800">
              <div>
                <span className="block text-white mb-2 font-bold">
                  Skills & Tools
                </span>
                {DATA.skills.tech.join(", ")}
              </div>
              <div>
                <span className="block text-white mb-2 font-bold">
                  Core Competencies
                </span>
                {DATA.skills.services.join(", ")}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
