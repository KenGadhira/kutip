import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import SplashScreen from "@/components/SplashScreen";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kutip",
  description: "Aplikasi Kutip",
  icons: {
    icon: "/assets/svg/trash-can.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex items-center justify-center p-0 sm:p-4"
      >
        <SplashScreen />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
