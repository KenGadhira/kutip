"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import BottomNav, { type NavTab } from "@/components/BottomNav";

interface HomeDashboardLayerProps {
  userName?: string;
  userLocation?: string;
  points?: number;
}

// ponytail: mock dashboard data; connect with real user session & query endpoints when backend ready
export default function HomeDashboardLayer({
  userName = "Bapak Budi",
  userLocation = "RT 05 - Wastukencana, Bandung",
  points = 1250,
}: HomeDashboardLayerProps) {
  const [activeBanner, setActiveBanner] = useState(0);
  const [activeTab, setActiveTab] = useState<NavTab>("home");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full sm:max-w-[375px] h-screen h-dvh sm:h-[812px] bg-[#f5f6f4] sm:rounded-[36px] sm:shadow-2xl overflow-hidden flex flex-col relative mx-auto select-none border-0 sm:border sm:border-black/5"
      data-node-id="181:1087"
      data-name="Home Dashboard Final"
    >
      {/* Scrollable Content Container */}
      <main
        className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col items-center gap-[16px] pb-[24px] relative w-full"
        data-node-id="231:243"
        data-name="Content"
      >
        {/* Header */}
        <header
          className="bg-[#f9f8f6] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[16px] items-start pt-[32px] pb-[16px] px-[20px] relative shrink-0 w-full"
          data-node-id="181:1088"
          data-name="Header"
        >
          {/* User Row */}
          <div
            className="flex items-center justify-between relative shrink-0 w-full"
            data-node-id="181:1089"
            data-name="Container"
          >
            <div
              className="flex gap-[12px] items-center relative shrink-0"
              data-node-id="181:1090"
              data-name="Container"
            >
              <Link
                href="/profile"
                className="relative rounded-full shrink-0 size-[48px] overflow-hidden active:scale-95 transition"
                data-node-id="181:1091"
                data-name="Profile"
                aria-label="Lihat Profil"
              >
                <Image
                  src="/assets/profile-avatar.png"
                  alt={`Foto profil ${userName}`}
                  width={48}
                  height={48}
                  className="object-cover size-full rounded-full pointer-events-none"
                  priority
                />
              </Link>
              <div
                className="flex flex-col items-start relative shrink-0"
                data-node-id="181:1092"
                data-name="Container"
              >
                <div
                  className="flex flex-col items-start relative shrink-0 w-full"
                  data-node-id="181:1093"
                  data-name="Container"
                >
                  <p
                    className="text-[#6b7280] text-[12px] leading-[16px] tracking-[0.0938px]"
                    data-node-id="181:1094"
                  >
                    Selamat pagi,
                  </p>
                </div>
                <div
                  className="flex flex-col items-start relative shrink-0 w-full"
                  data-node-id="181:1095"
                  data-name="Heading 2"
                >
                  <h1
                    className="font-bold text-[#252525] text-[18px] leading-[28px] tracking-[0.123px] whitespace-nowrap"
                    data-node-id="181:1096"
                  >
                    Halo, {userName}
                  </h1>
                </div>
              </div>
            </div>

            {/* Notification Bell */}
            <button
              type="button"
              className="bg-[#f3f4f6] flex items-center justify-center relative rounded-full shrink-0 size-[40px] hover:bg-gray-200 transition cursor-pointer active:scale-95"
              data-node-id="181:1097"
              data-name="Background"
              aria-label="Notifikasi"
            >
              <div
                className="h-[18px] w-[15.75px] relative shrink-0"
                data-node-id="181:1098"
                data-name="Img"
              >
                <Image
                  src="/assets/home/icon-bell.svg"
                  alt="Notifikasi"
                  width={15.75}
                  height={18}
                  className="block size-full"
                />
              </div>
              <div
                className="absolute bg-[#ef4444] border-2 border-[#f9f8f6] right-[8px] top-[8px] rounded-full size-[10px]"
                data-node-id="181:1100"
                data-name="Notification Indicator"
              />
            </button>
          </div>

          {/* Location Selector */}
          <button
            type="button"
            className="bg-[#f9fafb] flex gap-[8px] items-center p-[10px] relative rounded-[8px] shrink-0 w-full hover:bg-gray-100 transition cursor-pointer text-left"
            data-node-id="181:1101"
            data-name="Background"
            aria-label="Pilih Lokasi"
          >
            <div
              className="h-[16px] w-[12px] relative shrink-0"
              data-node-id="181:1102"
              data-name="Img"
            >
              <Image
                src="/assets/home/icon-location.svg"
                alt="Lokasi"
                width={12}
                height={16}
                className="block size-full"
              />
            </div>
            <div
              className="flex flex-1 flex-col items-start overflow-hidden relative min-w-0"
              data-node-id="181:1104"
              data-name="Location Text"
            >
              <p
                className="font-medium text-[#374151] text-[14px] leading-[20px] truncate w-full"
                data-node-id="181:1105"
              >
                {userLocation}
              </p>
            </div>
            <div
              className="relative shrink-0 size-[12px]"
              data-node-id="181:1106"
              data-name="Img"
            >
              <Image
                src="/assets/home/icon-chevron-down.svg"
                alt="Pilih lokasi"
                width={12}
                height={12}
                className="block size-full"
              />
            </div>
          </button>
        </header>

        {/* Points Card */}
        <section
          className="bg-[#f9f8f6] border border-[#f3f4f6] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-between p-[16px] relative rounded-[12px] shrink-0 w-[335px]"
          data-node-id="181:1108"
          data-name="Background+Border+Shadow"
          aria-label="Informasi Poin"
        >
          <div
            className="flex gap-[12px] items-center relative shrink-0"
            data-node-id="181:1109"
            data-name="Container"
          >
            <div
              className="bg-[rgba(71,124,46,0.1)] flex items-center justify-center relative rounded-full shrink-0 size-[40px]"
              data-node-id="181:1110"
              data-name="Overlay"
            >
              <div
                className="relative shrink-0 size-[16px]"
                data-node-id="181:1111"
                data-name="Img"
              >
                <Image
                  src="/assets/home/icon-leaf.svg"
                  alt="Ikon Poin Daun"
                  width={16}
                  height={16}
                  className="block size-full"
                />
              </div>
            </div>
            <div
              className="flex items-baseline gap-[4px] relative shrink-0"
              data-node-id="181:1113"
              data-name="Container"
            >
              <span
                className="font-bold text-[#477c2e] text-[18px] leading-[28px]"
                data-node-id="181:1117"
              >
                {points.toLocaleString("id-ID")}
              </span>
              <span
                className="font-medium text-[#6b7280] text-[12px] leading-[16px]"
                data-node-id="181:1118"
              >
                Poin
              </span>
            </div>
          </div>

          <button
            type="button"
            className="bg-[#477c2e] flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-full shrink-0 shadow-[0px_4px_6px_-1px_rgba(20,83,45,0.1),0px_2px_4px_-2px_rgba(20,83,45,0.1)] hover:bg-[#3d6b27] transition active:scale-95 cursor-pointer"
            data-node-id="181:1119"
            data-name="Button"
          >
            <span
              className="font-bold text-[#f9f8f6] text-[12px] text-center whitespace-nowrap"
              data-node-id="181:1121"
            >
              Tukar Poin
            </span>
          </button>
        </section>

        {/* Promo Carousel */}
        <section
          className="flex flex-col gap-[12px] items-start pt-[8px] relative shrink-0 w-full"
          data-node-id="181:1122"
          data-name="Container"
          aria-label="Promo & Banner"
        >
          <div
            className="w-full overflow-x-auto flex gap-[16px] px-[20px] scroll-px-[16px] snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            data-node-id="181:1123"
            data-name="Container"
            onScroll={(e) => {
              const scrollLeft = e.currentTarget.scrollLeft;
              if (scrollLeft > 380) {
                setActiveBanner(2);
              } else if (scrollLeft > 140) {
                setActiveBanner(1);
              } else {
                setActiveBanner(0);
              }
            }}
          >
            {/* Banner 1 */}
            <div
              className="bg-[#477c2e] min-w-[285px] w-[285px] h-[130px] rounded-[16px] p-[20px] relative overflow-hidden flex flex-col justify-between shrink-0 snap-start"
              data-node-id="181:1124"
              data-name="Background"
            >
              <div
                className="absolute bottom-[-26.37px] right-[-8.27px] opacity-20 pointer-events-none"
                data-node-id="181:1125"
                data-name="Container"
              >
                <div
                  className="h-[127.997px] w-[143.997px] relative shrink-0"
                  data-node-id="181:1126"
                  data-name="Img"
                >
                  <Image
                    src="/assets/home/banner-deco-1.svg"
                    alt=""
                    width={144}
                    height={128}
                    className="block size-full"
                  />
                </div>
              </div>

              <div
                className="absolute right-[16px] top-1/2 -translate-y-1/2 rounded-[8px] size-[96px] overflow-hidden pointer-events-none"
                data-node-id="181:1128"
                data-name="Container"
              >
                <Image
                  src="/assets/home/banner-grocery.png"
                  alt="Tukar sampah jadi sembako"
                  width={96}
                  height={96}
                  className="size-full object-cover"
                />
              </div>

              <div
                className="flex flex-col gap-[8px] items-start relative shrink-0 w-[163.16px] z-10"
                data-node-id="181:1130"
                data-name="Container"
              >
                <div data-node-id="181:1131" data-name="Heading 3">
                  <h2
                    className="font-bold text-[#f9f8f6] text-[20px] leading-[25px]"
                    data-node-id="181:1132"
                  >
                    Tukar Sampah
                    <br />
                    Jadi Sembako
                  </h2>
                </div>
                <div data-node-id="181:1133" data-name="Container">
                  <p
                    className="font-normal text-[12px] text-white/80 leading-[16px]"
                    data-node-id="181:1134"
                  >
                    Makin banyak setor, makin
                    <br />
                    hemat belanja bulanan.
                  </p>
                </div>
              </div>
            </div>

            {/* Banner 2 */}
            <div
              className="bg-[#1b4332] min-w-[285px] w-[285px] h-[130px] rounded-[16px] p-[20px] relative overflow-hidden flex flex-col justify-between shrink-0 snap-start"
              data-node-id="181:1135"
              data-name="Background"
            >
              <div
                className="absolute bottom-[-28.03px] right-[-8.45px] opacity-20 pointer-events-none"
                data-node-id="181:1136"
                data-name="Container"
              >
                <div
                  className="h-[127.997px] w-[160.005px] relative shrink-0"
                  data-node-id="181:1137"
                  data-name="Img"
                >
                  <Image
                    src="/assets/home/banner-deco-2.svg"
                    alt=""
                    width={160}
                    height={128}
                    className="block size-full"
                  />
                </div>
              </div>

              <div
                className="absolute right-[16px] top-1/2 -translate-y-1/2 rounded-[8px] size-[96px] overflow-hidden pointer-events-none"
                data-node-id="181:1139"
                data-name="Container"
              >
                {/* <Image
                  src="/assets/home/banner-neighbors.png"
                  alt="Ajak tetangga kumpulkan poin"
                  width={96}
                  height={96}
                  className="size-full object-cover"
                /> */}
              </div>

              <div
                className="flex flex-col gap-[8px] items-start relative shrink-0 w-[163.16px] z-10"
                data-node-id="181:1141"
                data-name="Container"
              >
                <div data-node-id="181:1142" data-name="Heading 3">
                  <h2
                    className="font-bold text-[#f9f8f6] text-[20px] leading-[25px]"
                    data-node-id="181:1143"
                  >
                    Pilah Bersih,
                    <br />
                    Poin Dobel!
                  </h2>
                </div>
                <div data-node-id="181:1144" data-name="Container">
                  <p
                    className="font-normal text-[12px] text-white/80 leading-[16px]"
                    data-node-id="181:1145"
                  >
                    Setor plastik kering,
                    <br />
                    dapat bonus poin 2x lipat.
                  </p>
                </div>
              </div>
            </div>

            {/* Banner 3 */}
            <div
              className="bg-[#2d6a4f] min-w-[285px] w-[285px] h-[130px] rounded-[16px] p-[20px] relative overflow-hidden flex flex-col justify-between shrink-0 snap-start"
              data-name="Background"
            >
              <div
                className="absolute bottom-[-26.37px] right-[-8.27px] opacity-20 pointer-events-none"
                data-name="Container"
              >
                <div
                  className="h-[127.997px] w-[143.997px] relative shrink-0"
                  data-name="Img"
                >
                  <Image
                    src="/assets/home/banner-deco-1.svg"
                    alt=""
                    width={144}
                    height={128}
                    className="block size-full"
                  />
                </div>
              </div>

              <div
                className="absolute right-[16px] top-1/2 -translate-y-1/2 rounded-[8px] size-[96px] overflow-hidden pointer-events-none"
                data-name="Container"
              >
                {/* ponytail: banner 3 image illustration slot; add image asset when finalized */}
              </div>

              <div
                className="flex flex-col gap-[8px] items-start relative shrink-0 w-[163.16px] z-10"
                data-name="Container"
              >
                <div data-name="Heading 3">
                  <h2 className="font-bold text-[#f9f8f6] text-[20px] leading-[25px]">
                    Ajak Tetangga,
                    <br />
                    Kumpulkan Poin
                  </h2>
                </div>
                <div data-name="Container">
                  <p className="font-normal text-[12px] text-white/80 leading-[16px]">
                    Bonus 500 poin untuk setiap
                    <br />
                    referal sukses!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div
            className="flex gap-[6px] items-center justify-center relative shrink-0 w-full"
            data-node-id="181:1146"
            data-name="Container"
          >
            <div
              className={`h-[6px] rounded-full transition-all duration-300 ${
                activeBanner === 0 ? "w-[24px] bg-[#477c2e]" : "w-[6px] bg-[#d1d5db]"
              }`}
              data-node-id="181:1147"
              data-name="Background"
            />
            <div
              className={`h-[6px] rounded-full transition-all duration-300 ${
                activeBanner === 1 ? "w-[24px] bg-[#477c2e]" : "w-[6px] bg-[#d1d5db]"
              }`}
              data-node-id="181:1148"
              data-name="Background"
            />
            <div
              className={`h-[6px] rounded-full transition-all duration-300 ${
                activeBanner === 2 ? "w-[24px] bg-[#477c2e]" : "w-[6px] bg-[#d1d5db]"
              }`}
              data-node-id="181:1149"
              data-name="Background"
            />
          </div>
        </section>

        {/* Action Grid (2x2) */}
        <section
          className="gap-x-[16px] gap-y-[16px] grid grid-cols-2 pt-[16px] relative shrink-0 w-[335px]"
          data-node-id="181:1150"
          data-name="Container"
          aria-label="Menu Utama"
        >
          {/* Penjadwalan */}
          <button
            type="button"
            className="bg-[#f9f8f6] border border-[#f3f4f6] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex flex-col items-start justify-start min-h-[122px] overflow-hidden p-[16px] relative rounded-[16px] hover:border-[#477c2e]/40 transition active:scale-95 cursor-pointer text-left"
            data-node-id="181:1151"
            data-name="Background+Border+Shadow"
            aria-label="Penjadwalan"
          >
            <div
              className="flex flex-col items-start relative shrink-0 z-10"
              data-node-id="181:1156"
              data-name="Container"
            >
              <p
                className="font-semibold text-[#374151] text-[14px] leading-[20px] text-left tracking-[0.0684px] whitespace-nowrap"
                data-node-id="181:1157"
              >
                Penjadwalan
              </p>
            </div>
            <div
              className="absolute flex items-center justify-center left-[97px] top-[68px] rounded-[16px] size-[56px] pointer-events-none"
              data-node-id="181:1153"
              data-name="Background"
            >
              <div
                className="h-[93px] relative shrink-0 w-[81px]"
                data-node-id="181:1154"
                data-name="Img"
              >
                <Image
                  src="/assets/home/menu-penjadwalan.svg"
                  alt=""
                  width={81}
                  height={93}
                  className="block size-full"
                />
              </div>
            </div>
          </button>

          {/* Pembayaran */}
          <button
            type="button"
            className="bg-[#f9f8f6] border border-[#f3f4f6] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex flex-col items-start justify-start min-h-[122px] overflow-hidden p-[16px] relative rounded-[16px] hover:border-[#477c2e]/40 transition active:scale-95 cursor-pointer text-left"
            data-node-id="272:300"
            data-name="Background+Border+Shadow"
            aria-label="Pembayaran"
          >
            <div
              className="flex flex-col items-start relative shrink-0 z-10"
              data-node-id="272:304"
              data-name="Container"
            >
              <p
                className="font-semibold text-[#374151] text-[14px] leading-[20px] text-left tracking-[0.0684px] whitespace-nowrap"
                data-node-id="272:305"
              >
                Pembayaran
              </p>
            </div>
            <div
              className="absolute flex items-center justify-center left-[97px] top-[68px] rounded-[16px] size-[56px] pointer-events-none"
              data-node-id="272:301"
              data-name="Background"
            >
              <div
                className="h-[78.67px] relative shrink-0 w-[59px]"
                data-node-id="272:306"
                data-name="Img"
              >
                <Image
                  src="/assets/home/menu-pembayaran.svg"
                  alt=""
                  width={59}
                  height={79}
                  className="block size-full"
                />
              </div>
            </div>
          </button>

          {/* Hadiah */}
          <button
            type="button"
            className="bg-[#f9f8f6] border border-[#f3f4f6] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex flex-col items-start justify-start min-h-[122px] overflow-hidden p-[16px] relative rounded-[16px] hover:border-[#477c2e]/40 transition active:scale-95 cursor-pointer text-left"
            data-node-id="272:315"
            data-name="Background+Border+Shadow"
            aria-label="Hadiah"
          >
            <div
              className="flex flex-col items-start relative shrink-0 z-10"
              data-node-id="272:319"
              data-name="Container"
            >
              <p
                className="font-semibold text-[#374151] text-[14px] leading-[20px] text-left tracking-[0.0684px] whitespace-nowrap"
                data-node-id="272:320"
              >
                Hadiah
              </p>
            </div>
            <div
              className="absolute flex items-center justify-center left-[97px] top-[68px] rounded-[16px] size-[56px] pointer-events-none"
              data-node-id="272:316"
              data-name="Background"
            >
              <div
                className="relative shrink-0 size-[76px]"
                data-node-id="272:327"
                data-name="Img"
              >
                <Image
                  src="/assets/home/menu-hadiah.svg"
                  alt=""
                  width={76}
                  height={76}
                  className="block size-full"
                />
              </div>
            </div>
          </button>

          {/* Riwayat */}
          <button
            type="button"
            className="bg-[#f9f8f6] border border-[#f3f4f6] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex flex-col items-start justify-start min-h-[122px] overflow-hidden p-[16px] relative rounded-[16px] hover:border-[#477c2e]/40 transition active:scale-95 cursor-pointer text-left"
            data-node-id="272:321"
            data-name="Background+Border+Shadow"
            aria-label="Riwayat"
          >
            <div
              className="flex flex-col items-start relative shrink-0 z-10"
              data-node-id="272:325"
              data-name="Container"
            >
              <p
                className="font-semibold text-[#374151] text-[14px] leading-[20px] text-left tracking-[0.0684px] whitespace-nowrap"
                data-node-id="272:326"
              >
                Riwayat
              </p>
            </div>
            <div
              className="absolute flex items-center justify-center left-[97px] top-[68px] rounded-[16px] size-[56px] pointer-events-none"
              data-node-id="272:322"
              data-name="Background"
            >
              <div
                className="relative shrink-0 size-[68px]"
                data-node-id="272:330"
                data-name="Img"
              >
                <Image
                  src="/assets/home/menu-riwayat.svg"
                  alt=""
                  width={68}
                  height={68}
                  className="block size-full"
                />
              </div>
            </div>
          </button>
        </section>

        {/* Status Terbaru Section */}
        <section
          className="flex flex-col gap-[16px] items-start pt-[16px] px-[20px] relative shrink-0 w-full"
          data-node-id="181:1179"
          data-name="Container"
          aria-label="Status Terbaru"
        >
          {/* Header Row */}
          <div
            className="flex items-center justify-between relative shrink-0 w-full"
            data-node-id="181:1180"
            data-name="Container"
          >
            <div data-node-id="181:1181" data-name="Heading 3">
              <h2
                className="font-bold text-[#252525] text-[18px] leading-[28px] whitespace-nowrap"
                data-node-id="181:1182"
              >
                Status Terbaru
              </h2>
            </div>
            <button
              type="button"
              className="font-semibold text-[#477c2e] text-[14px] leading-[20px] tracking-[0.041px] whitespace-nowrap hover:underline cursor-pointer"
              data-node-id="181:1184"
            >
              Lihat Semua
            </button>
          </div>

          {/* Cards List */}
          <div
            className="flex flex-col gap-[16px] items-start relative shrink-0 w-full"
            data-node-id="181:1185"
            data-name="Container"
          >
            {/* Status Card 1 */}
            <div
              className="bg-[#f9f8f6] border border-[#f3f4f6] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px] items-start p-[16px] relative rounded-[16px] shrink-0 w-full"
              data-node-id="181:1186"
              data-name="Background+Border+Shadow"
            >
              <div
                className="flex items-start relative shrink-0 w-full"
                data-node-id="181:1187"
                data-name="Container"
              >
                <div
                  className="flex gap-[12px] items-center relative shrink-0"
                  data-node-id="181:1188"
                  data-name="Container"
                >
                  <div
                    className="bg-[#f9fafb] flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]"
                    data-node-id="181:1189"
                    data-name="Background"
                  >
                    <div
                      className="h-[16px] w-[20px] relative shrink-0"
                      data-node-id="181:1190"
                      data-name="Img"
                    >
                      <Image
                        src="/assets/home/icon-truck-box.svg"
                        alt="Truk Pengambilan"
                        width={20}
                        height={16}
                        className="block size-full"
                      />
                    </div>
                  </div>
                  <div
                    className="flex flex-col items-start relative shrink-0"
                    data-node-id="181:1192"
                    data-name="Container"
                  >
                    <h3
                      className="font-bold text-[#252525] text-[14px] leading-[20px] tracking-[0.041px] whitespace-nowrap"
                      data-node-id="181:1194"
                    >
                      Pengambilan Sampah
                    </h3>
                    <p
                      className="font-normal text-[#6b7280] text-[12px] leading-[16px] tracking-[0.0117px] whitespace-nowrap"
                      data-node-id="181:1196"
                    >
                      25 Sep 2026 • 09.00–11.00
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Row */}
              <div
                className="border-t border-[#f3f4f6] flex items-center justify-between pt-[12px] relative shrink-0 w-full"
                data-node-id="181:1197"
                data-name="HorizontalBorder"
              >
                <div
                  className="bg-[#fefce8] flex flex-col items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0"
                  data-node-id="181:1198"
                  data-name="Background"
                >
                  <span
                    className="font-bold text-[#a16207] text-[10px] leading-[15px] tracking-[0.5px] uppercase whitespace-nowrap"
                    data-node-id="181:1199"
                  >
                    Menunggu Pembayaran
                  </span>
                </div>

                <button
                  type="button"
                  className="flex gap-[4px] items-center relative shrink-0 hover:underline cursor-pointer group active:scale-95 transition"
                  data-node-id="181:1200"
                  data-name="Button"
                >
                  <span
                    className="font-bold text-[#477c2e] text-[12px] leading-[16px] text-center"
                    data-node-id="181:1201"
                  >
                    Bayar Sekarang
                  </span>
                  <div
                    className="h-[10px] w-[6.25px] relative shrink-0"
                    data-node-id="181:1202"
                    data-name="Img"
                  >
                    <Image
                      src="/assets/home/icon-chevron-right.svg"
                      alt=""
                      width={6.25}
                      height={10}
                      className="block size-full"
                    />
                  </div>
                </button>
              </div>
            </div>

            {/* Status Card 2 */}
            <div
              className="bg-[#f9f8f6] border border-[#f3f4f6] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px] items-start opacity-80 p-[16px] relative rounded-[16px] shrink-0 w-full"
              data-node-id="181:1204"
              data-name="Background+Border+Shadow"
            >
              <div
                className="flex items-start relative shrink-0 w-full"
                data-node-id="181:1205"
                data-name="Container"
              >
                <div
                  className="flex gap-[12px] items-center relative shrink-0"
                  data-node-id="181:1206"
                  data-name="Container"
                >
                  <div
                    className="bg-[#f9fafb] flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]"
                    data-node-id="181:1207"
                    data-name="Background"
                  >
                    <div
                      className="relative shrink-0 size-[16px]"
                      data-node-id="181:1208"
                      data-name="Img"
                    >
                      <Image
                        src="/assets/home/icon-check-circle.svg"
                        alt="Selesai"
                        width={16}
                        height={16}
                        className="block size-full"
                      />
                    </div>
                  </div>
                  <div
                    className="flex flex-col items-start relative shrink-0"
                    data-node-id="181:1210"
                    data-name="Container"
                  >
                    <h3
                      className="font-bold text-[#252525] text-[14px] leading-[20px] tracking-[0.041px] whitespace-nowrap"
                      data-node-id="181:1212"
                    >
                      Pengambilan Sampah
                    </h3>
                    <p
                      className="font-normal text-[#6b7280] text-[12px] leading-[16px] whitespace-nowrap"
                      data-node-id="181:1214"
                    >
                      22 Sep 2026 • 13.00–15.00
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Row */}
              <div
                className="border-t border-[#f3f4f6] flex items-center pt-[12px] relative shrink-0 w-full"
                data-node-id="181:1215"
                data-name="HorizontalBorder"
              >
                <div
                  className="bg-[#f0fdf4] flex flex-col items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0"
                  data-node-id="181:1216"
                  data-name="Background"
                >
                  <span
                    className="font-bold text-[#15803d] text-[10px] leading-[15px] tracking-[0.5px] uppercase whitespace-nowrap"
                    data-node-id="181:1217"
                  >
                    Sampah Telah Diambil
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Fixed Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </motion.div>
  );
}
