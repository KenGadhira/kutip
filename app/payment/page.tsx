import type { Metadata } from "next";
import QrisPaymentLayer from "@/components/QrisPaymentLayer";

export const metadata: Metadata = {
  title: "Kutip - Pembayaran",
  description: "Aplikasi Kutip - Pembayaran QRIS",
};

export default function PaymentPage() {
  return <QrisPaymentLayer />;
}
