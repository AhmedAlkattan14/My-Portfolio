"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Ahmed from "../../public/Ahmed.png";
import { CountUp } from "countup.js";
import { useEffect, useRef } from "react";

const stateData = [
  { value: 2, label: "Years of\nExperience" },
  { value: 15, label: "Projects\nCompleted" },
  { value: 10, label: "Technologies\nMastered" },
  { value: 110, label: "Code\nCommits" },
];

export default function Header() {
  // Initialize animated counters once after component mounts
  const countRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  useEffect(() => {
    countRefs.current.forEach((el, index) => {
      if (el) {
        const countUp = new CountUp(el, stateData[index].value, {
          duration: 3,
          separator: ",",
          suffix: "+"
        });
        if (!countUp.error) {
          countUp.start();
        }
        else {
          console.log(countUp.error);
        }
      }
    })
  }, []);

  return (
    <header className="relative flex flex-col justify-center min-h-screen text-white overflow-visible">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-r from-[var(--primary-light-1)] to-[var(--primary-light-2)] blur-[80px] sm:blur-[100px] md:blur-[120px] -z-10"></div>
      <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] rounded-full bg-gradient-to-r from-[var(--primary-light-1)] to-[var(--primary-light-2)] blur-[80px] sm:blur-[100px] md:blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-[5%] w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-r from-[var(--primary-light-1)] to-[var(--primary-light-2)] blur-[80px] sm:blur-[100px] md:blur-[120px] -z-10"></div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 
                  pt-16 sm:pt-20 md:pt-24 lg:pt-8 xl:pt-24 
                  flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-12 md:gap-15 lg:gap-5 xl:gap-24">

        {/* Left Section */}
        <div className="lg:w-3/4 text-center lg:text-left w-full animate-fade-in-up animation-delay-200">
          <h1 className="font-unbounded font-semibold leading-tight mb-1 sm:mb-4 text-center lg:text-left animate-fade-in-up animation-delay-400">
            <span className="block text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
              Hello, I&apos;m
            </span>

            {/* Animated Text (fixed size) */}
            <div
              className="relative inline-flex items-center justify-start overflow-hidden animate-fade-in-up animation-delay-600"
              style={{
                height: "6em",
              }}
              role="status"
              aria-live="polite"
            >
              <TypeAnimation
                sequence={[
                  "Ahmed Alkattan", 3500,
                  "Frontend Developer", 3500,
                  "React Developer", 3500,
                  "Next.js Developer", 3500,
                  "UI Designer", 3500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                preRenderFirstString
                className="block text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl text-[color:var(--primary-color)] leading-tight"
              />
            </div>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-sm sm:max-w-md md:max-w-lg mx-auto lg:mx-0 leading-relaxed mb-4 sm:mb-6 animate-fade-in-up animation-delay-800">
            Passionate about crafting elegant, responsive, and user-friendly
            web interfaces using modern frameworks like React and Next.js.
            Always exploring creative ways to bring ideas to life through clean code.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-center justify-center lg:justify-start animate-fade-in-up animation-delay-1000 mt-8">
            <a
              href="/Ahmed-Cv.pdf"
              download
              aria-label="Download Ahmed Alkattan CV"
              className="group relative inline-flex items-center gap-2 border border-[var(--primary-color)] font-bold text-[var(--primary-color)] px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base overflow-hidden transition-all duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg"
            >
              <span className="absolute inset-0 bg-[var(--primary-color)] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
              <span className="relative z-10 flex items-center gap-2">
                <i className="bi bi-download" aria-hidden="true"></i>
                <span>Download CV</span>
              </span>
            </a>

            <div className="flex hero-social gap-3 sm:gap-4 md:gap-5 text-lg sm:text-xl md:text-2xl mt-5 sm:mt-0 animate-fade-in-up animation-delay-1200">
              <a className="transition-all duration-300 hover:-translate-y-[3px] hover:text-[var(--primary-color)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg p-1"
                href="https://github.com/AhmedAlkattan14cx"
                aria-label="Visit Ahmed Alkattan GitHub profile"
                target="_blank"
                rel="noopener noreferrer">
                <i className="bi bi-github " aria-hidden="true"></i>
              </a>

              <a className="transition-all duration-300 hover:-translate-y-[3px] hover:text-[var(--primary-color)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg p-1"
                href="https://www.linkedin.com/in/ahmed-alkattan/"
                aria-label="Visit Ahmed Alkattan LinkedIn profile"
                target="_blank"
                rel="noopener noreferrer">
                <i className="bi bi-linkedin" aria-hidden="true"></i>
              </a>

              <a className="transition-all duration-300 hover:-translate-y-[3px] hover:text-[var(--primary-color)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg p-1"
                href="https://www.facebook.com/profile.php?id=100006087603110"
                aria-label="Visit Ahmed Alkattan Facebook profile"
                target="_blank"
                rel="noopener noreferrer">
                <i className="bi bi-facebook" aria-hidden="true"></i>
              </a>

              <a className="transition-all duration-300 hover:-translate-y-[3px] hover:text-[var(--primary-color)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-color)] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg p-1"
                href="https://www.instagram.com/ahmed_elqattan/"
                aria-label="Visit Ahmed Alkattan Instagram profile"
                target="_blank"
                rel="noopener noreferrer">
                <i className="bi bi-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 w-full mt-1 sm:mt-3 lg:mt-0 flex justify-center lg:justify-start relative lg:-ml-6 animate-fade-in-up animation-delay-800">
          <div className="relative w-[clamp(180px,50vw,320px)] sm:w-[clamp(200px,45vw,350px)] md:w-[clamp(220px,40vw,380px)] aspect-square rounded-full overflow-hidden shadow-[0_0_20px_rgba(252,65,0,0.3)] bg-gradient-to-tr from-[var(--primary-light-1)] to-[var(--primary-color)] animate-fade-in-up animation-delay-1000">
            <Image
              src={Ahmed}
              alt="Ahmed Alkattan - Frontend Developer and UI Designer"
              className="w-full h-full object-cover object-[50%_34%] rounded-full scale-105 hover:scale-110 transition-transform duration-500 border-4 border-[var(--primary-color)]"
              priority
              sizes="(max-width: 640px) 180px, (max-width: 768px) 200px, (max-width: 1024px) 220px, 320px"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
      {/* Stats Section */}
      <div className="w-full border-t border-white/10 mt-10 pt-6">
        <div
          className="
      container mx-auto 
      px-4 sm:px-6 lg:px-8 
      grid 
      grid-cols-2 sm:grid-cols-2 md:grid-cols-4 
      gap-6 md:gap-12 
      text-center  
      py-10
    "
        >
          {stateData.map((stat, index) => (
            <div
              key={index}
              className="
          flex flex-col sm:flex-row items-center lg:items-start 
          justify-center lg:justify-start gap-3
          bg-white/5 backdrop-blur-sm 
          border border-white/10 rounded-2xl 
          py-6 px-4 
          transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]
          hover:scale-105 hover:border-[#fc4100] hover:shadow-[0_0_25px_#fc410020]
        "
            >
              <h1
                ref={(el) => { countRefs.current[index] = el }}
                className="text-3xl md:text-5xl font-unbounded font-bold text-[#fc4100] drop-shadow-[0_0_5px_#fc410060]"
              >
                0
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-gray-300 font-medium whitespace-pre-line leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}


