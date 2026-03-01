"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

export default function VerificationCodePage() {
  const [code, setCode] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(90);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60)
      .toString()
      .padStart(2, "0");
    const sec = (s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  };

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const updated = [...code];
    updated[index] = value;
    setCode(updated);
    if (value && index < 3) inputs.current[index + 1]?.focus();
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-[#f0ede6] rounded-xl px-8 py-10 w-full max-w-lg shadow-sm flex flex-col gap-12">
        {/* T + D */}
        <div className="flex flex-col gap-4 text-center mb-6">
          <h1 className="text-4xl font-bold text-[#3b2a1a]">
            Verification code
          </h1>
          <p className="text-[#7a6a5a] text-sm leading-relaxed">
            Enter code sent to the number ending with{" "}
            <span className="font-bold text-[#3b2a1a]">2345</span> to get reset
            code
          </p>
        </div>

        {/* Inputs OTP  */}
        <div className="flex gap-4 justify-center px-4">
          {code.map((digit, i) => (
            <input
              key={i}
              ref={(el) => {
                inputs.current[i] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className="w-14 h-14 rounded-lg bg-white border-none text-center text-2xl font-bold text-[#3b2a1a] outline-none shadow-sm focus:ring-2 focus:ring-[#3b2a1a]/20"
            />
          ))}
        </div>

        {/* Timer */}
        <p className="text-center text-sm text-[#7a6a5a]">
          Expire in{" "}
          <span className="font-bold text-[#3b2a1a]">{formatTime(timer)}</span>
        </p>

        {/* Bouton */}
        <Link
          href="/reset-password"
          className="w-full bg-[#3D2B1F] hover:bg-[#4a3528] text-white rounded-full py-4 font-medium text-center text-base transition"
        >
          Next
        </Link>
      </div>
    </div>
  );
}
