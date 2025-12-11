"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/types/product";

type ProductSearchProps = {
  products: Product[];
  placeholder?: string;
};

const normalize = (value: string) => value.toLowerCase().trim();

export function ProductSearch({
  products,
  placeholder = "Search by name, category, or description",
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
        <label className="flex w-full flex-col gap-1">
          <span className="text-sm font-medium text-zinc-700">
            Search products
          </span>
          <div className="relative">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-zinc-400"
            >
           
            </span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={placeholder}
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50 py-2.5 pl-10 pr-3 text-sm text-zinc-900 shadow-inner outline-none transition focus:border-zinc-400 focus:bg-white focus:shadow-md"
              type="text"
              name="product-search"
              autoComplete="off"
            />
          </div>
        </label>
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
          <button
            key={product.id}
            type="button"
            className="group flex h-full flex-col rounded-xl border border-zinc-100 bg-zinc-50 p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-200 hover:bg-white hover:shadow"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-zinc-900">
                  {product.name}
                </p>
                <p className="mt-1 text-xs text-zinc-500">
                  {product.category}
                </p>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                ${product.price.toLocaleString()}
              </span>
            </div>
            <p className="mt-3 line-clamp-3 text-sm text-zinc-600">
              {product.description}
            </p>
            <div className="mt-4 flex items-center justify-between text-xs text-zinc-500">
              <span className="inline-flex items-center gap-1.5">
                <span aria-hidden="true">⭐</span>
                <span className="font-medium text-zinc-700">
                  {product.rating.toFixed(1)}
                </span>
                <span>rating</span>
              </span>
            </div>
          </button>
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

