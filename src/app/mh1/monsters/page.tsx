// File: src/app/mh1/monsters/page.tsx
import Link from "next/link";
import { getMonsters } from "@/lib/mh1-data";

export default function Mh1MonstersPage() {
  const monsters = getMonsters();

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-4xl px-6 py-10">
        <Link href="/mh1" className="text-sm text-zinc-400 hover:text-zinc-200">
          ← Monster Hunter 1
        </Link>

        <h1 className="mt-4 text-3xl font-bold">MH1 Monsters</h1>

        <div className="mt-8 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
          <ul className="divide-y divide-zinc-800">
            {monsters.map((monster) => (
              <li key={monster.id} className="px-4 py-4">
                <p className="font-medium">{monster.name}</p>
                <p className="text-sm text-zinc-400">{monster.class}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}