"use client";

import { usePathname } from "next/navigation";
import {
  Home,
  Inbox,
  Calendar,
  Search,
  Settings,
  User2,
  ChevronUp,
  Plus,
  Projector,
  ChevronDown,
  ChartArea,
  ChartNoAxesColumn,
  MapPin,
  UserCheck,
  User2Icon,
  UserCheck2Icon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const items = [
  {
    title: "Tableau de bord",
    url: "/admin/",
    icon: Home,
  },
  {
    title: "Statistique",
    url: "#",
    icon: ChartNoAxesColumn,
  },
  {
    title: "Organisation",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Localisation",
    url: "#",
    icon: MapPin,
  },
  {
    title: "Configuration",
    url: "#",
    icon: Settings,
  },
];

const AppSidebar = () => {
  const pathname = usePathname();
  return (
    <Sidebar collapsible="icon" className="">
      <SidebarHeader className="py-4 bg-[#4E3B2D]">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="hover:bg-transparent">
              <Link href="/">
                <h1 className="text-xl md:text-2xl text-white font-serif italic cursor-pointer  group-data-[collapsible=icon]:hidden">
                  Musée Guinée
                </h1>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    className="data-[active=true]:bg-white data-[active=true]:text-foreground"
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.title === "Inbox" && (
                    <SidebarMenuBadge></SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* COLLAPSABLE */}

        {/* NESTED */}
        <SidebarGroup>
          <SidebarGroupLabel></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="data-[active=true]:bg-white data-[active=true]:text-foreground"
                >
                  <Link href="#">
                    <UserCheck2Icon />
                    Admin technique
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton
                      asChild
                      isActive={pathname === "/admin/mode-access"}
                      className="data-[active=true]:bg-white data-[active=true]:text-foreground"
                    >
                      <Link href="/admin/mode-access">Mode Access</Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton
                      asChild
                      isActive={pathname === "/admin/categorie-group"}
                      className="data-[active=true]:bg-white data-[active=true]:text-foreground"
                    >
                      <Link href="/admin/categorie-group">Catégorie group</Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton
                      asChild
                      isActive={pathname === "/admin/utilisateurs"}
                      className="data-[active=true]:bg-white data-[active=true]:text-foreground"
                    >
                      <Link href="/admin/utilisateurs">Utilisateurs</Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton
                      asChild
                      isActive={pathname === "/admin/group-privilege"}
                      className="data-[active=true]:bg-white data-[active=true]:text-foreground"
                    >
                      <Link href="/admin/group-privilege">Group Privilége</Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton
                      asChild
                      isActive={pathname === "/admin/user-connexion"}
                      className="data-[active=true]:bg-white data-[active=true]:text-foreground"
                    >
                      <Link href="/admin/user-connexion">User connexion</Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> John Doe <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuItem>Setting</DropdownMenuItem>
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
