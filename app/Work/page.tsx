'use client'
import type { ComponentType, SVGProps } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaReact, FaJsSquare, FaBootstrap, FaFigma, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { WiDaySunny } from 'react-icons/wi';
import { SiTailwindcss, SiFramer } from 'react-icons/si';
import Link from 'next/link';
import Image from 'next/image';

interface Project {
    id: string;
    title: string;
    description: string;
    tech: string[];
    imageUrl: string;
    github: string;
    live: string;
}

const projects: Project[] = [
    {
        id: "01",
        title: "Mealfy",
        description: "A fully responsive restaurant website designed with a focus on UI/UX, clean structure, and accessibility. Built using HTML, CSS, and JavaScript, following modern frontend best practices and mobile-first design principles.",
        tech: ["HTML", "CSS", "JavaScript"],
        imageUrl: "/Mealfy.png",
        github: "https://github.com/AhmedAlkattan14/Mealfiy.git",
        live: "https://ahmedalkattan14.github.io/Mealfiy/"
    },
    {
        id: "02",
        title: "Login & Register Form",
        description: "Responsive authentication UI (Login & Register) built with HTML, CSS, and JavaScript, focusing on clean design, usability, and form validation.",
        tech: ["HTML", "CSS", "JavaScript"],
        imageUrl: "/Login.png",
        github: "https://github.com/AhmedAlkattan14/Login-register-form.git",
        live: "https://ahmedalkattan14.github.io/Login-register-form/"
    },
    {
        id: "03",
        title: "E-commerce",
        description: "A responsive e‑commerce app built with React, featuring reusable components and a dynamic user interface.",
        tech: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
        imageUrl: "/E-commerce.png",
        github: "https://github.com/AhmedAlkattan14/First-E-Commerce.git",
        live: "https://ahmedalkattan14.github.io/First-E-Commerce/"
    },
    {
        id: "04",
        title: "CRUD System",
        description: "Responsive CRUD app built with HTML, CSS, and JavaScript for creating, reading, updating, and deleting data.",
        tech: ["HTML", "CSS", "JavaScript"],
        imageUrl: "/Cruds System.png",
        github: "https://github.com/AhmedAlkattan14/Cruds-system.git",
        live: "https://ahmedalkattan14.github.io/Cruds-system/"
    },
    {
        id: "05",
        title: "Weather Forecast",
        description: "Responsive weather forecast app built with HTML, CSS, and JavaScript that displays location‑based weather details and forecasts using a weather API.",
        tech: ["HTML", "CSS", "API", "JavaScript"],
        imageUrl: "/Weather.png",
        github: "https://github.com/AhmedAlkattan14/Weather-Forecast.git",
        live: "https://ahmedalkattan14.github.io/Weather-Forecast/"
    },
    {
        id: "06",
        title: "Responsive Pizza Website",
        description: "Responsive pizza restaurant website built with HTML, CSS, and JavaScript, featuring a modern menu layout, hero section, and contact options for ordering.",
        tech: ["HTML", "CSS", "JavaScript"],
        imageUrl: "/Pizza.png",
        github: "https://github.com/AhmedAlkattan14/Responsive-pizza-website.git",
        live: "https://ahmedalkattan14.github.io/Responsive-pizza-website/"
    },
    {
        id: "07",
        title: "BookMarker",
        description: "Responsive bookmark manager built with HTML, CSS, and JavaScript that lets users save, view, and delete website links easily.",
        tech: ["HTML", "CSS", "JavaScript"],
        imageUrl: "/Bookmarker.png",
        github: "https://github.com/AhmedAlkattan14/BookMarker.git",
        live: "https://ahmedalkattan14.github.io/BookMarker/"
    },
    {
        id: "08",
        title: "Bakery Website",
        description: "Responsive bakery website built with HTML, CSS, and JavaScript, showcasing bakery services with an attractive layout and multiple sections for offers, gallery, about, and contact.",
        tech: ["HTML", "CSS", "JavaScript"],
        imageUrl: "/Bakery.png",
        github: "https://github.com/AhmedAlkattan14/Bakery.git",
        live: "https://ahmedalkattan14.github.io/Bakery/"
    },
];

export default function ProjectSlider() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 text-white">
            <Swiper
                modules={[Navigation]}
                loop={true}
                navigation={{
                    prevEl: ".custom-prev",
                    nextEl: ".custom-next",
                }}
                spaceBetween={40}
                slidesPerView={1}
            >
                {projects.map((project) => (
                    <SwiperSlide key={project.id}>
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10 p-5 sm:p-6 md:p-8 rounded-2xl bg-black/20 backdrop-blur-sm">

                            {/* Left Side */}
                            <div className="work-content flex flex-col justify-center space-y-6 text-center md:text-left">
                                <div>
                                    <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-transparent stroke-text opacity-20 select-none">{project.id}</h2>
                                    <h3 className="text-4xl sm:text-5xl font-semibold font-unbounded mt-2">{project.title}</h3>
                                </div>

                                <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                                    {project.description}
                                </p>

                                {/* Tech Icons */}
                                <div className="flex flex-wrap items-center gap-3 mt-2">
                                    {project.tech.map((tech, index) => {
                                        let IconComponent: ComponentType<SVGProps<SVGSVGElement>> | null = null;
                                        switch (tech.toLowerCase()) {
                                            case "html":
                                                IconComponent = FaHtml5;
                                                break;
                                            case "css":
                                                IconComponent = FaCss3Alt;
                                                break;
                                            case "react":
                                                IconComponent = FaReact;
                                                break;
                                            case "javascript":
                                                IconComponent = FaJsSquare;
                                                break;
                                            case "bootstrap":
                                            case "bootstrap css":
                                                IconComponent = FaBootstrap;
                                                break;
                                            case "tailwind":
                                            case "tailwind css":
                                                IconComponent = SiTailwindcss;
                                                break;
                                            case "figma":
                                                IconComponent = FaFigma;
                                                break;
                                            case "framer motion":
                                            case "motion":
                                                IconComponent = SiFramer;
                                                break;
                                            case "api":
                                                IconComponent = WiDaySunny; // أيقونة Weather API
                                                break;
                                            default:
                                                IconComponent = null;
                                        }

                                        return IconComponent ? (
                                            <div
                                                key={index}
                                                className="work-icons text-3xl text-[var(--primary-color)] hover:text-gray-400 cursor-pointer transition-all duration-300"
                                                title={tech}
                                            >
                                                <IconComponent />
                                            </div>
                                        ) : null;
                                    })}
                                </div>

                                {/* Buttons */}
                                <div className="work-share flex gap-4 pt-6 border-t border-gray-600 mt-6">
                                    {/* Live Demo Button */}
                                    <Link
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-500/10 hover:bg-white hover:text-black transition-all duration-500 group"
                                    >
                                        <i className="bi bi-arrow-right text-2xl transform rotate-[-45deg] transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"></i>
                                    </Link>

                                    {/* GitHub Button */}
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-500/10 hover:bg-white hover:text-black transition-all duration-500"
                                    >
                                        <i className="bi bi-github text-2xl"></i>
                                    </Link>
                                </div>
                            </div>

                            {/* Right Side */}
                            <div className="relative work-image">
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    width={500}
                                    height={300}
                                    className="max-w-full max-h-[400px] w-auto h-auto object-contain rounded-xl border-2 border-[var(--primary-color)] shadow-lg transform hover:scale-105 transition-all duration-500"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                {/* custom navigation buttons */}
                <div className="flex gap-3 justify-end mt-6">
                    <button className="custom-next w-12 h-12 flex items-center justify-center bg-[color:var(--primary-color)] text-white shadow rounded hover:bg-black transition-all duration-500 cursor-pointer">
                        <i className="bi bi-arrow-left text-2xl"></i>
                    </button>
                    <button className="custom-prev w-12 h-12 flex items-center justify-center bg-[color:var(--primary-color)] text-white shadow rounded hover:bg-black transition-all duration-500 cursor-pointer">
                        <i className="bi bi-arrow-right text-2xl"></i>
                    </button>
                </div>
            </Swiper>
        </div>
    );
}
