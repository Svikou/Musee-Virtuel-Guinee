import SearchBar from "@/src/components/SearchBar";
import { Separator } from "@/components/ui/separator";
import ProductGrid from "@/src/components/ProductGrid";

const page = () => {
  return (
    <div className="w-full px-1 sm:px-4 md:px-2 lg:px-2 py-4">
      <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4">
        Catalogue
      </h1>

      <Separator className="mb-2 bg-white/10" />
      <div>
        <SearchBar />
      </div>
      <div className="px-2">
        <ProductGrid />
      </div>
    </div>
  );
};

export default page;
