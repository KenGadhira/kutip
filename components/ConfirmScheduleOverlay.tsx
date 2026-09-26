"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

interface ConfirmScheduleOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConfirmScheduleOverlay({ isOpen, onClose }: ConfirmScheduleOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />

          {/* Overlay Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-[20px]"
            onClick={onClose}
          >
            <div
              className="bg-white flex flex-col gap-[24px] items-center overflow-clip rounded-[28px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] max-w-[335px] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-[#f0fdf4] flex flex-col items-center pb-[24px] pt-[32px] w-full">
                <div className="flex flex-col h-[80px] items-start pb-[16px] w-[64px]">
                  <div className="bg-white border border-[#dcfce7] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center rounded-full size-[64px]">
                    <div className="flex flex-col items-start pb-[5px] pt-[3px]">
                      <div className="h-[24px] relative w-[21px]">
                        <Image
                          src="/assets/calendar-check-overlay.svg"
                          alt=""
                          width={21}
                          height={24}
                          className="absolute block inset-0 max-w-none size-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <h2 className="font-bold text-[#111827] text-[20px] leading-[28px]">
                    Konfirmasi Jadwal?
                  </h2>
                </div>
                <div className="flex flex-col items-start pt-[4px]">
                  <div className="flex flex-col items-center px-[36.53px]">
                    <p className="font-normal text-[#6b7280] text-[14px] text-center tracking-[0.0273px] leading-[20px]">
                      Pastikan semua<br /> detail kamu sudah benar.
                    </p>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col gap-[12px] items-start w-[287px]">
                {/* Tanggal & Waktu */}
                <div className="flex gap-[12px] items-start w-full">
                  <div className="flex items-start justify-center pt-[2px] w-[20px]">
                    <div className="flex flex-col items-start pb-[3.25px] pt-[2.75px]">
                      <div className="relative size-[14px]">
                        <Image
                          src="/assets/clock-overlay.svg"
                          alt=""
                          width={14}
                          height={14}
                          className="absolute block inset-0 max-w-none size-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start min-w-px">
                    <div className="flex flex-col items-start w-full">
                      <div className="font-medium text-[#9ca3af] text-[11px] tracking-[0.55px] uppercase leading-[16.5px]">
                        Tanggal & Waktu
                      </div>
                    </div>
                    <div className="flex flex-col items-start w-full">
                      <div className="font-semibold text-[#1f2937] text-[14px] leading-[20px]">
                        25 September 2026, 09:00 WIB
                      </div>
                    </div>
                  </div>
                </div>

                {/* Alamat Penjemputan */}
                <div className="flex gap-[12px] items-start w-full">
                  <div className="flex items-start justify-center pt-[2px] w-[20px]">
                    <div className="flex flex-col items-start pb-[3.25px] pt-[2.75px]">
                      <div className="h-[14px] relative w-[10.5px]">
                        <Image
                          src="/assets/map-pin-overlay.svg"
                          alt=""
                          width={10.5}
                          height={14}
                          className="absolute block inset-0 max-w-none size-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start min-w-px">
                    <div className="flex flex-col items-start w-full">
                      <div className="font-medium text-[#9ca3af] text-[11px] tracking-[0.55px] uppercase leading-[16.5px]">
                        Alamat Penjemputan
                      </div>
                    </div>
                    <div className="flex flex-col items-start overflow-clip w-full">
                      <div className="font-semibold text-[#1f2937] text-[14px] leading-[20px]">
                        Jl. Wastukencana, Bandung ...
                      </div>
                    </div>
                  </div>
                </div>

                {/* Jenis Sampah */}
                <div className="flex gap-[12px] items-start w-full">
                  <div className="flex items-start justify-center pt-[2px] w-[20px]">
                    <div className="flex flex-col items-start pb-[3.25px] pt-[2.75px]">
                      <div className="relative size-[14px]">
                        <Image
                          src="/assets/recycle-overlay.svg"
                          alt=""
                          width={14}
                          height={14}
                          className="absolute block inset-0 max-w-none size-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[2px] items-start min-w-px">
                    <div className="flex flex-col items-start w-full">
                      <div className="font-medium text-[#9ca3af] text-[11px] tracking-[0.55px] uppercase leading-[16.5px]">
                        Jenis Sampah
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-[6px] items-start w-full">
                      <div className="bg-[#f3f4f6] flex flex-col items-start px-[8px] py-[2px] rounded-full">
                        <div className="font-bold text-[#4b5563] text-[10px] tracking-[0.0684px] uppercase leading-[15px] whitespace-nowrap">
                          Plastik
                        </div>
                      </div>
                      <div className="bg-[#f3f4f6] flex flex-col items-start px-[8px] py-[2px] rounded-full">
                        <div className="font-bold text-[#4b5563] text-[10px] tracking-[0.1465px] uppercase leading-[15px] whitespace-nowrap">
                          Kertas
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Kuota */}
                <div className="border-[#f9fafb] border-solid border-t flex items-center justify-between pt-[12px] w-full">
                  <div className="flex gap-[12px] items-center">
                    <div className="flex items-start justify-center w-[20px]">
                      <div className="flex flex-col items-start pb-[3.25px] pt-[2.75px]">
                        <div className="h-[14px] relative w-[12.25px]">
                          <Image
                            src="/assets/ticket-overlay.svg"
                            alt=""
                            width={12.25}
                            height={14}
                            className="absolute block inset-0 max-w-none size-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="font-medium text-[#6b7280] text-[14px] tracking-[0.3008px] leading-[20px] whitespace-nowrap">
                        Kuota
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="font-bold text-[#1f2937] text-[14px] tracking-[-0.0684px] leading-[20px] whitespace-nowrap">
                      1 Sesi
                    </div>
                  </div>
                </div>

                {/* Biaya Layanan */}
                <div className="flex items-center justify-between w-full">
                  <div className="flex gap-[12px] items-center">
                    <div className="flex items-start justify-center w-[20px]">
                      <div className="flex flex-col items-start pb-[3.25px] pt-[2.75px]">
                        <div className="h-[14px] relative w-[10.5px]">
                          <Image
                            src="/assets/coins-overlay.svg"
                            alt=""
                            width={10.5}
                            height={14}
                            className="absolute block inset-0 max-w-none size-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="font-medium text-[#6b7280] text-[14px] leading-[20px]">
                        Biaya Layanan
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="font-bold text-[#22c55e] text-[18px] leading-[28px] whitespace-nowrap">
                      Rp 25.000
                    </div>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-[12px] items-start pb-[24px] pt-[8px] px-[24px] w-full">
                <button className="bg-[#22c55e] flex gap-[8.01px] items-center justify-center py-[16px] relative rounded-[16px] shadow-[0px_10px_15px_-3px_#dcfce7,0px_4px_6px_-4px_#dcfce7] w-full">
                  <span className="font-bold text-white text-[16px] text-center leading-[24px]">
                    Ya, Konfirmasi
                  </span>
                  <div className="flex flex-col items-start py-[4px]">
                    <div className="relative size-[16px]">
                      <Image
                        src="/assets/check-circle-overlay.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="absolute block inset-0 max-w-none size-full"
                      />
                    </div>
                  </div>
                </button>
                <button
                  onClick={onClose}
                  className="bg-white border-2 border-[#f3f4f6] border-solid flex items-center justify-center py-[16px] rounded-[16px] w-full"
                >
                  <span className="font-bold text-[#4b5563] text-[16px] text-center leading-[24px]">
                    Kembali
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
