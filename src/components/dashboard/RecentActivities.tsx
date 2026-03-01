"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Activity = {
  user: string;
  email: string;
  statut: "Connecté" | "Déconnecté" | "Inactif";
};

const data: Activity[] = [
  { user: "Jean Dupont", email: "jean@mail.com", statut: "Connecté" },
  { user: "Marie Curie", email: "marie@mail.com", statut: "Déconnecté" },
  { user: "Paul Martin", email: "paul@mail.com", statut: "Inactif" },
  { user: "Sophie Bernard", email: "sophie@mail.com", statut: "Connecté" },
  { user: "Lucas Petit", email: "lucas@mail.com", statut: "Déconnecté" },
  { user: "Emma Leroy", email: "emma@mail.com", statut: "Connecté" },
  { user: "Hugo Moreau", email: "hugo@mail.com", statut: "Inactif" },
  { user: "Chloé Simon", email: "chloe@mail.com", statut: "Connecté" },
  { user: "Nathan Durand", email: "nathan@mail.com", statut: "Déconnecté" },
  { user: "Léa Fontaine", email: "lea@mail.com", statut: "Inactif" },
];

const statutVariant: Record<Activity["statut"], string> = {
  Connecté: "bg-green-100 text-green-700",
  Déconnecté: "bg-red-100 text-red-700",
  Inactif: "bg-yellow-100 text-yellow-700",
};

export function RecentActivities() {
  return (
    <div className="flex flex-col rounded-md overflow-hidden border-none bg-[#f0ede6]">
      <div className="px-4 py-3 border-b border-black/5">
        <span className="text-sm font-semibold">Dernières activités</span>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.email}>
              <TableCell>{row.user}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statutVariant[row.statut]}`}
                >
                  {row.statut}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
