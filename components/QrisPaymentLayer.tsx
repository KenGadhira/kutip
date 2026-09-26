"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function QrisPaymentLayer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full sm:max-w-[375px] h-screen h-dvh sm:h-[812px] bg-[#f9fafb] sm:rounded-[36px] sm:shadow-2xl overflow-hidden flex flex-col relative mx-auto select-none border-0 sm:border sm:border-black/5"
      data-node-id="225:347"
      data-name="QRIS Payment Screen"
    >
      {/* Scrollable Content */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col w-full">
        {/* Header */}
        <header
          className="bg-white border-b border-[#f3f4f6] flex items-center justify-between px-[24px] pt-[48px] pb-[16px] shrink-0 w-full"
          data-node-id="225:349"
        >
          <Link
            href="/"
            className="flex items-center justify-center size-[40px]"
            data-node-id="225:350"
          >
            <Image
              src="/assets/arrow-left-payment.svg"
              alt=""
              width={11.25}
              height={18}
              className="w-[11.25px] h-[18px]"
            />
          </Link>
          <h1
            className="font-bold text-[#111827] text-[18px] leading-[28px]"
            data-node-id="225:355"
          >
            Pembayaran
          </h1>
          <div className="w-[40px]" />
        </header>

        {/* Order Info Card */}
        <div className="px-[20px] pt-[16px] pb-[12px]">
          <div
            className="bg-white border border-[#f3f4f6] rounded-[16px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] px-[20px] py-[16px] flex flex-col gap-[16px]"
            data-node-id="225:357"
          >
            {/* Order ID and Status */}
            <div className="flex items-start justify-between" data-node-id="225:358">
              <div className="flex flex-col gap-[4px]" data-node-id="225:359">
                <p
                  className="font-medium text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase leading-[16px]"
                  data-node-id="225:361"
                >
                  Order ID
                </p>
                <p
                  className="font-bold text-[#111827] text-[14px] tracking-[-0.0957px] leading-[20px]"
                  data-node-id="225:363"
                >
                  KTP-2026-00125
                </p>
              </div>
              <div
                className="bg-[#fffbeb] border border-[#fef3c7] rounded-full px-[12px] py-[4px]"
                data-node-id="225:364"
              >
                <p
                  className="font-bold text-[#d97706] text-[11px] leading-[16.5px]"
                  data-node-id="225:365"
                >
                  Menunggu Pembayaran
                </p>
              </div>
            </div>

            {/* Payment Deadline */}
            <div
              className="border-t border-dashed border-[#f3f4f6] pt-[12px] flex gap-[12px] items-center"
              data-node-id="225:366"
            >
              <div
                className="bg-[#fffbeb] rounded-full size-[32px] flex items-center justify-center"
                data-node-id="225:367"
              >
                <Image
                  src="/assets/clock-payment.svg"
                  alt=""
                  width={14}
                  height={14}
                  className="size-[14px]"
                />
              </div>
              <div className="flex flex-col" data-node-id="225:371">
                <p
                  className="font-semibold text-[#9ca3af] text-[10px] tracking-[0.0586px] uppercase leading-[15px]"
                  data-node-id="225:373"
                >
                  Batas Pembayaran
                </p>
                <p
                  className="font-medium text-[#1f2937] text-[14px] tracking-[0.041px] leading-[20px]"
                  data-node-id="225:375"
                >
                  25 September 2026, 11:00 WIB
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* QRIS Card */}
        <div className="flex flex-col items-center justify-center px-[24px]" data-node-id="266:757">
          <div
            className="bg-white border border-[#f3f4f6] rounded-[24px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] w-[327px] h-[531px] relative"
            data-node-id="225:376"
          >
            {/* QRIS Title */}
            <div className="absolute left-[136.47px] top-[24px]" data-node-id="225:378">
              <h2
                className="font-black italic text-[#003153] text-[24px] tracking-[-1.2px] leading-[32px]"
                data-node-id="225:381"
              >
                QRIS
              </h2>
            </div>

            {/* QR Code */}
            <div className="absolute left-[24px] right-[24px] top-[80px]" data-node-id="225:397">
              <div
                className="bg-white border-[12px] border-[#f9fafb] rounded-[16px] w-full h-[277px] flex items-center justify-center overflow-hidden"
                data-node-id="225:398"
              >
                <Image
                  src="/assets/qris-qr-code.png"
                  alt=""
                  width={280}
                  height={277}
                  className="w-full h-full object-cover"
                  data-node-id="225:399"
                />
              </div>
            </div>

            {/* Merchant Info */}
            <div className="absolute left-[82.64px] top-[361px]" data-node-id="225:382">
              <div className="flex flex-col gap-[4px]" data-node-id="225:383">
                <p
                  className="font-medium text-[#9ca3af] text-[12px] text-center tracking-[1.2px] uppercase leading-[16px]"
                  data-node-id="225:385"
                >
                  Merchant
                </p>
                <p
                  className="font-bold text-[#111827] text-[18px] text-center uppercase leading-[28px]"
                  data-node-id="225:387"
                >
                  KUTIP INDONESIA
                </p>
                <p
                  className="font-normal text-[#6b7280] text-[12px] text-center tracking-[0.0117px] leading-[16px]"
                  data-node-id="225:389"
                >
                  NMID: ID1020304050607
                </p>
              </div>
            </div>

            {/* Total Amount */}
            <div className="absolute left-[24px] right-[24px] top-[437px]" data-node-id="225:390">
              <div
                className="bg-[#f9fafb] rounded-[16px] p-[16px] flex items-center justify-between"
                data-node-id="225:391"
              >
                <p
                  className="font-normal text-[#6b7280] text-[14px] tracking-[0.041px] leading-[20px]"
                  data-node-id="225:394"
                >
                  Total Tagihan
                </p>
                <p
                  className="font-black text-[#111827] text-[20px] tracking-[-0.4688px] leading-[28px]"
                  data-node-id="225:396"
                >
                  Rp 25.000
                </p>
              </div>
            </div>
          </div>

          {/* Payment Help Link */}
          <div className="h-[52px] w-[327px] flex items-center justify-center px-[8px] pt-[8px] pb-[24px]" data-node-id="225:400">
            <p className="font-normal text-[#9ca3af] text-[12px] text-center leading-[19.5px]" data-node-id="225:409">
              <span className="underline">Cara Pembayaran</span> ?
            </p>
          </div>
        </div>
      </main>

      {/* Bottom Buttons */}
      <footer
        className="bg-white border-t border-[#f3f4f6] px-[24px] py-[24px] shrink-0 w-full"
        data-node-id="225:415"
      >
        <div className="flex gap-[12px] items-center justify-center" data-node-id="225:416">
          <button
            className="bg-white border-2 border-[#e5e7eb] rounded-[16px] py-[16px] w-[159.5px] flex items-center justify-center"
            data-node-id="225:417"
          >
            <span
              className="font-bold text-[#374151] text-[16px] tracking-[0.0469px] leading-[24px]"
              data-node-id="225:418"
            >
              Simpan QR
            </span>
          </button>
          <button
            className="bg-[#22c55e] rounded-[16px] py-[18px] w-[155.5px] flex items-center justify-center shadow-[0px_10px_15px_-3px_#dcfce7,0px_4px_6px_-4px_#dcfce7]"
            data-node-id="225:419"
          >
            <span
              className="font-bold text-white text-[16px] leading-[24px]"
              data-node-id="225:421"
            >
              Konfirmasi
            </span>
          </button>
        </div>
      </footer>
    </motion.div>
  );
}
