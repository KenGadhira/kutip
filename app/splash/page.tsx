import type { Metadata } from "next";
import SplashScreen from "@/components/SplashScreen";

export const metadata: Metadata = {
  title: "Kutip - Splash Screen",
  description: "Aplikasi Kutip - Splash Screen",
};

export default function SplashPage() {
  return <SplashScreen standalone />;
}
