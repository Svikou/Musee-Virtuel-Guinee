"use client";

import { useState } from "react";
import Tabs from "@/components/Tabs";
import AudioPlayer from "@/components/Audioplayer";
import GalerieImages from "@/components/GalerieImages";
import VideoPlayer from "@/components/VideoPlayer";
import MapComponent from "@/components/MapComponent";
import ClotheComponent from "@/components/ClotheComponent";
import Info2 from "@/components/Info2";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Tenues");

  const renderContent = () => {
    switch (activeTab) {
      case "images":
        return <GalerieImages />;
      case "recits":
        return <AudioPlayer />;
      case "videos":
        return <VideoPlayer />;
      case "carte":
        return <MapComponent />;
      case "Tenues":
        return <ClotheComponent />;
      default:
        return <AudioPlayer />;
    }
  };

  return (
    <div className="relative">
      <div className="absolute inset-0" />

      <div className="relative z-10">
        <main className="w-full mx-auto px-4 py-4 flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="flex flex-col md:flex-row gap-10 sm:gap-8 md:gap-6 lg:gap-10 xl:gap-6 2xl:gap-8">
            {/* Tabs - 1st position mobile */}
            <div className="md:hidden w-full">
              <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
            </div>

            {/* Left side */}
            <div className="w-full min-[980px]:w-auto">
              <Info2 />
            </div>

            {/* Right side */}
            <div className="flex-1 w-full">
              {/* Tabs - desktop */}
              <div className="hidden md:block">
                <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
              </div>

              {renderContent()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
