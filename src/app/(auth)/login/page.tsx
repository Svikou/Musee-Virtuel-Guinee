"use client";
import { useState } from "react";
import Image from "next/image";

export default function LoginPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="bg-[#f0ede6] rounded-3xl p-8 w-full max-w-5xl  flex gap-8">
        {/* Img left - md+ */}
        <div className="hidden md:block w-1/2 rounded-2xl overflow-hidden">
          <Image
            src="/Gemini2.png"
            alt=""
            width={900}
            height={900}
            className="md:h-[500px]"
          />
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 align-item-center py-auto">
          <h1 className="text-[40px] font-medium text-[#2c1a0e] mb-6">Login</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="text-sm font-medium text-[#2c1a0e]">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#2c1a0e]/20"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#2c1a0e]">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter a password"
                value={form.password}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#2c1a0e]/20"
              />
              <p className="text-right text-xs text-[#404040] mt-5">
                <a
                  href="/forgot-password"
                  className="font-medium text-[#2c1a0e] underline"
                >
                  Forgot password?
                </a>
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-[#3D2B1F] hover:bg-[#4a3528] text-white rounded-full py-2 font-medium transition"
            >
              Login
            </button>
          </form>

          <div className="flex items-center gap-3 my-8">
            <div className="flex-1 h-px bg-[#3D2B1F]/20" />
            <span className="text-xs text-[#404040]">Or continue with</span>
            <div className="flex-1 h-px bg-[#3D2B1F]/20" />
          </div>

          <div className="flex justify-center gap-6">
            {/* Google */}
            <button className="p-2 rounded-lg bg-[#3d2512]/10 border border-[#e0d8ce] hover:bg-[#e8e0d5] transition shadow-sm">
              <Image
                src="/icones/google.svg"
                alt="Google"
                width={20}
                height={20}
              />
            </button>

            {/* Facebook */}
            <button className="p-2 rounded-lg bg-[#5E4A44]/20 border border-[#e0d8ce] hover:bg-[#e8e0d5] transition shadow-sm">
              <Image
                src="/icones/facebook.svg"
                alt="Facebook"
                width={20}
                height={20}
              />
            </button>

            {/* Apple */}
            <button className="p-2 rounded-lg bg-[#5E4A44]/20 border border-[#e0d8ce] hover:bg-[#e8e0d5] transition shadow-sm">
              <Image
                src="/icones/apple.svg"
                alt="Apple"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
