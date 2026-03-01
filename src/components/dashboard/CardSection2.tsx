import {
  Package,
  Truck,
  ArrowDownToLine,
  Warehouse,
  Compass,
  Cast,
  ChartNoAxesCombined,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SectionCards() {
  const cards = [
    {
      value: "1 247",
      label: "Total Visitors",
      icon: Cast,
      iconBg: "bg-[#009689]",
    },
    {
      value: "342",
      label: "Browser Usage",
      icon: Compass,
      iconBg: "bg-[#F54900]",
    },
    {
      value: "189",
      label: "Downloads",
      icon: ArrowDownToLine,
      iconBg: "bg-[#FE9A00]",
    },
    {
      value: "856",
      label: "Total Revenue",
      icon: ChartNoAxesCombined,
      iconBg: "bg-[#104E64]",
    },
  ];

  return (
    <div className="flex flex-col gap-4 px-4 ">
      <Card className="backdrop-blur-lg bg-[#4E3B2D]/80 w-full border-0">
        <CardHeader className="flex flex-row items-center justify-between gap-4  rounded-xl px-6 py-2">
          <div className="flex flex-col gap-2">
            <CardTitle className="text-3xl font-extrabold text-white">
              Tableau de Bord Admin
            </CardTitle>
            <CardDescription className="text-slate-200 text-sm">
              Vue d'ensemble complète de votre activité logistique
            </CardDescription>
          </div>
          <Badge
            variant={"secondary"}
            className="bg-[#A48A6C] hover:bg-[#4E3B2D] text-white text-xs  px-4 py-2 rounded-full shrink-0 tracking-widest"
          >
            ADMINISTRATEUR
          </Badge>
        </CardHeader>
      </Card>

      {/* Stats Cards Grid */}
      <div className="*:data-[slot=card]:backdrop-blur-lg *:data-[slot=card]:bg-black/10 *:data-[slot=card]:border-0 grid grid-cols-1 gap-4 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Card key={card.label}>
              <CardHeader className="flex flex-row items-center justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <CardTitle className="text-2xl text-white font-bold tabular-nums">
                    {card.value}
                  </CardTitle>
                  <CardDescription className="text-white text-sm ">
                    {card.label}
                  </CardDescription>
                </div>
                <div
                  className={`${card.iconBg} flex h-14 w-14 shrink-0 items-center justify-center rounded-lg`}
                >
                  <Icon className="size-6 text-white" />
                </div>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
