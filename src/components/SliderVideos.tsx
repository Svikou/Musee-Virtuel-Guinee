"use client";

import React, { useRef, useState } from "react";

interface Profile {
  id: number;
  image: string;
}

const profiles: Profile[] = [
  { id: 1, image: "/Artistes1.png" },
  { id: 2, image: "/Artistes2.png" },
  { id: 3, image: "/Artistes3.png" },
];

export default function SliderImages() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeId, setActiveId] = useState<number>(1);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-[#785e4784] backdrop-blur-3xl rounded-[100px] py-3 px-10 w-fit border-[3px] border-white/30 overflow-hidden">
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleMouseUp}
          onTouchMove={handleTouchMove}
          className={`flex gap-3 overflow-x-hidden scroll-smooth select-none scrollbar-hide ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {profiles.map((profile) => {
            const isActive = activeId === profile.id;
            return (
              <div
                key={profile.id}
                onClick={() => setActiveId(profile.id)}
                className={`
                  relative shrink-0 w-20 h-18 rounded-xl overflow-hidden
                  bg-[#B3A696] backdrop-blur-md
                   cursor-pointer
                  ${isActive ? "border-2 border-white" : ""}
                `}
              >
                <img
                  src={profile.image}
                  draggable={false}
                  className="w-full h-full object-contain p-4"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
