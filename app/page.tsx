import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kutip",
  description: "Coming Soon",
};

export default function Home() {
  // ponytail: static coming soon page; add newsletter or auth when launch ready
  return (
    <main className="fixed inset-0 flex flex-col items-center justify-center bg-[#758C3B] px-4 text-center font-sans text-white">
      <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
        Kutip
      </h1>
      <p className="mt-3 text-lg font-medium sm:text-xl">
        Coming Soon
      </p>
    </main>
  );
}
