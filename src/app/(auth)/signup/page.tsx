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
      <div className="bg-[#f0ede6] rounded-3xl p-6 w-full max-w-5xl  flex gap-8">
        {/* Img left - md+ */}
        <div className="hidden md:block w-1/2 rounded-2xl overflow-hidden">
          <Image
            src="/Gemini2.png"
            alt=""
            width={990}
            height={990}
            className="md:h-[500px]"
          />
        </div>

        {/* Formulaire */}
        <div className="w-full md:w-1/2">
          <h1 className="text-[40px] font-medium text-[#2c1a0e] mb-6">
            Sign up
          </h1>

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
              <p className="text-right text-xs text-[#404040] my-2">
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
              className="w-full bg-[#3D2B1F] hover:bg-[#4a3528] text-white rounded-full py-2 font-medium  transition"
            >
              Sign up
            </button>
          </form>

          <div className="flex items-center gap-3 my-5">
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
