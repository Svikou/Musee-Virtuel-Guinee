"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

const Navigation = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  // Uppercase Fonction
  const formatLabel = (segment: string) => {
    return segment.charAt(0).toUpperCase() + segment.slice(1);
  };

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="text-white">
            <BreadcrumbLink asChild>
              <Link href="/">Accueil</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          {segments.map((segment, index) => {
            const href = `/${segments.slice(0, index + 1).join("/")}`;
            const isLast = index === segments.length - 1;
            const label = formatLabel(segment);

            return (
              <div key={href} className="flex items-center">
                <BreadcrumbSeparator className="text-white" />
                <BreadcrumbItem className="text-white">
                  {isLast ? (
                    <BreadcrumbPage className="text-white">
                      {label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild className="text-white">
                      <Link href={href}>{label}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </div>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default Navigation;
