import { Separator } from "@/components/ui/separator";
import SearchBar2 from "@/components/SearchBar2";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import BentoCatalogue from "@/components/BentoCatalogue";
import ProductGrid from "@/components/ProductGrid";

const page = () => {
  return (
    <div className="w-full px-1 sm:px-4 md:px-2 lg:px-2 py-4">
      <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4">
        Contribution
      </h1>

      <Separator className="mb-2 bg-white/10" />
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full my-10">
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quos
          numquam pariatur voluptatum animi, perferendis alias a voluptatibus
          explicabo repellendus perspiciatis necessitatibus est provident
          laudantium, dolorum ad. Optio, doloremque fuga.
        </p>

        <button className="bg-[#3D2B1F] hover:bg-[#4a3528] text-white rounded-full pl-5 pr-2 py-2 flex items-center gap-3 shrink-0 transition-all group/btn">
          <Link
            href="/je-contribue"
            className="text-sm font-medium whitespace-nowrap"
          >
            Je contribue
          </Link>
          <div className="bg-[#5a4035] rounded-full p-2 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </button>
      </div>
      <Separator className="mb-2 bg-white/10" />
      <div>
        <SearchBar2 />
      </div>
      <div>
        {/* <BentoCatalogue /> */}
        <ProductGrid />
      </div>
    </div>
  );
};

export default page;
