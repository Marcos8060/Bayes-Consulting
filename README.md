# Bayes Consulting – Product Search Demo

Mini Next.js 16 (App Router) app showcasing a reusable, accessible product search experience styled with Tailwind v4. The catalog is seeded with books for demo purposes.

## Stack
- Next.js 16 / React 19 (App Router)
- TypeScript, Tailwind CSS v4
- react-icons for UI affordances

## Project Structure
- `app/page.tsx` — page shell and hero copy; mounts `ProductSearch`.
- `components/ProductSearch.tsx` — stateful search container with filtering.
- `components/ui/SearchInput.tsx` — reusable labeled input with leading icon.
- `components/ProductCard.tsx` — reusable card showing price, rating, and an action affordance.
- `lib/products.ts` — seeded book catalog.
- `types/product.ts` — product type contract.

## Components
- `SearchInput` props: `label?`, `supportingText?`, `leadingIcon?`, `className?`, `inputClassName?`, plus standard input props (`value`, `onChange`, etc.).
- `ProductCard` props: `product`, `onSelect?`, `actionLabel?` (defaults to `"Select"`).
- `ProductSearch` props: `products`, `placeholder?`, `onSelect?` (fires when a card is selected).

## Running Locally
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Extending
- Swap data by editing `lib/products.ts` or fetching server-side and passing into `ProductSearch`.
- Wire `onSelect` to navigation, detail modals, or add-to-cart flows.

## Notes
- Tailwind v4 inline theming lives in `app/globals.css`.
- Fonts are loaded via `next/font` (Geist).
