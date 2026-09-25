"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BottomNav from "@/components/BottomNav";

interface ProfileLayerProps {
  onQrClick?: () => void;
}

export default function ProfileLayer({ onQrClick }: ProfileLayerProps) {
  // ponytail: local state for profile info; replace with backend sync on auth integration
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState("Bapak Jarwo");
  const [userLocation, setUserLocation] = useState("RT 05 - Wastukencana, Bandung");

  return (
    <div
      className="w-full sm:max-w-[375px] h-screen h-dvh sm:h-[812px] bg-[#f9f8f6] sm:rounded-[36px] sm:shadow-2xl overflow-hidden flex flex-col relative mx-auto select-none border-0 sm:border sm:border-black/5"
      data-node-id="95:133"
      data-name="Profile Final"
    >
      {/* Main Content Area */}
      <main
        className="bg-[#f9f8f6] flex-1 overflow-y-auto px-4 pt-8 pb-6 flex flex-col gap-6 relative z-10"
        data-node-id="95:173"
        data-name="Main"
      >
        {/* Profile Card */}
        <section
          className="flex flex-col gap-2 w-full"
          data-node-id="95:174"
          data-name="Profile Card"
        >
          {/* Avatar */}
          <div
            className="flex items-end w-[343px]"
            data-node-id="95:175"
            data-name="Top Row"
          >
            <div
              className="relative w-[83px] h-[83px] rounded-full overflow-hidden shrink-0 shadow-sm"
              data-node-id="95:176"
              data-name="image 5"
            >
              <Image
                src="/assets/profile-avatar.png"
                alt="Foto Profil"
                width={83}
                height={83}
                className="w-full h-full object-cover pointer-events-none rounded-full"
                priority
              />
            </div>
          </div>

          {/* User Details */}
          <div
            className="flex flex-col gap-1 w-full"
            data-node-id="95:177"
            data-name="User Details"
          >
            <div
              className="flex items-center gap-4 px-1 w-full"
              data-node-id="95:178"
              data-name="Heading 3"
            >
              {isEditing ? (
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  onBlur={() => setIsEditing(false)}
                  autoFocus
                  className="text-[24px] font-semibold text-[#2b2b2b] leading-[28px] bg-white border border-[#92aa56] rounded px-2 py-0.5 outline-none w-full max-w-[230px]"
                />
              ) : (
                <h1
                  className="text-[24px] font-semibold text-[#2b2b2b] leading-[28px] tracking-tight whitespace-nowrap"
                  data-node-id="95:179"
                >
                  {userName}
                </h1>
              )}

              <button
                type="button"
                onClick={() => setIsEditing(!isEditing)}
                className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition cursor-pointer active:scale-95"
                data-node-id="95:180"
                data-name="Back Arrow"
                aria-label="Edit Nama Profil"
              >
                <div
                  className="w-6 h-6 relative shrink-0"
                  data-node-id="95:181"
                  data-name="gravity-ui:pencil-to-square"
                >
                  <Image
                    src="/assets/icon-edit.svg"
                    alt="Edit"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
              </button>
            </div>

            <div
              className="flex items-center px-1 w-full"
              data-node-id="95:183"
              data-name="Heading 4"
            >
              {isEditing ? (
                <input
                  type="text"
                  value={userLocation}
                  onChange={(e) => setUserLocation(e.target.value)}
                  className="text-[16px] font-semibold text-[#2b2b2b]/70 leading-[28px] bg-white border border-[#92aa56] rounded px-2 py-0.5 outline-none w-full max-w-[230px]"
                />
              ) : (
                <p
                  className="text-[16px] font-semibold text-[#2b2b2b]/70 leading-[28px] whitespace-nowrap"
                  data-node-id="95:184"
                >
                  {userLocation}
                </p>
              )}
            </div>
          </div>

          {/* Line Break */}
          <div
            className="bg-[#e6e6e6] h-[2px] rounded-[10px] w-full"
            data-node-id="157:213"
            data-name="Line Break"
          />
        </section>

        {/* Stats Card - Bulan Ini */}
        <section
          className="flex flex-col gap-1 w-full"
          data-node-id="95:185"
          data-name="Stats Card"
        >
          <div
            className="flex items-center px-1 w-full"
            data-node-id="157:197"
            data-name="Heading 3"
          >
            <h2
              className="text-[20px] font-semibold text-[#2b2b2b] leading-[28px] whitespace-nowrap"
              data-node-id="157:198"
            >
              Bulan Ini
            </h2>
          </div>
          <div
            className="flex gap-6 items-center px-1 w-full"
            data-node-id="157:200"
            data-name="Row"
          >
            <div
              className="flex flex-col items-start justify-center"
              data-node-id="157:202"
              data-name="Individual Status"
            >
              <span
                className="text-[13px] font-normal text-[#2b2b2b]/70 leading-[20px]"
                data-node-id="157:201"
              >
                Berat
              </span>
              <span
                className="text-[15px] font-semibold text-[#2b2b2b] leading-[28px]"
                data-node-id="157:203"
              >
                2 Ton
              </span>
            </div>
            <div
              className="flex flex-col items-start justify-center"
              data-node-id="157:204"
              data-name="Individual Status"
            >
              <span
                className="text-[13px] font-normal text-[#2b2b2b]/70 leading-[20px]"
                data-node-id="157:205"
              >
                Poin
              </span>
              <span
                className="text-[15px] font-semibold text-[#2b2b2b] leading-[28px]"
                data-node-id="157:206"
              >
                150.000
              </span>
            </div>
            <div
              className="flex flex-col items-start justify-center"
              data-node-id="157:207"
              data-name="Individual Status"
            >
              <span
                className="text-[13px] font-normal text-[#2b2b2b]/70 leading-[20px]"
                data-node-id="157:208"
              >
                Lebar
              </span>
              <span
                className="text-[15px] font-semibold text-[#2b2b2b] leading-[28px]"
                data-node-id="157:209"
              >
                1.5 Meter
              </span>
            </div>
          </div>
        </section>

        {/* Stats Card - Ton Terkumpul */}
        <section
          className="flex flex-col gap-2 w-full"
          data-node-id="157:180"
          data-name="Stats Card"
        >
          <div
            className="flex items-center px-1 w-full"
            data-node-id="157:181"
            data-name="Heading 3"
          >
            <h2
              className="text-[20px] font-normal text-[#2b2b2b] leading-[28px] whitespace-nowrap"
              data-node-id="157:182"
            >
              Ton Terkumpul
            </h2>
          </div>
          <div
            className="bg-[#e6e6e6] h-[114px] rounded-[8px] w-full flex items-center justify-center relative overflow-hidden px-1"
            data-node-id="157:183"
            data-name="Card"
          >
            <div
              className="relative w-[320px] h-[123px] overflow-hidden shrink-0 flex items-center justify-center"
              data-node-id="157:184"
              data-name="linechart-wrapper"
            >
              <div
                className="relative w-[320px] h-[123px] overflow-hidden shrink-0"
                data-node-id="157:185"
                data-name="linechart"
              >
                <div
                  className="absolute left-[10px] top-[82.4px] w-[60px] flex flex-col items-center"
                  data-node-id="157:186"
                  data-name="Frame"
                >
                  <span
                    className="font-bold text-[14px] text-[#333333] text-center"
                    data-node-id="157:187"
                  >
                    84
                  </span>
                </div>
                <div
                  className="absolute left-[70px] top-[96.8px] w-[60px] flex flex-col items-center"
                  data-node-id="157:188"
                  data-name="Frame"
                >
                  <span
                    className="font-bold text-[14px] text-[#333333] text-center"
                    data-node-id="157:189"
                  >
                    78
                  </span>
                </div>
                <div
                  className="absolute left-[130px] top-[9.6px] w-[60px] flex flex-col items-center"
                  data-node-id="157:190"
                  data-name="Frame"
                >
                  <span
                    className="font-bold text-[14px] text-[#333333] text-center"
                    data-node-id="157:191"
                  >
                    96
                  </span>
                </div>
                <div
                  className="absolute left-[190px] top-[65.6px] w-[60px] flex flex-col items-center"
                  data-node-id="157:192"
                  data-name="Frame"
                >
                  <span
                    className="font-bold text-[14px] text-[#333333] text-center"
                    data-node-id="157:193"
                  >
                    91
                  </span>
                </div>
                <div
                  className="absolute left-[250px] top-[65.6px] w-[60px] flex flex-col items-center"
                  data-node-id="157:194"
                  data-name="Frame"
                >
                  <span
                    className="font-bold text-[14px] text-[#333333] text-center"
                    data-node-id="157:195"
                  >
                    91
                  </span>
                </div>
                <div
                  className="absolute left-[40px] top-[49.6px] w-[240px] h-[43.2px]"
                  data-node-id="157:196"
                  data-name="Vector"
                >
                  <Image
                    src="/assets/chart-line.svg"
                    alt="Grafik Garis Ton Terkumpul"
                    width={242}
                    height={45}
                    className="block w-full h-full max-w-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Card - Akun QR */}
        <section
          className="flex flex-col gap-2 w-full"
          data-node-id="95:189"
          data-name="Card"
        >
          <div
            className="flex items-center px-1 w-full"
            data-node-id="95:190"
            data-name="Heading 3"
          >
            <h2
              className="text-[20px] font-normal text-[#2b2b2b] leading-[28px] whitespace-nowrap"
              data-node-id="95:191"
            >
              Akun QR
            </h2>
          </div>

          {onQrClick ? (
            <button
              type="button"
              onClick={onQrClick}
              className="bg-[#e6e6e6] h-[136px] rounded-[8px] w-full flex items-center justify-center px-1 shadow-sm transition hover:brightness-95 active:scale-[0.99] cursor-pointer"
              data-node-id="95:192"
              data-name="Card"
            >
              <span
                className="text-[20px] font-semibold text-[#2b2b2b] leading-[28px] whitespace-nowrap"
                data-node-id="95:193"
              >
                Flow ke page QR
              </span>
            </button>
          ) : (
            <Link
              href="/qr"
              className="bg-[#e6e6e6] h-[136px] rounded-[8px] w-full flex items-center justify-center px-1 shadow-sm transition hover:brightness-95 active:scale-[0.99] cursor-pointer"
              data-node-id="95:192"
              data-name="Card"
            >
              <span
                className="text-[20px] font-semibold text-[#2b2b2b] leading-[28px] whitespace-nowrap"
                data-node-id="95:193"
              >
                Flow ke page QR
              </span>
            </Link>
          )}
        </section>
      </main>

      {/* Bottom Navigation */}
      <BottomNav activeTab="akun" />
    </div>
  );
}
