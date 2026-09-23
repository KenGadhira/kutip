import type { Metadata } from "next";
import QrBarcodeLayer from "@/components/QrBarcodeLayer";

export const metadata: Metadata = {
  title: "Kutip - QR Code",
  description: "Aplikasi Kutip - Kode QR",
};

export default function QrPage() {
  return <QrBarcodeLayer />;
}
