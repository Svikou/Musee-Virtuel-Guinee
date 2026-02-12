"use client";
import { useState } from "react";
import { Headphones, Image, Video, Map } from "lucide-react";
import Link from "next/link";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("recits");
  const tabs = [
    { id: "images", label: "Images", href: "/", icon: Image },
    {
      id: "recits",
      label: "Récits sonores",
      href: "/",
      icon: Headphones,
    },
    { id: "videos", label: "Vidéos", href: "/", icon: Video },
    { id: "carte", label: "Carte", href: "/", icon: Map },
  ];

  return (
    <div className="flex items-center gap-2 sm:gap-3 md:gap-3 lg:gap-4 xl:gap-4 mb-4 sm:mb-5 md:mb-6 lg:mb-6 overflow-x-auto scrollbar-hide">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <Link
            key={tab.id}
            href={tab.href}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-3 py-2
              sm:px-4 sm:py-2.5
              md:px-4 md:py-2
              lg:px-5 lg:py-3
              xl:px-5 xl:py-3
              rounded-full 
              text-xs 
              sm:text-sm 
              md:text-sm  
              lg:text-base 
              xl:text-base
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
            {activeTab === tab.id && (
              <Icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-5 xl:h-5" />
            )}
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Tabs;
