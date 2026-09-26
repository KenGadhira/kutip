"use client";

import Image from "next/image";
import { motion } from "motion/react";
import BottomNav from "@/components/BottomNav";

export default function StatusPembayaranLayer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full sm:max-w-[375px] h-screen h-dvh sm:h-[812px] bg-[#f5f6f4] sm:rounded-[36px] sm:shadow-2xl overflow-hidden flex flex-col relative mx-auto select-none border-0 sm:border sm:border-black/5"
      data-node-id="181:1367"
      data-name="Status & Pembayaran Flow"
    >
      {/* Header */}
      <header
        className="bg-[#f9f8f6] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-between pb-[16px] pt-[32px] px-[20px] relative shrink-0 z-20"
        data-node-id="181:1468"
        data-name="Header"
      >
        <div className="flex gap-[16px] items-center shrink-0" data-node-id="181:1469">
          <button
            className="bg-[#f9fafb] flex items-center justify-center rounded-full shrink-0 size-[40px]"
            data-node-id="181:1470"
            aria-label="Kembali"
          >
            <Image
              src="/assets/status/icon-back.svg"
              alt=""
              width={14}
              height={16}
              className="size-auto"
              data-node-id="181:1471"
            />
          </button>
          <h1
            className="font-bold text-[#252525] text-[20px] leading-[28px] tracking-[0.0195px] whitespace-nowrap"
            data-node-id="181:1474"
          >
            Status &amp; Pembayaran
          </h1>
        </div>
        <button
          className="bg-[#f9fafb] flex items-center justify-center rounded-full shrink-0 size-[40px]"
          data-node-id="181:1475"
          aria-label="Cari"
        >
          <Image
            src="/assets/status/icon-search.svg"
            alt=""
            width={16}
            height={16}
            className="size-[16px]"
            data-node-id="181:1476"
          />
        </button>
      </header>

      {/* Filter Tabs */}
      <div
        className="bg-[#f9f8f6] border-b border-[#f3f4f6] h-[59px] overflow-x-auto relative shrink-0"
        data-node-id="181:1368"
      >
        <div className="flex gap-[8px] items-center px-[20px] py-[12px]">
          <button
            className="bg-kutip-green flex items-center justify-center px-[16px] py-[8px] rounded-full shrink-0"
            data-node-id="181:1369"
          >
            <span className="font-bold text-[#f9f8f6] text-[12px] leading-[16px] tracking-[0.1406px] whitespace-nowrap">
              Semua
            </span>
          </button>
          <button
            className="bg-[#f9fafb] border border-[#f3f4f6] flex items-center justify-center px-[16px] py-[8px] rounded-full shrink-0"
            data-node-id="181:1371"
          >
            <span className="font-semibold text-[#6b7280] text-[12px] leading-[16px] tracking-[0.082px] whitespace-nowrap">
              Belum Bayar
            </span>
          </button>
          <button
            className="bg-[#f9fafb] border border-[#f3f4f6] flex items-center justify-center px-[16px] py-[8px] rounded-full shrink-0"
            data-node-id="181:1373"
          >
            <span className="font-semibold text-[#6b7280] text-[12px] leading-[16px] tracking-[0.0586px] whitespace-nowrap">
              Terjadwal
            </span>
          </button>
          <button
            className="bg-[#f9fafb] border border-[#f3f4f6] flex items-center justify-center px-[16px] py-[8px] rounded-full shrink-0"
            data-node-id="181:1375"
          >
            <span className="font-semibold text-[#6b7280] text-[12px] leading-[16px] tracking-[0.0352px] whitespace-nowrap">
              Selesai
            </span>
          </button>
        </div>
      </div>

      {/* Main Content - Scrollable */}
      <main
        className="flex-1 overflow-y-auto flex flex-col gap-[16px] px-[20px] py-[16px] pb-[103px]"
        data-node-id="181:1377"
        data-name="Main"
      >
        {/* Order Card 1 - Menunggu Pembayaran */}
        <article
          className="bg-[#f9f8f6] border border-[#f3f4f6] flex flex-col overflow-clip rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0"
          data-node-id="181:1378"
        >
          <div
            className="border-b border-[#f9fafb] flex items-center justify-between p-[16px]"
            data-node-id="181:1379"
          >
            <div className="flex flex-col" data-node-id="181:1380">
              <p className="font-bold text-[#9ca3af] text-[10px] leading-[15px] tracking-[0.5px] uppercase">
                Order ID
              </p>
              <p className="font-bold text-[#252525] text-[14px] leading-[20px] tracking-[-0.041px]">
                KTP-2026-00128
              </p>
            </div>
            <div
              className="bg-[#fffbeb] border border-[#fef3c7] px-[12px] py-[4px] rounded-full"
              data-node-id="181:1385"
            >
              <span className="font-bold text-[#d97706] text-[10px] leading-[15px]">
                Menunggu Pembayaran
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] p-[16px]" data-node-id="181:1387">
            <div className="flex gap-[12px]" data-node-id="181:1388">
              <div
                className="bg-[#f9fafb] flex items-center justify-center rounded-[12px] shrink-0 size-[40px]"
                data-node-id="181:1389"
              >
                <Image
                  src="/assets/status/icon-calendar.svg"
                  alt=""
                  width={14}
                  height={16}
                  className="size-auto"
                  data-node-id="181:1390"
                />
              </div>
              <div className="flex flex-col" data-node-id="181:1392">
                <p className="font-medium text-[#6b7280] text-[12px] leading-[16px] tracking-[0.0469px]">
                  Jadwal Pengambilan
                </p>
                <p className="font-bold text-[#252525] text-[14px] leading-[20px] tracking-[-0.0273px]">
                  25 Sep 2026 • 09.00 – 11.00
                </p>
              </div>
            </div>
            <div
              className="bg-[#f9fafb] flex items-center justify-between p-[12px] rounded-[12px]"
              data-node-id="181:1397"
            >
              <div className="flex flex-col" data-node-id="181:1398">
                <p className="font-medium text-[#6b7280] text-[10px] leading-[15px] tracking-[0.0684px]">
                  Total Tagihan
                </p>
                <p className="font-bold text-kutip-green text-[16px] leading-[24px]">
                  Rp25.000
                </p>
              </div>
              <button
                className="bg-kutip-green flex items-center justify-center px-[20px] py-[10px] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(20,83,45,0.1),0px_2px_4px_-2px_rgba(20,83,45,0.1)]"
                data-node-id="181:1403"
              >
                <span className="font-bold text-[#f9f8f6] text-[12px] leading-[16px]">
                  Bayar Sekarang
                </span>
              </button>
            </div>
          </div>
        </article>

        {/* Order Card 2 - Selesai */}
        <article
          className="bg-[#f9f8f6] border border-[#f3f4f6] flex flex-col opacity-90 overflow-clip rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0"
          data-node-id="181:1406"
        >
          <div
            className="border-b border-[#f9fafb] flex items-center justify-between p-[16px]"
            data-node-id="181:1407"
          >
            <div className="flex flex-col" data-node-id="181:1408">
              <p className="font-bold text-[#9ca3af] text-[10px] leading-[15px] tracking-[0.5px] uppercase">
                Order ID
              </p>
              <p className="font-bold text-[#252525] text-[14px] leading-[20px] tracking-[-0.0957px]">
                KTP-2026-00125
              </p>
            </div>
            <div
              className="bg-[#f0fdf4] border border-[#dcfce7] px-[12px] py-[4px] rounded-full"
              data-node-id="181:1413"
            >
              <span className="font-bold text-kutip-green text-[10px] leading-[15px] tracking-[0.0977px]">
                Selesai
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] p-[16px]" data-node-id="181:1415">
            <div className="flex gap-[12px]" data-node-id="181:1416">
              <div
                className="bg-[#f9fafb] flex items-center justify-center rounded-[12px] shrink-0 size-[40px]"
                data-node-id="181:1417"
              >
                <Image
                  src="/assets/status/icon-calendar-2.svg"
                  alt=""
                  width={14}
                  height={16}
                  className="size-auto"
                  data-node-id="181:1418"
                />
              </div>
              <div className="flex flex-col" data-node-id="181:1420">
                <p className="font-medium text-[#6b7280] text-[12px] leading-[16px] tracking-[0.0469px]">
                  Jadwal Pengambilan
                </p>
                <p className="font-bold text-[#252525] text-[14px] leading-[20px] tracking-[-0.041px]">
                  22 Sep 2026 • 13.00 – 15.00
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between" data-node-id="181:1425">
              <div className="flex gap-[6px] items-center" data-node-id="181:1426">
                <div
                  className="bg-[#fef3c7] flex items-center justify-center rounded-full shrink-0 size-[24px]"
                  data-node-id="181:1427"
                >
                  <Image
                    src="/assets/status/icon-star.svg"
                    alt=""
                    width={10}
                    height={10}
                    className="size-[10px]"
                    data-node-id="181:1428"
                  />
                </div>
                <p className="font-bold text-[#d97706] text-[12px] leading-[16px]">
                  +50 Poin Berhasil Didapat
                </p>
              </div>
              <button className="flex gap-[4px] items-center" data-node-id="181:1432">
                <span className="font-bold text-kutip-green text-[12px] leading-[16px] tracking-[0.0234px]">
                  Lihat Nota
                </span>
                <Image
                  src="/assets/status/icon-chevron-right.svg"
                  alt=""
                  width={6.25}
                  height={10}
                  className="size-auto"
                  data-node-id="181:1434"
                />
              </button>
            </div>
          </div>
        </article>

        {/* Order Card 3 - Selesai (duplicate) */}
        <article
          className="bg-[#f9f8f6] border border-[#f3f4f6] flex flex-col opacity-90 overflow-clip rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0"
          data-node-id="242:543"
        >
          <div
            className="border-b border-[#f9fafb] flex items-center justify-between p-[16px]"
            data-node-id="242:544"
          >
            <div className="flex flex-col" data-node-id="242:545">
              <p className="font-bold text-[#9ca3af] text-[10px] leading-[15px] tracking-[0.5px] uppercase">
                Order ID
              </p>
              <p className="font-bold text-[#252525] text-[14px] leading-[20px] tracking-[-0.0957px]">
                KTP-2026-00125
              </p>
            </div>
            <div
              className="bg-[#f0fdf4] border border-[#dcfce7] px-[12px] py-[4px] rounded-full"
              data-node-id="242:550"
            >
              <span className="font-bold text-kutip-green text-[10px] leading-[15px] tracking-[0.0977px]">
                Selesai
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] p-[16px]" data-node-id="242:552">
            <div className="flex gap-[12px]" data-node-id="242:553">
              <div
                className="bg-[#f9fafb] flex items-center justify-center rounded-[12px] shrink-0 size-[40px]"
                data-node-id="242:554"
              >
                <Image
                  src="/assets/status/icon-calendar-2.svg"
                  alt=""
                  width={14}
                  height={16}
                  className="size-auto"
                  data-node-id="242:555"
                />
              </div>
              <div className="flex flex-col" data-node-id="242:557">
                <p className="font-medium text-[#6b7280] text-[12px] leading-[16px] tracking-[0.0469px]">
                  Jadwal Pengambilan
                </p>
                <p className="font-bold text-[#252525] text-[14px] leading-[20px] tracking-[-0.041px]">
                  22 Sep 2026 • 13.00 – 15.00
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between" data-node-id="242:562">
              <div className="flex gap-[6px] items-center" data-node-id="242:563">
                <div
                  className="bg-[#fef3c7] flex items-center justify-center rounded-full shrink-0 size-[24px]"
                  data-node-id="242:564"
                >
                  <Image
                    src="/assets/status/icon-star.svg"
                    alt=""
                    width={10}
                    height={10}
                    className="size-[10px]"
                    data-node-id="242:565"
                  />
                </div>
                <p className="font-bold text-[#d97706] text-[12px] leading-[16px]">
                  +50 Poin Berhasil Didapat
                </p>
              </div>
              <button className="flex gap-[4px] items-center" data-node-id="242:569">
                <span className="font-bold text-kutip-green text-[12px] leading-[16px] tracking-[0.0234px]">
                  Lihat Nota
                </span>
                <Image
                  src="/assets/status/icon-chevron-right.svg"
                  alt=""
                  width={6.25}
                  height={10}
                  className="size-auto"
                  data-node-id="242:571"
                />
              </button>
            </div>
          </div>
        </article>

        {/* Order Card 4 - Petugas Menuju Lokasi */}
        <article
          className="bg-[#f9f8f6] border border-[#f3f4f6] flex flex-col overflow-clip rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0"
          data-node-id="181:1436"
        >
          <div
            className="border-b border-[#f9fafb] flex items-center justify-between p-[16px]"
            data-node-id="181:1437"
          >
            <div className="flex flex-col" data-node-id="181:1438">
              <p className="font-bold text-[#9ca3af] text-[10px] leading-[15px] tracking-[0.5px] uppercase">
                Order ID
              </p>
              <p className="font-bold text-[#252525] text-[14px] leading-[20px] tracking-[-0.041px]">
                KTP-2026-00127
              </p>
            </div>
            <div
              className="bg-[#eff6ff] border border-[#dbeafe] px-[12px] py-[4px] rounded-full"
              data-node-id="181:1443"
            >
              <span className="font-bold text-[#2563eb] text-[10px] leading-[15px] tracking-[0.0391px]">
                Petugas Menuju Lokasi
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] p-[16px]" data-node-id="181:1445">
            <div className="flex gap-[12px]" data-node-id="181:1446">
              <div
                className="bg-[#f9fafb] flex items-center justify-center rounded-[12px] shrink-0 size-[40px]"
                data-node-id="181:1447"
              >
                <Image
                  src="/assets/status/icon-truck-time.svg"
                  alt=""
                  width={20}
                  height={16}
                  className="size-auto"
                  data-node-id="181:1448"
                />
              </div>
              <div className="flex flex-col" data-node-id="181:1450">
                <p className="font-medium text-[#6b7280] text-[12px] leading-[16px] tracking-[0.0469px]">
                  Estimasi Tiba
                </p>
                <p className="font-bold text-[#252525] text-[14px] leading-[20px] tracking-[-0.0273px]">
                  Hari ini • 10.15 WIB
                </p>
              </div>
            </div>
            <div
              className="border-t border-[#f9fafb] flex items-center justify-between pt-[8px]"
              data-node-id="181:1455"
            >
              <div className="flex gap-[8px] items-center" data-node-id="181:1456">
                <Image
                  src="/assets/status/collector.png"
                  alt="Petugas"
                  width={32}
                  height={32}
                  className="border-2 border-[#f9f8f6] rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[32px]"
                  data-node-id="181:1457"
                />
                <div className="flex flex-col" data-node-id="181:1458">
                  <p className="font-bold text-[#9ca3af] text-[10px] leading-[15px] tracking-[0.127px]">
                    Petugas
                  </p>
                  <p className="font-bold text-[#252525] text-[12px] leading-[16px] tracking-[0.082px]">
                    Pak Ahmad
                  </p>
                </div>
              </div>
              <button
                className="bg-[#3b82f6] flex gap-[4px] items-center p-[10px] rounded-[12px] shadow-[0px_4px_6px_-1px_#bfdbfe,0px_2px_4px_-2px_#bfdbfe]"
                data-node-id="181:1463"
              >
                <Image
                  src="/assets/status/icon-phone.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="size-[12px]"
                  data-node-id="181:1465"
                />
                <span className="font-bold text-[#f9f8f6] text-[12px] leading-[16px] tracking-[0.0469px]">
                  Hubungi
                </span>
              </button>
            </div>
          </div>
        </article>
      </main>

      {/* Bottom Nav */}
      <BottomNav activeTab="status" />
    </motion.div>
  );
}
