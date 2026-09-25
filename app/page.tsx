import LoginAuthLayer from "@/components/LoginAuthLayer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kutip",
  description: "Kelola sampah, kumpulkan poin, dan tukarkan dengan kebutuhan harian.",
};

export default function Home() {
  // ponytail: static coming soon page; add newsletter or auth when launch ready
  return <LoginAuthLayer />;
}
