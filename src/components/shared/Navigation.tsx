"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { DATA } from "@/data";
import gsap from "gsap";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        y: "0%",
        duration: 0.8,
        ease: "power4.inOut",
      });
      gsap.fromTo(
        linksRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.4,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(menuRef.current, {
        y: "-100%",
        duration: 0.8,
        ease: "power4.inOut",
      });
    }
  }, [isOpen]);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Blog", path: "/blog" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full px-6 py-6 flex justify-between items-center z-50 mix-blend-difference text-white">
        <div className="flex items-center gap-12">
          <Link href="/" className="interactive relative z-50">
            <Image
              src="/logo.png"
              alt="Liam Portfolio Logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>
        </div>{" "}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="interactive hover:opacity-70 transition-opacity"
        >
          {isOpen ? (
            <span className="text-sm font-medium">CLOSE</span>
          ) : (
            <span className="text-sm font-medium">MENU</span>
          )}
        </button>
      </nav>

      <div
        ref={menuRef}
        className="fixed inset-0 bg-black text-white z-40 -translate-y-full flex flex-col justify-center items-center"
      >
        <ul className="space-y-6 text-center">
          {navItems.map((item, index) => (
            <li key={item.label} className="overflow-hidden">
              <Link
                href={item.path}
                ref={(el) => {
                  linksRef.current[index] = el;
                }}
                className={`block text-5xl md:text-7xl font-bold hover:text-gray-400 transition-colors interactive tracking-tighter ${
                  pathname === item.path ? "text-gray-500 italic" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="absolute bottom-10 text-sm opacity-50">
          &copy; {new Date().getFullYear()} {DATA.personal.name}
        </div>
      </div>
    </>
  );
};

export default Navigation;
