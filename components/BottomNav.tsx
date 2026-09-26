"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export type NavTab = "home" | "jadwal" | "status" | "rewards" | "akun";

export interface BottomNavProps {
  activeTab?: NavTab;
  defaultTab?: NavTab;
  onTabChange?: (tab: NavTab) => void;
  className?: string;
}

export default function BottomNav({
  activeTab: activeTabProp,
  defaultTab,
  onTabChange,
  className = "",
}: BottomNavProps) {
  const pathname = usePathname();
  const [internalTab, setInternalTab] = useState<NavTab>(
    defaultTab ?? (pathname === "/profile" ? "akun" : "home")
  );

  const currentTab =
    activeTabProp ??
    (pathname === "/profile"
      ? "akun"
      : pathname === "/penjadwalan"
      ? "jadwal"
      : pathname === "/status"
      ? "status"
      : pathname === "/rewards"
      ? "rewards"
      : pathname === "/"
      ? "home"
      : internalTab);

  const handleTabClick = (tab: NavTab) => {
    setInternalTab(tab);
    onTabChange?.(tab);
  };

  return (
    <nav
      className={`w-full bg-[#f9f8f6] border-t border-[#f3f4f6] flex items-center justify-between px-[24px] pt-[14px] pb-[calc(14px+env(safe-area-inset-bottom,0px))] shrink-0 fixed sm:sticky z-30 bottom-0 ${className}`}
      data-node-id="225:590"
      data-name="Nav"
      aria-label="Navigasi Bawah"
    >
      {/* Home */}
      <Link
        href="/"
        onClick={() => handleTabClick("home")}
        className={`flex flex-col gap-[6px] items-center relative shrink-0 hover:opacity-80 transition cursor-pointer ${
          currentTab === "home" ? "text-kutip-green" : "text-[#9ca3af]"
        }`}
        data-node-id="I225:590;231:74"
        data-name="Container"
        aria-label="Home"
        aria-current={currentTab === "home" ? "page" : undefined}
      >
        <div
          className="h-[16px] w-[18px] relative shrink-0"
          data-node-id="I225:590;231:75"
          data-name="Img"
        >
          <svg
            preserveAspectRatio="none"
            overflow="visible"
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block size-full"
          >
            <path
              d="M17.9937 7.98438C17.9937 8.54688 17.525 8.9875 16.9937 8.9875H15.9937L16.0156 13.9937C16.0156 14.0781 16.0094 14.1625 16 14.2469V14.75C16 15.4406 15.4406 16 14.75 16H14.25C14.2156 16 14.1813 16 14.1469 15.9969C14.1031 16 14.0594 16 14.0156 16H13H12.25C11.5594 16 11 15.4406 11 14.75V14V12C11 11.4469 10.5531 11 10 11H8C7.44687 11 7 11.4469 7 12V14V14.75C7 15.4406 6.44063 16 5.75 16H5H4.00313C3.95625 16 3.90937 15.9969 3.8625 15.9937C3.825 15.9969 3.7875 16 3.75 16H3.25C2.55937 16 2 15.4406 2 14.75V11.25C2 11.2219 2 11.1906 2.00312 11.1625V8.9875H1C0.4375 8.9875 0 8.55 0 7.98438C0 7.70312 0.09375 7.45312 0.3125 7.23438L8.325 0.25C8.54375 0.03125 8.79375 0 9.0125 0C9.23125 0 9.48125 0.0625 9.66875 0.21875L17.65 7.23438C17.9 7.45312 18.025 7.70312 17.9937 7.98438Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <span
          className="font-medium text-[10px] leading-[15px] tracking-[0.2734px] whitespace-nowrap"
          data-node-id="I225:590;231:78"
        >
          Home
        </span>
      </Link>

      {/* Jadwal */}
      <Link
        href="/penjadwalan"
        onClick={() => handleTabClick("jadwal")}
        className={`flex flex-col gap-[6px] items-center relative shrink-0 hover:opacity-80 transition cursor-pointer ${
          currentTab === "jadwal" ? "text-kutip-green" : "text-[#9ca3af]"
        }`}
        data-node-id="I225:590;231:79"
        data-name="Container"
        aria-label="Jadwal"
        aria-current={currentTab === "jadwal" ? "page" : undefined}
      >
        <div
          className="h-[16px] w-[14px] relative shrink-0"
          data-node-id="I225:590;231:80"
          data-name="Img"
        >
          <svg
            preserveAspectRatio="none"
            overflow="visible"
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block size-full"
          >
            <path
              d="M4 0C4.55313 0 5 0.446875 5 1V2H9V1C9 0.446875 9.44687 0 10 0C10.5531 0 11 0.446875 11 1V2H12.5C13.3281 2 14 2.67188 14 3.5V5H0V3.5C0 2.67188 0.671875 2 1.5 2H3V1C3 0.446875 3.44687 0 4 0ZM0 6H14V14.5C14 15.3281 13.3281 16 12.5 16H1.5C0.671875 16 0 15.3281 0 14.5V6ZM2 8.5V9.5C2 9.775 2.225 10 2.5 10H3.5C3.775 10 4 9.775 4 9.5V8.5C4 8.225 3.775 8 3.5 8H2.5C2.225 8 2 8.225 2 8.5ZM6 8.5V9.5C6 9.775 6.225 10 6.5 10H7.5C7.775 10 8 9.775 8 9.5V8.5C8 8.225 7.775 8 7.5 8H6.5C6.225 8 6 8.225 6 8.5ZM10.5 8C10.225 8 10 8.225 10 8.5V9.5C10 9.775 10.225 10 10.5 10H11.5C11.775 10 12 9.775 12 9.5V8.5C12 8.225 11.775 8 11.5 8H10.5ZM2 12.5V13.5C2 13.775 2.225 14 2.5 14H3.5C3.775 14 4 13.775 4 13.5V12.5C4 12.225 3.775 12 3.5 12H2.5C2.225 12 2 12.225 2 12.5ZM6.5 12C6.225 12 6 12.225 6 12.5V13.5C6 13.775 6.225 14 6.5 14H7.5C7.775 14 8 13.775 8 13.5V12.5C8 12.225 7.775 12 7.5 12H6.5ZM10 12.5V13.5C10 13.775 10.225 14 10.5 14H11.5C11.775 14 12 13.775 12 13.5V12.5C12 12.225 11.775 12 11.5 12H10.5C10.225 12 10 12.225 10 12.5Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <span
          className="font-medium text-[10px] leading-[15px] whitespace-nowrap"
          data-node-id="I225:590;231:83"
        >
          Jadwal
        </span>
      </Link>

      {/* Status */}
      <Link
        href="/status"
        onClick={() => handleTabClick("status")}
        className={`flex flex-col gap-[6px] items-center relative shrink-0 hover:opacity-80 transition cursor-pointer ${
          currentTab === "status" ? "text-kutip-green" : "text-[#9ca3af]"
        }`}
        data-node-id="I225:590;231:84"
        data-name="Container"
        aria-label="Status"
        aria-current={currentTab === "status" ? "page" : undefined}
      >
        <div
          className="relative shrink-0 size-[17px]"
          data-node-id="I225:590;231:86"
          data-name="Img"
        >
          <svg
            preserveAspectRatio="none"
            overflow="visible"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block size-full"
          >
            <path
              d="M2.125 2.125C2.125 1.5373 1.6502 1.0625 1.0625 1.0625C0.474805 1.0625 0 1.5373 0 2.125V13.2812C0 14.7488 1.18867 15.9375 2.65625 15.9375H15.9375C16.5252 15.9375 17 15.4627 17 14.875C17 14.2873 16.5252 13.8125 15.9375 13.8125H2.65625C2.36406 13.8125 2.125 13.5734 2.125 13.2812V2.125ZM15.6254 5.00039C16.0404 4.58535 16.0404 3.91133 15.6254 3.49629C15.2104 3.08125 14.5363 3.08125 14.1213 3.49629L10.625 6.9959L8.71914 5.09004C8.3041 4.675 7.63008 4.675 7.21504 5.09004L3.49629 8.80879C3.08125 9.22383 3.08125 9.89785 3.49629 10.3129C3.91133 10.7279 4.58535 10.7279 5.00039 10.3129L7.96875 7.34785L9.87461 9.25371C10.2896 9.66875 10.9637 9.66875 11.3787 9.25371L15.6287 5.00371L15.6254 5.00039Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <span
          className="font-medium text-[10px] leading-[15px] whitespace-nowrap"
          data-node-id="I225:590;231:90"
        >
          Status
        </span>
      </Link>

      {/* Rewards */}
      <Link
        href="/rewards"
        onClick={() => handleTabClick("rewards")}
        className={`flex flex-col gap-[6px] items-center relative shrink-0 hover:opacity-80 transition cursor-pointer ${
          currentTab === "rewards" ? "text-kutip-green" : "text-[#9ca3af]"
        }`}
        data-node-id="I225:590;231:97"
        data-name="Container"
        aria-label="Rewards"
        aria-current={currentTab === "rewards" ? "page" : undefined}
      >
        <div
          className="relative shrink-0 size-[17px]"
          data-node-id="I225:590;231:99"
          data-name="Img"
        >
          <svg
            preserveAspectRatio="none"
            overflow="visible"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block size-full"
          >
            <path
              d="M6.3252 2.28438L7.48066 4.25H7.4375H5.04688C4.31309 4.25 3.71875 3.65566 3.71875 2.92188C3.71875 2.18809 4.31309 1.59375 5.04688 1.59375H5.11992C5.61465 1.59375 6.07617 1.85605 6.3252 2.28438ZM2.125 2.92188C2.125 3.4 2.24121 3.85156 2.44375 4.25H1.0625C0.474805 4.25 0 4.7248 0 5.3125V7.4375C0 8.0252 0.474805 8.5 1.0625 8.5H15.9375C16.5252 8.5 17 8.0252 17 7.4375V5.3125C17 4.7248 16.5252 4.25 15.9375 4.25H14.5562C14.7588 3.85156 14.875 3.4 14.875 2.92188C14.875 1.3082 13.5668 0 11.9531 0H11.8801C10.8209 0 9.83809 0.561133 9.3002 1.47422L8.5 2.83887L7.6998 1.47754C7.16191 0.561133 6.1791 0 5.11992 0H5.04688C3.4332 0 2.125 1.3082 2.125 2.92188ZM13.2812 2.92188C13.2812 3.65566 12.6869 4.25 11.9531 4.25H9.5625H9.51934L10.6748 2.28438C10.9271 1.85605 11.3854 1.59375 11.8801 1.59375H11.9531C12.6869 1.59375 13.2812 2.18809 13.2812 2.92188ZM1.0625 9.5625V15.4062C1.0625 16.2861 1.77637 17 2.65625 17H7.4375V9.5625H1.0625ZM9.5625 17H14.3438C15.2236 17 15.9375 16.2861 15.9375 15.4062V9.5625H9.5625V17Z"
              fill="currentColor"
            />
          </svg>
          <div
            className="absolute bg-[#ef4444] border border-[#f9f8f6] -right-[6px] -top-[2px] rounded-full size-[8px]"
            data-node-id="I225:590;231:101"
            data-name="Badge Indicator"
          />
        </div>
        <span
          className="font-medium text-[10px] leading-[15px] whitespace-nowrap"
          data-node-id="I225:590;231:103"
        >
          Rewards
        </span>
      </Link>

      {/* Akun */}
      <Link
        href="/profile"
        onClick={() => handleTabClick("akun")}
        className={`flex flex-col gap-[6px] items-center relative shrink-0 hover:opacity-80 transition cursor-pointer ${
          currentTab === "akun" ? "text-kutip-green" : "text-[#9ca3af]"
        }`}
        data-node-id="I225:590;231:91"
        data-name="Container"
        aria-label="Akun"
        aria-current={currentTab === "akun" ? "page" : undefined}
      >
        <div
          className="h-[16px] w-[14px] relative shrink-0"
          data-node-id="I225:590;231:92"
          data-name="Img"
        >
          <svg
            preserveAspectRatio="none"
            overflow="visible"
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block size-full"
          >
            <path
              d="M7 8C8.06087 8 9.07828 7.57857 9.82843 6.82843C10.5786 6.07828 11 5.06087 11 4C11 2.93913 10.5786 1.92172 9.82843 1.17157C9.07828 0.421427 8.06087 0 7 0C5.93913 0 4.92172 0.421427 4.17157 1.17157C3.42143 1.92172 3 2.93913 3 4C3 5.06087 3.42143 6.07828 4.17157 6.82843C4.92172 7.57857 5.93913 8 7 8ZM5.57188 9.5C2.49375 9.5 0 11.9937 0 15.0719C0 15.5844 0.415625 16 0.928125 16H13.0719C13.5844 16 14 15.5844 14 15.0719C14 11.9937 11.5063 9.5 8.42813 9.5H5.57188Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <span
          className="font-medium text-[10px] leading-[15px] whitespace-nowrap"
          data-node-id="I225:590;231:95"
        >
          Akun
        </span>
      </Link>
    </nav>
  );
}

export { BottomNav as Navbar };
