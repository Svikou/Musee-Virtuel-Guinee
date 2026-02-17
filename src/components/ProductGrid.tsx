"use client";

import ProductCard from "./ProductCard";

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  slug?: string;
  category?: string;
  provenance?: string;
  rituel?: string;
  color?: string;
}

interface ProductGridProps {
  products?: Product[];
}

const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Ensiv polyvision",
    description:
      "Mikroception preism reform. Stereomatisk tetos. Polivalens primagram",
    image: "/tam-tam.jpg",
    slug: "ensiv-polyvision",
  },
  {
    id: "2",
    title: "Transsoffi medeltes",
    description:
      "Mikroception preism reform. Stereomatisk tetos. Polivalens primagram",
    image: "/mask.jpg",
    slug: "transsoffi-medeltes",
  },
  {
    id: "3",
    title: "Pancentrism trilog",
    description:
      "Mikroception preism reform. Stereomatisk tetos. Polivalens primagram",
    image: "/guitar.jpg",
    slug: "pancentrism-trilog",
  },
  {
    id: "4",
    title: "Agnostitet perpol",
    description:
      "Mikroception preism reform. Stereomatisk tetos. Polivalens primagram",
    image: "/boubou.jpg",
    slug: "agnostitet-perpol",
  },
  {
    id: "5",
    title: "Ensiv polyvision",
    description:
      "Mikroception preism reform. Stereomatisk tetos. Polivalens primagram",
    image: "/mask2.jpg",
    slug: "ensiv-polyvision-2",
  },
  {
    id: "6",
    title: "Transsoffi medeltes",
    description:
      "Mikroception preism reform. Stereomatisk tetos. Polivalens primagram",
    image: "/couteau.jpg",
    slug: "transsoffi-medeltes-2",
  },
];

export default function ProductGrid({
  products = MOCK_PRODUCTS,
}: ProductGridProps) {
  return (
    <div className="w-full  py-8">
      {/* Grid Container */}
      <div className="flex flex-wrap gap-4 md:gap-10 lg:gap-4 xl:gap-4 justify-start">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            slug={product.slug}
          />
        ))}
      </div>

      {/* Empty State  */}
      {products.length === 0 && (
        <div className="text-center py-16">
          <p className="text-white/60 text-lg">Aucun produit trouvé</p>
        </div>
      )}
    </div>
  );
}
