"use client";

import { useState, useRef } from "react";
import { ImagePlus, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ObjectForm() {
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="bg-[#f0ede6] rounded-2xl p-6 w-full max-w-[1200px] mx-auto">
      {/* Section 1 */}
      <div className="mb-8">
        <h2 className="text-[#2d2118] font-semibold text-lg mb-4">
          Informations de l'objet
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#2d2118]">
              Nom de l'objet <span className="text-red-500">*</span>
            </label>
            <Input
              placeholder="Saisissez le nom de l'objet"
              className="bg-white border-[#e0dbd2] rounded-lg text-sm text-[#2d2118] placeholder:text-[#b0a99f] focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-[#b0a99f] shadow-none"
            />
          </div>

          <div className="flex flex-col gap-1 ">
            <label className="text-sm text-[#2d2118]">
              Catégorie <span className="text-red-500">*</span>
            </label>
            <Select>
              <SelectTrigger className="w-full bg-white border-[#e0dbd2] rounded-lg text-sm text-[#b0a99f] focus:ring-0 focus:ring-offset-0 shadow-none  [&>span[data-placeholder]]:text-[#b0a99f]">
                <SelectValue placeholder="Sélectionnez une catégorie" />
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

          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#2d2118]">
              Provenance <span className="text-red-500">*</span>
            </label>
            <Select>
              <SelectTrigger className="w-full bg-white border-[#e0dbd2] rounded-lg text-sm text-[#b0a99f] focus:ring-0 focus:ring-offset-0 shadow-none">
                <SelectValue
                  placeholder="Sélectionnez une provenance"
                  className="text-[#b0a99f]"
                />
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
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-[#2d2118]">
            Description de l'objet <span className="text-red-500">*</span>
          </label>
          <Textarea
            placeholder="Décrivez l'objet"
            rows={5}
            className="bg-white border-[#e0dbd2] rounded-lg text-sm text-[#2d2118] placeholder:text-[#b0a99f] focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-[#b0a99f] resize-none shadow-none"
          />
        </div>
      </div>

      <div className="border-t border-[#d9d3ca] mb-8" />

      {/* Section 2 */}
      <div className="mb-8">
        <h2 className="text-[#2d2118] font-semibold text-lg mb-4">
          Médias de l'objet
        </h2>

        {/* Drag & drop */}
        <div
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);
          }}
          className={`border-2 border-dashed rounded-xl flex flex-col items-center justify-center gap-3 py-12 cursor-pointer transition-colors duration-200 ${
            dragOver
              ? "border-[#a08060] bg-[#e8e2d8]"
              : "border-[#c8bfb0] bg-transparent"
          }`}
        >
          <div className="w-14 h-14 rounded-full bg-[#e8e2d8] flex items-center justify-center">
            <ImagePlus size={24} className="text-[#a08060]" />
          </div>
          <p className="text-sm text-[#2d2118] text-center">
            Drag & drop ou{" "}
            <span className="underline cursor-pointer text-[#2d2118]">
              choisir un fichier
            </span>
            <br />
            pour importer le média
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*,video/*"
            className="hidden"
          />
        </div>

        {/* separator */}
        <div className="flex items-center justify-center my-4 text-sm text-[#2d2118]">
          OU
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-[#2d2118]">
            Importer le média depuis une URL
          </label>
          <Input
            placeholder="Collez l'URL du média"
            className="bg-white border-[#e0dbd2] rounded-lg text-sm text-[#2d2118] placeholder:text-[#b0a99f] focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-[#b0a99f] shadow-none"
          />
        </div>
      </div>

      <div className="border-t border-[#d9d3ca] mb-8" />

      {/* Section 3 */}
      <div className="mb-8">
        <h2 className="text-[#2d2118] font-semibold text-lg mb-4">
          Vos informations personnelles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#2d2118]">
              Prénom et nom <span className="text-red-500">*</span>
            </label>
            <Input
              placeholder="Saisissez votre prénom et nom"
              className="bg-white border-[#e0dbd2] rounded-lg text-sm text-[#2d2118] placeholder:text-[#b0a99f] focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-[#b0a99f] shadow-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#2d2118]">
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              type="email"
              placeholder="Saisissez votre adresse email"
              className="bg-white border-[#e0dbd2] rounded-lg text-sm text-[#2d2118] placeholder:text-[#b0a99f] focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-[#b0a99f] shadow-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#2d2118]">
              Téléphone <span className="text-red-500">*</span>
            </label>
            <Input
              type="tel"
              placeholder="Saisissez votre numéro de téléphone"
              className="bg-white border-[#e0dbd2] rounded-lg text-sm text-[#2d2118] placeholder:text-[#b0a99f] focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-[#b0a99f] shadow-none"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="flex items-center gap-2 bg-[#2d2118] text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-[#3d3128] transition-colors duration-200">
          Envoyer
          <Send size={15} />
        </button>
      </div>
    </div>
  );
}
