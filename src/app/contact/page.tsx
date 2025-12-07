"use client";
import React, { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { ChevronLeft, Linkedin, Mail, Phone } from "lucide-react";
import gsap from "gsap";
import { DATA } from "@/data";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.from(".contact-el", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        delay: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="pt-32 px-6 md:px-20 min-h-screen bg-black text-white flex flex-col"
    >
      <Link
        href="/"
        className="contact-el flex items-center gap-2 text-sm font-mono mb-12 interactive hover:opacity-60"
      >
        <ChevronLeft size={16} /> Back Home
      </Link>

      <div className="flex-grow flex flex-col justify-center">
        <h1 className="contact-el text-[12vw] font-bold leading-none tracking-tighter mb-12 text-center md:text-left">
          HELLO.
        </h1>

        <div className="contact-el grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 border-t border-gray-800 pt-12">
          <div>
            <p className="text-gray-400 mb-4 font-mono uppercase tracking-widest">
              Email Me
            </p>
            <a
              href={`mailto:${DATA.personal.email}`}
              className="text-2xl md:text-4xl font-medium hover:text-gray-300 interactive block break-all"
            >
              {DATA.personal.email}
            </a>
          </div>
          <div>
            <p className="text-gray-400 mb-4 font-mono uppercase tracking-widest">
              Call Me
            </p>
            <a
              href={`tel:${DATA.personal.phone}`}
              className="text-2xl md:text-4xl font-medium hover:text-gray-300 interactive block"
            >
              {DATA.personal.phone}
            </a>
          </div>
          <div>
            <p className="text-gray-400 mb-4 font-mono uppercase tracking-widest">
              Socials
            </p>
            <div className="flex gap-4">
              {DATA.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="interactive px-6 py-3 border border-white rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition-all"
                >
                  {/* Icons aren't dynamically rendered from DATA easily here unless we map them, using simple text for now or importing icons if we want dynamic icons. 
                                    Since DATA contains JSX elements for icons in the original code, but we moved to index.ts without TSX.
                                    We should map them based on name or just hardcode generic icons or update DATA structure.
                                    In index.ts I removed the JSX icons. So I'll just use text or re-add icons here.
                                    Actually, I should assume DATA doesn't have the icon components anymore as I migrated it to pure TS data.
                                */}
                  {social.name === "LinkedIn" && <Linkedin size={20} />}
                  {social.name === "Email" && <Mail size={20} />}
                  {social.name === "Phone" && <Phone size={20} />}
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="contact-el py-12 text-center text-gray-500 font-mono text-xs uppercase">
        &copy; {new Date().getFullYear()} {DATA.personal.name}
      </div>
    </div>
  );
}
