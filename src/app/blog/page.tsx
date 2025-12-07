"use client";
import React, { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import gsap from "gsap";
import { DATA } from "@/data";
import BlogItem from "@/components/features/BlogItem";
import Footer from "@/components/shared/Footer";

export default function Blog() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.from(".page-title", { y: 50, opacity: 0, duration: 1, delay: 0.2 });
      gsap.from(".blog-list-item", {
        y: 30,
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
          Journal
        </h1>
        <p className="mt-4 text-xl text-gray-500 max-w-2xl">
          Chia sẻ kiến thức về Business Analysis, UX Design và những bài học từ
          các dự án thực tế.
        </p>
      </div>
      <div className="flex flex-col">
        {DATA.blog.map((post) => (
          <div key={post.id} className="blog-list-item">
            <BlogItem post={post} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
