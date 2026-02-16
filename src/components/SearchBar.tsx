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
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function CatalogueHeader() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("toutes");
  const [selectedProvenance, setSelectedProvenance] = useState("toutes");
  const [selectedRituel, setSelectedRituel] = useState("tous");
  const [selectedColor, setSelectedColor] = useState("toutes");

  return (
    <div className="w-full px-1 sm:px-4 md:px-2 lg:px-2 py-4">
      {/* VERSION MOBILE/TABLETTE (< LG) */}
      <div className="flex lg:hidden gap-3 mb-6">
        {/* Barre de recherche Mobile */}
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

        {/* Dropdown Menu Filtres Mobile */}
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

            {/* Catégories */}
            <div className="px-2 py-3">
              <Label
                htmlFor="mobile-category"
                className="text-white text-xs mb-2 block"
              >
                Catégories
              </Label>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger
                  id="mobile-category"
                  className="w-full bg-white/10 border-white/20 text-white h-10"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#4e3b2d] border-white/20 text-white">
                  <SelectItem
                    className="text-white hover:bg-[#6b4f3d] hover:text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                    value="toutes"
                  >
                    Toutes
                  </SelectItem>
                  <SelectItem
                    className="text-white hover:bg-[#6b4f3d] hover:text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                    value="encens"
                  >
                    Encens
                  </SelectItem>
                  <SelectItem
                    className="text-white hover:bg-[#6b4f3d] hover:text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                    value="bougies"
                  >
                    Bougies
                  </SelectItem>
                  <SelectItem
                    className="text-white hover:bg-[#6b4f3d] hover:text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                    value="huiles"
                  >
                    Huiles
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <DropdownMenuSeparator className="bg-white/20" />

            {/* Provenance */}
            <div className="px-2 py-3">
              <Label
                htmlFor="mobile-provenance"
                className="text-white/70 text-xs mb-2 block"
              >
                Provenance
              </Label>
              <Select
                value={selectedProvenance}
                onValueChange={setSelectedProvenance}
              >
                <SelectTrigger
                  id="mobile-provenance"
                  className="w-full bg-white/10 border-white/20 text-white h-10"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#4e3b2d] border-white/20 text-white">
                  <SelectItem
                    className="text-white hover:bg-[#6b4f3d] hover:text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                    value="toutes"
                  >
                    Toutes
                  </SelectItem>
                  <SelectItem
                    className="text-white hover:bg-[#6b4f3d] hover:text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                    value="inde"
                  >
                    Inde
                  </SelectItem>
                  <SelectItem
                    className="text-white hover:bg-[#6b4f3d] hover:text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                    value="nepal"
                  >
                    Népal
                  </SelectItem>
                  <SelectItem
                    className="text-white hover:bg-[#6b4f3d] hover:text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                    value="japon"
                  >
                    Japon
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <DropdownMenuSeparator className="bg-white/20" />

            {/* Rituels */}
            <div className="px-2 py-3">
              <Label
                htmlFor="mobile-rituel"
                className="text-white/70 text-xs mb-2 block"
              >
                Rituels
              </Label>
              <Select value={selectedRituel} onValueChange={setSelectedRituel}>
                <SelectTrigger
                  id="mobile-rituel"
                  className="w-full bg-white/10 border-white/20 text-white h-10"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#4e3b2d] border-white/20 text-white">
                  <SelectItem
                    className="text-white hover:bg-[#6b4f3d] hover:text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                    value="tous"
                  >
                    Tous
                  </SelectItem>
                  <SelectItem
                    className="text-white hover:bg-[#6b4f3d] hover:text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                    value="meditation"
                  >
                    Méditation
                  </SelectItem>
                  <SelectItem
                    className="text-white hover:bg-[#6b4f3d] hover:text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                    value="purification"
                  >
                    Purification
                  </SelectItem>
                  <SelectItem
                    className="text-white hover:bg-[#6b4f3d] hover:text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                    value="relaxation"
                  >
                    Relaxation
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <DropdownMenuSeparator className="bg-white/20" />

            {/* Couleurs */}
            <div className="px-2 py-3">
              <Label
                htmlFor="mobile-color"
                className="text-white/70 text-xs mb-2 block"
              >
                Couleurs
              </Label>
              <Select value={selectedColor} onValueChange={setSelectedColor}>
                <SelectTrigger
                  id="mobile-color"
                  className="w-full bg-white/10 border-white/20 text-white h-10"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#4e3b2d] border-white/20 text-white">
                  <SelectItem
                    className="text-white hover:bg-[#6b4f3d] hover:text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                    value="toutes"
                  >
                    Toutes
                  </SelectItem>
                  <SelectItem
                    className="text-white hover:bg-[#6b4f3d] hover:text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                    value="blanc"
                  >
                    Blanc
                  </SelectItem>
                  <SelectItem
                    className="text-white hover:bg-[#6b4f3d] hover:text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                    value="noir"
                  >
                    Noir
                  </SelectItem>
                  <SelectItem
                    className="text-white hover:bg-[#6b4f3d] hover:text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                    value="rouge"
                  >
                    Rouge
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* VERSION DESKTOP (LG+) */}
      <div className="hidden lg:block">
        {/* Barre de recherche Desktop */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Rechercher"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#503D2E4D]/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-4 pr-14 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors">
            <Search className="w-6 h-6" />
          </button>
        </div>

        {/* Filtres Desktop */}
        <div className="grid grid-cols-4 gap-4">
          {/* Catégories */}
          <div className="space-y-2">
            <Label htmlFor="desktop-category" className="text-white  text-sm">
              Catégories
            </Label>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger
                id="desktop-category"
                className="w-full bg-[#503D2E4D]/10 backdrop-blur-sm border-none text-white py-6 rounded-lg h-14 [&>svg]:text-white"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#4e3b2d] border-white/20 text-white">
                <SelectItem
                  className="text-white hover:bg-[#6b4f3d] hover:text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                  value="toutes"
                >
                  Toutes
                </SelectItem>
                <SelectItem
                  className="text-white hover:bg-[#6b4f3d] hover:text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                  value="encens"
                >
                  Encens
                </SelectItem>
                <SelectItem
                  className="text-white hover:bg-[#6b4f3d] hover:text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                  value="bougies"
                >
                  Bougies
                </SelectItem>
                <SelectItem
                  className="text-white hover:bg-[#6b4f3d] hover:text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                  value="huiles"
                >
                  Huiles
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Provenance */}
          <div className="space-y-2">
            <Label htmlFor="desktop-provenance" className="text-white text-sm">
              Provenance
            </Label>
            <Select
              value={selectedProvenance}
              onValueChange={setSelectedProvenance}
            >
              <SelectTrigger
                id="desktop-provenance"
                className="w-full bg-[#503D2E4D]/10 backdrop-blur-sm border-none text-white py-6 rounded-lg h-14 [&>svg]:text-white"
              >
                <SelectValue />
              </SelectTrigger>

              <SelectContent className="bg-[#4e3b2d] border-white/20 text-white">
                <SelectItem
                  value="toutes"
                  className="text-white hover:bg-[#6b4f3d] hover:text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                >
                  Toutes
                </SelectItem>
                <SelectItem
                  value="inde"
                  className="text-white hover:bg-[#6b4f3d] hover:text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                >
                  Inde
                </SelectItem>
                <SelectItem
                  value="nepal"
                  className="text-white hover:bg-[#6b4f3d] hover:text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                >
                  Népal
                </SelectItem>
                <SelectItem
                  value="japon"
                  className="text-white hover:bg-[#6b4f3d] hover:text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                >
                  Japon
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Rituels */}
          <div className="space-y-2">
            <Label htmlFor="desktop-rituel" className="text-white text-sm">
              Rituels
            </Label>
            <Select value={selectedRituel} onValueChange={setSelectedRituel}>
              <SelectTrigger
                id="desktop-rituel"
                className="w-full bg-[#503D2E4D]/10 backdrop-blur-sm border-none text-white py-6 rounded-lg h-14"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#4e3b2d] border-white/20 text-white">
                <SelectItem
                  className="text-white hover:bg-[#6b4f3d] hover:text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                  value="tous"
                >
                  Tous
                </SelectItem>
                <SelectItem
                  className="text-white hover:bg-[#6b4f3d] hover:text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                  value="meditation"
                >
                  Méditation
                </SelectItem>
                <SelectItem
                  className="text-white hover:bg-[#6b4f3d] hover:text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                  value="purification"
                >
                  Purification
                </SelectItem>
                <SelectItem
                  className="text-white hover:bg-[#6b4f3d] hover:text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                  value="relaxation"
                >
                  Relaxation
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Couleurs */}
          <div className="space-y-2">
            <Label htmlFor="desktop-color" className="text-white text-sm">
              Couleurs
            </Label>
            <Select value={selectedColor} onValueChange={setSelectedColor}>
              <SelectTrigger
                id="desktop-color"
                className="w-full bg-[#503D2E4D]/10 backdrop-blur-sm border-none text-white py-6 rounded-lg h-14"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#4e3b2d] border-white/20 text-white">
                <SelectItem
                  className="text-white hover:bg-[#6b4f3d] hover:text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                  value="toutes"
                >
                  Toutes
                </SelectItem>
                <SelectItem
                  className="text-white hover:bg-[#6b4f3d] hover:text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                  value="blanc"
                >
                  Blanc
                </SelectItem>
                <SelectItem
                  className="text-white hover:bg-[#6b4f3d] hover:text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                  value="noir"
                >
                  Noir
                </SelectItem>
                <SelectItem
                  className="text-white hover:bg-[#6b4f3d] hover:text-white focus:bg-[#6b4f3d] focus:text-white cursor-pointer"
                  value="rouge"
                >
                  Rouge
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
