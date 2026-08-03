"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiFigma,
  SiAdobephotoshop,
  SiVite,
  SiNpm,
  SiPostman
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

// Hover Variants
const hoverScaleGlow = {
  rest: { scale: 1, boxShadow: "0px 0px 0px rgba(255,255,255,0)", borderColor: "rgba(255,255,255,0)" },
  hover: {
    scale: 1.06,
    borderColor: "var(--primary-color)",
    boxShadow: "0px 0px 22px rgba(255,255,255,0.18)",
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }
  }
};

export default function Resume() {

  // -------- New added scroll system --------
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);

    setTimeout(() => {
      contentRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 150);
  };

  const [activeTab, setActiveTab] = useState("Experience");
  const tabs = ["Experience", "Education", "Skills", "About Me"];

  const experiences = [
    {
      Data: "Aug 2024 – Present",
      Role: "Frontend Developer | Freelance",
      Company: "Upwork / 5amsat / Fiverr",
      Summary: "Delivered responsive web applications and e-commerce sites. Collaborated with clients to create tailored web solutions, improving UI/UX and performance."
    },
    {
      Data: "Aug 2023 – Jul 2024",
      Role: "Career transition",
      Company: "Career Break",
      Summary: "Took a career break to transition into software development. Learned modern frontend technologies (HTML, CSS, JavaScript, React, Next.js, Tailwind CSS), completed training programs, and built personal and freelance projects to apply my skills."
    },
    {
      Data: "Sep 2022 – Jul 2023",
      Role: "Store Manager",
      Company: "Bim Misr",
      Summary: "Managed daily store operations, supervised staff, maintained inventory accuracy, ensured product availability, and delivered high customer service standards while achieving sales targets."
    },
    {
      Data: "Mar 2022 – Aug 2022",
      Role: "Direct Account Manager",
      Company: "Paymob",
      Summary: "Managed client accounts, promoted services, collaborated with marketing, and provided performance reports to boost revenue."
    },
    {
      Data: "Oct 2016 – Jul 2022",
      Role: "Senior Sales",
      Company: "Etisalat",
      Summary: "Analyzed market trends, optimized sales strategies, resolved customer issues, and enhanced loyalty."
    },
    {
      Data: "Sep 2015 – Jul 2016",
      Role: "Sales Outdoor",
      Company: "Orange",
      Summary: "Engaged with customers, demonstrated products, built relationships, and exceeded sales goals."
    }
  ];


  const educations = [
    {
      Data: "Jun 2014",
      Degree: "Bachelor of Law",
      Institution: "Sadat University",
      Summary: "Graduated with a strong foundation in law, analytical skills, and problem-solving."
    },
    {
      Data: "Dec 2023",
      Degree: "Programming Fundamentals Diploma",
      Institution: "Route Academy",
      Summary: "Learned object-oriented programming, algorithms, and practical C++ development."
    },
    {
      Data: "Jul 2024",
      Degree: "Frontend Development Diploma",
      Institution: "Pioneers of Digital Egypt - MCIT",
      Summary: "Mastered HTML, CSS, JavaScript, React, Next.js, responsive design, and UI/UX."
    },
    {
      Data: "Jan 2023",
      Degree: "English Language Course",
      Institution: "Accepted Academy",
      Summary: "Improved English communication, grammar, and professional writing skills."
    }
  ];


  const skills = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Photoshop", icon: <SiAdobephotoshop /> },
    { name: "Vite", icon: <SiVite /> },
    { name: "VS Code", icon: <VscCode /> },
    { name: "NPM", icon: <SiNpm /> },
    { name: "Postman", icon: <SiPostman /> }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  interface CardProps { title?: string; subtitle?: string; date?: string; summary?: string } const Card = ({ title, subtitle, date, summary }: CardProps) => (
    <motion.div
      variants={hoverScaleGlow}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="bg-gray-800/40 backdrop-blur-xl px-6 py-6 rounded-xl border border-gray-700 
    transition-all duration-300 cursor-pointer shadow-md"
    >
      <h4 className="font-bold text-lg text-white">{title}</h4>
      <p className="text-gray-400 text-sm">{subtitle}</p>
      <span className="text-gray-500 text-xs">{date}</span>
      {summary && <p className="text-gray-300 text-sm mt-2">{summary}</p>}
    </motion.div>
  );


  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* ---- LEFT SIDE ---- */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="space-y-6">
          <h2 className="text-5xl font-bold font-unbounded leading-tight">
            Why hire me?
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Skilled and passionate developer creating high-performance and modern web experiences.
          </p>

          {/* Tabs */}
          <div className="flex flex-col gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`relative text-left px-6 py-4 rounded-xl cursor-pointer font-semibold transition-all duration-300 backdrop-blur-md border group overflow-hidden
                ${activeTab === tab
                    ? "bg-[var(--primary-color)] text-white border-transparent shadow-lg"
                    : "bg-gray-800/20 text-gray-400 border-gray-700 hover:bg-gray-700/30 hover:text-white"
                  }`}
              >
                {tab}

                <span className={`absolute bottom-0 left-0 h-[2px] w-full bg-[var(--primary-color)] transition-transform duration-300
                ${activeTab === tab ? "scale-100" : "scale-0 group-hover:scale-100"}`} />
              </button>
            ))}
          </div>
        </motion.div>

        {/* ---- RIGHT CONTENT ---- */}
        <div ref={contentRef} className="md:col-span-2 mt-10 md:mt-0">
          <motion.h3
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-semibold"
          >
            {activeTab}
          </motion.h3>

          <AnimatePresence mode="wait">

            {activeTab === "Experience" && (
              <motion.div
                key="exp"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pr-3"
              >
                {experiences.map((exp, i) => (
                  <Card key={i} title={exp.Role} subtitle={exp.Company} date={exp.Data} summary={exp.Summary} />

                ))}
              </motion.div>
            )}

            {activeTab === "Education" && (
              <motion.div
                key="edu"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8"
              >
                {educations.map((edu, i) => (
                  <Card key={i} title={edu.Degree} subtitle={edu.Institution} date={edu.Data} summary={edu.Summary} />

                ))}
              </motion.div>
            )}

            {activeTab === "Skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8"
              >
                {skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.07, rotate: 0.6 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="flex flex-col items-center gap-3 bg-gray-800/30 px-6 py-6 rounded-xl border border-gray-700 
                    hover:border-[var(--primary-color)] hover:shadow-[0_0_18px_var(--primary-color)]
                    transition-all duration-300"
                  >
                    <span className="text-4xl transition-colors duration-300">
                      {skill.icon}
                    </span>
                    <p className="font-medium text-gray-300">{skill.name}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "About Me" && (
              <motion.div
                key="about"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="bg-gray-800/40 px-8 py-10 rounded-xl border border-gray-700 mt-6 shadow backdrop-blur-lg"
              >
                <p className="text-gray-300 leading-relaxed">
                  Frontend Developer with a strong foundation in HTML, CSS, JavaScript, React, and Next.js. I have a background in sales which enhances my communication, problem-solving, and understanding of business needs. I build responsive, user-focused web applications and constantly strive to deliver clean and efficient code while creating elegant UI experiences.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

