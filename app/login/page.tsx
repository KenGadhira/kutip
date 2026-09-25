import type { Metadata } from "next";
import LoginAuthLayer from "@/components/LoginAuthLayer";

export const metadata: Metadata = {
  title: "Kutip - Masuk",
  description: "Aplikasi Kutip - Masuk Akun",
};

export default function LoginPage() {
  return <LoginAuthLayer standalone />;
}
