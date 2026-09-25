import HomeDashboardLayer from "@/components/HomeDashboardLayer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kutip - Beranda",
  description: "Kelola sampah, kumpulkan poin, dan tukarkan dengan kebutuhan harian.",
};

export default function Home() {
  return <HomeDashboardLayer />;
}
