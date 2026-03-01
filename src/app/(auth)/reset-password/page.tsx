"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleNext = () => {
    //
  };

  return (
    <div className="flex items-center justify-center  ">
      <div className="bg-[#f0ede6] rounded-xl p-8 w-full max-w-lg flex flex-col gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-xl font-bold text-[#3b2a1a]">Reset Password</h1>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="text-[#3b2a1a] font-medium">
            Password <span className="text-red-500">*</span>
          </Label>
          <Input
            type="password"
            placeholder="Enter your new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-2xl bg-white border-none h-12 px-4 text-[#3b2a1a] placeholder:text-[#b0a090]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="text-[#3b2a1a] font-medium">
            Confirm Password <span className="text-red-500">*</span>
          </Label>
          <Input
            type="password"
            placeholder="Confirm your new password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="rounded-2xl bg-white border-none h-12 px-4 text-[#3b2a1a] placeholder:text-[#b0a090]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#3D2B1F] hover:bg-[#4a3528] text-white rounded-full py-2 font-medium  transition"
        >
          <Link href="/">Submit</Link>
        </button>
      </div>
    </div>
  );
}
