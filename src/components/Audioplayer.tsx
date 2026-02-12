"use client";

import { useState } from "react";
import { Rewind, Play, Pause, FastForward, Volume2 } from "lucide-react";
import ProfilesMobile from "./ProfilesMobile";

interface AudioPlayerProps {
  mobileContent?: React.ReactNode;
}

export default function AudioPlayer({ mobileContent }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-[#dacfc1c0] py-8  sm:px-4 lg:px-10 w-full sm:w-[420px] md:w-[490px] lg:w-[490px] xl:w-[690px] 2xl:w-[700px] mx-auto rounded-2xl">
      {/* Texte desktop */}
      <div className="text-center space-y-2 mb-8 hidden sm:block">
        <p className="text-sm text-[#533b2a]/50">
          Ambitet etnogam neocism inbäddad journalis
        </p>
        <p className="text-base text-[#533b2a]/80">
          Tenomi termoosmos innan heterostik kontratrop
        </p>
        <p className="text-xl font-semibold text-[#533b2a]">
          Profili fonokemi, de homoadoption ifall propatologii
        </p>
        <p className="text-lg text-[#533b2a]/80">
          Reafiering teletes cynkrati fast metafaktisk regyn
        </p>
        <p className="text-base text-[#533b2a]/70">
          Perstik möpare, jag telecentrism
        </p>
        <p className="text-sm text-[#533b2a]/50">Agnostision elektrotopi</p>
      </div>

      {/* VERSION MOBILE*/}
      <div className="mb-8 sm:hidden">
        {mobileContent}
        <ProfilesMobile />
      </div>

      {/* Audio Player - Version Desktop */}
      <div className="hidden sm:flex items-center justify-center gap-4 mb-4">
        <button className="w-8 h-8 rounded-full bg-[#785E4766] flex items-center justify-center text-white">
          <Rewind size={16} />
        </button>

        {/* Waveform */}
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="w-1 bg-white rounded-full"
              style={{
                height: `${Math.random() * 24 + 8}px`,
              }}
            />
          ))}
        </div>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-14 h-14 rounded-full bg-[#4e3b2d] flex items-center justify-center text-white"
        >
          {isPlaying ? <Pause size={22} /> : <Play size={22} />}
        </button>

        {/* Waveform continued */}
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="w-1 bg-[#ffffff56] rounded-full"
              style={{ height: `${Math.random() * 24 + 6}px` }}
            />
          ))}
        </div>

        <button className="w-8 h-8 rounded-full bg-[#785E4766] flex items-center justify-center text-white">
          <FastForward size={16} />
        </button>
      </div>

      {/* Audio Player - Version Mobile */}
      <div className="flex sm:hidden flex-col gap-6">
        {/* Contrôles audio mobile */}
        <div className="flex items-center justify-center gap-2 h-[20px] ">
          <button className="w-8 h-8 rounded-full bg-[#9d8c7a] flex items-center justify-center text-white">
            <Rewind size={12} />
          </button>

          {/* Waveform mobile - réduit */}
          <div className="flex items-center gap-1">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="w-[3px] bg-white rounded-full"
                style={{
                  height: `${Math.random() * 32 + 12}px`,
                }}
              />
            ))}
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 rounded-full bg-[#4e3b2d] flex items-center justify-center text-white"
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>

          {/* Waveform mobile continued */}
          <div className="flex items-center gap-1">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="w-[3px] bg-[#ffffff80] rounded-full"
                style={{ height: `${Math.random() * 32 + 6}px` }}
              />
            ))}
          </div>

          <button className="w-8 h-8 rounded-full bg-[#9d8c7a] flex items-center justify-center text-white">
            <FastForward size={14} />
          </button>
        </div>

        {/* Time mobile */}
        <div className="flex items-center justify-between px-4 text-sm text-white">
          <span>24:32</span>
          <div className="flex items-center gap-2">
            <Volume2 size={16} />
            <span>34:00</span>
          </div>
        </div>
      </div>

      {/* Time - Version Desktop */}
      <div className="hidden sm:flex items-center justify-between px-12 text-sm text-white mb-8">
        <span>24:32</span>
        <div className="flex items-center gap-2">
          <Volume2 size={16} />
          <span>34:00</span>
        </div>
      </div>
    </div>
  );
}
