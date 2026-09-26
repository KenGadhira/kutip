import RewardsHomeLayer from "@/components/RewardsHomeLayer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kutip - Rewards",
  description: "Tukarkan poin dengan kebutuhan harian.",
};

export default function RewardsPage() {
  return <RewardsHomeLayer />;
}
