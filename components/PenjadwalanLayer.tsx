"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import BottomNav from "@/components/BottomNav";
import ConfirmScheduleOverlay from "@/components/ConfirmScheduleOverlay";

export default function PenjadwalanLayer() {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <>
      <ConfirmScheduleOverlay
        isOpen={showOverlay}
        onClose={() => setShowOverlay(false)}
      />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full sm:max-w-[375px] h-screen h-dvh sm:h-[812px] bg-[#f5f6f4] sm:rounded-[36px] sm:shadow-2xl overflow-hidden flex flex-col relative mx-auto select-none border-0 sm:border sm:border-black/5"
      data-node-id="181:1239"
      data-name="Penjadwalan Flow Final"
    >
      <main className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col gap-[20px] items-center pb-[88px] relative w-full">
        {/* Header */}
        <header
          className="bg-[#f9f8f6] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[16px] items-center pb-[16px] pt-[32px] px-[20px] relative shrink-0 w-full"
          data-node-id="181:1240"
          data-name="Header"
        >
          <Link
            href="/"
            className="bg-[#f9fafb] flex items-center justify-center relative rounded-full shrink-0 size-[40px]"
            data-node-id="181:1241"
            data-name="Background"
          >
            <div className="h-[16px] relative shrink-0 w-[14px]" data-node-id="181:1242" data-name="Img">
              <Image src="/assets/chevron-left.svg" alt="" width={14} height={16} className="absolute block inset-0 max-w-none size-full" />
            </div>
          </Link>
          <div className="flex flex-col items-start relative shrink-0" data-node-id="181:1244" data-name="Heading 1">
            <h1 className="font-bold text-[#252525] text-[20px] tracking-[0.0781px] leading-[28px]" data-node-id="181:1245">
              Penjadwalan
            </h1>
          </div>
        </header>

        {/* Kuota Card */}
        <div
          className="bg-[#f9f8f6] border border-[#f3f4f6] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[8px] items-start p-[20px] relative rounded-[16px] shrink-0 w-[335px] mt-4"
          data-node-id="181:1246"
          data-name="Background+Border+Shadow"
        >
          <div className="flex items-center justify-between relative shrink-0 w-full" data-node-id="181:1247" data-name="Container">
            <div className="flex gap-[8px] items-center relative shrink-0" data-node-id="181:1248" data-name="Container">
              <div className="h-[16px] relative shrink-0 w-[14px]" data-node-id="181:1249" data-name="Img">
                <Image src="/assets/calendar-check.svg" alt="" width={14} height={16} className="absolute block inset-0 max-w-none size-full" />
              </div>
              <div className="flex flex-col items-start relative shrink-0" data-node-id="181:1251">
                <div className="font-bold text-[#252525] text-[14px] tracking-[0.0957px] leading-[20px]" data-node-id="181:1252">
                  Kuota Bulan Ini
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start relative shrink-0" data-node-id="181:1253" data-name="Container">
              <div className="font-semibold text-[#6b7280] text-[12px] leading-[16px]" data-node-id="181:1254">
                September 2026
              </div>
            </div>
          </div>
          <div className="flex items-end justify-between pt-[4px] relative shrink-0 w-full" data-node-id="181:1255" data-name="Container">
            <div className="h-[28px] leading-[0] relative shrink-0 w-[134.91px]" data-node-id="181:1256" data-name="Paragraph">
              <span className="font-bold text-[#252525] text-[18px] leading-[28px]" data-node-id="181:1257">
                1 dari 8
              </span>
              <span className="font-medium text-[#6b7280] text-[12px] tracking-[0.0117px] leading-[16px] ml-1" data-node-id="181:1258">
                sesi tersisa
              </span>
            </div>
            <div className="flex flex-col items-start relative shrink-0" data-node-id="181:1259" data-name="Container">
              {/* <div className="font-bold text-[#22c55e] text-[12px] leading-[16px] w-[26.686px]" data-node-id="181:1260">
                75%
              </div> */}
            </div>
          </div>
          <div className="bg-[#f3f4f6] h-[10px] overflow-clip relative rounded-full shrink-0 w-full" data-node-id="181:1261" data-name="Background">
            <div className="absolute bg-[#22c55e] bottom-0 left-0 right-7/8 rounded-full top-0" data-node-id="181:1262" data-name="Background" />
          </div>
        </div>

        {/* Calendar Section */}
        <div className="flex flex-col gap-[16px] items-start pt-[8px] px-[20px] relative shrink-0 w-full" data-node-id="181:1263" data-name="Container">
          {/* Month Selector */}
          <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="181:1264" data-name="Container">
            <div className="flex gap-[12px] items-center relative shrink-0" data-node-id="181:1267" data-name="Container">
              <div className="h-[12px] relative shrink-0 w-[7.5px]" data-node-id="181:1268" data-name="Img">
                <Image src="/assets/chevron-left-sm.svg" alt="" width={7.5} height={12} className="absolute block inset-0 max-w-none size-full" />
              </div>
              <div className="font-bold text-[#252525] text-[14px] leading-[20px]" data-node-id="181:1271">
                September 2026
              </div>
              <div className="h-[12px] relative shrink-0 w-[7.5px]" data-node-id="181:1272" data-name="Img">
                <Image src="/assets/chevron-right-sm.svg" alt="" width={7.5} height={12} className="absolute block inset-0 max-w-none size-full" />
              </div>
            </div>
          </div>

          {/* Calendar Grid */}
          <div
            className="bg-[#f9f8f6] border border-[#f3f4f6] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[8px] items-start p-[16px] relative rounded-[16px] shrink-0 w-full"
            data-node-id="181:1274"
            data-name="Background+Border+Shadow"
          >
            {/* Day Headers */}
            <div className="flex gap-[4px] items-start justify-center relative shrink-0 w-full" data-node-id="181:1275" data-name="Container">
              {["MIN", "SEN", "SEL", "RAB", "KAM", "JUM", "SAB"].map((day) => (
                <div key={day} className="flex flex-col items-center py-[4px] relative shrink-0 w-[39.56px]">
                  <div className="font-bold not-italic text-[#9ca3af] text-[10px] text-center leading-[15px]">
                    {day}
                  </div>
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-[4px] w-full" data-node-id="181:1290" data-name="Container">
              {[30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3].map((day, idx) => {
                const isPrevMonth = (idx < 2 && day > 20) || (idx > 31 && day < 10);
                const isSelected = day === 25 && idx === 25;

                return (
                  <div
                    key={idx}
                    className={`flex flex-col items-center py-[8px] relative shrink-0 ${isSelected ? 'h-[40px]' : ''}`}
                  >
                    {isSelected ? (
                      <div className="relative size-[32px]">
                        <div className="bg-[#22c55e] flex items-center justify-center rounded-full size-[32px]">
                          <div className="absolute inset-0 rounded-full shadow-[0px_4px_6px_-1px_#bbf7d0,0px_2px_4px_-2px_#bbf7d0]" />
                          <div className="font-bold not-italic text-[#f9f8f6] text-[14px] text-center leading-[20px]">
                            {day}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className={`font-medium not-italic text-[14px] text-center leading-[20px] ${isPrevMonth ? 'text-[#d1d5db]' : 'text-[#374151]'}`}>
                        {day}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Lanjut Button */}
        <div
          className="flex items-start justify-center p-[20px] relative shrink-0 w-[375px] mt-auto"
          data-node-id="181:1363"
          data-name="Background+HorizontalBorder"
        >
          <button
            onClick={() => setShowOverlay(true)}
            className="bg-[#22c55e] flex flex-1 flex-col items-center justify-center min-w-px py-[16px] relative rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(20,83,45,0.1),0px_4px_6px_-4px_rgba(20,83,45,0.1)]"
            data-node-id="181:1364"
            data-name="Button"
          >
            <div className="font-bold text-[#f9f8f6] text-[16px] text-center tracking-[0.0313px] leading-[24px]" data-node-id="181:1366">
              Lanjut
            </div>
          </button>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNav activeTab="jadwal" />
    </motion.div>
    </>
  );
}
