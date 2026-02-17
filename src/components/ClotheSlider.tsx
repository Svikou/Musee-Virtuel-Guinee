"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Poststik",
    subtitle: "Syngraf absofi ekocentrism reception",
    src: "/HommePerso.png",
    alt: "",
  },
  {
    id: 2,
    title: "Kalimba",
    subtitle: "Resonant tones of the African mbira",
    src: "/FemmePerso",
    alt: "Kalimba instrument",
  },
  {
    id: 3,
    title: "Balafon",
    subtitle: "West African wooden xylophone tradition",
    src: "/VieillePerso.png",
    alt: "Balafon instrument",
  },
];

export default function ClotheSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const len = slides.length;

  const goTo = (index: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((index + len) % len);
      setAnimating(false);
    }, 300);
  };

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  const leftIndex = (current - 1 + len) % len;
  const rightIndex = (current + 1) % len;

  const centerSlide = slides[current];
  const leftSlide = slides[leftIndex];
  const rightSlide = slides[rightIndex];

  return (
    <div className="flex flex-col items-center w-full py-1 font-serif">
      {/* Mobile Version */}
      <div className="flex sm:hidden w-full items-center justify-center px-4">
        <button
          onClick={prev}
          aria-label="Previous"
          className="flex-shrink-0 w-10 h-10 rounded-full bg-[#785E4766]/60 backdrop-blur-sm transition-all duration-100 hover:bg-[#3a2e26]/90  hover:scale-100 flex items-center justify-center mr-4"
        >
          <ChevronLeft size={20} className="text-white" />
        </button>

        <div
          className="flex-1 flex items-center justify-center transition-all duration-300 ease-in-out"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? "scale(0.97)" : "scale(1)",
          }}
        >
          <img
            src={centerSlide.src}
            alt={centerSlide.alt}
            className="w-full max-w-[140px] object-contain"
            style={{ filter: "drop-shadow(0 12px 32px rgba(0,0,0,0.22))" }}
          />
        </div>

        <button
          onClick={next}
          aria-label="Next"
          className="flex-shrink-0 w-10 h-10 rounded-full bg-[#785E4766]/60 backdrop-blur-sm transition-all duration-100 hover:bg-[#3a2e26]/90  hover:scale-100 flex items-center justify-center ml-4"
        >
          <ChevronRight size={20} className="text-white" />
        </button>
      </div>

      {/* Desktop */}
      <div className="hidden sm:flex relative w-full max-w-[760px] h-[300px] lg:h-[340px] xl:h-[380px] items-center justify-center">
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#785E4766]/60 backdrop-blur-sm transition-all duration-100 hover:bg-[#3a2e26]/90 hover:scale-100 flex items-center justify-center"
        >
          <ChevronLeft size={20} className="text-white" />
        </button>

        <div
          className="relative w-full h-full flex items-center justify-center transition-all duration-300 ease-in-out"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? "scale(0.97)" : "scale(1)",
          }}
        >
          {/* Left side  */}
          <div className="absolute top-1/2 -translate-y-1/2 z-[1] left-[10%] lg:left-[11%] xl:left-[12%]">
            <img
              src={leftSlide.src}
              alt={leftSlide.alt}
              className="object-contain brightness-75 opacity-50 h-[140px] md:h-[140px] lg:h-[160px] xl:h-[180px]"
              style={{ transform: "perspective(600px) rotateY(8deg)" }}
            />
          </div>

          {/* Center */}
          <div className="z-2 flex items-center justify-center">
            <img
              src={centerSlide.src}
              alt={centerSlide.alt}
              className="object-contain h-[200px] lg:h-[240px] xl:h-[280px]"
              style={{ filter: "drop-shadow(0 12px 32px rgba(0,0,0,0.22))" }}
            />
          </div>

          {/* Right side */}
          <div className="absolute top-1/2 -translate-y-1/2 z-1 right-[10%] lg:right-[11%] xl:right-[12%]">
            <img
              src={rightSlide.src}
              alt={rightSlide.alt}
              className="object-contain brightness-75 opacity-50 h-[150px] md:h-[140px] lg:h-[160px] xl:h-[180px]"
              style={{ transform: "perspective(600px) rotateY(-8deg)" }}
            />
          </div>
        </div>

        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#785E4766]/60 backdrop-blur-sm transition-all duration-100 hover:bg-[#3a2e26]/90  hover:scale-100 flex items-center justify-center"
        >
          <ChevronRight size={20} className="text-white" />
        </button>
      </div>

      {/* Description */}
      <div
        className="text-center  transition-opacity duration-300"
        style={{ opacity: animating ? 0 : 1 }}
      >
        <h1
          className="sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] font-normal text-white tracking-[0.04em]"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          {centerSlide.title}
        </h1>
        <p className="text-sm text-white/75 leading-relaxed tracking-[0.02em] max-w-[280px] mx-auto mb-6">
          {centerSlide.subtitle}
        </p>
      </div>
    </div>
  );
}
