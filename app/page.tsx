import ProfileLayer from "@/components/ProfileLayer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kutip",
  description: "Coming Soon",
};

export default function Home() {
  // ponytail: static coming soon page; add newsletter or auth when launch ready
  return <ProfileLayer />;
}
