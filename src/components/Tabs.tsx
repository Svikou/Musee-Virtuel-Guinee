"use client";
import { Headphones, Image as ImageIcon, Video, Map } from "lucide-react";
import Image from "next/image";

interface TabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const Tabs = ({ activeTab, onTabChange }: TabsProps) => {
  const tabs = [
    {
      id: "images",
      label: "Images",
      svgPath: "/icones/image-gallery.svg",
    },
    {
      id: "recits",
      label: "Récits sonores",
      svgPath: "/icones/headphones.svg",
    },
    {
      id: "videos",
      label: "Vidéos",
      icon: ImageIcon,
      svgPath: "/icones/play-circle.svg",
    },
    {
      id: "carte",
      label: "Carte",
      icon: ImageIcon,
      svgPath: "/icones/map-location.svg",
    },
  ];

  return (
    <div className="flex items-center gap-2 sm:gap-3 md:gap-3 lg:gap-4 xl:gap-4 mb-4 sm:mb-5 md:mb-6 lg:mb-6 overflow-x-auto scrollbar-hide">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
    px-3 py-2
    sm:px-4 sm:py-2.5
    md:px-4 md:py-2
    lg:px-5 lg:py-3
    xl:px-5 xl:py-3
    rounded-full
    text-xs
    sm:text-md
    md:text-sm
    lg:text-sm
    xl:text-sm
    flex items-center
    gap-1.5 
    sm:gap-2 
    md:gap-2 
    lg:gap-2.5 
    xl:gap-2.5
    transition 
    whitespace-nowrap 
    ${
      activeTab === tab.id
        ? "bg-white text-gray-900 hover:text-gray-900 border border-gray-200"
        : "text-white hover:text-white/80"
    }`}
          >
            {activeTab === tab.id && tab.svgPath && (
              <Image
                src={tab.svgPath}
                alt={tab.label}
                width={20}
                height={20}
                className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-5 xl:h-5"
              />
            )}

            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
