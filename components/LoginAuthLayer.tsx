"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

interface LoginAuthLayerProps {
  standalone?: boolean;
  onLogin?: (data: { email: string }) => void;
}

// ponytail: mock login flow; swap with real auth provider (NextAuth/Clerk/Supabase) when backend ready
export default function LoginAuthLayer({
  standalone = true,
  onLogin,
}: LoginAuthLayerProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const targetEmail = email.trim() || "santoso@gmail.com";

    if (onLogin) {
      onLogin({ email: targetEmail });
    } else if (standalone) {
      router.push("/profile");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="w-full sm:max-w-[375px] h-screen sm:h-[812px] bg-[#f9f8f6] sm:rounded-[36px] sm:shadow-2xl overflow-y-auto flex flex-col justify-between relative mx-auto select-none border border-black/5"
      data-node-id="191:65"
      data-name="Login & Auth Flow"
    >
      <div
        className="flex flex-col h-full justify-between p-6 w-full max-w-[375px] mx-auto min-h-[720px]"
        data-node-id="191:66"
        data-name="Container"
      >
        {/* Header Section */}
        <header
          className="pt-10 sm:pt-14 flex flex-col items-center text-center gap-2"
          data-node-id="191:67"
          data-name="Up"
        >
          <div
            className="flex flex-col items-center gap-2 w-full"
            data-node-id="191:72"
            data-name="Container"
          >
            <h1
              className="text-[24px] font-bold text-[#252525] leading-[32px] tracking-tight"
              data-node-id="191:74"
            >
              Selamat datang di KUTIP
            </h1>
            <p
              className="text-[16px] font-normal text-[#4b5563] leading-[26px] max-w-[300px]"
              data-node-id="191:76"
            >
              Kelola sampah, kumpulkan poin, dan
              <br />
              tukarkan dengan kebutuhan harian.
            </p>
          </div>
        </header>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 my-auto pt-6 pb-4 w-full"
          data-node-id="191:77"
          data-name="Container"
        >
          {/* Email Field */}
          <div
            className="flex flex-col gap-2 w-full"
            data-node-id="191:78"
            data-name="Container"
          >
            <label
              htmlFor="email"
              className="text-[14px] font-semibold text-[#374151] px-1"
              data-node-id="191:79"
            >
              Email
            </label>
            <div
              className="w-full"
              data-node-id="191:80"
              data-name="Container"
            >
              <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="santoso@gmail.com"
                className="w-full h-[56px] px-4 rounded-[12px] border border-[#e5e7eb] bg-[#f9f8f6] text-[16px] text-[#252525] placeholder:text-[#9ca3af] outline-none focus:border-[#477c2e] focus:ring-1 focus:ring-[#477c2e] transition"
                data-node-id="191:81"
                data-name="Input"
              />
            </div>
          </div>

          {/* Password Field */}
          <div
            className="flex flex-col gap-2 w-full"
            data-node-id="191:84"
            data-name="Container"
          >
            <label
              htmlFor="password"
              className="text-[14px] font-semibold text-[#374151] px-1"
              data-node-id="191:85"
            >
              Password
            </label>
            <div
              className="w-full"
              data-node-id="191:86"
              data-name="Container"
            >
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="*****"
                className="w-full h-[56px] px-4 rounded-[12px] border border-[#e5e7eb] bg-[#f9f8f6] text-[16px] text-[#252525] placeholder:text-[#9ca3af] outline-none focus:border-[#477c2e] focus:ring-1 focus:ring-[#477c2e] transition"
                data-node-id="191:87"
                data-name="Input"
              />
            </div>
          </div>

          {/* Masuk Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-[56px] rounded-[12px] bg-[#477c2e] hover:bg-[#3d6927] text-[#f9f8f6] font-bold text-[16px] tracking-wide shadow-[0px_10px_15px_-3px_rgba(20,83,45,0.2),0px_4px_6px_-4px_rgba(20,83,45,0.2)] flex items-center justify-center transition cursor-pointer active:scale-[0.99] disabled:opacity-70"
            data-node-id="191:101"
            data-name="Button"
          >
            <span data-node-id="191:103">
              {loading ? "Memproses..." : "Masuk"}
            </span>
          </button>

          {/* Signup Link */}
          <div
            className="flex items-center justify-center text-[15px] text-[#4b5563]"
            data-node-id="191:104"
            data-name="Container"
          >
            <span data-node-id="191:105">
              Belum punya akun?{" "}
              <button
                type="button"
                onClick={handleSubmit}
                className="font-bold text-[#477c2e] hover:underline cursor-pointer"
              >
                Daftar
              </button>
            </span>
          </div>
        </form>

        {/* Footer Disclaimer */}
        <footer
          className="pb-4 pt-4 flex flex-col items-center text-center text-[12px] text-[#9ca3af] leading-[18px]"
          data-node-id="191:106"
          data-name="Container"
        >
          <p data-node-id="191:108">
            Dengan masuk atau mendaftar, Anda menyetujui
            <br />
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="underline hover:text-[#4b5563]"
            >
              Syarat & Ketentuan
            </a>{" "}
            dan{" "}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="underline hover:text-[#4b5563]"
            >
              Kebijakan Privasi
            </a>{" "}
            kami.
          </p>
        </footer>
      </div>
    </motion.div>
  );
}
