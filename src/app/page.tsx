import Image from "next/image";
import Info from "../components/Info";
import Tabs from "../components/Tabs";
import SliderProfiles from "../components/SliderProfiles";
import AudioPlayer from "../components/Audioplayer";

export default function Home() {
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
              <Tabs />
            </div>

            {/* Left side */}
            <div className="w-full min-[980px]:w-auto">
              <Info />
            </div>

            {/* Right side */}
            <div className="flex-1 w-full">
              {/* Tabs - Position normale sur desktop */}
              <div className="hidden md:block">
                <Tabs />
              </div>

              {/* Transcript Text */}
              <AudioPlayer />

              {/* SliderProfiles - Desktop seulement */}
              <div className="-mt-10 hidden md:block">
                <SliderProfiles />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
