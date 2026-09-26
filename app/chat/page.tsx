"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

export default function ChatPetugas() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full sm:max-w-[375px] h-screen h-dvh sm:h-[812px] bg-[#f5f6f4] sm:rounded-[36px] sm:shadow-2xl overflow-hidden flex flex-col relative mx-auto select-none border-0 sm:border sm:border-black/5"
      data-node-id="297:681"
      data-name="Chat Petugas"
    >
      {/* Scrollable Messages Container */}
      <div
        className="flex flex-col gap-[14px] items-start pb-[210px] pt-[160px] px-[16px] overflow-y-auto flex-1 w-full"
        data-node-id="297:682"
        data-name="Container"
      >
        {/* Date Badge */}
        <div
          className="flex items-center justify-center w-full"
          data-node-id="297:683"
          data-name="Container"
        >
          <div
            className="bg-[#f3f4f6] flex flex-col items-start px-[12px] py-[4px] rounded-[9999px]"
            data-node-id="297:684"
            data-name="Background"
          >
            <p
              className="font-bold text-[#9ca3af] text-[10px] tracking-[0.127px] leading-[14px] whitespace-nowrap"
              data-node-id="297:685"
            >
              Hari ini
            </p>
          </div>
        </div>

        {/* Message 1 - Petugas */}
        <div
          className="flex gap-[8px] items-end w-full"
          data-node-id="297:686"
          data-name="Container"
        >
          <div
            className="relative rounded-[9999px] shrink-0 size-[28px]"
            data-node-id="297:687"
            data-name="avatar-2.jpg"
          >
            <Image
              src="/assets/mark.png"
              alt="Pak Mark"
              width={28}
              height={28}
              className="rounded-[9999px] object-cover"
            />
          </div>
          <div
            className="flex flex-col gap-[3px] items-start max-w-[257.25px]"
            data-node-id="297:688"
            data-name="Container"
          >
            <div
              className="bg-[#f3f4f6] flex flex-col items-start pl-[14px] pr-[15.17px] py-[10px] rounded-bl-[4px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px]"
              data-node-id="297:689"
              data-name="Background"
            >
              <p
                className="font-medium text-[#252525] text-[13px] leading-[19px]"
                data-node-id="297:690"
              >
                Halo, saya petugas KUTIP yang akan
                <br />
                mengambil sampah Anda hari ini.
              </p>
            </div>
            <div className="pl-[4px]" data-node-id="297:691" data-name="Container">
              <p
                className="font-medium text-[#9ca3af] text-[10px] tracking-[0.0488px] leading-[14px]"
                data-node-id="297:692"
              >
                09.05
              </p>
            </div>
          </div>
        </div>

        {/* Message 2 - User */}
        <div
          className="flex items-end justify-end w-full"
          data-node-id="297:693"
          data-name="Container"
        >
          <div
            className="flex flex-col gap-[3px] items-end max-w-[257.25px]"
            data-node-id="297:694"
            data-name="Container"
          >
            <div
              className="bg-[#c4eabf] flex flex-col items-start pl-[14px] pr-[36.78px] py-[10px] rounded-bl-[16px] rounded-br-[4px] rounded-tl-[16px] rounded-tr-[16px]"
              data-node-id="297:695"
              data-name="Background"
            >
              <p
                className="font-medium text-[#252525] text-[13px] leading-[19px]"
                data-node-id="297:696"
              >
                Baik, kira-kira sampai jam berapa
                <br />
                ya?
              </p>
            </div>
            <div className="pr-[4px]" data-node-id="297:697" data-name="Container">
              <p
                className="font-medium text-[#9ca3af] text-[10px] leading-[14px]"
                data-node-id="297:698"
              >
                09.06
              </p>
            </div>
          </div>
        </div>

        {/* Message 3 - Petugas */}
        <div
          className="flex gap-[8px] items-end w-full"
          data-node-id="297:699"
          data-name="Container"
        >
          <div
            className="relative rounded-[9999px] shrink-0 size-[28px]"
            data-node-id="297:700"
            data-name="avatar-2.jpg"
          >
            <Image
              src="/assets/mark.png"
              alt="Pak Mark"
              width={28}
              height={28}
              className="rounded-[9999px] object-cover"
            />
          </div>
          <div
            className="flex flex-col gap-[3px] items-start max-w-[257.25px]"
            data-node-id="297:701"
            data-name="Container"
          >
            <div
              className="bg-[#f3f4f6] flex flex-col items-start pl-[14px] pr-[33.22px] py-[10px] rounded-bl-[4px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px]"
              data-node-id="297:702"
              data-name="Background"
            >
              <p
                className="font-medium text-[#252525] text-[13px] leading-[19px]"
                data-node-id="297:703"
              >
                Saya perkirakan tiba sekitar pukul
                <br />
                09.30.
              </p>
            </div>
            <div className="pl-[4px]" data-node-id="297:704" data-name="Container">
              <p
                className="font-medium text-[#9ca3af] text-[10px] tracking-[0.2051px] leading-[14px]"
                data-node-id="297:705"
              >
                09.07
              </p>
            </div>
          </div>
        </div>

        {/* Message 4 - User */}
        <div
          className="flex items-end justify-end w-full"
          data-node-id="297:706"
          data-name="Container"
        >
          <div
            className="flex flex-col gap-[3px] items-end max-w-[257.25px]"
            data-node-id="297:707"
            data-name="Container"
          >
            <div
              className="bg-[#c4eabf] flex flex-col items-start pl-[14px] pr-[36.59px] py-[10px] rounded-bl-[16px] rounded-br-[4px] rounded-tl-[16px] rounded-tr-[16px]"
              data-node-id="297:708"
              data-name="Background"
            >
              <p
                className="font-medium text-[#252525] text-[13px] leading-[19px]"
                data-node-id="297:709"
              >
                Oke siap, sampahnya sudah saya
                <br />
                taruh di depan pagar.
              </p>
            </div>
            <div className="pr-[4px]" data-node-id="297:710" data-name="Container">
              <p
                className="font-medium text-[#9ca3af] text-[10px] leading-[14px]"
                data-node-id="297:711"
              >
                09.08
              </p>
            </div>
          </div>
        </div>

        {/* Message 5 - Petugas with Image */}
        <div
          className="flex gap-[8px] items-end w-full"
          data-node-id="297:712"
          data-name="Container"
        >
          <div
            className="relative rounded-[9999px] shrink-0 size-[28px]"
            data-node-id="297:713"
            data-name="avatar-2.jpg"
          >
            <Image
              src="/assets/mark.png"
              alt="Pak Mark"
              width={28}
              height={28}
              className="rounded-[9999px] object-cover"
            />
          </div>
          <div
            className="flex flex-col gap-[3px] items-start max-w-[257.25px]"
            data-node-id="297:714"
            data-name="Container"
          >
            <div
              className="bg-[#f3f4f6] flex flex-col gap-[8px] items-start p-[10px] rounded-bl-[4px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px]"
              data-node-id="297:715"
              data-name="Background"
            >
              <div
                className="flex flex-col h-[120px] items-start justify-center overflow-clip rounded-[12px] w-full"
                data-node-id="297:716"
                data-name="Container"
              >
                <Image
                  src="/assets/chat-waste-photo.png"
                  alt="Foto sampah di depan pagar"
                  width={237}
                  height={120}
                  className="object-cover w-full h-full"
                  data-node-id="297:717"
                  data-name="pile of sorted household waste bags placed neatly beside a green gate, daylight, candid mobile photo"
                />
              </div>
              <div className="pl-[4px]" data-node-id="297:718" data-name="Container">
                <p
                  className="font-medium text-[#252525] text-[13px] leading-[19px]"
                  data-node-id="297:719"
                >
                  Baik, saya sudah di lokasi. Ini
                  <br />
                  fotonya ya, mohon dikonfirmasi.
                </p>
              </div>
            </div>
            <div className="pl-[4px]" data-node-id="297:720" data-name="Container">
              <p
                className="font-medium text-[#9ca3af] text-[10px] tracking-[0.0684px] leading-[14px]"
                data-node-id="297:721"
              >
                09.32
              </p>
            </div>
          </div>
        </div>

        {/* Message 6 - User with Read Receipt */}
        <div
          className="flex items-end justify-end w-full"
          data-node-id="297:722"
          data-name="Container"
        >
          <div
            className="flex flex-col gap-[3px] items-end max-w-[257.25px]"
            data-node-id="297:723"
            data-name="Container"
          >
            <div
              className="bg-[#c4eabf] flex flex-col items-start px-[14px] py-[10px] rounded-bl-[16px] rounded-br-[4px] rounded-tl-[16px] rounded-tr-[16px]"
              data-node-id="297:724"
              data-name="Background"
            >
              <p
                className="font-medium text-[#252525] text-[13px] leading-[19px]"
                data-node-id="297:725"
              >
                Sudah sesuai, terima kasih Pak!
              </p>
            </div>
            <div
              className="flex gap-[4px] items-center justify-end pr-[4px]"
              data-node-id="297:726"
              data-name="Container"
            >
              <p
                className="font-medium text-[#9ca3af] text-[10px] tracking-[0.2441px] leading-[14px]"
                data-node-id="297:728"
              >
                09.33
              </p>
              <div className="pb-[2.75px] pt-[2.25px]" data-node-id="297:729" data-name="Container">
                <Image
                  src="/assets/icon-check-double.svg"
                  alt=""
                  width={9}
                  height={10}
                  data-node-id="297:730"
                  data-name="Img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Input Area */}
      <div
        className="absolute bg-[#f9f8f6] border-[#f3f4f6] border-solid border-t bottom-0 flex flex-col items-start left-0 w-full"
        data-node-id="297:762"
        data-name="Background+HorizontalBorder"
      >
        {/* Quick Reply Buttons */}
        <div
          className="flex gap-[8px] items-center overflow-clip pb-[10px] pt-[12px] px-[16px] w-full"
          data-node-id="297:763"
          data-name="Container"
        >
          <div
            className="bg-[#f9f8f6] border border-[#22c55e] border-solid flex items-center justify-center px-[14px] py-[8px] rounded-[9999px]"
            data-node-id="297:764"
            data-name="Background+Border"
          >
            <p
              className="font-semibold text-[#22c55e] text-[11px] tracking-[0.043px] leading-[15px] whitespace-nowrap"
              data-node-id="297:766"
            >
              Petugas sudah sampai?
            </p>
          </div>
          <div
            className="bg-[#f9f8f6] border border-[#22c55e] border-solid flex items-center justify-center px-[14px] py-[8px] rounded-[9999px]"
            data-node-id="297:767"
            data-name="Background+Border"
          >
            <p
              className="font-semibold text-[#22c55e] text-[11px] tracking-[0.0215px] leading-[15px] whitespace-nowrap"
              data-node-id="297:769"
            >
              Saya ingin mengubah catatan.
            </p>
          </div>
        </div>

        {/* Input Row */}
        <div
          className="flex gap-[10px] items-center justify-center pb-[16px] pt-[10px] px-[16px] w-full"
          data-node-id="297:770"
          data-name="Container"
        >
          <div
            className="bg-[#f9fafb] flex items-center justify-center rounded-[9999px] shrink-0 size-[44px]"
            data-node-id="297:771"
            data-name="Background"
          >
            <Image
              src="/assets/icon-attach.svg"
              alt="Attach"
              width={16}
              height={16}
              data-node-id="297:773"
              data-name="Img"
            />
          </div>
          <div
            className="bg-[#f9fafb] border border-[#f3f4f6] border-solid flex flex-1 items-center min-w-px px-[16px] py-[12px] rounded-[9999px]"
            data-node-id="297:775"
            data-name="Background+Border"
          >
            <p
              className="font-medium text-[#9ca3af] text-[13px] leading-[18px]"
              data-node-id="297:777"
            >
              Tulis pesan...
            </p>
          </div>
          <div
            className="bg-[#22c55e] flex items-center justify-center rounded-[9999px] shrink-0 size-[44px]"
            data-node-id="297:778"
            data-name="Background"
          >
            <Image
              src="/assets/icon-send.svg"
              alt="Send"
              width={15}
              height={15}
              data-node-id="297:780"
              data-name="Img"
            />
          </div>
        </div>
      </div>

      {/* Top Header */}
      <div
        className="absolute bg-[#f9f8f6] flex flex-col items-start left-0 top-0 w-full drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
        data-node-id="297:732"
        data-name="Background+Shadow"
      >
        {/* Top Bar */}
        <div
          className="flex items-center justify-between pb-[16px] pt-[32px] px-[20px] w-full"
          data-node-id="297:733"
          data-name="Container"
        >
          <div
            className="flex flex-1 gap-[12px] items-center min-w-px"
            data-node-id="297:734"
            data-name="Container"
          >
            <Link
              href="/"
              className="bg-[#f9fafb] flex items-center justify-center rounded-[9999px] shrink-0 size-[40px]"
              data-node-id="297:735"
              data-name="Background"
            >
              <Image
                src="/assets/icon-chevron-left-chat.svg"
                alt="Back"
                width={14}
                height={12}
                data-node-id="297:736"
                data-name="SVG"
              />
            </Link>
            <div className="relative shrink-0" data-node-id="297:738" data-name="Container">
              <div
                className="border-2 border-[#f9f8f6] border-solid rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[44px]"
                data-node-id="297:739"
                data-name="avatar-2.jpg"
              >
                <Image
                  src="/assets/mark.png"
                  alt="Pak Mark"
                  width={44}
                  height={44}
                  className="rounded-[9999px] object-cover"
                />
              </div>
              <div
                className="absolute bg-[#22c55e] border-2 border-[#f9f8f6] border-solid bottom-0 right-0 rounded-[9999px] size-[10px]"
                data-node-id="297:740"
                data-name="Background+Border"
              />
            </div>
            <div className="flex flex-col items-start" data-node-id="297:741" data-name="Container">
              <p
                className="font-bold text-[#252525] text-[16px] tracking-[0.0625px] leading-[22px]"
                data-node-id="297:742"
              >
                Pak Mark
              </p>
              <div
                className="flex gap-[4px] items-center"
                data-node-id="297:743"
                data-name="Container"
              >
                <div
                  className="bg-[#22c55e] rounded-[9999px] size-[6px]"
                  data-node-id="297:744"
                  data-name="Background"
                />
                <p
                  className="font-semibold text-[#22c55e] text-[11px] tracking-[0.1611px] leading-[15px]"
                  data-node-id="297:746"
                >
                  Online
                </p>
              </div>
            </div>
          </div>
          <div
            className="bg-[#22c55e] flex items-center justify-center rounded-[9999px] shrink-0 size-[40px]"
            data-node-id="297:747"
            data-name="Background"
          >
            <Image
              src="/assets/icon-call.svg"
              alt="Call"
              width={15}
              height={15}
              data-node-id="297:749"
              data-name="Img"
            />
          </div>
        </div>

        {/* Order Info Badge */}
        <div
          className="flex flex-col items-start pb-[12px] px-[20px] w-full"
          data-node-id="297:751"
          data-name="Container"
        >
          <div
            className="bg-[#f9fafb] flex items-center justify-between pl-[10px] pr-[9.99px] py-[10px] rounded-[14px] w-full"
            data-node-id="297:752"
            data-name="Background"
          >
            <div
              className="flex flex-1 flex-col gap-[2px] items-start min-w-px whitespace-nowrap"
              data-node-id="297:753"
              data-name="Paragraph"
            >
              <p
                className="font-bold text-[#252525] text-[11px] tracking-[-0.0645px] leading-[15px]"
                data-node-id="297:754"
              >
                Order KTP-2026-00127
              </p>
              <p
                className="font-medium text-[#6b7280] text-[10px] tracking-[0.0195px] leading-[14px]"
                data-node-id="297:755"
              >
                25 Sep 2026, 09.00–11.00 WIB
              </p>
            </div>
            <div
              className="bg-[#eff6ff] border border-[#dbeafe] border-solid flex items-center justify-center px-[10px] py-[4px] rounded-[9999px] shrink-0"
              data-node-id="297:756"
              data-name="Background+Border"
            >
              <p
                className="font-bold text-[#2563eb] text-[9px] tracking-[0.0088px] leading-[13px] whitespace-nowrap"
                data-node-id="297:758"
              >
                Petugas Menuju Lokasi
              </p>
            </div>
            <div className="pb-[3.12px] pt-[2.38px]" data-node-id="297:759" data-name="Container">
              <Image
                src="/assets/icon-chevron-right-small.svg"
                alt=""
                width={7}
                height={11}
                data-node-id="297:760"
                data-name="Img"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
