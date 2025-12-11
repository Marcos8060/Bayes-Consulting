"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import SearchInput from "@/components/ui/SearchInput";
import type { Product } from "@/types/product";

type ProductSearchProps = {
  products: Product[];
  placeholder?: string;
  onSelect?: (product: Product) => void;
};

const normalize = (value: string) => value.toLowerCase().trim();

export function ProductSearch({
  products,
  placeholder = "Search by name, category, or description",
  onSelect,
}: ProductSearchProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalizedQuery = normalize(query);
    if (!normalizedQuery) return products;

    return products.filter(({ name, category, description }) => {
      const haystack = `${name} ${category} ${description}`.toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [products, query]);

  return (
    <section
      aria-label="Product search"
      className="w-full max-w-4xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm ring-1 ring-black/5"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <SearchInput
          name="product-search"
          label="Search books"
          placeholder={placeholder}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full"
        />
        <div
          className="text-xs font-medium text-zinc-500"
          aria-live="polite"
          role="status"
        >
          {filtered.length} of {products.length} products
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={onSelect}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-6 rounded-xl border border-dashed border-zinc-200 bg-zinc-50 px-4 py-6 text-center text-sm text-zinc-500">
          No products match your search. Try a different term.
        </div>
      )}
    </section>
  );
}

export default ProductSearch;

