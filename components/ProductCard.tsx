"use client";

import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
  onSelect?: (product: Product) => void;
  actionLabel?: string;
};

export function ProductCard({
  product,
  onSelect,
  actionLabel = "Select",
}: ProductCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect?.(product)}
      className="group flex h-full flex-col rounded-xl border border-zinc-100 bg-zinc-50 p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-200 hover:bg-white hover:shadow"
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-zinc-900">{product.name}</p>
          <p className="mt-1 text-xs text-zinc-500">{product.category}</p>
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
        <span className="text-emerald-600 opacity-0 transition group-hover:opacity-100">
          {actionLabel}
        </span>
      </div>
    </button>
  );
}

export default ProductCard;

