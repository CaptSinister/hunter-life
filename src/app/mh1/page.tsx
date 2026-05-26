// File: src/app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <header className="mb-10 border-b border-zinc-800 pb-6">
          <h1 className="text-3xl font-bold tracking-tight">Hunting Life Magazine</h1>
          <p className="mt-2 text-sm text-zinc-400">
            A Monster Hunter database webapp inspired by Kiranico.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-xl font-semibold">Start with Monster Hunter 1</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Browse the first game database sections.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Link
              href="/mh1"
              className="rounded-xl border border-zinc-700 px-4 py-3 text-sm hover:bg-zinc-800"
            >
              Enter MH1 Database
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}