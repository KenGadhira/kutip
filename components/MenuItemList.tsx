import Image from "next/image";

export interface MenuItem {
  id: string;
  name: string;
  icon: string;
  nodeId: string;
}

interface MenuItemListProps {
  items: MenuItem[];
  containerNodeId: string;
}

export default function MenuItemList({
  items,
  containerNodeId,
}: MenuItemListProps) {
  return (
    <div
      className="bg-[#f9f8f6] border border-[#f3f4f6] rounded-[32px] overflow-hidden shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] w-full flex flex-col"
      data-node-id={containerNodeId}
      data-name="Background+Border+Shadow"
    >
      {items.map((item, idx) => (
        <button
          key={item.id}
          type="button"
          className={`flex items-center justify-between p-[20px] w-full hover:bg-black/[0.02] active:bg-black/[0.04] transition cursor-pointer text-left ${
            idx !== items.length - 1 ? "border-b border-[#f9fafb]" : ""
          }`}
          data-node-id={item.nodeId}
          data-name="HorizontalBorder"
        >
          <div className="flex gap-[16px] items-center">
            <div className="size-[40px] rounded-[16px] flex items-center justify-center shrink-0">
              <Image
                src={item.icon}
                alt=""
                width={16}
                height={16}
                className="size-[16px] object-contain"
              />
            </div>
            <span className="font-semibold text-[#374151] text-[14px] leading-[20px]">
              {item.name}
            </span>
          </div>
          <Image
            src="/assets/profile/icon-chevron-right.svg"
            alt=""
            width={8}
            height={12}
            className="w-[7.5px] h-[12px]"
          />
        </button>
      ))}
    </div>
  );
}
