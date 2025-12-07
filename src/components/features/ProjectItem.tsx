"use client";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";

interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  company: string;
}

const ProjectItem = ({ project }: { project: Project }) => {
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    // Only animate if element exists
    const arrow = itemRef.current?.querySelector(".arrow");
    if (arrow) {
      gsap.to(arrow, { x: 5, y: -5, duration: 0.3 });
    }
    gsap.to(itemRef.current, { paddingLeft: "2rem", duration: 0.3 });
  };

  const handleMouseLeave = () => {
    const arrow = itemRef.current?.querySelector(".arrow");
    if (arrow) {
      gsap.to(arrow, { x: 0, y: 0, duration: 0.3 });
    }
    gsap.to(itemRef.current, { paddingLeft: "0rem", duration: 0.3 });
  };

  return (
    <div
      ref={itemRef}
      className="project-item group interactive relative border-t border-black py-12 cursor-pointer transition-all hover:bg-gray-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col md:flex-row justify-between items-baseline px-4 gap-4">
        <div>
          <h3 className="text-3xl md:text-5xl font-medium tracking-tight group-hover:opacity-100 transition-opacity">
            {project.title}
          </h3>
          <p className="text-sm text-gray-500 mt-2 font-mono">
            {project.company}
          </p>
        </div>
        <div className="flex flex-col md:items-end gap-2 md:w-1/2">
          <div className="flex items-center gap-4 self-start md:self-end">
            <span className="text-sm font-mono uppercase tracking-widest text-gray-500">
              {project.category}
            </span>
            <span className="text-sm font-mono">{project.year}</span>
            <ArrowUpRight className="arrow w-6 h-6 transition-transform" />
          </div>
          <p className="text-sm text-gray-600 max-w-md md:text-right mt-2">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
