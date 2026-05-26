// File: src/app/mh1/items/page.tsx
import Link from "next/link";
import { getItems } from "@/lib/mh1-data";

export default function Mh1ItemsPage() {
  const items = getItems();

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-4xl px-6 py-10">
        <Link href="/mh1" className="text-sm text-zinc-400 hover:text-zinc-200">
          ← Monster Hunter 1
        </Link>

        <h1 className="mt-4 text-3xl font-bold">MH1 Items</h1>

        <div className="mt-8 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
          <ul className="divide-y divide-zinc-800">
            {items.map((item) => (
              <li key={item.id} className="px-4 py-4">
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-zinc-400">
                  Rarity {item.rarity} • Buy {item.buy}z • Sell {item.sell}z
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}