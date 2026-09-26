"use client";

import Image from "next/image";
import { motion } from "motion/react";
import BottomNav, { type NavTab } from "@/components/BottomNav";
import { useState } from "react";

interface Product {
  id: string;
  category: string;
  name: string;
  points: number;
  image: string;
}

// ponytail: mock products; replace with API when backend ready
const PRODUCTS: Product[] = [
  { id: "1", category: "Minyak", name: "Minyak Goreng 1L", points: 500, image: "/rewards/oil-1l.png" },
  { id: "2", category: "Beras", name: "Beras Premium 5kg", points: 1200, image: "/rewards/rice-5kg.png" },
  { id: "3", category: "Sembako", name: "Gula Pasir 1kg", points: 350, image: "/rewards/sugar-1kg.png" },
  { id: "4", category: "Sembako", name: "Garam Halus 500g", points: 150, image: "/rewards/salt-500g.png" },
  { id: "5", category: "Sembako", name: "Gula Pasir 1kg", points: 350, image: "/rewards/sugar-1kg.png" },
  { id: "6", category: "Sembako", name: "Garam Halus 500g", points: 150, image: "/rewards/salt-500g.png" },
  { id: "7", category: "Sembako", name: "Gula Pasir 1kg", points: 350, image: "/rewards/sugar-1kg.png" },
  { id: "8", category: "Sembako", name: "Gula Pasir 1kg", points: 350, image: "/rewards/sugar-1kg.png" },
];

const CATEGORIES = ["Semua", "Sembako", "Minyak", "Beras"];

interface RewardsHomeLayerProps {
  points?: number;
}

export default function RewardsHomeLayer({ points = 1250 }: RewardsHomeLayerProps) {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [activeTab] = useState<NavTab>("rewards");

  const filteredProducts = activeCategory === "Semua"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full sm:max-w-[375px] h-screen h-dvh sm:h-[812px] bg-[#f5f6f4] sm:rounded-[36px] sm:shadow-2xl overflow-hidden flex flex-col relative mx-auto select-none border-0 sm:border sm:border-black/5"
      data-node-id="181:1501"
      data-name="Rewards Home"
    >
      {/* Header */}
      <header
        className="bg-[#f9f8f6] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-between pb-[16px] pt-[32px] px-[20px] shrink-0 w-full sticky top-0 z-10"
        data-node-id="181:1502"
        data-name="Header"
      >
        <h1
          className="font-bold text-[#252525] text-[20px] leading-[28px] tracking-[-0.0195px]"
          data-node-id="181:1508"
        >
          Rewards
        </h1>
        <button
          type="button"
          className="bg-[#f9fafb] flex items-center justify-center rounded-full size-[40px] hover:opacity-80 transition"
          data-node-id="181:1509"
          aria-label="Notifikasi"
        >
          <Image
            src="/rewards/notification.svg"
            alt=""
            width={14}
            height={14}
            className="size-[14px]"
          />
        </button>
      </header>

      {/* Scrollable Content */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden pb-[96px]">
        <div
          className="flex flex-col gap-[24px] items-center pt-[24px] px-[20px]"
          data-node-id="242:303"
          data-name="Content"
        >
          {/* Points Card */}
          <div
            className="bg-[#22c55e] flex flex-col gap-[24px] items-start overflow-clip p-[24px] relative rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(20,83,45,0.2),0px_4px_6px_-4px_rgba(20,83,45,0.2)] w-full"
            data-node-id="181:1512"
            data-name="Background+Shadow"
          >
            <div className="absolute bg-[rgba(255,255,255,0.1)] right-[-24px] rounded-full size-[128px] top-[-24px]" />
            <div className="flex items-center justify-between relative w-full">
              <div className="flex flex-col gap-[4px]">
                <p className="font-medium text-[12px] leading-[16px] text-[rgba(255,255,255,0.8)] tracking-[1.2px] uppercase">
                  Saldo Poin Anda
                </p>
                <div className="flex gap-[8px] items-center">
                  <Image src="/rewards/coin.svg" alt="" width={24} height={24} />
                  <div className="flex items-end pb-px">
                    <span className="font-bold text-[#f9f8f6] text-[30px] leading-[36px] tracking-[-0.75px]">
                      {points.toLocaleString()}
                    </span>
                    <span className="font-normal text-[#f9f8f6] text-[18px] leading-[28px]">
                      {" "}Poin
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-[rgba(255,255,255,0.05)] bottom-[-16px] left-[-16px] rounded-full size-[80px]" />
          </div>

          {/* Search */}
          <div className="relative w-full" data-node-id="181:1536">
            <input
              type="search"
              placeholder="Cari kebutuhan harian..."
              className="bg-[#f9f8f6] border border-[#f3f4f6] rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] w-full pl-[48px] pr-[16px] py-[17px] text-[14px] text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#22c55e]/20"
            />
            <Image
              src="/rewards/search.svg"
              alt=""
              width={14}
              height={14}
              className="absolute left-[16px] top-1/2 -translate-y-1/2 size-[14px]"
            />
          </div>

          {/* Categories */}
          <div className="overflow-x-auto w-full -mx-[20px] px-[20px]" data-node-id="181:1542">
            <div className="flex gap-[8px] min-w-max">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-[20px] py-[8px] rounded-full font-semibold text-[12px] leading-[16px] tracking-[0.1406px] whitespace-nowrap transition ${
                    activeCategory === cat
                      ? "bg-[#22c55e] text-[#f9f8f6] shadow-[0px_4px_6px_-1px_rgba(20,83,45,0.1),0px_2px_4px_-2px_rgba(20,83,45,0.1)]"
                      : "bg-[#f9f8f6] border border-[#f3f4f6] text-[#6b7280]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div
            className="grid grid-cols-2 gap-[16px] w-full"
            data-node-id="181:1552"
            data-name="Main"
          >
            {filteredProducts.map((product) => (
              <button
                key={product.id}
                type="button"
                className="bg-[#f9f8f6] border border-[#f3f4f6] rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] overflow-clip flex flex-col hover:shadow-md transition"
              >
                <div className="bg-[#f9fafb] h-[128px] flex items-center justify-center p-[8px]">
                  <div className="bg-[#f9f8f6] rounded-[12px] w-full h-full flex items-center justify-center overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={96}
                      height={112}
                      className="object-contain w-[79.15%] h-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start p-[12px] gap-[4px]">
                  <p className="font-medium text-[#9ca3af] text-[12px] leading-[16px] text-left">
                    {product.category}
                  </p>
                  <h3 className="font-bold text-[#1f2937] text-[14px] leading-[17.5px] text-left">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between w-full mt-[4px]">
                    <div className="flex gap-[4px] items-center">
                      <Image src="/rewards/coin-small.svg" alt="" width={10} height={10} />
                      <span className="font-bold text-[#22c55e] text-[14px] leading-[20px]">
                        {product.points.toLocaleString()}
                      </span>
                    </div>
                    <div className="bg-[rgba(71,124,46,0.1)] flex items-center justify-center rounded-[8px] size-[32px]">
                      <Image src="/rewards/cart.svg" alt="" width={13.5} height={12} />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} />
    </motion.div>
  );
}
