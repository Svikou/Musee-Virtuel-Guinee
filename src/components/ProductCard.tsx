"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  slug?: string;
}

export default function ProductCard({
  id,
  title,
  description,
  image,
  slug,
}: ProductCardProps) {
  return (
    <div className="group bg-[#B3A696] backdrop-blur-sm rounded-xl border border-white/50 overflow-hidden transition-all  w-full sm:w-[210px] md:w-[240px] lg:w-[246px] xl:w-[243px]">
      {/* Image Container */}
      <div className=" py-4 flex items-center justify-center ">
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={image}
            alt={title}
            width={220}
            height={220}
            className="object-contain rounded-sm max-h-full transition-transform group-hover:scale-102"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="px-3 space-y-2">
        {/* Title */}
        <h3 className="text-lg font-semibold text-[#4e3b2d] ">{title}</h3>

        {/* Description */}
        <p className="text-sm text-white ">{description}</p>

        {/* Button */}
        <button className="w-full bg-[#785E4766] hover:bg-[#785E4768] text-white rounded-full py-1 pl-6 pr-1 flex items-center justify-between transition-all group/btn my-4">
          <span className="text-sm font-medium">Voir le détail</span>
          <div className="bg-[#785E4766] rounded-full p-2.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </button>
      </div>
    </div>
  );
}
