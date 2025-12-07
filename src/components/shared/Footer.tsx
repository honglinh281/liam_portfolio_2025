"use client";
import Link from "next/link";
import { DATA } from "@/data";

const Footer = () => {
  return (
    <footer className="py-20 px-6 md:px-20 flex flex-col justify-between min-h-[50vh] bg-white border-t border-black mt-20">
      <div>
        <Link
          href="/contact"
          className="text-[10vw] font-bold leading-none tracking-tighter hover:italic transition-all cursor-pointer interactive block"
        >
          LET'S CONNECT
        </Link>
      </div>

      <div className="flex justify-between items-end mt-20 text-xs font-mono uppercase text-gray-400">
        <span>
          © {new Date().getFullYear()} {DATA.personal.name}
        </span>
        <span>Portfolio {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;
