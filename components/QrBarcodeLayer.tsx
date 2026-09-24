"use client";

import Image from "next/image";
import Link from "next/link";

interface QrBarcodeLayerProps {
  onBack?: () => void;
}

export default function QrBarcodeLayer({ onBack }: QrBarcodeLayerProps) {
  return (
    <div
      className="w-full sm:max-w-[375px] h-screen sm:h-[812px] bg-[#758c3b] sm:rounded-[36px] sm:shadow-2xl overflow-hidden flex flex-col relative mx-auto select-none border border-black/5"
      data-node-id="95:37"
      data-name="QR Barcode"
    >
      {/* Header - Top Navigation Anchor */}
      <header
        className="w-full h-[67px] flex items-center px-4 py-3 shrink-0 z-20"
        data-node-id="95:38"
        data-name="Header - Top Navigation Anchor"
      >
        <div
          className="relative shrink-0"
          data-node-id="95:39"
          data-name="Container"
        >
          {onBack ? (
            <button
              type="button"
              onClick={onBack}
              className="w-7 h-7 flex items-center justify-center hover:opacity-80 transition cursor-pointer"
              data-node-id="95:40"
              data-name="Back Arrow"
              aria-label="Kembali ke Profil"
            >
              <Image
                src="/assets/icon-chevron-left.svg"
                alt="Kembali"
                width={28}
                height={28}
                className="w-7 h-7"
              />
            </button>
          ) : (
            <Link
              href="/profile"
              className="w-7 h-7 flex items-center justify-center hover:opacity-80 transition cursor-pointer"
              data-node-id="95:40"
              data-name="Back Arrow"
              aria-label="Kembali ke Profil"
            >
              <Image
                src="/assets/icon-chevron-left.svg"
                alt="Kembali"
                width={28}
                height={28}
                className="w-7 h-7"
              />
            </Link>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main
        className="flex-1 overflow-y-auto px-4 pb-24 flex flex-col items-center justify-center gap-6 relative z-10"
        data-node-id="95:60"
        data-name="Main"
      >
        {/* QR Code Card */}
        <div
          className="bg-white flex flex-col items-center justify-center p-4 rounded-[8px] w-[261px] h-[260px] shadow-lg shrink-0"
          data-node-id="95:61"
          data-name="QR Code"
        >
          <div
            className="w-full h-full relative"
            data-node-id="95:62"
            data-name="image 3"
          >
            <Image
              src="/assets/qr-code.png"
              alt="Kode QR Pengambilan Sampah"
              width={229}
              height={229}
              className="w-full h-full object-cover pointer-events-none"
              priority
            />
          </div>
        </div>

        {/* Text Instructions */}
        <div
          className="flex flex-col gap-3 items-center w-full px-1"
          data-node-id="95:63"
          data-name="Text"
        >
          <div
            className="flex items-center justify-center w-full px-1"
            data-node-id="95:64"
            data-name="Heading 3"
          >
            <h1
              className="text-[20px] font-semibold text-[#f9f8f6] leading-[28px] text-center"
              data-node-id="95:65"
            >
              QR untuk pengambilan sampah
            </h1>
          </div>

          <div
            className="flex items-center justify-center w-full px-1"
            data-node-id="95:66"
            data-name="Body"
          >
            <p
              className="text-[16px] font-semibold text-[#e6e6e6] leading-[28px] text-center"
              data-node-id="95:67"
            >
              Tunjukkan kode QR ini ke petugas resmi KUTIP sebelum sampah kamu
              diangkut, ya.
            </p>
          </div>
        </div>

        {/* Waiting Status Badge */}
        <div
          className="w-full flex flex-col items-center px-1"
          data-node-id="95:68"
          data-name="Text"
        >
          <div
            className="bg-[#2b2b2b]/30 flex items-center justify-center px-4 py-2 rounded-[8px] w-full"
            data-node-id="95:69"
            data-name="Heading 3"
          >
            <span
              className="text-[20px] font-semibold text-[#f9f8f6] leading-[28px] whitespace-nowrap"
              data-node-id="95:70"
            >
              Sedang menunggu...
            </span>
          </div>
        </div>
      </main>

      {/* Bottom Footer Navigation */}
      <footer
        className="w-full h-[72px] bg-[#92aa56] absolute bottom-0 left-0 right-0 z-20 flex items-center justify-center px-12"
        data-node-id="95:71"
        data-name="Bottom Footer"
      >
        <div
          className="w-full flex items-center justify-between"
          data-node-id="95:73"
          data-name="Heading"
        >
          <div
            className="w-full flex items-center justify-between"
            data-node-id="95:74"
            data-name="Container"
          >
            {/* Home Icon */}
            <Link
              href="/"
              className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition cursor-pointer"
              data-node-id="95:75"
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

            {/* Profile Icon */}
            <Link
              href="/profile"
              className="w-8 h-8 flex items-center justify-center relative hover:opacity-80 transition cursor-pointer"
              data-node-id="95:77"
              data-name="akar-icons:person"
              aria-label="Profil"
            >
              <div
                className="w-6 h-6 flex items-center justify-center"
                data-node-id="95:78"
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
              data-node-id="95:81"
              data-name="akar-icons:truck"
              aria-label="Pelacak Sampah"
            >
              <div
                className="w-6 h-6 flex items-center justify-center"
                data-node-id="95:82"
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
