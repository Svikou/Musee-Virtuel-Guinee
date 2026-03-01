"use client";
import { ResourcePage } from "@/components/dashboard/Ressource";
import { Layers } from "lucide-react";

const data = [
  { id: 1, label: "ADMINISTRATEUR EDIT" },
  { id: 2, label: "Agence" },
  { id: 3, label: "CatGroup" },
  { id: 4, label: "Superadmin" },
];

const page = () => {
  return (
    <div>
      <ResourcePage
        title="Liste des categorie groupes"
        description="Liste categorie groupe"
        icon={Layers}
        stats={[{ value: 9, label: "TotalCategories", icon: Layers }]}
        addLabel="Categorie groupe"
        onAdd={() => console.log("add")}
        rows={data}
        onEdit={(row) => console.log("edit", row)}
        onDelete={(row) => console.log("delete", row)}
      />
    </div>
  );
};

export default page;
