"use client";

import { Search, ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "./ui/dropdown-menu";

const Header = () => {
  const [language, setLanguage] = useState("Français");
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/voyages", label: "Voyages" },
    { href: "/catalogue", label: "Catalogue" },
    { href: "/contribution", label: "Contribution" },
  ];

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <div className="relative">
      <header className="flex items-center justify-between py-4 border-b border-gray-300/30">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-xl md:text-2xl text-white font-serif italic cursor-pointer">
            Musée Guinée
          </h1>
        </Link>

        {/* Desktop  */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-white transition relative pb-1 ${
                isActive(item.href)
                  ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-white"
                  : "opacity-80 hover:opacity-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button
            className="text-white p-2 hover:opacity-80 transition"
            aria-label="Rechercher"
          >
            <Link href="/">
              <Search size={20} />
            </Link>
          </button>
        </nav>

        {/* Right Section - Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-white hover:opacity-80 transition focus:outline-none cursor-pointer">
              {language}
              <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#4e3b2d] border-[#6b4f3d] text-white min-w-[120px] ">
              <DropdownMenuItem
                onClick={() => setLanguage("Français")}
                className="text-white hover:bg-white  focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
              >
                Français
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setLanguage("English")}
                className="text-white hover:bg-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
              >
                English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Hamburger Menu - Mobile only */}
        <DropdownMenu>
          <DropdownMenuTrigger className="lg:hidden text-white hover:opacity-80 transition focus:outline-none cursor-pointer">
            <Menu size={24} />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="bg-[#4e3b2d] border-[#6b4f3d] text-white w-[200px] mr-4"
            align="end"
          >
            {navItems.map((item) => (
              <DropdownMenuItem
                key={item.href}
                asChild
                className={`text-white hover:bg-[#ffffff] focus:bg-[#6b4f3d] focus:text-white cursor-pointer ${
                  isActive(item.href) ? "bg-[#6b4f3d]" : ""
                }`}
              >
                <Link href={item.href}>{item.label}</Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem className="text-white hover:bg-[#6b4f3d] focus:bg-[#6b4f3d] focus:text-white cursor-pointer">
              <Search size={16} className="mr-2" />
              Rechercher
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-[#6b4f3d]" />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="text-white hover:bg-[#6b4f3d] focus:bg-[#6b4f3d] focus:text-white cursor-pointer">
                {language}
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="bg-[#4e3b2d] border-[#6b4f3d] text-white">
                <DropdownMenuItem
                  onClick={() => setLanguage("Français")}
                  className="text-white hover:bg-[#6b4f3d] focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                >
                  Français
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("English")}
                  className="text-white hover:bg-[#6b4f3d] focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                >
                  English
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
    </div>
  );
};

export default Header;
