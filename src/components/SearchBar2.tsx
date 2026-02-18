"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function SearchBar2() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("toutes");
  const [selectedProvenance, setSelectedProvenance] = useState("toutes");
  const [selectedRituel, setSelectedRituel] = useState("tous");

  return (
    <div className="w-full px-1 sm:px-4 md:px-2 lg:px-2 py-4">
      {/* VERSION MOBILE/TABLETTE (< LG) */}
      <div className="flex lg:hidden gap-3 mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Rechercher"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 pr-14 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors">
            <Search className="w-5 h-5" />
          </button>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-4 text-white hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-white/30">
              <SlidersHorizontal className="w-5 h-5" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-64 bg-[#4e3b2d]/95 backdrop-blur-sm border-white/20 text-white"
          >
            <DropdownMenuLabel className="text-white/70">
              Filtres
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-white/20" />
            {[
              {
                id: "mobile-category",
                label: "Catégories",
                value: selectedCategory,
                onChange: setSelectedCategory,
                items: [
                  { value: "toutes", label: "Toutes" },
                  { value: "encens", label: "Encens" },
                  { value: "bougies", label: "Bougies" },
                  { value: "huiles", label: "Huiles" },
                ],
              },
              {
                id: "mobile-provenance",
                label: "Provenance",
                value: selectedProvenance,
                onChange: setSelectedProvenance,
                items: [
                  { value: "toutes", label: "Toutes" },
                  { value: "inde", label: "Inde" },
                  { value: "nepal", label: "Népal" },
                  { value: "japon", label: "Japon" },
                ],
              },
              {
                id: "mobile-rituel",
                label: "Rituels",
                value: selectedRituel,
                onChange: setSelectedRituel,
                items: [
                  { value: "tous", label: "Tous" },
                  { value: "meditation", label: "Méditation" },
                  { value: "purification", label: "Purification" },
                  { value: "relaxation", label: "Relaxation" },
                ],
              },
            ].map((filter, i) => (
              <div key={filter.id}>
                {i > 0 && <DropdownMenuSeparator className="bg-white/20" />}
                <div className="px-2 py-3">
                  <Label
                    htmlFor={filter.id}
                    className="text-white/70 text-xs mb-2 block"
                  >
                    {filter.label}
                  </Label>
                  <Select value={filter.value} onValueChange={filter.onChange}>
                    <SelectTrigger
                      id={filter.id}
                      className="w-full bg-white/10 border-white/20 text-white h-10"
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#4e3b2d] border-white/20 text-white">
                      {filter.items.map((item) => (
                        <SelectItem
                          key={item.value}
                          value={item.value}
                          className="text-white hover:bg-[#6b4f3d] focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                        >
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* VERSION DESKTOP (LG+) — 1 seule ligne */}
      <div className="hidden lg:flex items-end gap-4">
        {/* Rechercher */}
        <div className="flex flex-col gap-2 flex-1">
          <Label className="text-white text-sm">Rechercher</Label>
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#503D2E4D]/10 backdrop-blur-sm border-none rounded-lg pl-4 pr-9 text-white/60 placeholder:text-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 transition-all h-10"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Catégories */}
        <div className="flex flex-col gap-2 flex-1">
          <Label htmlFor="desktop-category" className="text-white text-sm">
            Catégories
          </Label>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger
              id="desktop-category"
              className="w-full bg-[#503D2E4D]/10 backdrop-blur-sm border-none text-white rounded-lg  [&>svg]:text-white"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#4e3b2d] border-white/20 text-white">
              {[
                { v: "toutes", l: "Toutes" },
                { v: "encens", l: "Encens" },
                { v: "bougies", l: "Bougies" },
                { v: "huiles", l: "Huiles" },
              ].map((i) => (
                <SelectItem
                  key={i.v}
                  value={i.v}
                  className="text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                >
                  {i.l}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Provenance */}
        <div className="flex flex-col gap-2 flex-1">
          <Label htmlFor="desktop-provenance" className="text-white text-sm">
            Provenance
          </Label>
          <Select
            value={selectedProvenance}
            onValueChange={setSelectedProvenance}
          >
            <SelectTrigger
              id="desktop-provenance"
              className="w-full bg-[#503D2E4D]/10 backdrop-blur-sm border-none text-white rounded-lg [&>svg]:text-white"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#4e3b2d] border-white/20 text-white">
              {[
                { v: "toutes", l: "Toutes" },
                { v: "inde", l: "Inde" },
                { v: "nepal", l: "Népal" },
                { v: "japon", l: "Japon" },
              ].map((i) => (
                <SelectItem
                  key={i.v}
                  value={i.v}
                  className="text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                >
                  {i.l}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Rituels */}
        <div className="flex flex-col gap-2 flex-1">
          <Label htmlFor="desktop-rituel" className="text-white text-sm">
            Rituels
          </Label>
          <Select value={selectedRituel} onValueChange={setSelectedRituel}>
            <SelectTrigger
              id="desktop-rituel"
              className="w-full bg-[#503D2E4D]/10 backdrop-blur-sm border-none text-white rounded-lg  [&>svg]:text-white"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#4e3b2d] border-white/20 text-white">
              {[
                { v: "tous", l: "Tous" },
                { v: "meditation", l: "Méditation" },
                { v: "purification", l: "Purification" },
                { v: "relaxation", l: "Relaxation" },
              ].map((i) => (
                <SelectItem
                  key={i.v}
                  value={i.v}
                  className="text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                >
                  {i.l}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
