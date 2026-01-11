import { link } from "fs";
import { Linkedin, Mail, Phone } from "lucide-react";

export const DATA = {
  personal: {
    name: "li@m",
    role: "Business Analyst & UI/UX Designer",
    location: "Hanoi, Vietnam",
    email: "vhonglinh28@gmail.com",
    phone: "036 861 9874",
    linkedin: "https://www.linkedin.com/in/vhlinh28",
    bio: "Transitioning from UI/UX Designer to Business Analyst with the goal of becoming a Product Owner within 3-5 years. I combine aesthetic thinking with sharp business analysis to create effective digital solutions.",
    fullBio:
      "IT graduate with 2 years of experience as a UI/UX Designer, I've participated in diverse projects including e-CRM, ERP, and Booking Apps. Recently, I transitioned to Business Analysis to gain a more comprehensive view of product development. I'm confident in my technical knowledge, design skills, and continuous learning mindset.",
  },
  experience: [
    {
      company: "Viettin Lab, Ltd",
      role: "Business Analyst",
      period: "Jan 2025 - Jul 2025",
      description: "Developing Labconnect Pro product (LIS System).",
      details: [
        "Developed features to support doctors and technicians in managing automated testing workflows.",
        "Conducted direct surveys and requirements gathering at major hospitals (Bach Mai, K Hospital, National Obstetrics Hospital).",
        "Designed integrated CRM module and Inventory & Asset Management module.",
        "Modeled business processes using BPMN 2.0 and designed UI/UX.",
        "Collaborated closely with Dev/Tester teams throughout feature lifecycle and UAT.",
      ],
    },
    {
      company: "Atomi Digital",
      role: "Business Analyst",
      period: "Aug 2024 - Jan 2025",
      description: "Developing LV24H e-banking product.",
      details: [
        "Designed business processes and user journeys for bill payment and recurring transfer features.",
        "Built BPMN diagrams and detailed documentation (BRD, FRD, SRS) to define business logic and system flows.",
      ],
    },
    {
      company: "Freelance",
      role: "UI/UX Designer & Business Analyst",
      period: "Aug 2024 - Current",
      description: "Participated in PV PIPE ERP and Finxy projects.",
      details: [
        "PV PIPE ERP: Analyzed steel pipe manufacturing processes, built business flows, and designed Wireframe/Prototype.",
        "Finxy (Finance App): Conducted competitive research, user interviews, interface design, and worked with PO to refine application flows.",
      ],
    },
    {
      company: "Capi Agency",
      role: "UI/UX Designer",
      period: "Aug 2024 - Jan 2025",
      description: "Pionails and mFamily projects.",
      details: [
        "Conducted customer interviews, researched existing POS system, and built Wireframe/Prototype.",
        "Performed Usability Testing with real users to evaluate application experience.",
      ],
    },
  ],
  education: [
    {
      school: "University of Economics Technology for Industries",
      degree: "Information Technology",
      year: "2020-2024",
    },
  ],
  certifications: [
    "Google UX Design (Coursera)",
    "Google Data Foundation (Coursera)",
    "Business Analysis Foundation (Hai Lua Mentor)",
  ],
  projects: [
    {
      id: 1,
      title: "Labconnect Pro",
      category: "LIS / Healthcare",
      year: "2025",
      description:
        "Laboratory Information System (LIS). Developed sample management features, integrated CRM, and inventory & asset management module.",
      company: "Viettin Lab, Ltd",
      link: "https://tree-chicory-cc4.notion.site/Labconnect-Pro-LIS-2e2590acf19e8079be52ec71640963f2?source=copy_link",
    },
    {
      id: 2,
      title: "LV24H E-banking",
      category: "Fintech / Banking",
      year: "2024",
      description:
        "Digital banking application. Designed business processes (BPMN) and user journeys for bill payment and recurring transfer features.",
      company: "Atomi Digital",
      link: "https://tree-chicory-cc4.notion.site/LV24H-E-banking-0121422b26864161a6b6c2101911245f?source=copy_link",
    },
    {
      id: 3,
      title: "PV PIPE ERP",
      category: "ERP / Manufacturing",
      year: "2024",
      description:
        "ERP system for steel pipe manufacturing management. Analyzed production processes, built business flows, and designed Wireframe/Prototype.",
      company: "PV Pipe - Petro Viet Nam",
      link: "https://tree-chicory-cc4.notion.site/PV-PIPE-ERP-2e2590acf19e8079be52ec71640963f2?source=copy_link",
    },
    {
      id: 4,
      title: "Finxy - Personal Finance Management",
      category: "Fintech",
      year: "2024",
      description:
        "Personal finance management app. Conducted competitive research, user interviews, and UI/UX design.",
      company: "Freelance",
      link: "https://tree-chicory-cc4.notion.site/Finxy-2e2590acf19e8079be52ec71640963f2?source=copy_link",
    },
    {
      id: 5,
      title: "Pionails POS & Mobile app",
      category: "POS / Booking",
      year: "2023",
      description:
        "Spa booking mobile app and POS system. Conducted competitive research, user interviews, and UI/UX design.",
      company: "Pionails",
      link: "https://tree-chicory-cc4.notion.site/Finxy-2e2590acf19e8079be52ec71640963f2?source=copy_link",
    },
    {
      id: 6,
      title: "Icann IELTS",
      category: "Education",
      year: "2025",
      description:
        "An OMO-powered educational platform connecting global users. Features gamified learning paths and a flexible infrastructure that bridges the gap between online and offline classrooms.",
      company: "Galaxy Education",
      link: "https://tree-chicory-cc4.notion.site/Finxy-2e2590acf19e8079be52ec71640963f2?source=copy_link",
    },
  ],
  blog: [
    {
      id: 1,
      title: "Transitioning from UI/UX Designer to Business Analyst",
      date: "Oct 12, 2024",
      category: "Career",
      excerpt:
        "The journey of shifting mindset from 'beautiful' to 'correct' and how design skills powerfully support business analysis work.",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "The Importance of BPMN 2.0 in Software Development Process",
      date: "Sep 28, 2024",
      category: "Knowledge",
      excerpt:
        "Why is business process modeling important? How to use BPMN for effective communication between Stakeholders and Dev team.",
      image:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Case Study: Optimizing User Experience for LIS System",
      date: "Aug 15, 2024",
      category: "Case Study",
      excerpt:
        "Lessons learned from designing interfaces for doctors and lab technicians at major hospitals.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Elicitation Skills - The Art of Requirements Gathering",
      date: "Jul 05, 2024",
      category: "Skills",
      excerpt:
        "How to ask the right questions and truly understand users' pain points instead of just hearing what they want.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    },
  ],
  skills: {
    tech: [
      "Figma",
      "Draw.io",
      "Jira",
      "PostgreSQL",
      "BPMN 2.0",
      "UML",
      "Microsoft Suite",
    ],
    services: [
      "Business Analysis",
      "UI/UX Design",
      "Wireframing & Prototyping",
      "Requirement Gathering",
      "UAT Testing",
    ],
  },
  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/vhlinh28" },
    { name: "Email", url: "mailto:vhonglinh28@gmail.com" },
    { name: "Phone", url: "tel:0368619874" },
  ],
};
