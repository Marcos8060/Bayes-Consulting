

import ProductSearch from "@/components/ProductSearch";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-zinc-50 via-white to-zinc-100 px-4 py-12">
      <div className="flex w-full max-w-5xl flex-col gap-6">
        <header className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Catalog
          </p>
          <h1 className="text-3xl font-semibold text-zinc-900 sm:text-4xl">
            Product Search
          </h1>
          <p className="text-base text-zinc-600 sm:max-w-2xl">
            Explore the books by typing keywords. You can search across names,
            categories, and descriptions.
          </p>
        </header>

        <ProductSearch products={products} />
      </div>
    </main>
  );
}
