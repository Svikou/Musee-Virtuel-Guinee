"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [phone, setPhone] = useState("");

  const handleNext = () => {
    // logique submit
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="bg-[#f0ede6] rounded-3xl p-8 w-full max-w-lg shadow-sm flex flex-col gap-6">
        <div className="flex flex-col gap-2 text-center p-6 mb-4">
          <h1 className="text-3xl font-bold text-[#3b2a1a]">Forgot password</h1>
          <p className="text-[#7a6a5a] text-sm">
            Enter your registered mobile number to get reset code
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="text-[#3b2a1a] font-medium">
            Phone Number <span className="text-red-500">*</span>
          </Label>
          <Input
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="rounded-lg bg-white border-none h-12 px-4 text-[#3b2a1a] placeholder:text-[#b0a090]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#3D2B1F] hover:bg-[#4a3528] text-white rounded-full py-2 font-medium  transition mb-12"
        >
          <Link href="/verification">Next</Link>
        </button>
      </div>
    </div>
  );
}
