"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "",
    subtitle: "",
    src: "/Artistees1.png",
    alt: "",
  },
  {
    id: 2,
    title: "",
    subtitle: "",
    src: "/Artistees1.png",
    alt: "",
  },
  {
    id: 3,
    title: "",
    subtitle: "",
    src: "/Artistees3.png",
    alt: "",
  },
];

export default function VideoSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const len = slides.length;

  const goTo = (index: number) => {
    if (animating) return;
    setAnimating(true);
    setIsPlaying(false);
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
      {/*  Mobile Version */}
      <div className="flex sm:hidden w-full items-center justify-center px-4">
        <button
          onClick={prev}
          aria-label="Previous"
          className="shrink-0 w-10 h-10 rounded-full bg-[#785E4766]/60  flex items-center justify-center backdrop-blur-sm transition-all duration-100 hover:bg-[#3a2e26]/90 hover:scale-100 mr-4"
        >
          <ChevronLeft size={20} className="text-white" />
        </button>

        {/* center image + play button  */}
        <div
          className="relative flex-1 flex items-center justify-center transition-all duration-300 ease-in-out"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? "scale(0.97)" : "scale(1)",
          }}
        >
          <img
            src={centerSlide.src}
            alt={centerSlide.alt}
            className="w-full max-w-70 rounded-sm object-contain"
            style={{ filter: "drop-shadow(0 12px 32px rgba(0,0,0,0.22))" }}
          />
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause" : "Play"}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-3 w-12 h-12 rounded-full bg-[#3a2e26]/70 flex items-center justify-center text-white backdrop-blur-sm transition-all duration-200 hover:bg-[#3a2e26]/90 hover:scale-105"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
        </div>

        <button
          onClick={next}
          aria-label="Next"
          className="shrink-0 w-10 h-10 rounded-full bg-[#785E4766]/60 flex items-center justify-center backdrop-blur-sm transition-all duration-100 hover:bg-[#3a2e26]/90 hover:scale-100 ml-4"
        >
          <ChevronRight size={20} className="text-white" />
        </button>
      </div>

      {/* Desktop */}
      <div className="hidden sm:flex relative w-full max-w-[760px] h-[300px] lg:h-[340px] xl:h-[380px] items-center justify-center">
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#785E4766]/60 backdrop-blur-sm transition-all duration-100 hover:bg-[#3a2e26]/90 hover:scale-100 flex items-center justify-center"
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
          {/* Left side */}
          <div className="absolute top-1/2 -translate-y-1/2 z-1 left-[10%] lg:left-[11%] xl:left-[12%]">
            <img
              src={leftSlide.src}
              alt={leftSlide.alt}
              className="object-contain brightness-75 opacity-70 h-[150px] lg:h-[180px] xl:h-[210px]"
              style={{ transform: "perspective(600px) rotateY(8deg)" }}
            />
          </div>

          {/* Center  */}
          <div className="relative z-2 flex items-center justify-center">
            <img
              src={centerSlide.src}
              alt={centerSlide.alt}
              className="object-contain h-[200px] rounded-md lg:h-[240px] xl:h-[280px]"
              style={{ filter: "drop-shadow(0 12px 32px rgba(0,0,0,0.22))" }}
            />
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause" : "Play"}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#3a2e26]/70 flex items-center justify-center text-white backdrop-blur-sm transition-all duration-100 hover:bg-[#3a2e26]/90  hover:scale-100"
            >
              {isPlaying ? <Pause size={22} /> : <Play size={22} />}
            </button>
          </div>

          {/* Right side */}
          <div className="absolute top-1/2 -translate-y-1/2 z-[1] right-[10%] lg:right-[11%] xl:right-[12%]">
            <img
              src={rightSlide.src}
              alt={rightSlide.alt}
              className="object-contain brightness-75 opacity-70 h-[150px] lg:h-[180px] xl:h-[210px]"
              style={{ transform: "perspective(600px) rotateY(-8deg)" }}
            />
          </div>
        </div>

        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#785E4766]/60 backdrop-blur-sm transition-all duration-100 hover:bg-[#3a2e26]/90  hover:scale-100 flex items-center justify-center"
        >
          <ChevronRight size={20} className="text-white" />
        </button>
      </div>
    </div>
  );
}
