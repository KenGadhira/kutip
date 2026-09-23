import type { Metadata } from "next";
import ProfileLayer from "@/components/ProfileLayer";

export const metadata: Metadata = {
  title: "Kutip - Profil",
  description: "Aplikasi Kutip - Profil Pengguna",
};

export default function ProfilePage() {
  return <ProfileLayer />;
}
