"use client";

import { useState } from "react";
import Image from "next/image";
import Info from "../components/Info";
import Tabs from "../components/Tabs";
import SliderProfiles from "../components/SliderProfiles";
import AudioPlayer from "../components/Audioplayer";
import GalerieImages from "../components/GalerieImages";
import VideoPlayer from "../components/VideoPlayer";
import MapComponent from "../components/MapComponent";

export default function Home() {
  // État pour gérer la tab active
  const [activeTab, setActiveTab] = useState("recits");

  // Fonction pour rendre le contenu selon la tab active
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

      {/* Content */}
      <div className="relative z-10">
        {/* Main Content */}
        <main className="w-full mx-auto px-4 py-4 flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="flex flex-col md:flex-row gap-10 sm:gap-8 md:gap-6 lg:gap-10 xl:gap-6 2xl:gap-8">
            {/* Tabs - 1ère position sur mobile */}
            <div className="md:hidden w-full">
              <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
            </div>

            {/* Left side */}
            <div className="w-full min-[980px]:w-auto">
              <Info />
            </div>

            {/* Right side */}
            <div className="flex-1 w-full">
              {/* Tabs - Position normale sur desktop */}
              <div className="hidden md:block">
                <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
              </div>

              {/* Contenu dynamique selon la tab active */}
              {renderContent()}

              {/* SliderProfiles - Desktop seulement */}
              {activeTab === "recits" && (
                <div className="-mt-10 hidden md:block">
                  <SliderProfiles />
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
