"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface SplashScreenProps {
  standalone?: boolean;
  duration?: number;
  onFinish?: () => void;
}

// ponytail: timer-based startup splash; add asset preloading or session flag when app requires initial data fetching
export default function SplashScreen({
  standalone = false,
  duration = 1600,
  onFinish,
}: SplashScreenProps) {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (standalone || pathname === "/splash") return;

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [standalone, pathname, duration]);

  if (!standalone && pathname === "/splash") {
    return null;
  }

  const content = (
    <div
      className="w-full sm:max-w-[375px] h-screen sm:h-[812px] bg-[#758c3b] sm:rounded-[36px] sm:shadow-2xl overflow-hidden flex flex-col items-center justify-center relative mx-auto select-none border border-black/5"
      data-node-id="98:3"
      data-name="Splash Screen"
    >
      <main
        className="w-full max-w-[448px] flex-1 flex flex-col items-center justify-center px-4 overflow-hidden"
        data-node-id="98:26"
        data-name="Main"
      >
        <div
          className="w-full h-[80px] flex items-center justify-center"
          data-node-id="98:35"
          data-name="Heading 3"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[64px] font-bold text-white tracking-tight leading-none select-none"
            data-node-id="102:6"
          >
            Kutip
          </motion.h1>
        </div>
      </main>
    </div>
  );

  if (standalone) {
    return content;
  }

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {isVisible && (
        <motion.div
          key="splash-screen-wipe"
          className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-[#758c3b] sm:bg-[#ebe8e1] overflow-hidden"
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{ clipPath: "inset(0% 100% 0% 0%)" }}
          transition={{ duration: 2, ease: [0.34, 1.2, 0.64, 1] }}
          aria-hidden={!isVisible}
        >
          {content}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
