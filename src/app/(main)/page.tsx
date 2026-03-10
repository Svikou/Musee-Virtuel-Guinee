"use client";

import { useState } from "react";
import Image from "next/image";
import Info from "../../components/Info";
import Tabs from "../../components/Tabs";
import AudioPlayer from "../../components/Audioplayer";
import GalerieImages from "../../components/GalerieImages";
import VideoPlayer from "../../components/VideoPlayer";
import MapComponent from "../../components/MapComponent";

export default function Home() {
  const [activeTab, setActiveTab] = useState("images");

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
      default:
        return <AudioPlayer />;
    }
  };

  return (
    <div className="relative">
      <div className="absolute inset-0" />

      <div className="relative z-10 ">
        <main className="w-full px-4 py-4 lg:p-1 flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center">
          <div className="flex flex-col md:flex-row gap-10 sm:gap-8 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-8">
            {/* Tabs - 1st position mobile */}
            <div className="md:hidden w-full">
              <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
            </div>
            <div className="flex flex-col-reverse md:flex-row gap-10 xl:gap-20">
              {/* Left side */}
              <div className="w-full min-[980px]:w-auto">
                <Info />
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
          </div>
        </main>
      </div>
    </div>
  );
}
