// File: src/app/mh1/page.tsx
import Link from "next/link";

const sections = [
  { href: "/mh1/monsters", label: "Monsters" },
  { href: "/mh1/items", label: "Items" },
  { href: "/mh1/quests", label: "Quests" },
  { href: "/mh1/weapons", label: "Weapons" },
];

export default function Mh1Page() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-4xl px-6 py-10">
        <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-200">
          ← Home
        </Link>

        <h1 className="mt-4 text-3xl font-bold">Monster Hunter 1</h1>
        <p className="mt-3 text-sm text-zinc-400">
          Browse the MH1 database sections.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="rounded-lg border border-zinc-700 px-4 py-3 hover:bg-zinc-800"
            >
              {section.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}