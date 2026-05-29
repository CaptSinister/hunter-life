// File: src/app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-4xl px-6 py-10">
        <h1 className="text-3xl font-bold">Hunting Life Magazine</h1>
        <p className="mt-3 text-sm text-zinc-400">
          Kokotopedia is a Monster Hunter database project that will provide 
          the cleanest and accurate information for:
          <ul>
            First Generation:
            <li>
              - Monster Hunter 1
              - Monster Hunter G
              - Monster Hunter Freedom
            </li>
            Second Generation:
            <li>
              - Monster Hunter 2 (Dos)
              - Monster Hunter Freedom 2
              - Monster Hunter Freedom Unite
            </li>
            Third Generation:
            <li>
                - Monster Hunter Portable 3rd
            </li>
              
            </ul>
        </p>
        <div className="mt-8">
          <Link
            href="/mh1"
            className="inline-block rounded-lg border 
                     border-zinc-700 px-4 py-2 
                     hover:bg-zinc-800">
            Monster Hunter 1
          </Link>
        </div>
      </div>
    </main>
  );
}