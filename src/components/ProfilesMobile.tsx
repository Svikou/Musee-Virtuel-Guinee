"use client";

import React from "react";
import { useRef, useState } from "react";

interface Profile {
  id: number;
  name: string;
  title: string;
  image: string;
}

const profiles: Profile[] = [
  {
    id: 1,
    name: "Nils Mohamed",
    title: "Ensiv polyvision",
    image: "/img-cover.jpg",
  },
  {
    id: 2,
    name: "Jessica Falk",
    title: "Profakt prostat",
    image: "/img-cover2.jpg",
  },
  {
    id: 3,
    name: "Kwame Asante",
    title: "Design Lead",
    image: "/img-cover.jpg",
  },
  {
    id: 4,
    name: "Amina Diallo",
    title: "Art Director",
    image: "/img-cover2.jpg",
  },
  {
    id: 5,
    name: "Omar Hassan",
    title: "Creative Lead",
    image: "/img-cover.jpg",
  },
];

export default function SliderProfiles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

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
      <div className=" pl-6 max-w-[280px] overflow-hidden">
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleMouseUp}
          onTouchMove={handleTouchMove}
          className={`flex gap-3 overflow-x-auto scroll-smooth select-none pr-6 scrollbar-hide ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="flex items-center gap-3 bg-[#B3A696] backdrop-blur-lg rounded-lg py-3 pl-3 pr-6 h-16 shrink-0 w-fit"
            >
              <div className="h-full rounded-sm overflow-hidden shrink-0">
                <img
                  src={profile.image || "/placeholder.svg"}
                  alt={profile.name}
                  draggable={false}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm font-medium text-white whitespace-nowrap">
                  {profile.title}
                </h3>
                <p className="text-xs text-white mt-1 whitespace-nowrap">
                  {profile.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
