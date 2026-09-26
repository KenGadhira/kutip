"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

interface BookingSuccessOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingSuccessOverlay({ isOpen, onClose }: BookingSuccessOverlayProps) {
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

          {/* Success Screen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div className="bg-white w-full h-full relative overflow-y-auto">
              {/* Header */}
              <div className="absolute left-0 top-0 w-full px-[20px] py-[16px] flex items-center justify-between drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
                <div className="flex gap-[16px] items-center">
                  <button
                    onClick={onClose}
                    className="bg-[#f9fafb] rounded-full size-[40px] flex items-center justify-center"
                  >
                    <Image
                      src="/assets/arrow-left-success.svg"
                      alt=""
                      width={14}
                      height={12}
                    />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="absolute left-[24px] right-[24px] top-[48px] pb-[32px] flex flex-col items-start">
                <div className="w-full flex flex-col items-center">
                  {/* Success Icon */}
                  <div className="h-[104px] w-[80px] pb-[24px] flex flex-col items-start">
                    <div className="bg-[#f0fdf4] rounded-full size-[80px] flex items-center justify-center">
                      <div className="bg-[#22c55e] rounded-full size-[64px] flex items-center justify-center">
                        <div className="flex flex-col items-start pb-[3.25px] pt-[2.75px]">
                          <Image
                            src="/assets/check-success.svg"
                            alt=""
                            width={26.25}
                            height={30}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="pb-[8px] flex flex-col items-start">
                    <div className="flex flex-col items-center">
                      <h2 className="font-bold text-[#111827] text-[24px] leading-[32px] text-center whitespace-nowrap">
                        Jadwal Berhasil Dibuat!
                      </h2>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="flex flex-col items-center px-[28.7px]">
                    <p className="font-normal text-[#6b7280] text-[14px] text-center leading-[20px]">
                      Jadwal pengambilan sampahmu berhasil<br />disimpan.
                    </p>
                  </div>
                </div>
              </div>

              {/* Details Card */}
              <div className="absolute left-[24px] right-[24px] top-[264px] pb-[12px] flex flex-col items-start">
                <div className="bg-white border border-[#f3f4f6] rounded-[16px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] w-full pb-[12px] pt-[20px] px-[20px] flex flex-col gap-[16px] items-start">
                  {/* Order ID */}
                  <div className="border-b border-[#f9fafb] pb-[16px] w-full flex items-center justify-between">
                    <div className="flex flex-col items-start">
                      <p className="font-medium text-[#9ca3af] text-[12px] tracking-[0.6px] uppercase leading-[16px]">
                        Order ID
                      </p>
                    </div>
                    <div className="flex flex-col items-start">
                      <p className="font-semibold text-[#111827] text-[14px] tracking-[-0.0684px] leading-[20px] whitespace-nowrap">
                        KTP-2026-00125
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="w-full flex flex-col gap-[16px] items-start">
                    {/* Tanggal */}
                    <div className="w-full flex items-start">
                      <div className="w-[32px] pb-[4px] pt-[6px] flex flex-col items-start">
                        <Image
                          src="/assets/calendar-success.svg"
                          alt=""
                          width={14}
                          height={16}
                        />
                      </div>
                      <div className="flex-1 min-w-px flex flex-col gap-[2px] items-start">
                        <div className="w-full flex flex-col items-start">
                          <p className="font-normal text-[#9ca3af] text-[12px] leading-[16px]">
                            Tanggal
                          </p>
                        </div>
                        <div className="w-full flex flex-col items-start">
                          <p className="font-medium text-[#111827] text-[14px] leading-[20px]">
                            25 September 2026
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Waktu */}
                    <div className="w-full flex items-start">
                      <div className="w-[32px] pb-[4px] pt-[6px] flex flex-col items-start">
                        <Image
                          src="/assets/clock-success.svg"
                          alt=""
                          width={16}
                          height={16}
                        />
                      </div>
                      <div className="flex-1 min-w-px flex flex-col gap-[2px] items-start">
                        <div className="w-full flex flex-col items-start">
                          <p className="font-normal text-[#9ca3af] text-[12px] leading-[16px]">
                            Waktu
                          </p>
                        </div>
                        <div className="w-full flex flex-col items-start">
                          <p className="font-medium text-[#111827] text-[14px] leading-[20px]">
                            09:00 - 11:00 WIB
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Alamat */}
                    <div className="w-full flex items-start">
                      <div className="w-[32px] pb-[4px] pt-[6px] flex flex-col items-start">
                        <Image
                          src="/assets/map-pin-success.svg"
                          alt=""
                          width={12}
                          height={16}
                        />
                      </div>
                      <div className="flex-1 min-w-px flex flex-col gap-px items-start">
                        <div className="w-full flex flex-col items-start">
                          <p className="font-normal text-[#9ca3af] text-[12px] leading-[16px]">
                            Alamat
                          </p>
                        </div>
                        <div className="w-full flex flex-col items-start pb-[0.75px]">
                          <p className="font-medium text-[#111827] text-[14px] leading-[22.75px]">
                            Jl. Wastukencana, Bandung
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Payment Section */}
                    <div className="border-t border-[#f9fafb] pt-[16px] w-full flex flex-col gap-[12px] items-start">
                      {/* Total Tagihan */}
                      <div className="w-full flex items-center justify-between">
                        <div className="flex flex-col items-start">
                          <p className="font-normal text-[#4b5563] text-[14px] tracking-[0.041px] leading-[20px] whitespace-nowrap">
                            Total Tagihan
                          </p>
                        </div>
                        <div className="flex flex-col items-start">
                          <p className="font-bold text-[#22c55e] text-[18px] leading-[28px] whitespace-nowrap">
                            Rp 25.000
                          </p>
                        </div>
                      </div>

                      {/* Payment Deadline Warning */}
                      <div className="bg-[#fff7ed] rounded-[8px] w-full p-[12px] flex gap-[12px] items-start">
                        <div className="pb-[4px] pt-[8px] flex flex-col items-start">
                          <Image
                            src="/assets/alert-circle.svg"
                            alt=""
                            width={16}
                            height={16}
                          />
                        </div>
                        <div className="flex flex-col items-start">
                          <div className="w-full flex flex-col items-start">
                            <p className="font-medium text-[#c2410c] text-[11px] tracking-[-0.275px] uppercase leading-[16.5px]">
                              Batas Pembayaran
                            </p>
                          </div>
                          <div className="w-full flex flex-col items-start">
                            <p className="font-semibold text-[#9a3412] text-[14px] leading-[20px] whitespace-nowrap">
                              25 September 2026, 11:00 WIB
                            </p>
                          </div>
                          <div className="w-full flex flex-col items-start pt-[2px]">
                            <p className="font-normal text-[#ea580c] text-[11px] leading-[16.5px]">
                              (2 jam dari sekarang)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Text */}
              <div className="absolute left-[23px] right-[25px] top-[665px] pb-[0.625px] flex flex-col items-center">
                <p className="font-normal text-[#6b7280] text-[14px] text-center leading-[22.75px]">
                  Segera selesaikan pembayaran sebelum batas<br />waktu agar jadwal tidak hangus.
                </p>
              </div>

              {/* Buttons */}
              <div className="absolute left-[24px] right-[24px] top-[704px] pt-[16px] flex flex-col items-start">
                <div className="w-full flex flex-col gap-[12px] items-start">
                  <Link href="/payment" className="bg-[#22c55e] rounded-[12px] w-full py-[16px] flex gap-[8px] items-center justify-center relative shadow-[0px_10px_15px_-3px_#dcfce7,0px_4px_6px_-4px_#dcfce7]">
                    <span className="font-bold text-white text-[16px] text-center leading-[24px] tracking-[0.1094px] whitespace-nowrap">
                      Bayar Sekarang
                    </span>
                    <div className="flex flex-col items-start pb-[3.25px] pt-[2.75px]">
                      <Image
                        src="/assets/arrow-right-success.svg"
                        alt=""
                        width={12.25}
                        height={14}
                      />
                    </div>
                  </Link>
                  <Link href="/status" className="bg-white border-2 border-[#f3f4f6] rounded-[12px] w-full py-[16px] flex items-center justify-center">
                    <span className="font-bold text-[#374151] text-[16px] text-center leading-[24px] tracking-[-0.0313px] whitespace-nowrap">
                      Lihat Status Jadwal
                    </span>
                  </Link>
                </div>
              </div>

              {/* Logo */}
              <div className="absolute left-[24px] right-[24px] top-[889.25px] pb-[16px] pt-[8px] flex flex-col items-start">
                <div className="w-full flex gap-[8px] items-center justify-center">
                  <div className="bg-[#22c55e] rounded-[6px] size-[24px] flex items-center justify-center">
                    <div className="flex flex-col items-start pb-[2.75px] pt-[2.25px]">
                      <Image
                        src="/assets/kutip-logo-success.svg"
                        alt=""
                        width={10}
                        height={10}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="font-bold text-[#1f2937] text-[16px] tracking-[-0.4px] leading-[24px] whitespace-nowrap">
                      KUTIP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
