"use client";

import * as React from "react";
import {
  Folder,
  Plus,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
  ChevronsUpDown,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

export interface ResourceRow {
  id: string | number;
  label: string;
  /** Optional extra badge text shown next to the label */
  badge?: string;
}

export interface StatWidget {
  value: number | string;
  label: string;
  /** Lucide icon component */
  icon: React.ElementType;
}

export interface ResourcePageProps {
  /** Page / resource title */
  title: string;
  /** Subtitle / description */
  description?: string;
  /** Lucide icon shown in the header */
  icon: React.ElementType;
  /** Stats shown below the header divider */
  stats?: StatWidget[];
  /** Label for the primary CTA button */
  addLabel?: string;
  /** Fired when user clicks the CTA button */
  onAdd?: () => void;
  /** Data rows */
  rows: ResourceRow[];
  /** Fired when user clicks the edit button on a row */
  onEdit?: (row: ResourceRow) => void;
  /** Fired when user clicks the delete button on a row */
  onDelete?: (row: ResourceRow) => void;
}

// ─────────────────────────────────────────────
// Sub-component: Header
// ─────────────────────────────────────────────

function PageHeader({
  title,
  description,
  icon: Icon,
  stats = [],
  addLabel = "Add",
  onAdd,
}: Pick<
  ResourcePageProps,
  "title" | "description" | "icon" | "stats" | "addLabel" | "onAdd"
>) {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-4 p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-semibold leading-tight">{title}</h1>
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>
        </div>
        {onAdd && (
          <Button onClick={onAdd} className="gap-2 shrink-0">
            <Plus className="h-4 w-4" />
            {addLabel}
          </Button>
        )}
      </div>

      {/* Divider + stats */}
      {stats.length > 0 && (
        <>
          <Separator />
          <div className="flex flex-wrap gap-3 p-6">
            {stats.map((stat, i) => (
              <StatCard key={i} {...stat} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// Sub-component: StatCard
// ─────────────────────────────────────────────

function StatCard({ value, label, icon: Icon }: StatWidget) {
  return (
    <div className="flex items-center gap-3 rounded-lg border bg-muted/40 px-4 py-3 min-w-[160px]">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-2xl font-bold leading-none">{value}</p>
        <p className="text-xs text-muted-foreground mt-1">{label}</p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Sub-component: DataTable
// ─────────────────────────────────────────────

function DataTable({
  rows,
  onEdit,
  onDelete,
}: Pick<ResourcePageProps, "rows" | "onEdit" | "onDelete">) {
  const [search, setSearch] = React.useState("");
  const [pageSize, setPageSize] = React.useState(10);
  const [page, setPage] = React.useState(1);

  // Filter
  const filtered = React.useMemo(
    () =>
      rows.filter((r) => r.label.toLowerCase().includes(search.toLowerCase())),
    [rows, search],
  );

  // Paginate
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  // Reset page on search / pageSize change
  React.useEffect(() => setPage(1), [search, pageSize]);

  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
      {/* Controls */}
      <div className="flex items-center justify-between gap-4 p-4 border-b">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Show</span>
          <Select
            value={String(pageSize)}
            onValueChange={(v) => setPageSize(Number(v))}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[5, 10, 25, 50].map((n) => (
                <SelectItem key={n} value={String(n)}>
                  {n}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <span>entries</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Search:</span>
          <Input
            className="h-8 w-48"
            placeholder=""
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Table header */}
      <div className="grid grid-cols-[1fr_auto] items-center px-4 py-3 bg-muted/30 border-b text-sm font-semibold text-foreground">
        <div className="flex items-center gap-1 cursor-pointer select-none">
          Label <ChevronsUpDown className="h-3.5 w-3.5 text-muted-foreground" />
        </div>
        <div className="flex items-center gap-1 cursor-pointer select-none pr-2">
          Actions{" "}
          <ChevronsUpDown className="h-3.5 w-3.5 text-muted-foreground" />
        </div>
      </div>

      {/* Rows */}
      {paginated.length === 0 ? (
        <div className="py-12 text-center text-sm text-muted-foreground">
          No results found.
        </div>
      ) : (
        paginated.map((row, i) => (
          <div
            key={row.id}
            className={`grid grid-cols-[1fr_auto] items-center px-4 py-3 gap-4 ${
              i % 2 === 0 ? "bg-muted/20" : "bg-card"
            } border-b last:border-0`}
          >
            {/* Label cell */}
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                <Folder className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium">{row.label}</span>
              {row.badge && (
                <Badge variant="secondary" className="text-xs">
                  {row.badge}
                </Badge>
              )}
            </div>

            {/* Actions cell */}
            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="outline"
                className="h-9 w-9 text-primary hover:bg-primary/10 hover:text-primary"
                onClick={() => onEdit?.(row)}
                aria-label={`Edit ${row.label}`}
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="destructive"
                className="h-9 w-9"
                onClick={() => onDelete?.(row)}
                aria-label={`Delete ${row.label}`}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))
      )}

      {/* Footer: count + pagination */}
      <div className="flex items-center justify-between px-4 py-3 text-sm text-muted-foreground border-t">
        <span>
          Showing {filtered.length === 0 ? 0 : (page - 1) * pageSize + 1} to{" "}
          {Math.min(page * pageSize, filtered.length)} of {filtered.length}{" "}
          entries
        </span>

        <div className="flex items-center gap-1">
          <Button
            size="icon"
            variant="ghost"
            className="h-8 w-8"
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <Button
              key={p}
              size="icon"
              variant={p === page ? "default" : "ghost"}
              className="h-8 w-8 text-xs"
              onClick={() => setPage(p)}
            >
              {p}
            </Button>
          ))}

          <Button
            size="icon"
            variant="ghost"
            className="h-8 w-8"
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Main export: ResourcePage
// ─────────────────────────────────────────────

export function ResourcePage({
  title,
  description,
  icon,
  stats = [],
  addLabel,
  onAdd,
  rows,
  onEdit,
  onDelete,
}: ResourcePageProps) {
  return (
    <div className="flex flex-col gap-4 p-4 lg:p-6">
      <PageHeader
        title={title}
        description={description}
        icon={icon}
        stats={stats}
        addLabel={addLabel}
        onAdd={onAdd}
      />
      <DataTable rows={rows} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
}

// ─────────────────────────────────────────────
// Usage example (how to call it in your page)
// ─────────────────────────────────────────────
//
// import { Layers } from "lucide-react";
// import { ResourcePage } from "@/components/ResourcePage";
//
// const data = [
//   { id: 1, label: "ADMINISTRATEUR EDIT" },
//   { id: 2, label: "Agence" },
//   { id: 3, label: "CatGroup" },
//   { id: 4, label: "Superadmin" },
// ];
//
// export default function CategorieGroupePage() {
//   return (
//     <ResourcePage
//       title="Liste des categorie groupes"
//       description="Liste categorie groupe"
//       icon={Layers}
//       stats={[{ value: 9, label: "TotalCategories", icon: Layers }]}
//       addLabel="Categorie groupe"
//       onAdd={() => console.log("add")}
//       rows={data}
//       onEdit={(row) => console.log("edit", row)}
//       onDelete={(row) => console.log("delete", row)}
//     />
//   );
// }
