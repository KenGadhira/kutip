"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import BottomNav from "@/components/BottomNav";
import MenuItemList, { type MenuItem } from "@/components/MenuItemList";

interface ProfileLayerProps {
  userName?: string;
  userPhone?: string;
  userAvatar?: string;
  onLogout?: () => void;
}

// ponytail: mock profile items and logout; connect to backend session & user API when ready
export default function ProfileLayer({
  userName = "Bapak Budi Santoso",
  userPhone = "+62 812 3456 7890",
  userAvatar = "/assets/profile-avatar.png",
  onLogout,
}: ProfileLayerProps) {
  const router = useRouter();

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      router.push("/login");
    }
  };

  const accountSettings: MenuItem[] = [
    {
      id: "profile",
      name: "Profil Saya",
      icon: "/assets/profile/icon-profile.svg",
      nodeId: "181:1766",
    },
    {
      id: "address",
      name: "Alamat Tersimpan",
      icon: "/assets/profile/icon-address.svg",
      nodeId: "181:1775",
    },
    {
      id: "transactions",
      name: "Riwayat Transaksi",
      icon: "/assets/profile/icon-history.svg",
      nodeId: "181:1784",
    },
    {
      id: "points",
      name: "Riwayat Penukaran Poin",
      icon: "/assets/profile/icon-points.svg",
      nodeId: "181:1793",
    },
  ];

  const infoSettings: MenuItem[] = [
    {
      id: "help",
      name: "Bantuan dan FAQ",
      icon: "/assets/profile/icon-help.svg",
      nodeId: "181:1806",
    },
    {
      id: "terms",
      name: "Syarat dan Ketentuan",
      icon: "/assets/profile/icon-terms.svg",
      nodeId: "181:1815",
    },
    {
      id: "privacy",
      name: "Kebijakan Privasi",
      icon: "/assets/profile/icon-privacy.svg",
      nodeId: "181:1824",
    },
    {
      id: "notifications",
      name: "Pengaturan Notifikasi",
      icon: "/assets/profile/icon-notification.svg",
      nodeId: "181:1833",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full sm:max-w-[375px] h-screen h-dvh sm:h-[812px] bg-[#f5f6f4] sm:rounded-[36px] sm:shadow-2xl overflow-hidden flex flex-col relative mx-auto select-none border-0 sm:border sm:border-black/5"
      data-node-id="181:1744"
      data-name="Akun & Profile Screens Final"
    >
      {/* Scrollable Content Container */}
      <main
        className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col items-center gap-[32px] pb-[32px] pt-[24px] px-[24px] relative w-full"
        data-node-id="181:1745"
        data-name="Main"
      >
        {/* Profile Card */}
        <section
          className="bg-[#f9f8f6] border border-[#f3f4f6] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[20px] items-center p-[24px] relative rounded-[40px] shrink-0 w-full"
          data-node-id="181:1746"
          data-name="Background+Border+Shadow"
        >
          {/* Avatar with Camera Badge */}
          <div
            className="relative shrink-0"
            data-node-id="181:1747"
            data-name="Container"
          >
            <div
              className="border-4 border-[rgba(71,124,46,0.1)] size-[75px] rounded-full overflow-hidden relative shrink-0"
              data-node-id="181:1748"
              data-name="Profile Picture"
            >
              <Image
                src={userAvatar}
                alt="Foto Profil"
                width={80}
                height={80}
                className="w-full h-full object-cover pointer-events-none"
                priority
              />
            </div>
            <button
              type="button"
              className="absolute bg-[#22c55e] border-2 border-[#f9f8f6] bottom-0 right-0 rounded-full size-[24px] flex items-center justify-center cursor-pointer hover:brightness-110 active:scale-95 transition"
              data-node-id="181:1749"
              data-name="Background+Border"
              aria-label="Ubah Foto Profil"
            >
              <div
                className="relative size-[10px] shrink-0 flex items-center justify-center"
                data-node-id="181:1750"
                data-name="Img"
              >
                <Image
                  src="/assets/profile/icon-camera.svg"
                  alt=""
                  width={10}
                  height={10}
                  className="size-[10px]"
                />
              </div>
            </button>
          </div>

          {/* User Details */}
          <div
            className="flex flex-col gap-[4px] items-start shrink-0 min-w-0 flex-1"
            data-node-id="181:1752"
            data-name="Container"
          >
            <div
              className="flex flex-col items-start w-full"
              data-node-id="181:1753"
              data-name="Heading 2"
            >
              <h1
                className="font-bold text-[#111827] text-[20px] leading-[25px] tracking-[0.0781px] break-words"
                data-node-id="181:1754"
              >
                {userName}
              </h1>
            </div>
            <div
              className="flex flex-col items-start pb-[4px] w-full"
              data-node-id="181:1755"
              data-name="Container"
            >
              <p
                className="font-medium text-[#6b7280] text-[14px] leading-[20px] tracking-[-0.0273px] whitespace-nowrap"
                data-node-id="181:1756"
              >
                {userPhone}
              </p>
            </div>
          </div>
        </section>

        {/* Pengaturan Akun Section */}
        <section
          className="flex flex-col gap-[16px] items-start w-full"
          data-node-id="181:1762"
          data-name="Container"
        >
          <div
            className="flex flex-col items-start w-full"
            data-node-id="181:1763"
            data-name="Heading 3"
          >
            <h2
              className="font-bold text-[#9ca3af] text-[12px] uppercase tracking-[1.2px] leading-[16px]"
              data-node-id="181:1764"
            >
              Pengaturan Akun
            </h2>
          </div>

          <MenuItemList items={accountSettings} containerNodeId="181:1765" />
        </section>

        {/* Informasi Section */}
        <section
          className="flex flex-col gap-[16px] items-start w-full"
          data-node-id="181:1802"
          data-name="Container"
        >
          <div
            className="flex flex-col items-start w-full"
            data-node-id="181:1803"
            data-name="Heading 3"
          >
            <h2
              className="font-bold text-[#9ca3af] text-[12px] uppercase tracking-[1.2px] leading-[16px]"
              data-node-id="181:1804"
            >
              Informasi
            </h2>
          </div>

          <MenuItemList items={infoSettings} containerNodeId="181:1805" />
        </section>

        {/* Action & Footer Section */}
        <section
          className="flex flex-col gap-[24px] items-start pb-[16px] w-full"
          data-node-id="181:1842"
          data-name="Container"
        >
          {/* Keluar Akun Button */}
          <button
            type="button"
            onClick={handleLogout}
            className="bg-[#ef4444] border border-[#ef4444] flex gap-[12px] items-center justify-center p-[20px] rounded-[24px] w-full text-white cursor-pointer hover:bg-[#dc2626] active:scale-[0.98] transition shadow-sm"
            data-node-id="181:1843"
            data-name="Button"
          >
            <div
              className="size-[16px] relative shrink-0 flex items-center justify-center"
              data-node-id="181:1844"
              data-name="Img"
            >
              <Image
                src="/assets/profile/icon-logout.svg"
                alt=""
                width={16}
                height={16}
                className="size-[16px]"
              />
            </div>
            <span
              className="font-bold text-[#f9f8f6] text-[16px] leading-[24px] text-center"
              data-node-id="181:1847"
            >
              Keluar Akun
            </span>
          </button>

          {/* Footer Branding */}
          <div
            className="flex flex-col items-center w-full"
            data-node-id="181:1848"
            data-name="Container"
          >
            <p
              className="font-medium text-[#9ca3af] text-[10px] leading-[15px] tracking-[0.0098px] text-center"
              data-node-id="181:1849"
            >
              KUTIP App — Made with ❤️ by TWISE
            </p>
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <BottomNav activeTab="akun" />
    </motion.div>
  );
}
