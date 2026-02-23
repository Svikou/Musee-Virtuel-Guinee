"use client";
import { useState } from "react";
import Image from "next/image";

export default function SignupPage() {
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
      <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 w-full max-w-3xl shadow-lg flex gap-8">
        {/* Image gauche - visible md+ */}
        <div className="hidden md:block w-1/2 rounded-2xl overflow-hidden">
          <Image src="/Gemini2.png" alt="" width={800} height={800} />
        </div>

        {/* Formulaire */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-[#2c1a0e] mb-6">Sign up</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your e-mail"
                value={form.email}
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
              <p className="text-right text-xs text-gray-500 mt-1">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-medium text-[#2c1a0e] underline"
                >
                  Login
                </a>
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2c1a0e] text-white rounded-xl py-3 font-medium hover:bg-[#3d2512] transition"
            >
              Sign up
            </button>
          </form>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">Or continue with</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <div className="flex justify-center gap-4">
            {/* Google */}
            <button className="p-3 rounded-2xl bg-[#f0ebe3] border border-[#e0d8ce] hover:bg-[#e8e0d5] transition shadow-sm">
              <Image
                src="/google-icon.svg"
                alt="Google"
                width={22}
                height={22}
              />
            </button>

            {/* Facebook */}
            <button className="p-3 rounded-2xl bg-[#f0ebe3] border border-[#e0d8ce] hover:bg-[#e8e0d5] transition shadow-sm">
              <Image
                src="/facebook-icon.svg"
                alt="Facebook"
                width={22}
                height={22}
              />
            </button>

            {/* Apple */}
            <button className="p-3 rounded-2xl bg-[#f0ebe3] border border-[#e0d8ce] hover:bg-[#e8e0d5] transition shadow-sm">
              <Image src="/apple-icon.svg" alt="Apple" width={22} height={22} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
