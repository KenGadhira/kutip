"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProfileLayerProps {
  onQrClick?: () => void;
}

export default function ProfileLayer({ onQrClick }: ProfileLayerProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState("George Harrison");
  const [userLocation, setUserLocation] = useState("Wastukencana, Bandung");

  return (
    <div
      className="w-full sm:max-w-[375px] h-screen sm:h-[812px] bg-[#f9f8f6] sm:rounded-[36px] sm:shadow-2xl overflow-hidden flex flex-col relative mx-auto select-none border border-black/5"
      data-node-id="95:133"
      data-name="Profile"
    >
      {/* iOS Status Bar */}
      <header
        className="w-full h-[54px] flex items-center justify-between px-6 shrink-0 z-20 bg-[#f9f8f6]"
        data-node-id="95:134"
        data-name="iOS status bar"
      >
        <div className="flex-1 h-[54px] flex items-center" data-node-id="95:135" data-name="Time">
          <span
            className="text-[17px] font-semibold text-[#333333] tracking-tight"
            data-node-id="95:136"
          >
            9:41
          </span>
        </div>
        <div
          className="h-[54px] w-[140.5px] relative shrink-0 flex items-center justify-end"
          data-node-id="95:137"
          data-name="Levels"
        >
          <Image
            src="/assets/ios-levels.svg"
            alt="Status Bar Indicators"
            width={140}
            height={54}
            className="block max-w-none h-[54px] w-[140.5px]"
            priority
          />
        </div>
      </header>

      {/* Main Content Area */}
      <main
        className="bg-[#faf9f5] flex-1 overflow-y-auto px-4 pt-5 pb-24 flex flex-col gap-6 relative z-10"
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
        </section>

        {/* Notifikasi Card 1 - Statistik Sampah */}
        <section
          className="flex flex-col gap-2 w-full"
          data-node-id="95:185"
          data-name="Notifikasi Card"
        >
          <div
            className="flex items-center px-1 w-full"
            data-node-id="95:186"
            data-name="Heading 3"
          >
            <h2
              className="text-[20px] font-semibold text-[#2b2b2b] leading-[28px] whitespace-nowrap"
              data-node-id="95:187"
            >
              Statistik sampah
            </h2>
          </div>
          <div
            className="bg-[#4f7730] h-[114px] rounded-[8px] w-full shadow-sm transition hover:brightness-105"
            data-node-id="95:188"
            data-name="Card"
          />
        </section>

        {/* Notifikasi Card 2 - Akun QR */}
        <section
          className="flex flex-col gap-2 w-full"
          data-node-id="95:189"
          data-name="Notifikasi Card"
        >
          <div
            className="flex items-center px-1 w-full"
            data-node-id="95:190"
            data-name="Heading 3"
          >
            <h2
              className="text-[20px] font-semibold text-[#2b2b2b] leading-[28px] whitespace-nowrap"
              data-node-id="95:191"
            >
              Akun QR
            </h2>
          </div>

          {onQrClick ? (
            <button
              type="button"
              onClick={onQrClick}
              className="bg-[#4f7730] h-[136px] rounded-[8px] w-full flex items-center justify-center px-1 shadow-sm transition hover:brightness-105 active:scale-[0.99] cursor-pointer"
              data-node-id="95:192"
              data-name="Card"
            >
              <span
                className="text-[20px] font-semibold text-[#f9f8f6] leading-[28px] whitespace-nowrap"
                data-node-id="95:193"
              >
                Flow ke page QR
              </span>
            </button>
          ) : (
            <Link
              href="/qr"
              className="bg-[#4f7730] h-[136px] rounded-[8px] w-full flex items-center justify-center px-1 shadow-sm transition hover:brightness-105 active:scale-[0.99] cursor-pointer"
              data-node-id="95:192"
              data-name="Card"
            >
              <span
                className="text-[20px] font-semibold text-[#f9f8f6] leading-[28px] whitespace-nowrap"
                data-node-id="95:193"
              >
                Flow ke page QR
              </span>
            </Link>
          )}
        </section>
      </main>

      {/* Bottom Footer Navigation */}
      <footer
        className="w-full h-[72px] bg-[#92aa56] absolute bottom-0 left-0 right-0 z-20 flex items-center justify-center px-12"
        data-node-id="95:159"
        data-name="Bottom Footer"
      >
        <div
          className="w-full flex items-center justify-between"
          data-node-id="95:161"
          data-name="Heading"
        >
          <div
            className="w-full flex items-center justify-between"
            data-node-id="95:162"
            data-name="Container"
          >
            {/* Home Icon */}
            <Link
              href="/"
              className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition cursor-pointer"
              data-node-id="95:163"
              data-name="akar-icons:home"
              aria-label="Beranda"
            >
              <Image
                src="/assets/icon-home.svg"
                alt="Beranda"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </Link>

            {/* Profile Icon (Active) */}
            <Link
              href="/profile"
              className="w-8 h-8 flex items-center justify-center relative hover:opacity-90 transition cursor-pointer"
              data-node-id="95:165"
              data-name="akar-icons:person"
              aria-label="Profil (Aktif)"
            >
              <div
                className="w-6 h-6 flex items-center justify-center"
                data-node-id="95:166"
                data-name="Group"
              >
                <Image
                  src="/assets/icon-person.svg"
                  alt="Profil"
                  width={20}
                  height={22}
                  className="w-5 h-[22px]"
                />
              </div>
            </Link>

            {/* Truck Icon */}
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition cursor-pointer"
              data-node-id="95:169"
              data-name="akar-icons:truck"
              aria-label="Pelacak Sampah"
            >
              <div
                className="w-6 h-6 flex items-center justify-center"
                data-node-id="95:170"
                data-name="Group"
              >
                <Image
                  src="/assets/icon-truck.svg"
                  alt="Pelacak Sampah"
                  width={22}
                  height={18}
                  className="w-[22px] h-[18px]"
                />
              </div>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
