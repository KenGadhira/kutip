import PenjadwalanLayer from "@/components/PenjadwalanLayer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kutip - Penjadwalan",
  description: "Jadwalkan pengambilan sampah Anda",
};

export default function Penjadwalan() {
  return <PenjadwalanLayer />;
}
