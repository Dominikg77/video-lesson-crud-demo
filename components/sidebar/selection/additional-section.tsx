"use client";
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { SectionItem } from "../data/sidebar.type";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AdditionalSection({ title, additionalSections }: { title: string; additionalSections: SectionItem[] }) {
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarMenu>
        {additionalSections.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild tooltip={item.name}>
              <span className={pathname === item.url ? "text-blue-600 font-bold" : item.isDisabled ? "text-gray-400" : ""}>
                <Link href={item.url} className="flex items-center gap-2">
                  <item.icon />
                  <span>{item.name}</span>
                </Link>
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
